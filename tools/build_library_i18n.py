# tools/build_library_i18n.py
"""
Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
SPDX-License-Identifier: Apache-2.0 OR Commercial-License

Master build and synchronization script for multilingual i18n dictionaries
across all 15 flagship libraries (sentinel, forge, stt, train, playwright,
diffusion, bitnet, llamacpp, mcp, vision, vulkan, tts, aichain, cluster, privacy).
"""

import sys
import json
import re
from pathlib import Path

sys.stdout.reconfigure(encoding='utf-8')

ROOT_DIR = Path(__file__).resolve().parents[1]
if str(ROOT_DIR) not in sys.path:
    sys.path.insert(0, str(ROOT_DIR))

SHARED_I18N_JS = ROOT_DIR / "shared" / "i18n.js"
SHARED_I18N_TRANS_JS = ROOT_DIR / "shared" / "i18n-translations.js"
AMEVA_DOC_PY = ROOT_DIR / "tools" / "doc_builder" / "ameva_doc.py"

from tools.lib_i18n_patch_data import (
    VULKAN_PATCH, TRAIN_PATCH, FORGE_PATCH, SENTINEL_PATCH,
    MCP_PATCH, AICHAIN_PATCH, SUBTITLES_PATCH, CLUSTER_ENTRY,
    PRIVACY_PATCH, COMMON_HOME_PATCH
)

ALL_15_LIBS = [
    "sentinel", "forge", "stt", "train", "playwright",
    "diffusion", "bitnet", "llamacpp", "mcp", "vision",
    "vulkan", "tts", "aichain", "cluster", "privacy"
]

def load_current_lib_translations():
    import subprocess
    cmd = """
    const fs = require('fs');
    const content = fs.readFileSync('shared/i18n.js', 'utf8');
    const p_start = content.indexOf('const LIB_TRANSLATIONS =');
    const p_end = content.indexOf('const PHRASES_DB =');
    const code = content.slice(p_start, p_end).replace('const LIB_TRANSLATIONS =', 'var LIB_TRANSLATIONS =');
    eval(code);
    console.log(JSON.stringify(LIB_TRANSLATIONS));
    """
    out = subprocess.check_output(["node", "-e", cmd], encoding="utf-8")
    return json.loads(out)

def deep_merge(target, patch):
    for k, v in patch.items():
        if isinstance(v, dict) and k in target and isinstance(target[k], dict):
            deep_merge(target[k], v)
        elif isinstance(v, list) and k in target and isinstance(target[k], list):
            for i, item in enumerate(v):
                if i < len(target[k]) and isinstance(item, dict) and isinstance(target[k][i], dict):
                    deep_merge(target[k][i], item)
                elif i >= len(target[k]):
                    target[k].append(item)
        else:
            target[k] = v

def build_full_lib_translations():
    current = load_current_lib_translations()

    # 1. Apply patches
    deep_merge(current["vulkan"], VULKAN_PATCH)
    deep_merge(current["train"], TRAIN_PATCH)
    deep_merge(current["forge"], FORGE_PATCH)
    deep_merge(current["sentinel"], SENTINEL_PATCH)
    deep_merge(current["mcp"], MCP_PATCH)
    deep_merge(current["aichain"], AICHAIN_PATCH)

    # 2. Apply subtitles for libraries lacking subtitles
    for lib, subs in SUBTITLES_PATCH.items():
        if lib in current:
            current[lib]["subtitles"] = subs

    # 3. Add cluster and privacy
    current["cluster"] = CLUSTER_ENTRY
    current["privacy"] = PRIVACY_PATCH

    # Fill missing target languages with natural defaults if empty
    langs = ["en", "ko", "ja", "zh", "ar", "fr", "de", "es", "hi", "ru", "vi", "pl", "la"]
    for lib_key, lib_val in current.items():
        for section in ["subtitles", "challenge", "breakthrough"]:
            if section in lib_val and isinstance(lib_val[section], dict):
                en_val = lib_val[section].get("en", "")
                for l in langs:
                    if l not in lib_val[section] or not lib_val[section][l]:
                        lib_val[section][l] = en_val
        if "features" in lib_val and isinstance(lib_val["features"], list):
            for f in lib_val["features"]:
                if "title" in f:
                    en_t = f["title"].get("en", "")
                    for l in langs:
                        if l not in f["title"] or not f["title"][l]:
                            f["title"][l] = en_t
                if "desc" in f:
                    en_d = f["desc"].get("en", "")
                    for l in langs:
                        if l not in f["desc"] or not f["desc"][l]:
                            f["desc"][l] = en_d

    return current

def verify_translations(lib_dict):
    is_hi = lambda s: bool(re.search(r'[\u0900-\u097F]', s))
    is_ja = lambda s: bool(re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]', s))
    is_ko = lambda s: bool(re.search(r'[\uAC00-\uD7A3]', s))

    errors = []
    for lib in ALL_15_LIBS:
        if lib not in lib_dict:
            errors.append(f"Missing library: {lib}")
            continue
        data = lib_dict[lib]
        for field in ["subtitles", "challenge", "breakthrough"]:
            if field in data:
                hi_val = data[field].get("hi", "")
                ja_val = data[field].get("ja", "")
                ko_val = data[field].get("ko", "")
                if not is_hi(hi_val): errors.append(f"{lib}.{field}.hi is not Hindi: {hi_val[:40]}")
                if not is_ja(ja_val): errors.append(f"{lib}.{field}.ja is not Japanese: {ja_val[:40]}")
                if not is_ko(ko_val): errors.append(f"{lib}.{field}.ko is not Korean: {ko_val[:40]}")
        for i, f in enumerate(data.get("features", [])):
            hi_t = f.get("title", {}).get("hi", "")
            ja_t = f.get("title", {}).get("ja", "")
            ko_t = f.get("title", {}).get("ko", "")
            hi_d = f.get("desc", {}).get("hi", "")
            ja_d = f.get("desc", {}).get("ja", "")
            ko_d = f.get("desc", {}).get("ko", "")
            if not is_hi(hi_t): errors.append(f"{lib}.feat[{i}].title.hi not Hindi")
            if not is_ja(ja_t): errors.append(f"{lib}.feat[{i}].title.ja not Japanese")
            if not is_ko(ko_t): errors.append(f"{lib}.feat[{i}].title.ko not Korean")
            if not is_hi(hi_d): errors.append(f"{lib}.feat[{i}].desc.hi not Hindi")
            if not is_ja(ja_d): errors.append(f"{lib}.feat[{i}].desc.ja not Japanese")
            if not is_ko(ko_d): errors.append(f"{lib}.feat[{i}].desc.ko not Korean")

    if errors:
        print(f"[FAIL] Found {len(errors)} validation errors:")
        for e in errors[:10]:
            print(f"  - {e}")
        raise ValueError(f"{len(errors)} translation validation errors found.")
    print(f"[PASS] All {len(ALL_15_LIBS)} libraries verified clean (100% HI, JA, KO coverage).")

def update_shared_i18n_js(lib_dict):
    with open(SHARED_I18N_JS, "r", encoding="utf-8") as f:
        content = f.read()

    p_start = content.find("const LIB_TRANSLATIONS =")
    p_end = content.find("const PHRASES_DB =")
    if p_start == -1 or p_end == -1:
        raise ValueError("LIB_TRANSLATIONS boundaries not found")

    new_json = json.dumps(lib_dict, indent=2, ensure_ascii=False)
    new_lib_block = f"const LIB_TRANSLATIONS = {new_json};\n  "
    content = content[:p_start] + new_lib_block + content[p_end:]

    # Update _lookup in UniversalI18nEngine to natively support LIB_TRANSLATIONS context
    lookup_old = """    _lookup(dict, keyPath) {
      if (!keyPath || !dict) return undefined;
      const parts = keyPath.split('.');
      let cur = dict;
      for (let i = 0; i < parts.length; i++) {
        if (cur === undefined || cur === null) return undefined;
        cur = cur[parts[i]];
      }
      return cur;
    }"""

    lookup_new = """    _lookup(dict, keyPath) {
      if (!keyPath) return undefined;

      // 1. Library-aware high precision mapping
      const ctx = this._getCurrentContext();
      const lang = this.currentLang || 'ko';
      if (ctx && LIB_TRANSLATIONS && LIB_TRANSLATIONS[ctx]) {
        const libData = LIB_TRANSLATIONS[ctx];
        if (keyPath === 'home.subtitle' && libData.subtitles) {
          const s = libData.subtitles[lang] || libData.subtitles['en'];
          if (s) return s;
        }
        if (keyPath === 'home.challengeText' && libData.challenge) {
          const s = libData.challenge[lang] || libData.challenge['en'];
          if (s) return s;
        }
        if (keyPath === 'home.breakthroughText' && libData.breakthrough) {
          const s = libData.breakthrough[lang] || libData.breakthrough['en'];
          if (s) return s;
        }
        const featMatch = keyPath.match(/^home\\.features\\.(\\d+)\\.(title|desc)$/);
        if (featMatch && libData.features) {
          const idx = parseInt(featMatch[1], 10);
          const field = featMatch[2];
          if (libData.features[idx] && libData.features[idx][field]) {
            const s = libData.features[idx][field][lang] || libData.features[idx][field]['en'];
            if (s) return s;
          }
        }
      }

      // 2. Standard dictionary keypath lookup
      if (!dict) return undefined;
      const parts = keyPath.split('.');
      let cur = dict;
      for (let i = 0; i < parts.length; i++) {
        if (cur === undefined || cur === null) return undefined;
        cur = cur[parts[i]];
      }
      return cur;
    }"""

    if lookup_old in content:
        content = content.replace(lookup_old, lookup_new)
        print("[OK] Enhanced _lookup in UniversalI18nEngine with LIB_TRANSLATIONS support.")

    # Ensure global.i18nManager is registered
    if "global.i18nManager = i18n;" not in content:
        init_old = "global.i18n = i18n;"
        init_new = "global.i18n = i18n;\n  global.i18nManager = i18n;"
        content = content.replace(init_old, init_new, 1)
        print("[OK] Registered global.i18nManager in shared/i18n.js.")

    with open(SHARED_I18N_JS, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"[OK] Wrote updated {SHARED_I18N_JS.name} ({len(content)} bytes).")

def update_shared_i18n_translations_js():
    with open(SHARED_I18N_TRANS_JS, "r", encoding="utf-8") as f:
        content = f.read()

    # Inject COMMON_HOME_PATCH
    patch_marker = "// --- COMMON HOME PATCH INJECTION ---"
    if patch_marker not in content:
        patch_json = json.dumps(COMMON_HOME_PATCH, indent=2, ensure_ascii=False)
        injection_code = f"""
  {patch_marker}
  const __commonHomeAdditions = {patch_json};
  for (const [l, hData] of Object.entries(__commonHomeAdditions)) {{
    if (!translations[l]) translations[l] = {{}};
    if (!translations[l].home) translations[l].home = {{}};
    Object.assign(translations[l].home, hData);
  }}
"""
        insert_pt = content.find("global.i18nTranslations = translations;")
        if insert_pt == -1:
            raise ValueError("Insertion point for global.i18nTranslations not found")
        content = content[:insert_pt] + injection_code + "\n  " + content[insert_pt:]
        with open(SHARED_I18N_TRANS_JS, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"[OK] Injected COMMON_HOME_PATCH into {SHARED_I18N_TRANS_JS.name}.")
    else:
        print(f"[SKIP] COMMON_HOME_PATCH already present in {SHARED_I18N_TRANS_JS.name}.")

def update_ameva_doc_py():
    with open(AMEVA_DOC_PY, "r", encoding="utf-8") as f:
        content = f.read()

    # Update generate_i18n_dict in ameva_doc.py to generate en, ko, ja, hi, zh
    old_fn_start = content.find("def generate_i18n_dict(cfg: dict) -> dict:")
    old_fn_end = content.find("def render_ai_feeds(", old_fn_start)
    if old_fn_start == -1 or old_fn_end == -1:
        raise ValueError("generate_i18n_dict not found in ameva_doc.py")

    new_fn = '''def generate_i18n_dict(cfg: dict) -> dict:
    name = cfg.get("name", "AMEVA-Library")
    version = cfg.get("version", "v1.0.0")
    lic = cfg.get("license", "Apache-2.0")

    return {
        "en": {
            "common": {
                "brand": name,
                "releaseTag": version,
                "pkgBtn": "pip / npm",
                "pypiBtn": "PyPI",
                "npmBtn": "npm",
                "foundationBtn": "Foundation",
                "githubBtn": "GitHub",
                "founderBtn": "Founder CV",
                "footerText": f"© 2026 AMEVA Open-Source Foundation. Released under the {lic} License.",
                "nav": {
                    "docNav": "Document Navigation",
                    "foundation": "Foundation Info",
                    "libraries": "Flagship Libraries",
                    "aiSpecs": "AI Agent Protocols",
                    "home": "Home / Architecture",
                    "installation": "Installation Guide",
                    "quickstart": "Quickstart & Recipes",
                    "apiReference": "API Reference",
                    "benchmarks": "Benchmarks & Profiling",
                    "advancedParams": "Advanced Parameters",
                    "versions": "Version Archive"
                }
            }
        },
        "ko": {
            "common": {
                "brand": name,
                "releaseTag": version,
                "pkgBtn": "패키지 (pip / npm)",
                "pypiBtn": "PyPI 패키지",
                "npmBtn": "npm 패키지",
                "foundationBtn": "재단 소개",
                "githubBtn": "GitHub",
                "founderBtn": "설립자 CV",
                "footerText": f"© 2026 AMEVA 오픈소스 재단. {lic} 라이선스로 배포됨.",
                "nav": {
                    "docNav": "문서 상세 목차",
                    "foundation": "재단 소개 (AOSF)",
                    "libraries": "플래그십 라이브러리",
                    "aiSpecs": "AI 에이전트 프로토콜",
                    "home": "홈 / 아키텍처",
                    "installation": "설치 가이드",
                    "quickstart": "퀵스타트 & 레시피",
                    "apiReference": "전체 API 명세",
                    "benchmarks": "벤치마크 & 하드웨어",
                    "advancedParams": "고급 파라미터 제어",
                    "versions": "버전 릴리즈 아카이브"
                }
            }
        },
        "ja": {
            "common": {
                "brand": name,
                "releaseTag": version,
                "pkgBtn": "パッケージ (pip / npm)",
                "pypiBtn": "PyPI パッケージ",
                "npmBtn": "npm パッケージ",
                "foundationBtn": "財団概要",
                "githubBtn": "GitHub",
                "founderBtn": "創設者経歴",
                "footerText": f"© 2026 AMEVAオープンソース財団. {lic} ライセンスの下で公開.",
                "nav": {
                    "docNav": "ドキュメント目次",
                    "foundation": "財団情報 (AOSF)",
                    "libraries": "主要ライブラリ",
                    "aiSpecs": "AIエージェント仕様",
                    "home": "ホーム / アーキテクチャ",
                    "installation": "インストールガイド",
                    "quickstart": "クイックスタート＆レシピ",
                    "apiReference": "完全APIリファレンス",
                    "benchmarks": "ベンチマーク＆測定",
                    "advancedParams": "高度パラメータ設定",
                    "versions": "バージョンアーカイブ"
                }
            }
        },
        "hi": {
            "common": {
                "brand": name,
                "releaseTag": version,
                "pkgBtn": "पैकेज (pip / npm)",
                "pypiBtn": "PyPI पैकेज",
                "npmBtn": "npm पैकेज",
                "foundationBtn": "फाउंडेशन परिचय",
                "githubBtn": "GitHub",
                "founderBtn": "संस्थापक सीवी",
                "footerText": f"© 2026 AMEVA ओपन-सोर्स फाउंडेशन. {lic} लाइसेंस के तहत जारी.",
                "nav": {
                    "docNav": "दस्तावेज़ नेविगेशन",
                    "foundation": "फाउंडेशन जानकारी (AOSF)",
                    "libraries": "फ्लैगशिप लाइब्रेरी",
                    "aiSpecs": "AI एजेंट प्रोटोकॉल",
                    "home": "होम / आर्किटेक्चर",
                    "installation": "स्थापना गाइड",
                    "quickstart": "त्वरित शुरुआत और रेसिपी",
                    "apiReference": "एपीआई संदर्भ",
                    "benchmarks": "बेंचमार्क और प्रोफाइलिंग",
                    "advancedParams": "उन्नत पैरामीटर",
                    "versions": "संस्करण संग्रह"
                }
            }
        },
        "zh": {
            "common": {
                "brand": name,
                "releaseTag": version,
                "pkgBtn": "软件包 (pip / npm)",
                "pypiBtn": "PyPI 软件包",
                "npmBtn": "npm 软件包",
                "foundationBtn": "基金会介绍",
                "githubBtn": "GitHub",
                "founderBtn": "创始人履历",
                "footerText": f"© 2026 AMEVA 开源基金会. 根据 {lic} 许可证发布.",
                "nav": {
                    "docNav": "文档详细目录",
                    "foundation": "基金会信息 (AOSF)",
                    "libraries": "旗舰库列表",
                    "aiSpecs": "AI 代理协议规范",
                    "home": "首页 / 架构",
                    "installation": "安装指南",
                    "quickstart": "快速上手与示例",
                    "apiReference": "完整 API 参考",
                    "benchmarks": "基准测试与性能",
                    "advancedParams": "高级参数微调",
                    "versions": "版本发布存档"
                }
            }
        }
    }

'''

    content = content[:old_fn_start] + new_fn + content[old_fn_end:]
    with open(AMEVA_DOC_PY, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"[OK] Updated generate_i18n_dict in {AMEVA_DOC_PY.name} to 5 languages.")

def generate_all_lib_assets_i18n(lib_dict):
    # For every library in lib/, ensure assets/i18n-translations.js exists and is populated
    from tools.doc_builder.ameva_doc import generate_i18n_dict
    import yaml

    lib_dir = ROOT_DIR / "lib"
    count = 0
    for lib in ALL_15_LIBS:
        target_dir = lib_dir / lib
        if not target_dir.exists():
            continue
        assets_dir = target_dir / "assets"
        assets_dir.mkdir(parents=True, exist_ok=True)

        cfg_file = target_dir / "doc.config.yaml"
        cfg = {"name": f"AMEVA-{lib.capitalize()}", "version": "v1.0.0", "license": "Apache-2.0"}
        if cfg_file.exists():
            try:
                with open(cfg_file, "r", encoding="utf-8") as cf:
                    loaded = yaml.safe_load(cf)
                    if isinstance(loaded, dict):
                        cfg.update(loaded)
            except Exception as e:
                print(f"[WARN] Error reading {cfg_file}: {e}")

        # Base 5-language nav dict
        i18n_dict = generate_i18n_dict(cfg)

        # Merge library-specific home and details
        if lib in lib_dict:
            ldata = lib_dict[lib]
            for l in ["en", "ko", "ja", "hi", "zh"]:
                if l not in i18n_dict: i18n_dict[l] = {}
                if "home" not in i18n_dict[l]: i18n_dict[l]["home"] = {}
                if "subtitles" in ldata and l in ldata["subtitles"]:
                    i18n_dict[l]["home"]["subtitle"] = ldata["subtitles"][l]
                if "challenge" in ldata and l in ldata["challenge"]:
                    i18n_dict[l]["home"]["challengeText"] = ldata["challenge"][l]
                if "breakthrough" in ldata and l in ldata["breakthrough"]:
                    i18n_dict[l]["home"]["breakthroughText"] = ldata["breakthrough"][l]
                if "features" in ldata:
                    for idx, f in enumerate(ldata["features"]):
                        if f.get("title", {}).get(l):
                            i18n_dict[l]["home"][f"features.{idx}.title"] = f["title"][l]
                        if f.get("desc", {}).get(l):
                            i18n_dict[l]["home"][f"features.{idx}.desc"] = f["desc"][l]

        js_content = f"""/**
 * Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 OR Commercial-License
 */
// AMEVA Auto-Generated i18n Dictionary
(function(global) {{
  const translations = {json.dumps(i18n_dict, indent=2, ensure_ascii=False)};
  if (typeof window !== 'undefined') {{
    if (window.i18nManager && window.i18nManager.registerTranslations) {{
      window.i18nManager.registerTranslations(translations);
    }}
    if (window.i18n && window.i18n.registerTranslations) {{
      window.i18n.registerTranslations(translations);
    }}
  }}
  if (typeof global !== 'undefined') {{
    global.i18nTranslations = Object.assign(global.i18nTranslations || {{}}, translations);
  }}
  if (typeof module !== 'undefined' && module.exports) {{
    module.exports = translations;
  }}
}})(typeof window !== 'undefined' ? window : global);
"""
        out_file = assets_dir / "i18n-translations.js"
        with open(out_file, "w", encoding="utf-8") as out_fp:
            out_fp.write(js_content)
        count += 1
        print(f"[OK] Generated {out_file.relative_to(ROOT_DIR)} ({len(js_content)} bytes)")

    print(f"[PASS] Successfully generated assets/i18n-translations.js for {count} libraries.")

def main():
    print("=== Step 1: Building Full LIB_TRANSLATIONS Dictionary ===")
    lib_dict = build_full_lib_translations()
    verify_translations(lib_dict)

    print("\n=== Step 2: Updating shared/i18n.js ===")
    update_shared_i18n_js(lib_dict)

    print("\n=== Step 3: Updating shared/i18n-translations.js ===")
    update_shared_i18n_translations_js()

    print("\n=== Step 4: Updating tools/doc_builder/ameva_doc.py ===")
    update_ameva_doc_py()

    print("\n=== Step 5: Regenerating lib/*/assets/i18n-translations.js ===")
    generate_all_lib_assets_i18n(lib_dict)

    print("\n=== [COMPLETE] Full Library Multilingual i18n Injection Done ===")

if __name__ == "__main__":
    main()
