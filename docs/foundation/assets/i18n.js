/**
 * AMEVA Open-Source Foundation (AOSF) - Multilingual (i18n) Engine
 * Zero-dependency, client-side internationalization manager with auto-detection.
 */

(function(global) {
  'use strict';

  const SUPPORTED_LANGUAGES = {
    'en': { code: 'en', name: 'English', nativeName: 'English' },
    'ko': { code: 'ko', name: 'Korean', nativeName: '한국어' },
    'ja': { code: 'ja', name: 'Japanese', nativeName: '日本語' },
    'zh': { code: 'zh', name: 'Chinese', nativeName: '简体中文' },
    'es': { code: 'es', name: 'Spanish', nativeName: 'Español' },
    'de': { code: 'de', name: 'German', nativeName: 'Deutsch' }
  };

  const DEFAULT_LANG = 'en';
  const STORAGE_KEY = 'aosf_foundation_lang';

  class I18nManager {
    constructor() {
      this.currentLang = DEFAULT_LANG;
      this.translations = {};
      this.initialized = false;
    }

    init() {
      this.currentLang = this._getSavedLang() || this._detectBrowserLang();
      if (!SUPPORTED_LANGUAGES[this.currentLang]) {
        this.currentLang = DEFAULT_LANG;
      }

      this._setupLanguageSelectors();
      this._setupCodeCopyButtons();
      this.applyLanguage(this.currentLang);
      this.initialized = true;
    }

    registerTranslations(dict) {
      this.translations = dict;
      if (this.initialized) {
        this.applyLanguage(this.currentLang);
      }
    }

    _getSavedLang() {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && SUPPORTED_LANGUAGES[langParam]) return langParam;
        return localStorage.getItem(STORAGE_KEY);
      } catch (e) {
        return null;
      }
    }

    _saveLang(lang) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch (e) {}
    }

    _detectBrowserLang() {
      try {
        const nav = navigator.languages || [navigator.language || ''];
        for (const l of nav) {
          const code = l.toLowerCase().substring(0, 2);
          if (SUPPORTED_LANGUAGES[code]) return code;
        }
      } catch (e) {}
      return DEFAULT_LANG;
    }

    setLanguage(lang) {
      if (!SUPPORTED_LANGUAGES[lang]) return;
      this.currentLang = lang;
      this._saveLang(lang);
      this.applyLanguage(lang);
    }

    applyLanguage(lang) {
      document.documentElement.lang = lang;
      const dict = this.translations[lang] || this.translations[DEFAULT_LANG] || {};

      const elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
          el.innerHTML = dict[key];
        }
      });

      const selects = document.querySelectorAll('.lang-select');
      selects.forEach(select => {
        if (select.value !== lang) {
          select.value = lang;
        }
      });
    }

    _setupLanguageSelectors() {
      const wrappers = document.querySelectorAll('.lang-selector-wrapper');
      wrappers.forEach(wrapper => {
        const select = document.createElement('select');
        select.className = 'lang-select';
        select.setAttribute('aria-label', 'Select Language');

        Object.keys(SUPPORTED_LANGUAGES).forEach(code => {
          const opt = document.createElement('option');
          opt.value = code;
          opt.textContent = SUPPORTED_LANGUAGES[code].nativeName;
          if (code === this.currentLang) opt.selected = true;
          select.appendChild(opt);
        });

        select.addEventListener('change', e => {
          this.setLanguage(e.target.value);
        });

        wrapper.appendChild(select);
      });
    }

    _setupCodeCopyButtons() {
      const codeBlocks = document.querySelectorAll('pre');
      codeBlocks.forEach(pre => {
        if (pre.querySelector('.copy-btn')) return;
        const btn = document.createElement('button');
        btn.className = 'btn-sm';
        btn.style.cssText = 'position:absolute;top:8px;right:8px;cursor:pointer;background:#1e293b;color:#e2e8f0;border:1px solid #475569;';
        btn.textContent = 'Copy';
        pre.style.position = 'relative';
        btn.addEventListener('click', () => {
          const code = pre.querySelector('code') || pre;
          navigator.clipboard.writeText(code.innerText.replace('Copy', '').trim()).then(() => {
            btn.textContent = 'Copied!';
            setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
          });
        });
        pre.appendChild(btn);
      });
    }
  }

  global.AOSF_i18n = new I18nManager();
  document.addEventListener('DOMContentLoaded', () => {
    global.AOSF_i18n.init();
  });
})(window);
