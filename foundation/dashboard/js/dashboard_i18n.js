/**
 * AMEVA Neural Fabric Dashboard - 6-Language Translation Engine (dashboard_i18n.js)
 * Supported Languages: ko (Default/Baseline), en, ja, zh, es, fr
 */

(function(global) {
  'use strict';

  const dict = {
    ko: {
      brandSub: "Neural Fabric",
      founderBtn: "🏠 창립자 프로필",
      foundationBtn: "🏛️ 재단 포털",
      searchPlaceholder: "AMEVA 지식 베이스 검색... (예: WebGPU, BitNet, STT)",
      tourExit: "관람 종료",
      tourDocentTitle: "🏛️ AMEVA 오픈소스 박물관",
      tourLiveLink: "Explore Live ↗",
      trackFull: "🌌 전관 마스터 코스 (32개 생태계 전관)",
      trackMobile: "📱 온디바이스 모바일 AI 혁신관",
      trackWebgpu: "⚡ 브라우저 WebGPU & 워크스페이스관",
      trackMultiagent: "🤖 자율 멀티에이전트 & 스웜관",
      trackSre: "🛡️ 보안 & SRE 인프라관",
      exploreDocBtn: "공식 문서 & 코드 탐험",
      toastExplore: "각 노드들을 눌러서 AMEVA 프로젝트를 탐험해 보세요! 🪐",
      audioCurator: "AI 큐레이터 오디오 도슨트",
      autoScrolling: "⚡ 부드러운 자동 스크롤 중",
      scrollPaused: "⏸ 일시정지됨",
      whoMadeBtn: "Who Made AMEVA? (창립자 김은호)",
      executiveSummary: "📌 핵심 기술 요약 & 규격",
      loadingReadme: "📖 GitHub 저장소 README 문서를 불러오는 중...",
      subNodes: "🪐 하위 연결 노드",
      upperNode: "⬅️ 상위 노드로 이동"
    },
    en: {
      brandSub: "Neural Fabric",
      founderBtn: "🏠 Founder CV",
      foundationBtn: "🏛️ Foundation",
      searchPlaceholder: "Search AMEVA Knowledge Base... (e.g. WebGPU, BitNet, STT)",
      tourExit: "Exit Tour",
      tourDocentTitle: "🏛️ AMEVA Sovereign Museum",
      tourLiveLink: "Explore Live ↗",
      trackFull: "🌌 Full Master Tour (All 32 Repositories)",
      trackMobile: "📱 On-Device Mobile AI Pavilion",
      trackWebgpu: "⚡ Browser WebGPU & Workspace Pavilion",
      trackMultiagent: "🤖 Autonomous Multi-Agent & Swarm Pavilion",
      trackSre: "🛡️ Security & SRE Infrastructure Pavilion",
      exploreDocBtn: "Explore Documentation & Code",
      toastExplore: "Click on any node to explore the AMEVA ecosystem! 🪐",
      audioCurator: "AI Curator Audio Guide",
      autoScrolling: "⚡ Auto-Scrolling",
      scrollPaused: "⏸ Paused",
      whoMadeBtn: "Who Made AMEVA? (Founder @uno-km)",
      executiveSummary: "📌 Executive Summary & Core Specs",
      loadingReadme: "📖 Fetching repository README from GitHub...",
      subNodes: "🪐 Connected Sub-Nodes",
      upperNode: "⬅️ Move to Parent Node"
    },
    ja: {
      brandSub: "ニューラルファブリック",
      founderBtn: "🏠 創設者プロフィール",
      foundationBtn: "🏛️ 財団ポータル",
      searchPlaceholder: "AMEVA ナレッジベースを検索... (例: WebGPU, BitNet, STT)",
      tourExit: "ツアー終了",
      tourDocentTitle: "🏛️ AMEVA ソブリン博物館",
      tourLiveLink: "公式ドキュメントへ ↗",
      trackFull: "🌌 全館マスターコース (全32プロジェクト)",
      trackMobile: "📱 オンデバイス モバイル AI 革新館",
      trackWebgpu: "⚡ ブラウザ WebGPU & ワークスペース館",
      trackMultiagent: "🤖 自律マルチエージェント & スワーム館",
      trackSre: "🛡️ セキュリティ & SRE インフラ館",
      exploreDocBtn: "公式ドキュメントとコードを探索",
      toastExplore: "各ノードをクリックして AMEVA プロジェクトを探索してください！🪐",
      audioCurator: "AI キュレーター 音声ガイド",
      autoScrolling: "⚡ 自動スクロール中",
      scrollPaused: "⏸ 一時停止",
      whoMadeBtn: "Who Made AMEVA? (創設者 金恩浩)",
      executiveSummary: "📌 コア技術サマリー & 仕様",
      loadingReadme: "📖 GitHub リポジトリの README を取得中...",
      subNodes: "🪐 下位リンクノード",
      upperNode: "⬅️ 上位ノードへ移動"
    },
    zh: {
      brandSub: "神经矩阵",
      founderBtn: "🏠 创始人简历",
      foundationBtn: "🏛️ 基金会门户",
      searchPlaceholder: "搜索 AMEVA 知识库... (例如: WebGPU, BitNet, STT)",
      tourExit: "退出导览",
      tourDocentTitle: "🏛️ AMEVA 自主开源博物馆",
      tourLiveLink: "探索实时文档 ↗",
      trackFull: "🌌 全馆大师路线 (全32个生态库)",
      trackMobile: "📱 端侧移动 AI 创新馆",
      trackWebgpu: "⚡ 浏览器 WebGPU 与工作空间馆",
      trackMultiagent: "🤖 自主多智能体与集群馆",
      trackSre: "🛡️ 安全与 SRE 基础设施馆",
      exploreDocBtn: "探索官方文档与源代码",
      toastExplore: "点击任意节点即可探索 AMEVA 生态系统！🪐",
      audioCurator: "AI 讲解员 语音导览",
      autoScrolling: "⚡ 正在自动滚动",
      scrollPaused: "⏸ 已暂停",
      whoMadeBtn: "Who Made AMEVA? (创始人 金恩浩)",
      executiveSummary: "📌 核心技术摘要与规格",
      loadingReadme: "📖 正在从 GitHub 获取 README 文档...",
      subNodes: "🪐 下级连接节点",
      upperNode: "⬅️ 返回上级节点"
    },
    es: {
      brandSub: "Tejido Neuronal",
      founderBtn: "🏠 CV del Fundador",
      foundationBtn: "🏛️ Fundación",
      searchPlaceholder: "Buscar en la base de conocimientos... (ej. WebGPU, BitNet, STT)",
      tourExit: "Salir del Tour",
      tourDocentTitle: "🏛️ Museo Soberano AMEVA",
      tourLiveLink: "Explorar en vivo ↗",
      trackFull: "🌌 Recorrido Maestro Completo (32 Repositorios)",
      trackMobile: "📱 Pabellón de IA Móvil en el Dispositivo",
      trackWebgpu: "⚡ Pabellón WebGPU de Navegador y Espacio de Trabajo",
      trackMultiagent: "🤖 Pabellón de Multi-Agentes Autónomos",
      trackSre: "🛡️ Pabellón de Seguridad e Infraestructura SRE",
      exploreDocBtn: "Explorar Documentación y Código",
      toastExplore: "¡Haga clic en cualquier nodo para explorar el ecosistema AMEVA! 🪐",
      audioCurator: "Audioguía del Curador IA",
      autoScrolling: "⚡ Desplazamiento automático",
      scrollPaused: "⏸ En pausa",
      whoMadeBtn: "¿Quién creó AMEVA? (Fundador @uno-km)",
      executiveSummary: "📌 Resumen Ejecutivo y Especificaciones",
      loadingReadme: "📖 Cargando README desde GitHub...",
      subNodes: "🪐 Nodos Secundarios Conectados",
      upperNode: "⬅️ Mover al Nodo Superior"
    },
    fr: {
      brandSub: "Tissu Neuronal",
      founderBtn: "🏠 CV du Fondateur",
      foundationBtn: "🏛️ Fondation",
      searchPlaceholder: "Rechercher dans la base AMEVA... (ex. WebGPU, BitNet, STT)",
      tourExit: "Quitter le Tour",
      tourDocentTitle: "🏛️ Musée Souverain AMEVA",
      tourLiveLink: "Explorer en Direct ↗",
      trackFull: "🌌 Visite Complète (32 Dépôts de l'Écosystème)",
      trackMobile: "📱 Pavillon IA Mobile sur Périphérique",
      trackWebgpu: "⚡ Pavillon WebGPU sur Navigateur & Espace de Travail",
      trackMultiagent: "🤖 Pavillon Multi-Agents Autonomes",
      trackSre: "🛡️ Pavillon Sécurité & Infrastructure SRE",
      exploreDocBtn: "Explorer la Documentation & le Code",
      toastExplore: "Cliquez sur un nœud pour explorer l'écosystème AMEVA ! 🪐",
      audioCurator: "Guide Audio du Conservateur IA",
      autoScrolling: "⚡ Défilement Automatique",
      scrollPaused: "⏸ En Pause",
      whoMadeBtn: "Qui a créé AMEVA ? (Fondateur @uno-km)",
      executiveSummary: "📌 Résumé Exécutif & Spécifications",
      loadingReadme: "📖 Chargement du README depuis GitHub...",
      subNodes: "🪐 Nœuds Secondaires Connectés",
      upperNode: "⬅️ Aller au Nœud Supérieur"
    }
  };

  class DashboardI18n {
    constructor() {
      this.currentLang = localStorage.getItem('dashboard_lang') || 'ko';
    }

    t(key) {
      const l = dict[this.currentLang] || dict.ko;
      return l[key] || dict.en[key] || dict.ko[key] || key;
    }

    setLanguage(lang) {
      if (!dict[lang]) lang = 'ko';
      this.currentLang = lang;
      localStorage.setItem('dashboard_lang', lang);
      this.applyTranslations();
    }

    applyTranslations() {
      // 1. Search placeholder
      const searchInput = document.getElementById('spotlight-input');
      if (searchInput) searchInput.placeholder = this.t('searchPlaceholder');

      // 2. Track Select Options
      const trackSelect = document.getElementById('docent-track-select');
      if (trackSelect && trackSelect.options.length >= 5) {
        trackSelect.options[0].text = this.t('trackFull');
        trackSelect.options[1].text = this.t('trackMobile');
        trackSelect.options[2].text = this.t('trackWebgpu');
        trackSelect.options[3].text = this.t('trackMultiagent');
        trackSelect.options[4].text = this.t('trackSre');
      }

      // 3. Top Header Nav buttons
      const btnFounder = document.querySelector('header a[href="/"]');
      if (btnFounder) btnFounder.textContent = this.t('founderBtn');

      const btnFound = document.querySelector('header a[href="/foundation/"]');
      if (btnFound) btnFound.textContent = this.t('foundationBtn');

      // 4. Who Made button
      const btnWho = document.getElementById('btn-who-made');
      if (btnWho) btnWho.textContent = this.t('whoMadeBtn');

      // 5. Docent Header Badge & Exit
      const docentBadge = document.querySelector('.museum-badge');
      if (docentBadge) docentBadge.textContent = this.t('tourDocentTitle');

      const btnExit = document.getElementById('btn-tour-exit');
      if (btnExit) btnExit.title = this.t('tourExit');

      // 6. Subtitle Speaker label
      const speakerLabel = document.querySelector('.docent-speaker-label span:last-child');
      if (speakerLabel) speakerLabel.textContent = this.t('audioCurator');

      // Sync select dropdown value
      const langSelect = document.getElementById('dashboard-lang-select');
      if (langSelect) langSelect.value = this.currentLang;
    }

    init() {
      this.applyTranslations();
      const langSelect = document.getElementById('dashboard-lang-select');
      if (langSelect) {
        langSelect.value = this.currentLang;
        langSelect.addEventListener('change', (e) => {
          this.setLanguage(e.target.value);
        });
      }
    }
  }

  global.dashboardI18n = new DashboardI18n();

  document.addEventListener('DOMContentLoaded', () => {
    global.dashboardI18n.init();
  });
})(window);
