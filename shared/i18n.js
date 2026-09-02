/**
 * AMEVA Ecosystem - Master Universal Multilingual (i18n) Core Engine (SSOT v6.0)
 * Deterministic DOM Multi-Pass Engine across 13 Languages with Protected Header Controls & Global Subpage Translations.
 */

(function(global) {
  'use strict';

  const SUPPORTED_LANGUAGES = {
  "en": {
    "name": "English",
    "native": "English",
    "flag": "🇺🇸",
    "dir": "ltr"
  },
  "ko": {
    "name": "Korean",
    "native": "한국어",
    "flag": "🇰🇷",
    "dir": "ltr"
  },
  "ja": {
    "name": "Japanese",
    "native": "日本語",
    "flag": "🇯🇵",
    "dir": "ltr"
  },
  "zh": {
    "name": "Chinese",
    "native": "简体中文",
    "flag": "🇨🇳",
    "dir": "ltr"
  },
  "ar": {
    "name": "Arabic",
    "native": "العربية",
    "flag": "🇸🇦",
    "dir": "rtl"
  },
  "fr": {
    "name": "French",
    "native": "Français",
    "flag": "🇫🇷",
    "dir": "ltr"
  },
  "de": {
    "name": "German",
    "native": "Deutsch",
    "flag": "🇩🇪",
    "dir": "ltr"
  },
  "es": {
    "name": "Spanish",
    "native": "Español",
    "flag": "🇪🇸",
    "dir": "ltr"
  },
  "hi": {
    "name": "Hindi",
    "native": "हिन्दी",
    "flag": "🇮🇳",
    "dir": "ltr"
  },
  "ru": {
    "name": "Russian",
    "native": "Русский",
    "flag": "🇷🇺",
    "dir": "ltr"
  },
  "vi": {
    "name": "Vietnamese",
    "native": "Tiếng Việt",
    "flag": "🇻🇳",
    "dir": "ltr"
  },
  "pl": {
    "name": "Polish",
    "native": "Polski",
    "flag": "🇵🇱",
    "dir": "ltr"
  },
  "la": {
    "name": "Latin",
    "native": "Latina",
    "flag": "🏛️",
    "dir": "ltr"
  }
};
  const DEFAULT_LANG = 'en';
  const STORAGE_KEYS = ['ameva_global_lang', 'uno_km_lang', 'ameva_lib_doc_lang', 'forge_lang'];

  const PROTECTED_PHRASES = new Set(["sitemap.xml (Sitemap)", "AMEVA-Forge (WebGPU Autograd)", "Termux-BitNet", "llms.txt", "Termux-Playwright (Automation)", "Termux-LlamaCpp", "Termux-STT (Voice STT)", "Termux-Playwright", "Termux-BitNet (1.58-bit LLM)", "Termux-AIChain", "Termux-Diffusion", "llms-full.txt", "Infra-Index", "GitHub", "Termux-TTS (Voice Synthesis)", "AMEVA-Forge", "Foundation", "llms-full.txt (Full Spec)", "AMEVA-MCP-Hub", "Termux-Diffusion (Image AI)", "sitemap.xml", "Termux-LlamaCpp (GGUF Runtime)", "pip", "robots.txt (AI Crawlers)", "Node.js (npm)", "Termux-Vision (CV & VLM)", "Python (pip)", "AMEVA-Sentinel", "Termux-AIChain (Zero-Dep Agent)", "Termux-Train (LoRA Engine)", "AMEVA Workstation (Web App)", "robots.txt", "AMEVA-Vulkan-Runtime", "AMEVA-Vulkan-Runtime (Vulkan HAL)", "AMEVA-MCP-Hub (Polyglot WASM)", "Sponsor", "Founder CV", "AMEVA-Sentinel (Security SDK)", "Blog", "Termux-Vision", "Termux-TTS", "llms.txt (AI Fast Context)", "Termux-STT", "Termux-Train", "Open Collective", "npm", "pip / npm"]);
  const PHRASES_DB = {
  "Document Navigation": {
    "ko": "문서 상세 목차",
    "ja": "ドキュメント目次",
    "zh": "文档导航目录",
    "vi": "Điều hướng tài liệu",
    "fr": "Navigation Documentaire",
    "de": "Dokument-Navigation",
    "es": "Navegación de Documentos",
    "ru": "Навигация по документам",
    "ar": "التنقل في المستندات",
    "hi": "दस्तावेज़ नेविगेशन",
    "pl": "Nawigacja po dokumentach",
    "la": "Navigatio Documentorum",
    "en": "Document Navigation"
  },
  "Foundation Info": {
    "ko": "재단 소개 (AOSF)",
    "ja": "財団情報",
    "zh": "基金会概览",
    "vi": "Thông tin quỹ",
    "fr": "Infos Fondation",
    "de": "Stiftungsinformationen",
    "es": "Información de la Fundación",
    "ru": "Информация о Фонде",
    "ar": "معلومات المؤسسة",
    "hi": "फाउंडेशन जानकारी",
    "pl": "Informacje o Fundacji",
    "la": "Notitia Fundationis",
    "en": "Foundation Info"
  },
  "Home / Architecture": {
    "ko": "홈 / 아키텍처",
    "ja": "ホーム / アーキテクチャ",
    "zh": "首页 / 架构设计",
    "vi": "Trang chủ / Kiến trúc",
    "fr": "Accueil / Architecture",
    "de": "Startseite / Architektur",
    "es": "Inicio / Arquitectura",
    "ru": "Главная / Архитектура",
    "ar": "الرئيسية / الهندسة المعمارية",
    "hi": "होम / वास्तुकला",
    "pl": "Strona główna / Architektura",
    "la": "Domus / Architectura",
    "en": "Home / Architecture"
  },
  "Installation Guide": {
    "ko": "설치 가이드",
    "ja": "インストールガイド",
    "zh": "安装部署指南",
    "vi": "Hướng dẫn cài đặt",
    "fr": "Guide d'Installation",
    "de": "Installationsanleitung",
    "es": "Guía de Instalación",
    "ru": "Руководство по установке",
    "ar": "دليل التثبيت",
    "hi": "स्थापना गाइड",
    "pl": "Instrukcja instalacji",
    "la": "Dux Institutionis",
    "en": "Installation Guide"
  },
  "Quickstart & Recipes": {
    "ko": "퀵스타트 & 실행 레시피",
    "ja": "クイックスタート＆レシピ",
    "zh": "快速上手与示例",
    "vi": "Bắt đầu nhanh & Công thức",
    "fr": "Démarrage Rapide & Recettes",
    "de": "Schnellstart & Rezepte",
    "es": "Inicio Rápido y Recetas",
    "ru": "Быстрый старт и примеры",
    "ar": "البدء السريع والأمثلة",
    "hi": "त्वरित शुरुआत और रेसिपी",
    "pl": "Szybki start i przepisy",
    "la": "Initium Celer & Exempla",
    "en": "Quickstart & Recipes"
  },
  "API Reference": {
    "ko": "전체 API 명세서",
    "ja": "APIリファレンス",
    "zh": "完整 API 规范",
    "vi": "Tài liệu tham khảo API",
    "fr": "Référence de l'API",
    "de": "API-Referenz",
    "es": "Referencia de la API",
    "ru": "Справочник по API",
    "ar": "مرجع API",
    "hi": "API संदर्भ",
    "pl": "Dokumentacja API",
    "la": "Index API",
    "en": "API Reference"
  },
  "Pretrained Checkpoints": {
    "ko": "사전학습 체크포인트",
    "ja": "事前学習済みチェックポイント",
    "zh": "预训练模型检查点",
    "vi": "Điểm kiểm tra được đào tạo trước",
    "fr": "Points de Contrôle Pré-entraînés",
    "de": "Vortrainierte Checkpoints",
    "es": "Puntos de Control Preentrenados",
    "ru": "Предобученные чекпоинты",
    "ar": "نقاط التفتيش المدربة مسبقًا",
    "hi": "पूर्व-प्रशिक्षित चेकपॉइंट्स",
    "pl": "Wstępnie wytrenowane punkty kontrolne",
    "la": "Puncta Prae-instituta",
    "en": "Pretrained Checkpoints"
  },
  "Model Checkpoints": {
    "ko": "모델 체크포인트",
    "ja": "モデルチェックポイント",
    "zh": "模型检查点",
    "vi": "Điểm kiểm tra mô hình",
    "fr": "Points de Contrôle de Modèles",
    "de": "Modell-Checkpoints",
    "es": "Puntos de Control de Modelos",
    "ru": "Чекпоинты моделей",
    "ar": "نقاط تفتيش النماذج",
    "hi": "मॉडल चेकपॉइंट्स",
    "pl": "Punkty kontrolne modeli",
    "la": "Puncta Modelli",
    "en": "Model Checkpoints"
  },
  "GGUF Quant Models": {
    "ko": "GGUF 양자화 모델 허브",
    "ja": "GGUF量子化モデルハブ",
    "zh": "GGUF 量化模型中心",
    "vi": "Mô hình lượng tử GGUF",
    "fr": "Modèles Quantifiés GGUF",
    "de": "GGUF-Quantisierungsmodelle",
    "es": "Modelos Cuantizados GGUF",
    "ru": "GGUF квантованные модели",
    "ar": "نماذج GGUF الكمية",
    "hi": "GGUF क्वांट मॉडल",
    "pl": "Modele kwantyzacji GGUF",
    "la": "Modelli GGUF",
    "en": "GGUF Quant Models"
  },
  "Models Directory": {
    "ko": "모델 디렉터리",
    "ja": "モデルディレクトリ",
    "zh": "模型索引目录",
    "vi": "Thư mục mô hình",
    "fr": "Répertoire des Modèles",
    "de": "Modellverzeichnis",
    "es": "Directorio de Modelos",
    "ru": "Каталог моделей",
    "ar": "دليل النماذج",
    "hi": "मॉडल निर्देशिका",
    "pl": "Katalog modeli",
    "la": "Directorium Modelli",
    "en": "Models Directory"
  },
  "Benchmarks & Profiling": {
    "ko": "벤치마크 & 하드웨어 프로파일링",
    "ja": "ベンチマーク＆プロファイリング",
    "zh": "基准测试与性能分析",
    "vi": "Đo điểm chuẩn & Phân tích",
    "fr": "Benchmarks & Profilage",
    "de": "Benchmarks & Profiling",
    "es": "Evaluaciones Comparativas y Perfilado",
    "ru": "Бенчмарки и профилирование",
    "ar": "المعايير وتحليل الأداء",
    "hi": "बेंचमार्क और प्रोफाइलिंग",
    "pl": "Testy wydajności i profilowanie",
    "la": "Mensurae et Profiling",
    "en": "Benchmarks & Profiling"
  },
  "Advanced Parameters": {
    "ko": "고급 파라미터 제어",
    "ja": "高度なパラメータ制御",
    "zh": "高级参数与内核调优",
    "vi": "Tham số nâng cao",
    "fr": "Paramètres Avancés",
    "de": "Erweiterte Parameter",
    "es": "Parámetros Avanzados",
    "ru": "Расширенные параметры",
    "ar": "المعلمات المتقدمة",
    "hi": "उन्नत पैरामीटर",
    "pl": "Zaawansowane parametry",
    "la": "Parametri Provecti",
    "en": "Advanced Parameters"
  },
  "Version Archive": {
    "ko": "버전 릴리즈 아카이브",
    "ja": "バージョンアーカイブ",
    "zh": "版本发布存档",
    "vi": "Kho lưu trữ phiên bản",
    "fr": "Archives des Versions",
    "de": "Versionsarchiv",
    "es": "Archivo de Versiones",
    "ru": "Архив версий",
    "ar": "أرشيف الإصدارات",
    "hi": "संस्करण पुरालेख",
    "pl": "Archiwum wersji",
    "la": "Archivum Versionum",
    "en": "Version Archive"
  },
  "Visual Gallery": {
    "ko": "시각 갤러리",
    "ja": "ビジュアルギャラリー",
    "zh": "视觉画廊",
    "vi": "Thư viện trực quan",
    "fr": "Galerie Visuelle",
    "de": "Visuelle Galerie",
    "es": "Galería Visual",
    "ru": "Визуальная галерея",
    "ar": "معرض الصور",
    "hi": "दृश्य गैलरी",
    "pl": "Galeria wizualna",
    "la": "Pinacotheca Visualis",
    "en": "Visual Gallery"
  },
  "Audio Showcase": {
    "ko": "오디오 쇼케이스",
    "ja": "オーディオショーケース",
    "zh": "音频演示",
    "vi": "Trưng bày âm thanh",
    "fr": "Vitrine Audio",
    "de": "Audio-Showcase",
    "es": "Muestra de Audio",
    "ru": "Аудио витрина",
    "ar": "عرض الصوت",
    "hi": "ऑडियो शोकेस",
    "pl": "Pokaz audio",
    "la": "Expositio Auditus",
    "en": "Audio Showcase"
  },
  "Live WebGPU Demo": {
    "ko": "실시간 WebGPU 데모",
    "ja": "ライブWebGPUデモ",
    "zh": "实时 WebGPU 演示",
    "vi": "Bản demo WebGPU trực tiếp",
    "fr": "Démo WebGPU en Direct",
    "de": "Live-WebGPU-Demo",
    "es": "Demostración WebGPU en Vivo",
    "ru": "Живое WebGPU демо",
    "ar": "عرض WebGPU المباشر",
    "hi": "लाइव WebGPU डेमो",
    "pl": "Prezentacja WebGPU na żywo",
    "la": "Exemplum WebGPU Vivum",
    "en": "Live WebGPU Demo"
  },
  "WASM Tools Catalog": {
    "ko": "WASM 도구 카탈로그",
    "ja": "WASMツールカタログ",
    "zh": "WASM 工具目录",
    "vi": "Danh mục công cụ WASM",
    "fr": "Catalogue d'Outils WASM",
    "de": "WASM-Werkzeugkatalog",
    "es": "Catálogo de Herramientas WASM",
    "ru": "Каталог инструментов WASM",
    "ar": "كتالوج أدوات WASM",
    "hi": "WASM उपकरण सूची",
    "pl": "Katalog narzędzi WASM",
    "la": "Catalogus Instrumentorum WASM",
    "en": "WASM Tools Catalog"
  },
  "Training Guide": {
    "ko": "온디바이스 학습 가이드",
    "ja": "学習ガイド",
    "zh": "模型训练指南",
    "vi": "Hướng dẫn đào tạo",
    "fr": "Guide d'Entraînement",
    "de": "Trainingsanleitung",
    "es": "Guía de Entrenamiento",
    "ru": "Руководство по обучению",
    "ar": "دليل التدريب",
    "hi": "प्रशिक्षण गाइड",
    "pl": "Przewodnik szkoleniowy",
    "la": "Dux Eruditionis",
    "en": "Training Guide"
  },
  "Flagship Libraries": {
    "ko": "플래그십 라이브러리",
    "ja": "フラグシップライブラリ",
    "zh": "旗舰开源库",
    "vi": "Thư viện hàng đầu",
    "fr": "Bibliothèques Phares",
    "de": "Flaggschiff-Bibliotheken",
    "es": "Bibliotecas Insignia",
    "ru": "Флагманские библиотеки",
    "ar": "المكتبات الرائدة",
    "hi": "फ्लैगशिप लाइब्रेरीज़",
    "pl": "Główne biblioteki",
    "la": "Bibliothecae Praecipuae",
    "en": "Flagship Libraries"
  },
  "AI Agent Protocols": {
    "ko": "AI 에이전트 프로토콜",
    "ja": "AIエージェントプロトコル",
    "zh": "AI 智能体交互协议",
    "vi": "Giao thức tác tử AI",
    "fr": "Protocoles d'Agents IA",
    "de": "KI-Agenten-Protokolle",
    "es": "Protocolos de Agentes de IA",
    "ru": "Протоколы ИИ-агентов",
    "ar": "بروتوكولات وكلاء الذكاء الاصطناعي",
    "hi": "AI एजेंट प्रोटोकॉल",
    "pl": "Protokoły agentów AI",
    "la": "Protocolla Agentium AI",
    "en": "AI Agent Protocols"
  },
  "Quickstart & Execution Recipes": {
    "ko": "퀵스타트 & 실행 레시피",
    "ja": "クイックスタート＆実行レシピ",
    "zh": "快速上手与执行范式",
    "vi": "Bắt đầu nhanh & Công thức thực thi",
    "fr": "Démarrage Rapide & Recettes d'Exécution",
    "de": "Schnellstart & Ausführungsrezepte",
    "es": "Inicio Rápido y Recetas de Ejecución",
    "ru": "Быстрый старт и рецепты выполнения",
    "ar": "البدء السريع ووصفات التنفيذ",
    "hi": "त्वरित शुरुआत और निष्पादन व्यंजन",
    "pl": "Szybki start i przepisy wykonawcze",
    "la": "Initium Celer & Formulae Executionis",
    "en": "Quickstart & Execution Recipes"
  },
  "Standard usage patterns and rapid prototyping code": {
    "ko": "표준 사용 패턴 및 빠른 프로토타이핑 코드",
    "ja": "標準的な使用パターンと高速プロトタイピングコード",
    "zh": "标准用法模式与快速原型开发代码",
    "vi": "Các mẫu sử dụng chuẩn và mã tạo mẫu nhanh",
    "fr": "Modèles d'utilisation standard et code de prototypage rapide",
    "de": "Standard-Nutzungsmuster und Code für schnelles Prototyping",
    "es": "Patrones de uso estándar y código de creación rápida de prototipos",
    "ru": "Стандартные шаблоны использования и код для быстрого прототипирования",
    "ar": "أنماط الاستخدام القياسية وشفرة النماذج الأولية السريعة",
    "hi": "मानक उपयोग पैटर्न और त्वरित प्रोटोटाइप कोड",
    "pl": "Standardowe wzorce użycia i kod szybkiego prototypowania",
    "la": "Formae usus canonicae et codex prototyping celeris",
    "en": "Standard usage patterns and rapid prototyping code"
  },
  "Prerequisites & Environment Setup": {
    "ko": "사전 요구사항 및 환경 설정",
    "ja": "前提条件と環境設定",
    "zh": "前置要求与环境配置",
    "vi": "Điều kiện tiên quyết & Thiết lập môi trường",
    "fr": "Prérequis & Configuration de l'Environnement",
    "de": "Voraussetzungen & Umgebungseinrichtung",
    "es": "Requisitos Previos y Configuración del Entorno",
    "ru": "Предварительные требования и настройка среды",
    "ar": "المتطلبات الأساسية وإعداد البيئة",
    "hi": "पूर्वापेक्षाएँ और पर्यावरण सेटअप",
    "pl": "Wymagania wstępne i konfiguracja środowiska",
    "la": "Praerequisita et Configuratio Ambitus",
    "en": "Prerequisites & Environment Setup"
  },
  "Hardware Requirements & Toolchain Setup": {
    "ko": "하드웨어 요구 사양 및 툴체인 설정",
    "ja": "ハードウェア要件とツールチェーン設定",
    "zh": "硬件要求与工具链配置",
    "vi": "Yêu cầu phần cứng & Thiết lập chuỗi công cụ",
    "fr": "Exigences Matérielles & Configuration de la Chaîne d'Outils",
    "de": "Hardwareanforderungen & Toolchain-Setup",
    "es": "Requisitos de Hardware y Configuración de la Cadena de Herramientas",
    "ru": "Требования к оборудованию и настройка цепочки инструментов",
    "ar": "متطلبات الأجهزة وإعداد سلسلة الأدوات",
    "hi": "हार्डवेयर आवश्यकताएं और टूलचेन सेटअप",
    "pl": "Wymagania sprzętowe i konfiguracja łańcucha narzędzi",
    "la": "Postulata Hardware et Configuratio Toolchain",
    "en": "Hardware Requirements & Toolchain Setup"
  },
  "Step 1: Termux Environment Setup": {
    "ko": "1단계: Termux 환경 설정",
    "ja": "ステップ1：Termux環境設定",
    "zh": "步骤 1：Termux 环境配置",
    "vi": "Bước 1: Thiết lập môi trường Termux",
    "fr": "Étape 1 : Configuration de l'Environnement Termux",
    "de": "Schritt 1: Termux-Umgebungseinrichtung",
    "es": "Paso 1: Configuración del Entorno Termux",
    "ru": "Шаг 1: Настройка среды Termux",
    "ar": "الخطوة 1: إعداد بيئة Termux",
    "hi": "चरण 1: टर्मक्स पर्यावरण सेटअप",
    "pl": "Krok 1: Konfiguracja środowiska Termux",
    "la": "Gradus 1: Configuratio Ambitus Termux",
    "en": "Step 1: Termux Environment Setup"
  },
  "Step 2: Install Package": {
    "ko": "2단계: 패키지 설치",
    "ja": "ステップ2：パッケージのインストール",
    "zh": "步骤 2：安装软件包",
    "vi": "Bước 2: Cài đặt gói",
    "fr": "Étape 2 : Installer le Paquet",
    "de": "Schritt 2: Paket installieren",
    "es": "Paso 2: Instalar Paquete",
    "ru": "Шаг 2: Установка пакета",
    "ar": "الخطوة 2: تثبيت الحزمة",
    "hi": "चरण 2: पैकेज स्थापित करें",
    "pl": "Krok 2: Zainstaluj pakiet",
    "la": "Gradus 2: Sarcinam Installa",
    "en": "Step 2: Install Package"
  },
  "Step 3: Verify Hardware Capabilities": {
    "ko": "3단계: 하드웨어 가속 역량 검증",
    "ja": "ステップ3：ハードウェア機能の検証",
    "zh": "步骤 3：验证硬件加速能力",
    "vi": "Bước 3: Xác minh khả năng phần cứng",
    "fr": "Étape 3 : Vérifier les Capacités Matérielles",
    "de": "Schritt 3: Hardwarefunktionen überprüfen",
    "es": "Paso 3: Verificar Capacidades de Hardware",
    "ru": "Шаг 3: Проверка возможностей оборудования",
    "ar": "الخطوة 3: التحقق من قدرات الأجهزة",
    "hi": "चरण 3: हार्डवेयर क्षमताओं को सत्यापित करें",
    "pl": "Krok 3: Zweryfikuj możliwości sprzętowe",
    "la": "Gradus 3: Capacitates Hardware Comproba",
    "en": "Step 3: Verify Hardware Capabilities"
  },
  "Step 4: Execute Sanity Check": {
    "ko": "4단계: 정상 동작 검증 (Sanity Check)",
    "ja": "ステップ4：動作確認（サニティチェック）",
    "zh": "步骤 4：执行冒烟测试验证",
    "vi": "Bước 4: Thực thi kiểm tra tính toàn vẹn",
    "fr": "Étape 4 : Exécuter le Test de Validité",
    "de": "Schritt 4: Plausibilitätsprüfung durchführen",
    "es": "Paso 4: Ejecutar Prueba de Cordura",
    "ru": "Шаг 4: Выполнение базовой проверки работоспособности",
    "ar": "الخطوة 4: تنفيذ اختبار السلامة",
    "hi": "चरण 4: सैनिटी चेक निष्पादित करें",
    "pl": "Krok 4: Wykonaj test poprawności",
    "la": "Gradus 4: Examinationem Sanitas Exsequere",
    "en": "Step 4: Execute Sanity Check"
  },
  "Benchmarks & Hardware Profiling": {
    "ko": "벤치마크 & 하드웨어 프로파일링",
    "ja": "ベンチマーク＆ハードウェアプロファイリング",
    "zh": "基准测试与硬件性能分析",
    "vi": "Đo điểm chuẩn & Phân tích phần cứng",
    "fr": "Benchmarks & Profilage Matériel",
    "de": "Benchmarks & Hardware-Profiling",
    "es": "Evaluaciones Comparativas y Perfilado de Hardware",
    "ru": "Бенчмарки и профилирование оборудования",
    "ar": "المعايير والتوصيف المادي",
    "hi": "बेंचमार्क और हार्डवेयर प्रोफाइलिंग",
    "pl": "Testy wydajności i profilowanie sprzętowe",
    "la": "Mensurae et Hardware Profiling",
    "en": "Benchmarks & Hardware Profiling"
  },
  "Deterministic throughput, memory consumption, and thermal telemetry": {
    "ko": "결정론적 처리량, 메모리 점유율 및 발열 텔레메트리 지표",
    "ja": "決定論的スループット、メモリ消費量、熱テレメトリ指標",
    "zh": "确定性吞吐量、内存消耗及功耗发热遥测数据",
    "vi": "Thông lượng xác định, mức tiêu thụ bộ nhớ và phép đo từ xa nhiệt",
    "fr": "Débit déterministe, consommation de mémoire et télémétrie thermique",
    "de": "Deterministischer Durchsatz, Speicherverbrauch und thermische Telemetrie",
    "es": "Rendimiento determinista, consumo de memoria y telemetría térmica",
    "ru": "Детерминированная пропускная способность, потребление памяти и тепловая телеметрия",
    "ar": "الإنتاجية المحددة واستهلاك الذاكرة والقياس عن بعد الحراري",
    "hi": "नियतात्मक थ्रूपुट, मेमोरी खपत और थर्मल टेलीमेट्री",
    "pl": "Deterministyczna przepustowość, zużycie pamięci i telemetria termiczna",
    "la": "Capacitas deterministica, usus memoriae et telemetria thermalis",
    "en": "Deterministic throughput, memory consumption, and thermal telemetry"
  },
  "Advanced Parameter Control": {
    "ko": "고급 파라미터 제어",
    "ja": "高度なパラメータ制御",
    "zh": "高级参数与底层调优",
    "vi": "Kiểm soát tham số nâng cao",
    "fr": "Contrôle Avancé des Paramètres",
    "de": "Erweiterte Parametersteuerung",
    "es": "Control Avanzado de Parámetros",
    "ru": "Расширенное управление параметрами",
    "ar": "التحكم في المعلمات المتقدمة",
    "hi": "उन्नत पैरामीटर नियंत्रण",
    "pl": "Zaawansowana kontrola parametrów",
    "la": "Gubernatio Parametrorum Provectorum",
    "en": "Advanced Parameter Control"
  },
  "Low-level kernel configurations, buffer alignment, and scheduling flags": {
    "ko": "저수준 커널 설정, 버퍼 정렬 및 스레드 스케줄링 플래그",
    "ja": "低レベルカーネル設定、バッファアライメント、スケジューリングフラグ",
    "zh": "底层内核配置、缓冲区对齐及调度标志",
    "vi": "Cấu hình nhân cấp thấp, căn chỉnh bộ đệm và cờ lập lịch",
    "fr": "Configurations de noyau bas niveau, alignement de mémoire tampon et drapeaux d'ordonnancement",
    "de": "Low-Level-Kernelkonfigurationen, Pufferausrichtung und Planungs-Flags",
    "es": "Configuraciones de kernel de bajo nivel, alineación de búfer y banderas de programación",
    "ru": "Низкоуровневые конфигурации ядра, выравнивание буфера и флаги планирования",
    "ar": "تكوينات النواة منخفضة المستوى ومحاذاة المخزن المؤقت وأعلام الجدولة",
    "hi": "निम्न-स्तरीय कर्नेल कॉन्फ़िगरेशन, बफर संरेखण और शेड्यूलिंग फ़्लैग",
    "pl": "Niskopoziomowe konfiguracje jądra, wyrównanie bufora i flagi harmonogramowania",
    "la": "Configurationes nuclei infimi, conformatio bufferorum et signa scheduling",
    "en": "Low-level kernel configurations, buffer alignment, and scheduling flags"
  },
  "API Reference & Struct Definitions": {
    "ko": "전체 API 명세 & 구조체 정의",
    "ja": "APIリファレンスと構造体定義",
    "zh": "完整 API 规范与结构体定义",
    "vi": "Tham chiếu API & Định nghĩa cấu trúc",
    "fr": "Référence API & Définitions de Structures",
    "de": "API-Referenz & Strukturdefinitionen",
    "es": "Referencia de API y Definiciones de Estructuras",
    "ru": "Справочник API и определения структур",
    "ar": "مرجع API وتعاريف الهياكل",
    "hi": "API संदर्भ और संरचना परिभाषाएं",
    "pl": "Dokumentacja API i definicje struktur",
    "la": "Index API et Definitiones Structurarum",
    "en": "API Reference & Struct Definitions"
  },
  "Complete specification of exported classes, methods, signatures, and types": {
    "ko": "내보내기된 클래스, 메서드, 시그니처 및 타입의 완전한 명세",
    "ja": "エクスポートされたクラス、メソッド、シグネチャ、型の完全な仕様",
    "zh": "导出类、方法、函数签名与类型系统的完整规范",
    "vi": "Đặc tả đầy đủ về các lớp, phương thức, chữ ký và kiểu được xuất",
    "fr": "Spécification complète des classes, méthodes, signatures et types exportés",
    "de": "Vollständige Spezifikation der exportierten Klassen, Methoden, Signaturen und Typen",
    "es": "Especificación completa de clases, métodos, firmas y tipos exportados",
    "ru": "Полная спецификация экспортируемых классов, методов, сигнатур и типов",
    "ar": "مواصفات كاملة للفئات والأساليب والتوقيعات والأنواع المصدرة",
    "hi": "निर्यात की गई कक्षाओं, विधियों, हस्ताक्षरों और प्रकारों का पूरा विवरण",
    "pl": "Pełna specyfikacja wyeksportowanych klas, metod, sygnatur i typów",
    "la": "Specificatio completa classium, methodorum, signaturarum et typorum",
    "en": "Complete specification of exported classes, methods, signatures, and types"
  },
  "Version Release Archive": {
    "ko": "버전 릴리즈 아카이브",
    "ja": "バージョンリリースアーカイブ",
    "zh": "版本发布归档",
    "vi": "Kho lưu trữ phát hành phiên bản",
    "fr": "Archives des Versions Publiées",
    "de": "Versionsveröffentlichungsarchiv",
    "es": "Archivo de Publicación de Versiones",
    "ru": "Архив релизов версий",
    "ar": "أرشيف إصدارات النسخ",
    "hi": "संस्करण रिलीज़ पुरालेख",
    "pl": "Archiwum wydań wersji",
    "la": "Archivum Emissionum Versionum",
    "en": "Version Release Archive"
  },
  "Cryptographically validated release history, changelogs, and integrity hashes": {
    "ko": "암호학적으로 검증된 릴리즈 이력, 변경 로그 및 무결성 해시",
    "ja": "暗号学的に検証されたリリース履歴、変更ログ、整合性ハッシュ",
    "zh": "经过密码学验证的发布历史、更新日志与完整性哈希",
    "vi": "Lịch sử phát hành được xác thực bằng mật mã, nhật ký thay đổi và hàm băm tính toàn vẹn",
    "fr": "Historique des versions validé cryptographiquement, journaux des modifications et hachages d'intégrité",
    "de": "Kryptografisch validierte Versionshistorie, Änderungsprotokolle und Integritätshashes",
    "es": "Historial de versiones validado criptográficamente, registros de cambios y hashes de integridad",
    "ru": "Криптографически проверенная история выпусков, списки изменений и хеши целостности",
    "ar": "سجل الإصدارات الموثق مشفرًا وسجلات التغيير وتجزئة التكامل",
    "hi": "क्रिप्टोग्राफ़िक रूप से मान्य रिलीज़ इतिहास, परिवर्तन लॉग और अखंडता हैश",
    "pl": "Kryptograficznie zweryfikowana historia wydań, dzienniki zmian i skróty integralności",
    "la": "Historia emissionum cryptographice comprobata, indices mutationum et hashes integritatis",
    "en": "Cryptographically validated release history, changelogs, and integrity hashes"
  },
  "Recipe 1: Model Hub Download & CLI Inference": {
    "ko": "레시피 1: 모델 허브 다운로드 및 CLI 추론",
    "ja": "レシピ1：モデルハブのダウンロードとCLI推論",
    "zh": "范式 1：模型中心下载与 CLI 推理",
    "vi": "Công thức 1: Tải xuống trung tâm mô hình & Suy luận CLI",
    "fr": "Recette 1 : Téléchargement du Hub de Modèles & Inférence CLI",
    "de": "Rezept 1: Model Hub Download & CLI-Inferenz",
    "es": "Receta 1: Descarga de Model Hub e Inferencia CLI",
    "ru": "Рецепт 1: Загрузка из Model Hub и CLI-инференс",
    "ar": "الوصفة 1: تنزيل مركز النماذج واستنتاج CLI",
    "hi": "रेसिपी 1: मॉडल हब डाउनलोड और सीएलआई अनुमान",
    "pl": "Przepis 1: Pobieranie z Model Hub i wnioskowanie CLI",
    "la": "Formula 1: Depromptio Modelli et Inferenz CLI",
    "en": "Recipe 1: Model Hub Download & CLI Inference"
  },
  "Query verified 1.58-bit GGUF models, download with HTTP Range resume support, and execute instant inference:": {
    "ko": "검증된 1.58비트 GGUF 모델을 조회하고, HTTP Range 이어받기를 통해 다운로드하여 즉각적인 추론을 실행합니다:",
    "ja": "検証済みの1.58ビットGGUFモデルを照会し、HTTP Range再開機能でダウンロードして即座に推論を実行します：",
    "zh": "查询已验证的 1.58 位 GGUF 模型，基于 HTTP 断点续传极速下载并立即执行推理：",
    "vi": "Truy vấn các mô hình GGUF 1.58-bit đã được xác minh, tải xuống với hỗ trợ tiếp tục HTTP và thực thi suy luận ngay lập tức:",
    "fr": "Interrogez les modèles GGUF 1,58 bit vérifiés, téléchargez avec reprise HTTP et exécutez une inférence instantanée :",
    "de": "Fragen Sie verifizierte 1,58-Bit-GGUF-Modelle ab, laden Sie sie mit HTTP-Fortsetzung herunter und führen Sie Inferenz aus:",
    "es": "Consulte modelos GGUF de 1,58 bits verificados, descargue con reanudación HTTP y ejecute inferencia instantánea:",
    "ru": "Запрашивайте проверенные 1.58-битные модели GGUF, скачивайте с докачкой по HTTP и мгновенно выполняйте инференс:",
    "ar": "استعلم عن نماذج GGUF بدقة 1.58 بت، وقم بالتنزيل مع دعم استئناف HTTP، ونفذ الاستنتاج الفوري:",
    "hi": "सत्यापित 1.58-बिट GGUF मॉडल खोजें, HTTP रेंज फिर से शुरू करने के साथ डाउनलोड करें, और तुरंत अनुमान लगाएं:",
    "pl": "Wyszukuj zweryfikowane modele GGUF 1,58-bit, pobieraj ze wznawianiem HTTP i wykonuj natychmiastowe wnioskowanie:",
    "la": "Inquire modella GGUF 1.58-bit probata, deprome cum continuatione HTTP et inferentiam instantaneam fac:",
    "en": "Query verified 1.58-bit GGUF models, download with HTTP Range resume support, and execute instant inference:"
  },
  "Recipe 2: Python SDK Token Streaming": {
    "ko": "레시피 2: Python SDK 비동기 토큰 스트리밍",
    "ja": "レシピ2：Python SDKトークンストリーミング",
    "zh": "范式 2：Python SDK 异步 Token 流式生成",
    "vi": "Công thức 2: Truyền phát mã thông báo SDK Python",
    "fr": "Recette 2 : Streaming de Jetons Python SDK",
    "de": "Rezept 2: Python SDK Token-Streaming",
    "es": "Receta 2: Transmisión de Tokens de Python SDK",
    "ru": "Рецепт 2: Потоковая передача токенов в Python SDK",
    "ar": "الوصفة 2: تدفق الرموز عبر Python SDK",
    "hi": "रेसिपी 2: पायथन एसडीके टोकन स्ट्रीमिंग",
    "pl": "Przepis 2: Strumieniowanie tokenów w Python SDK",
    "la": "Formula 2: Python SDK Token Streaming",
    "en": "Recipe 2: Python SDK Token Streaming"
  },
  "Stream generated tokens asynchronously with context manager memory cleanup:": {
    "ko": "컨텍스트 매니저 메모리 자동 정리를 통해 생성된 토큰을 비동기식으로 스트리밍합니다:",
    "ja": "コンテキストマネージャーのメモリ自動クリーンアップを使用して、生成されたトークンを非同期にストリーミングします：",
    "zh": "借助上下文管理器自动清理内存，异步流式输出生成的 Token：",
    "vi": "Truyền phát các mã thông báo được tạo không đồng bộ với dọn dẹp bộ nhớ của trình quản lý ngữ cảnh:",
    "fr": "Diffusez les jetons générés de manière asynchrone avec nettoyage de la mémoire par le gestionnaire de contexte :",
    "de": "Streamen Sie generierte Tokens asynchron mit Speicherbereinigung durch den Kontextmanager:",
    "es": "Transmita tokens generados de forma asíncrona con limpieza de memoria del administrador de contexto:",
    "ru": "Асинхронно передавайте сгенерированные токены с очисткой памяти через контекстный менеджер:",
    "ar": "قم ببث الرموز التي تم إنشاؤها بشكل غير متزامن مع تنظيف ذاكرة مدير السياق:",
    "hi": "संदर्भ प्रबंधक मेमोरी सफाई के साथ एसिंक्रोनस रूप से उत्पन्न टोकन स्ट्रीम करें:",
    "pl": "Strumieniuj wygenerowane tokeny asynchronicznie z czyszczeniem pamięci przez menedżera kontekstu:",
    "la": "Effunde token generata asynchronice cum purgatione memoriae procuratoris contextus:",
    "en": "Stream generated tokens asynchronously with context manager memory cleanup:"
  },
  "Recipe 3: Advanced Pipeline Configuration": {
    "ko": "레시피 3: 고급 파이프라인 구성",
    "ja": "レシピ3：高度なパイプライン構成",
    "zh": "范式 3：高级流水线配置",
    "vi": "Công thức 3: Cấu hình đường ống nâng cao",
    "fr": "Recette 3 : Configuration Avancée du Pipeline",
    "de": "Rezept 3: Erweiterte Pipeline-Konfiguration",
    "es": "Receta 3: Configuración Avanzada de Tubería",
    "ru": "Рецепт 3: Расширенная настройка конвейера",
    "ar": "الوصفة 3: تكوين خط الأنابيب المتقدم",
    "hi": "रेसिपी 3: उन्नत पाइपलाइन कॉन्फ़िगरेशन",
    "pl": "Przepis 3: Zaawansowana konfiguracja potoku",
    "la": "Formula 3: Configuratio Canalis Provecta",
    "en": "Recipe 3: Advanced Pipeline Configuration"
  },
  "Recipe 4: Zero-Copy Memory Management": {
    "ko": "레시피 4: 제로 카피 메모리 관리",
    "ja": "レシピ4：ゼロコピーメモリ管理",
    "zh": "范式 4：零拷贝内存管理",
    "vi": "Công thức 4: Quản lý bộ nhớ không sao chép",
    "fr": "Recette 4 : Gestion de la Mémoire Zéro-Copie",
    "de": "Rezept 4: Zero-Copy-Speicherverwaltung",
    "es": "Receta 4: Gestión de Memoria de Copia Cero",
    "ru": "Рецепт 4: Управление памятью без копирования",
    "ar": "الوصفة 4: إدارة الذاكرة بدون نسخ",
    "hi": "रेसिपी 4: ज़ीरो-कॉपी मेमोरी प्रबंधन",
    "pl": "Przepis 4: Zarządzanie pamięcią bez kopiowania",
    "la": "Formula 4: Administratio Memoriae Sine Exemplari",
    "en": "Recipe 4: Zero-Copy Memory Management"
  },
  "Recipe 5: Production Batch Processing": {
    "ko": "레시피 5: 프로덕션 배치 처리",
    "ja": "レシピ5：本番バッチ処理",
    "zh": "范式 5：生产级批量处理",
    "vi": "Công thức 5: Xử lý hàng loạt sản xuất",
    "fr": "Recette 5 : Traitement par Lots de Production",
    "de": "Rezept 5: Produktions-Stapelverarbeitung",
    "es": "Receta 5: Procesamiento por Lotes de Producción",
    "ru": "Рецепт 5: Промышленная пакетная обработка",
    "ar": "الوصفة 5: معالجة الدفعات في الإنتاج",
    "hi": "रेसिपी 5: उत्पादन बैच प्रसंस्करण",
    "pl": "Przepis 5: Produkcyjne przetwarzanie wsadowe",
    "la": "Formula 5: Tractatio Fascium Productionis",
    "en": "Recipe 5: Production Batch Processing"
  },
  "1-Line Quick Installation": {
    "ko": "1줄 빠른 설치",
    "ja": "1行クイックインストール",
    "zh": "一行命令快速安装",
    "vi": "Cài đặt nhanh 1 dòng",
    "fr": "Installation Rapide en 1 Ligne",
    "de": "1-Zeilen-Schnellinstallation",
    "es": "Instalación Rápida en 1 Línea",
    "ru": "Быстрая установка в 1 строку",
    "ar": "تثبيت سريع بسطر واحد",
    "hi": "1-लाइन त्वरित स्थापना",
    "pl": "Szybka instalacja w 1 linijce",
    "la": "Institutio Celeris 1-Lineae",
    "en": "1-Line Quick Installation"
  },
  "1-LINE QUICK INSTALLATION": {
    "ko": "1줄 빠른 설치",
    "ja": "1行クイックインストール",
    "zh": "一行命令快速安装",
    "vi": "Cài đặt nhanh 1 dòng",
    "fr": "Installation Rapide en 1 Ligne",
    "de": "1-Zeilen-Schnellinstallation",
    "es": "Instalación Rápida en 1 Línea",
    "ru": "Быстрая установка в 1 строку",
    "ar": "تثبيت سريع بسطر واحد",
    "hi": "1-लाइन त्वरित स्थापना",
    "pl": "Szybka instalacja w 1 linijce",
    "la": "Institutio Celeris 1-Lineae",
    "en": "1-LINE QUICK INSTALLATION"
  },
  "Install the official package directly into your runtime:": {
    "ko": "공식 패키지를 런타임 환경에 직접 설치하십시오:",
    "ja": "公式パッケージを実行環境に直接インストールします：",
    "zh": "直接将官方包安装至您的运行环境：",
    "vi": "Cài đặt gói chính thức trực tiếp vào môi trường chạy của bạn:",
    "fr": "Installez le paquet officiel directement dans votre environnement d'exécution :",
    "de": "Installieren Sie das offizielle Paket direkt in Ihrer Laufzeitumgebung:",
    "es": "Instale el paquete oficial directamente en su entorno de ejecución:",
    "ru": "Установите официальный пакет напрямую в вашу среду выполнения:",
    "ar": "قم بتثبيت الحزمة الرسمية مباشرة في بيئة التشغيل الخاصة بك:",
    "hi": "आधिकारिक पैकेज सीधे अपने रनटाइम में स्थापित करें:",
    "pl": "Zainstaluj oficjalny pakiet bezpośrednio w środowisku uruchomieniowym:",
    "la": "Installa sarcinam officialem directe in ambitum tuum:",
    "en": "Install the official package directly into your runtime:"
  },
  "The Engineering Challenge": {
    "ko": "기술적 당면 과제",
    "ja": "エンジニアリング上の課題",
    "zh": "工程挑战与背景",
    "vi": "Thách thức kỹ thuật",
    "fr": "Le Défi d'Ingénierie",
    "de": "Die technische Herausforderung",
    "es": "El Desafío de Ingeniería",
    "ru": "Инженерная задача",
    "ar": "التحدي الهندسي",
    "hi": "इंजीनियरिंग चुनौती",
    "pl": "Wyzwanie inżynieryjne",
    "la": "Provocatio Ingeniaria",
    "en": "The Engineering Challenge"
  },
  "The Architectural Breakthrough": {
    "ko": "아키텍처 혁신 및 해결책",
    "ja": "アーキテクチャのブレークスルー",
    "zh": "架构突破与创新",
    "vi": "Đột phá kiến trúc",
    "fr": "La Percée Architecturale",
    "de": "Der architektonische Durchbruch",
    "es": "El Avance Arquitectónico",
    "ru": "Архитектурный прорыв",
    "ar": "الإنجاز المعماري",
    "hi": "वास्तुकला संबंधी सफलता",
    "pl": "Przełom architektoniczny",
    "la": "Progressus Architecturalis",
    "en": "The Architectural Breakthrough"
  },
  "Key Capabilities & Built-in Hardening": {
    "ko": "핵심 역량 및 빌트인 안정화 계층",
    "ja": "主要機能と組み込みの強化",
    "zh": "核心能力与内建安全加固",
    "vi": "Khả năng chính & Tăng cường tích hợp",
    "fr": "Capacités Clés & Renforcement Intégré",
    "de": "Hauptfunktionen & integrierte Härtung",
    "es": "Capacidades Clave y Fortalecimiento Integrado",
    "ru": "Ключевые возможности и встроенная защита",
    "ar": "القدرات الرئيسية والحماية المدمجة",
    "hi": "प्रमुख क्षमताएं और सुरक्षा",
    "pl": "Kluczowe możliwości i wbudowane zabezpieczenia",
    "la": "Capacitates Principales et Firmitas",
    "en": "Key Capabilities & Built-in Hardening"
  },
  "Supported Compute Kernels & Operations": {
    "ko": "지원 연산 커널 및 실행 백엔드",
    "ja": "サポートされている計算カーネルと操作",
    "zh": "支持的计算内核与算子矩阵",
    "vi": "Các hạt nhân tính toán & Hoạt động được hỗ trợ",
    "fr": "Noyaux de Calcul et Opérations Pris en Charge",
    "de": "Unterstützte Rechenkerne & Operationen",
    "es": "Núcleos de Cómputo y Operaciones Compatibles",
    "ru": "Поддерживаемые вычислительные ядра и операции",
    "ar": "نواة الحوسبة والعمليات المدعومة",
    "hi": "समर्थित कंप्यूट कर्नेल और संचालन",
    "pl": "Obsługiwane jądra obliczeniowe i operacje",
    "la": "Nuclei Computationis et Operationes Toleratae",
    "en": "Supported Compute Kernels & Operations"
  },
  "Subsystem Category": {
    "ko": "하위 시스템 분류",
    "ja": "サブシステムカテゴリ",
    "zh": "子系统分类",
    "vi": "Danh mục hệ thống phụ",
    "fr": "Catégorie de Sous-système",
    "de": "Subsystem-Kategorie",
    "es": "Categoría de Subsistema",
    "ru": "Категория подсистемы",
    "ar": "فئة النظام الفرعي",
    "hi": "सबसिस्टम श्रेणी",
    "pl": "Kategoria podsystemu",
    "la": "Classis Subsystematis",
    "en": "Subsystem Category"
  },
  "Operations & Kernels": {
    "ko": "연산 및 커널 명세",
    "ja": "操作およびカーネル仕様",
    "zh": "算子与计算内核",
    "vi": "Hoạt động & Hạt nhân",
    "fr": "Opérations & Noyaux",
    "de": "Operationen & Kernel",
    "es": "Operaciones y Núcleos",
    "ru": "Операции и ядра",
    "ar": "العمليات والنواة",
    "hi": "संचालन और कर्नेल",
    "pl": "Operacje i jądra",
    "la": "Operationes et Nuclei",
    "en": "Operations & Kernels"
  },
  "Status": {
    "ko": "상태",
    "ja": "ステータス",
    "zh": "状态",
    "vi": "Trạng thái",
    "fr": "Statut",
    "de": "Status",
    "es": "Estado",
    "ru": "Статус",
    "ar": "الحالة",
    "hi": "स्थिति",
    "pl": "Status",
    "la": "Status",
    "en": "Status"
  },
  "Production": {
    "ko": "프로덕션",
    "ja": "本番環境",
    "zh": "生产就绪",
    "vi": "Sản xuất",
    "fr": "Production",
    "de": "Produktion",
    "es": "Producción",
    "ru": "Продакшн",
    "ar": "إنتاج",
    "hi": "उत्पादन",
    "pl": "Produkcja",
    "la": "Productio",
    "en": "Production"
  },
  "Production Release (Latest)": {
    "ko": "프로덕션 최신 릴리즈",
    "ja": "最新の安定版リリース",
    "zh": "最新正式生产发布",
    "vi": "Bản phát hành sản xuất (Mới nhất)",
    "fr": "Version de Production (Dernière)",
    "de": "Produktionsversion (Neueste)",
    "es": "Lanzamiento de Producción (Último)",
    "ru": "Промышленный релиз (Последний)",
    "ar": "إصدار الإنتاج (الأحدث)",
    "hi": "उत्पादन रिलीज़ (नवीनतम)",
    "pl": "Wydanie produkcyjne (Najnowsze)",
    "la": "Emissio Productionis (Novissima)",
    "en": "Production Release (Latest)"
  },
  "Canonical Usage Example": {
    "ko": "표준 사용 예제",
    "ja": "標準的な使用例",
    "zh": "标准用法示例",
    "vi": "Ví dụ sử dụng chuẩn",
    "fr": "Exemple d'Utilisation Canonique",
    "de": "Kanonisches Verwendungsbeispiel",
    "es": "Ejemplo de Uso Canónico",
    "ru": "Канонический пример использования",
    "ar": "مثال الاستخدام القياسي",
    "hi": "मानक उपयोग उदाहरण",
    "pl": "Standardowy przykład użycia",
    "la": "Exemplum Usus Canonicum",
    "en": "Canonical Usage Example"
  },
  "Getting Started & Deep Guides": {
    "ko": "시작하기 및 심층 기술 가이드",
    "ja": "入門と詳細ガイド",
    "zh": "快速入门与深度技术指南",
    "vi": "Bắt đầu & Hướng dẫn chuyên sâu",
    "fr": "Pour Commencer & Guides Approfondis",
    "de": "Erste Schritte & Ausführliche Anleitungen",
    "es": "Primeros Pasos y Guías Detalladas",
    "ru": "Начало работы и подробные руководства",
    "ar": "البدء وأدلة متعمقة",
    "hi": "शुरुआत और गहन गाइड",
    "pl": "Pierwsze kroki i szczegółowe przewodniki",
    "la": "Initium et Duces Profundi",
    "en": "Getting Started & Deep Guides"
  },
  "Detailed Installation Guide (Hardware dependencies, Termux setup, WebGPU flags)": {
    "ko": "상세 설치 가이드 (하드웨어 의존성, Termux 설정, WebGPU 플래그)",
    "ja": "詳細インストールガイド（ハードウェア依存関係、Termux設定、WebGPUフラグ）",
    "zh": "详细安装指南（硬件依赖项、Termux 配置、WebGPU 标志）",
    "vi": "Hướng dẫn cài đặt chi tiết (phần phụ thuộc phần cứng, thiết lập Termux)",
    "fr": "Guide d'installation détaillé (dépendances matérielles, configuration Termux)",
    "de": "Detaillierte Installationsanleitung (Hardware-Abhängigkeiten, Termux-Setup)",
    "es": "Guía de instalación detallada (dependencias de hardware, configuración de Termux)",
    "ru": "Подробное руководство по установке (зависимости оборудования, настройка Termux)",
    "ar": "دليل التثبيت التفصيلي (تبعيات الأجهزة، إعداد Termux)",
    "hi": "विस्तृत स्थापना गाइड (हार्डवेयर निर्भरताएं, Termux सेटअप)",
    "pl": "Szczegółowa instrukcja instalacji (zależności sprzętowe, konfiguracja Termux)",
    "la": "Dux institutionis accuratus (dependentiae instrumentorum, Termux)",
    "en": "Detailed Installation Guide (Hardware dependencies, Termux setup, WebGPU flags)"
  },
  "Quickstart Recipes & Common Execution Patterns": {
    "ko": "퀵스타트 레시피 & 공통 실행 패턴",
    "ja": "クイックスタートレシピ＆一般的な実行パターン",
    "zh": "快速上手示例与常用执行范式",
    "vi": "Công thức bắt đầu nhanh & Các mẫu thực thi phổ biến",
    "fr": "Recettes de démarrage rapide & modèles d'exécution courants",
    "de": "Schnellstart-Rezepte & gängige Ausführungsmuster",
    "es": "Recetas de inicio rápido y patrones de ejecución comunes",
    "ru": "Рецепты быстрого старта и типовые шаблоны выполнения",
    "ar": "أمثلة البدء السريع وأنماط التنفيذ الشائعة",
    "hi": "त्वरित शुरुआत रेसिपी और सामान्य निष्पादन पैटर्न",
    "pl": "Przepisy szybkiego startu i typowe wzorce wykonawcze",
    "la": "Exempla initii celeris et formae communes",
    "en": "Quickstart Recipes & Common Execution Patterns"
  },
  "100% Full API Reference & Struct Definitions": {
    "ko": "100% 전체 API 명세 및 구조체 정의",
    "ja": "100%完全なAPIリファレンスと構造体定義",
    "zh": "100% 完整 API 接口与结构体规范",
    "vi": "Tài liệu tham khảo API đầy đủ 100% & Định nghĩa cấu trúc",
    "fr": "Référence API complète à 100% et définitions de structures",
    "de": "100% vollständige API-Referenz & Strukturdefinitionen",
    "es": "Referencia de API 100% completa y definiciones de estructuras",
    "ru": "100% полный справочник API и определения структур",
    "ar": "مرجع API كامل 100% وتعاريف الهياكل",
    "hi": "100% पूर्ण API संदर्भ और संरचना परिभाषाएं",
    "pl": "100% pełna dokumentacja API i definicje struktur",
    "la": "Index API 100% plenus et definitiones structurarum",
    "en": "100% Full API Reference & Struct Definitions"
  }
};

  class UniversalI18nEngine {
    constructor() {
      this.currentLang = this._detectLanguage();
      this.translations = typeof translations !== 'undefined' ? translations : {};
      this.initialized = false;
    }

    _detectLanguage() {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang && SUPPORTED_LANGUAGES[urlLang]) {
          this._saveLang(urlLang);
          return urlLang;
        }

        for (const key of STORAGE_KEYS) {
          const saved = localStorage.getItem(key);
          if (saved && SUPPORTED_LANGUAGES[saved]) return saved;
        }

        const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase().split('-')[0];
        if (SUPPORTED_LANGUAGES[browserLang]) return browserLang;
      } catch (e) {}
      return DEFAULT_LANG;
    }

    _saveLang(lang) {
      try {
        STORAGE_KEYS.forEach(key => localStorage.setItem(key, lang));
        document.cookie = `uno_km_lang=${lang};path=/;max-age=31536000;SameSite=Lax`;
      } catch (e) {}
    }

    init() {
      if (this.initialized) return;
      this.initialized = true;

      if (typeof document !== 'undefined') {
        this._freezeOriginalTemplates();
      }

      this._setupLanguageSelectors();
      this.applyLanguage(this.currentLang);

      try {
        window.addEventListener('storage', (e) => {
          if (STORAGE_KEYS.includes(e.key) && e.newValue && SUPPORTED_LANGUAGES[e.newValue]) {
            if (e.newValue !== this.currentLang) {
              this.setLanguage(e.newValue);
            }
          }
        });
      } catch (e) {}
    }

    _freezeOriginalTemplates() {
      const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, th, td, span, li, a, button, div.alert, [data-i18n]');
      elements.forEach(el => {
        if (el.querySelector('pre, code, input, select, textarea') || el.closest('pre, code, script, style')) {
          return;
        }
        const txt = el.textContent.trim();
        if (!el.dataset.i18nOrig && txt) {
          el.dataset.i18nOrig = txt;
        }
      });
    }

    setLanguage(lang) {
      if (!SUPPORTED_LANGUAGES[lang]) return;
      this.currentLang = lang;
      this._saveLang(lang);
      this.applyLanguage(lang);

      document.querySelectorAll('.lang-select').forEach(sel => {
        sel.value = lang;
      });

      document.documentElement.lang = lang;
      document.documentElement.dir = SUPPORTED_LANGUAGES[lang].dir || 'ltr';
    }

    _lookup(dict, keyPath) {
      if (!keyPath || !dict) return undefined;
      const parts = keyPath.split('.');
      let cur = dict;
      for (let i = 0; i < parts.length; i++) {
        if (cur === undefined || cur === null) return undefined;
        cur = cur[parts[i]];
      }
      return cur;
    }

    applyLanguage(lang) {
      const dict = this.translations[lang] || this.translations[DEFAULT_LANG] || {};

      const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, th, td, span, li, a, button, [data-i18n]');
      elements.forEach(el => {
        if (el.querySelector('pre, code, input, select, textarea') || el.closest('pre, code, script, style')) {
          return;
        }

        const origText = el.dataset.i18nOrig || el.textContent.trim();
        if (!el.dataset.i18nOrig && origText) {
          el.dataset.i18nOrig = origText;
        }

        // 1. Top Header Controls & Buttons Protection (MUST REMAIN CLEAN ENGLISH)
        if (el.closest('header .header-controls a') || (el.closest('header .header-brand') && el.tagName === 'H1')) {
          if (el.textContent.trim() !== origText) el.textContent = origText;
          return;
        }

        // 2. Sidebar Flagship Libraries & AI Protocols Protection (MUST REMAIN IN ENGLISH)
        const parentLi = el.closest('nav.sidebar ul li');
        if (parentLi) {
          const isFlagship = el.closest('nav.sidebar')?.querySelector('h3[data-i18n="common.nav.libraries"]')?.nextElementSibling?.contains(el);
          const isAi = el.closest('nav.sidebar')?.querySelector('h3[data-i18n="common.nav.aiSpecs"]')?.nextElementSibling?.contains(el);
          if (isFlagship || isAi) {
            if (el.textContent.trim() !== origText) el.textContent = origText;
            return;
          }
        }

        // 3. Protected Exact Phrases
        if (PROTECTED_PHRASES.has(origText)) {
          if (el.textContent.trim() !== origText) el.textContent = origText;
          return;
        }

        // 4. Exact PHRASES_DB Translation Lookup
        if (PHRASES_DB[origText]) {
          const entry = PHRASES_DB[origText];
          const trans = (lang === 'en') ? origText : (entry[lang] || entry['en'] || origText);
          if (trans && el.textContent.trim() !== trans) {
            el.textContent = trans;
          }
          return;
        }

        // 5. [data-i18n] Attribute Lookup
        const i18nKey = el.getAttribute('data-i18n');
        if (i18nKey) {
          const val = this._lookup(dict, i18nKey);
          if (val !== undefined && val !== null && typeof val === 'string') {
            el.textContent = val;
            return;
          }
        }

        // 6. English Default Fallback
        if (lang === 'en' && origText && el.textContent.trim() !== origText) {
          el.textContent = origText;
        }
      });

      document.querySelectorAll('.lang-select').forEach(sel => {
        sel.value = lang;
      });
    }

    _setupLanguageSelectors() {
      const optionsHtml = Object.values(SUPPORTED_LANGUAGES).map(l => 
        `<option value="${l.code}">${l.flag} ${l.native}</option>`
      ).join('');

      if (typeof document !== 'undefined') {
        document.querySelectorAll('.lang-selector-wrapper').forEach(wrap => {
          if (!wrap.querySelector('.lang-select')) {
            const sel = document.createElement('select');
            sel.className = 'lang-select';
            sel.setAttribute('aria-label', 'Language Selector');
            sel.innerHTML = optionsHtml;
            wrap.appendChild(sel);
          }
        });

        const existingSelects = document.querySelectorAll('.lang-select');
        if (existingSelects.length === 0) {
          const controls = document.querySelector('header .header-controls');
          if (controls) {
            const wrap = document.createElement('div');
            wrap.className = 'lang-selector-wrapper';
            const sel = document.createElement('select');
            sel.className = 'lang-select';
            sel.setAttribute('aria-label', 'Language Selector');
            sel.innerHTML = optionsHtml;
            wrap.appendChild(sel);
            controls.insertBefore(wrap, controls.firstChild);
          }
        }

        document.querySelectorAll('.lang-select').forEach(sel => {
          if (!sel.children.length || sel.children.length < 10) {
            sel.innerHTML = optionsHtml;
          }
          sel.value = this.currentLang;
          sel.onchange = (e) => this.setLanguage(e.target.value);
        });
      }
    }
  }

  const i18n = new UniversalI18nEngine();
  global.i18n = i18n;

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => i18n.init());
    } else {
      i18n.init();
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { UniversalI18nEngine, i18n, SUPPORTED_LANGUAGES, PHRASES_DB };
  }

})(typeof window !== 'undefined' ? window : global);
