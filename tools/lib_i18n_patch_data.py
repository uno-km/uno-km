# tools/lib_i18n_patch_data.py
"""
Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
SPDX-License-Identifier: Apache-2.0 OR Commercial-License

Multilingual translation patches for all 15 libraries across English,
Korean, Japanese, Hindi, Chinese, and ecosystem target languages.
Strictly eliminates all English fallback leaks.
"""

VULKAN_PATCH = {
    "subtitles": {
        "hi": "मोबाइल एंड्रॉइड के लिए एकीकृत क्रॉस-मॉडल वल्कान (Vulkan) जीपीयू त्वरण रनटाइम और हार्डवेयर एब्स्ट्रैक्शन लेयर (HAL)",
        "zh": "适用于移动端 Android 的统一跨模态 Vulkan GPU 硬件加速运行时与硬件抽象层 (HAL)"
    },
    "challenge": {
        "hi": "मोबाइल एंड्रॉइड पर मल्टी-मॉडल एआई चलाने में खंडित जीपीयू ड्राइवर, बायोनिक (Bionic) और मेसा (Mesa) के बीच लोडर क्रैश, टेंसर अलाइनमेंट बफर ओवरफ्लो और अनावश्यक बाइनरी ब्लोट जैसी गंभीर समस्याएं आती हैं।",
        "zh": "在移动端 Android 上运行多模态 AI 面临碎片化的 GPU 驱动、Bionic 与 Mesa 之间的加载器崩溃以及张量对齐缓冲区溢出问题。"
    },
    "breakthrough": {
        "hi": "एसटीटी (STT), विज़न, एलएलएम, डिफ्यूज़न और ट्रेनिंग के लिए सिंगल, ज़ीरो-हार्डकोडेड C++20 वल्कान एचएएल और सार्वभौमिक रनटाइम प्रदान करता है, जिसमें 12-चरणीय सत्यापन पदानुक्रम (V0-V11) और डेटा-हानि रहित ऑटो-रिकवरी शामिल है।",
        "zh": "提供单一、零硬编码的 C++20 Vulkan 硬件抽象层 (HAL) 与通用运行时，支持 STT、视觉、大模型、扩散模型与端侧训练，具备 12 级精准验证阶梯 (V0-V11) 与零数据丢失自动恢复机制。"
    },
    "features": [
        {
            "title": {"hi": "सिंगल लोडर चेन पिनिंग", "zh": "单一加载器链锁定"},
            "desc": {"hi": "डायनामिक dladdr उद्गम सत्यापन और sys_gpdf2 आइसोलेशन के माध्यम से टर्मक्स मेसा और एंड्रॉइड बायोनिक प्रतीकों के टकराव को समाप्त करता है।", "zh": "通过动态 dladdr 溯源验证与 sys_gpdf2 隔离，彻底消除 Termux Mesa 与 Android Bionic 之间的符号冲突。"}
        },
        {
            "title": {"hi": "12-चरणीय हार्डवेयर प्रोबिंग और फॉलबैक", "zh": "12 级硬件探测与自适应回退"},
            "desc": {"hi": "dlopen (V0) से एंड-टू-एंड मॉडल इनफेरेंस (V11) तक जीपीयू क्षमता का सत्यापन करता है और पारदर्शी सीपीयू नियॉन (NEON) रिकवरी प्रदान करता है।", "zh": "从 dlopen (V0) 到端到端模型推理 (V11) 逐级验证 GPU 算力，并提供透明的 CPU NEON 恢复能力。"}
        },
        {
            "title": {"hi": "मल्टी-मॉडल क्रॉस-त्वरण", "zh": "多模态跨架构一体化加速"},
            "desc": {"hi": "एकल 58MB साझा कोर से व्हिस्पर एसटीटी, लाभा (LLaVA) विज़न, लामा/बिटनेट एलएलएम और स्टेबल डिफ्यूज़न को एकीकृत रूप से त्वरित करता है।", "zh": "通过单一 58MB 共享内核，统一加速 Whisper 语音识别、LLaVA 视觉、LLaMA/BitNet 大模型及 Stable Diffusion。"}
        }
    ]
}

TRAIN_PATCH = {
    "subtitles": {
        "ja": "Android向け軽量オンデバイステンソル＆DAGオートグラード深層学習フレームワーク",
        "hi": "एंड्रॉइड के लिए लाइटवेट ऑन-डिवाइस टेंसर और डीएजी (DAG) ऑटोगाड डीप लर्निंग फ्रेमवर्क",
        "zh": "适用于 Android 的轻量级端侧张量与 DAG 自动微分深度学习框架"
    },
    "challenge": {
        "ja": "標準的な深層学習フレームワークはAndroid Bionic上で正常にコンパイルできず、逆伝播時にスマートフォンのRAM容量を超過します。",
        "hi": "मानक डीप लर्निंग फ्रेमवर्क एंड्रॉइड बायोनिक पर ठीक से संकलित नहीं होते और बैकप्रॉपैगैशन के दौरान स्मार्टफोन रैम की सीमा को पार कर जाते हैं।",
        "zh": "传统的深度学习框架无法在 Android Bionic 上顺利编译，且在反向传播计算时容易超出手机内存限制。"
    },
    "breakthrough": {
        "ja": "SafeTensorsゼロコピーシリアライゼーションとスマートフォンCPU上でのLoRAアダプタ微調整を備えた、クリーンなCベースDAG計算グラフを提供します。",
        "hi": "स्मार्टफोन सीपीयू पर सेफटेंसर्स (SafeTensors) ज़ीरो-कॉपी सीरियलाइज़ेशन और लोरा (LoRA) एडॉप्टर फाइन-ट्यूनिंग के साथ शुद्ध C-आधारित डीएजी गणना ग्राफ प्रदान करता है।",
        "zh": "提供纯 C 构建的轻量 DAG 计算图，支持 SafeTensors 零拷贝序列化以及在手机 CPU 上直接微调 LoRA 适配器。"
    },
    "features": [
        {
            "title": {"ja": "オンデバイスLoRA学習", "hi": "ऑन-डिवाइस लोरा प्रशिक्षण", "zh": "端侧 LoRA 模型训练"},
            "desc": {"ja": "PCやクラウドに頼ることなく、モバイル端末単独でモデルのファインチューニングを完結実行します。", "hi": "पीसी या क्लाउड पर निर्भर हुए बिना मोबाइल डिवाइस पर स्वतंत्र रूप से मॉडल फाइन-ट्यूनिंग निष्पादित करता है।", "zh": "无需依赖 PC 或云端集群，在移动终端上独立完成轻量级模型微调。"}
        },
        {
            "title": {"ja": "メモリ節約型オプティマイザ", "hi": "मेमोरी-कुशल ऑप्टिमाइज़र", "zh": "省内存低开销优化器"},
            "desc": {"ja": "標準的なAdamWと比較してメモリ使用量を75%削減する省メモリ型整数オプティマイザを搭載。", "hi": "मानक AdamW की तुलना में मेमोरी खपत को 75% कम करने वाले कुशल पूर्णांक ऑप्टिमाइज़र से सुसज्जित।", "zh": "搭载低开销整数优化器，相比标准 AdamW 可降低高达 75% 的内存占用。"}
        },
        {
            "title": {"ja": "チェックポイント自動復旧", "hi": "चेकपॉइंट स्वचालित पुनर्प्राप्ति", "zh": "检查点状态自动恢复"},
            "desc": {"ja": "学習中のバッテリー低下や中断時でも、最後の保存状態から安全かつ確実に再開します。", "hi": "प्रशिक्षण के दौरान बैटरी खत्म होने या रुकावट पर अंतिम सहेजी गई स्थिति से सुरक्षित रूप से पुनः आरंभ होता है।", "zh": "训练过程中如遇断电或中断，可从最近的检查点安全无缝恢复训练。"}
        }
    ]
}

FORGE_PATCH = {
    "subtitles": {
        "ja": "PyTorch互換構文を備えたブラウザネイティブWebGPU深層学習テンソル＆オートグラードエンジン",
        "hi": "पायटॉर्च सिंटैक्स के साथ ब्राउज़र-मूल वेबजीपीयू (WebGPU) डीप लर्निंग टेंसर और ऑटोगाड इंजन",
        "zh": "具备 PyTorch 风格语法的浏览器原生 WebGPU 深度学习张量与自动求导引擎"
    },
    "challenge": {
        "ja": "ユーザー規模の拡大に伴いサーバー側GPU推論コストが爆発的に増大する一方、ユーザーのブラウザGPUは完全にアイドル状態のままです。",
        "hi": "उपयोगकर्ता संख्या बढ़ने पर सर्वर-साइड जीपीयू इनफेरेंसिंग लागत अत्यधिक बढ़ जाती है, जबकि उपयोगकर्ता ब्राउज़र जीपीयू निष्क्रिय रहते हैं।",
        "zh": "随着用户规模增长，服务端 GPU 推理成本急剧飙升，而用户客户端浏览器的 GPU 算力却处于闲置状态。"
    },
    "breakthrough": {
        "ja": "オートグラード計算グラフをWGSL WebGPUシェーダーに直接コンパイルし、サーバー通信ゼロでクライアントGPU上で完結実行します。",
        "hi": "ऑटोग्रेड ग्राफ़ को सीधे WGSL वेबजीपीयू शेडर्स में संकलित करता है, जो बिना किसी सर्वर लागत के क्लाइंट जीपीयू पर निष्पादित होता है।",
        "zh": "将自动求导计算图直接编译为 WGSL WebGPU 着色器内核，100% 在客户端本地 GPU 运行，零服务端调用成本。"
    },
    "features": [
        {
            "title": {"ja": "動的オートグラードエンジン", "hi": "गतिशील ऑटोग्रेड इंजन", "zh": "动态自动求导引擎"},
            "desc": {"ja": "PyTorchスタイルの直感的なテープベース逆伝播計算をブラウザ内で実現。", "hi": "ब्राउज़र के भीतर पायटॉर्च शैली की सहज टेप-आधारित बैकप्रॉपैगैशन गणना प्रदान करता है।", "zh": "在浏览器内实现类似 PyTorch 风格的动态磁带反向传播求导机制。"}
        },
        {
            "title": {"ja": "最適化WebGPUシェーダー", "hi": "अनुकूलित वेबजीपीयू शेडर्स", "zh": "优化版 WebGPU 着色器内核"},
            "desc": {"ja": "高度に最適化されたWGSL行列積および畳み込み演算によるネイティブ級の実行速度。", "hi": "अत्यधिक अनुकूलित WGSL मैट्रिक्स गुणन और कनवल्शन संचालन के माध्यम से नेटिव-स्तरीय गति।", "zh": "通过高度优化的 WGSL 矩阵乘法与卷积算子内核实现接近原生的执行速度。"}
        },
        {
            "title": {"ja": "完全ゼロインストール実行", "hi": "शून्य-स्थापना त्वरित निष्पादन", "zh": "零安装跨平台即开即用"},
            "desc": {"ja": "追加ツールのインストール不要で、標準的な最新Webブラウザ上で即座に実行可能。", "hi": "बिना किसी अतिरिक्त टूल की स्थापना के आधुनिक वेब ब्राउज़र पर तुरंत निष्पादित करने योग्य।", "zh": "无需安装任何额外运行时，在现代标准主流网页浏览器中即可立即运行。"}
        }
    ]
}

SENTINEL_PATCH = {
    "subtitles": {
        "ja": "プライバシー最優先ゼロデータ収集ブラウザ可観測性＆決定論的0〜100脅威スコアリングSDK",
        "hi": "प्राइवेसी-फर्स्ट ज़ीरो-डेटा ब्राउज़र अवलोकनीयता और नियतात्मक 0~100 थ्रेट स्कोरिंग एसडीके",
        "zh": "隐私优先零数据收集的浏览器可观测性与确定性 0~100 威胁评分 SDK"
    },
    "challenge": {
        "ja": "従来のボット検出SDKは、機密性の高いキーストロークやマウス軌跡を収集することでユーザーのプライバシーを侵害します。",
        "hi": "पारंपरिक बॉट डिटेक्शन एसडीके संवेदनशील कीस्ट्रोक्स और माउस गति को कैप्चर करके उपयोगकर्ता गोपनीयता से समझौता करते हैं।",
        "zh": "传统的防脚本与机器人检测 SDK 往往需要收集用户敏感的击键记录和鼠标轨迹，侵犯用户隐私。"
    },
    "breakthrough": {
        "ja": "ユーザー入力を収集することなくクライアントの構造的シグナルのみをローカルで評価し、決定論的な0〜100のリスクスコアとHMAC-SHA256トークンを算出します。",
        "hi": "उपयोगकर्ता इनपुट कैप्चर किए बिना क्लाइंट संरचनात्मक संकेतों का स्थानीय मूल्यांकन करता है और नियतात्मक 0~100 जोखिम स्कोर और HMAC-SHA256 टोकन उत्पन्न करता है।",
        "zh": "无需捕获用户输入即可完全在本地评估客户端结构特征信号，计算确定性 0~100 风险评分与 HMAC-SHA256 签名凭证。"
    },
    "features": [
        {
            "title": {"ja": "マークルツリー完全性検証", "hi": "मर्कल ट्री अखंडता सत्यापन", "zh": "默克尔树完整性校验"},
            "desc": {"ja": "レイヤー単位の詳細な暗号学的ハッシュ検証により、クライアント改ざんを検知。", "hi": "मॉडल परत स्तर पर विस्तृत क्रिप्टोग्राफ़िक हैश सत्यापन के माध्यम से छेड़छाड़ का पता लगाता है।", "zh": "在模型分层粒度上进行密码学哈希校验，防止客户端运行时篡改。"}
        },
        {
            "title": {"ja": "ランタイム改ざん防止", "hi": "रनटाइम छेड़छाड़ सुरक्षा", "zh": "运行时防篡改加固"},
            "desc": {"ja": "実行中プロセスのメモリ整合性をリアルタイムで監視し、不正なインジェクションを遮断。", "hi": "निष्पादन प्रक्रिया की मेमोरी अखंडता की वास्तविक समय में निगरानी करके अनधिकृत इंजेक्शन को रोकता है।", "zh": "实时监控运行中进程的内存完整性，主动拦截未授权的代码注入。"}
        },
        {
            "title": {"ja": "ゼロデータ流出テレメトリ", "hi": "शून्य-डेटा बहिर्वाह टेलीमेट्री", "zh": "零数据外泄安全遥测"},
            "desc": {"ja": "異常検知時にもユーザーの個人データを収集せず、構造的インジケータのみを報告。", "hi": "विसंगति का पता चलने पर भी उपयोगकर्ता का व्यक्तिगत डेटा एकत्र किए बिना केवल संरचनात्मक संकेत रिपोर्ट करता है।", "zh": "发生异常时绝不收集用户个人隐私数据，仅报告纯结构化安全指标。"}
        }
    ]
}

MCP_PATCH = {
    "subtitles": {
        "ja": "インストール不要ユニバーサル多言語WASM＆マルチリポモデルコンテキストプロトコルハブ",
        "hi": "ज़ीरो-इंस्टॉल सार्वभौमिक पॉलीग्लॉट वास्म (WASM) और मल्टी-रेपो मॉडल कॉन्टेक्स्ट प्रोटोकॉल हब",
        "zh": "免安装通用多语言 WASM 运行时与多仓库模型上下文协议 (MCP) 枢纽"
    },
    "challenge": {
        "ja": "従来のMCPサーバーのセットアップでは、ホストマシン上の各リポジトリごとに数ギガバイトに及ぶ言語ツールチェーンのインストールが必要です。",
        "hi": "पारंपरिक एमसीपी सर्वर स्थापित करने के लिए होस्ट मशीन पर प्रत्येक रिपॉजिटरी के लिए गीगाबाइट आकार के लैंग्वेज टूलचेन स्थापित करने की आवश्यकता होती है।",
        "zh": "搭建传统 MCP 服务的过程中，需要在宿主机上为各个仓库安装数 GB 的异构语言工具链环境。"
    },
    "breakthrough": {
        "ja": "単一のNodeプロセス内でWASI WebAssemblyバイトコードをインメモリ実行（1ms未満）し、GitHubマルチリポツールをリアルタイムに同期します。",
        "hi": "लाइव गिटहब मल्टी-रेपो टूल सिंक्रोनाइज़ेशन के साथ एकल नोड प्रक्रिया के भीतर इन-मेमोरी WASI वेबअसेम्बली बाइटकोड (<1ms) निष्पादित करता है।",
        "zh": "在单一 Node 进程中以内存方式直接运行 WASI WebAssembly 字节码（<1ms），并实现 GitHub 多仓库工具动态同步。"
    },
    "features": [
        {
            "title": {"ja": "WASMサンドボックス隔離", "hi": "वास्म सैंडबॉक्स आइसोलेशन", "zh": "WASM 沙箱安全隔离"},
            "desc": {"ja": "安全に隔離されたランタイム環境でRust、C++、Go、Python等のプラグインを実行。", "hi": "सुरक्षित रूप से अलग किए गए रनटाइम में रस्ट, C++, गो और पायथन प्लगइन्स निष्पादित करता है।", "zh": "在安全隔离的沙箱运行时中直接运行基于 Rust、C++、Go 或 Python 开发的扩展工具。"}
        },
        {
            "title": {"ja": "標準MCPインターフェース", "hi": "मानक एमसीपी इंटरफ़ेस", "zh": "标准 MCP 统一接口"},
            "desc": {"ja": "Claudeおよび主要なAIクライアントツールと100%シームレスに相互運用可能。", "hi": "क्लॉड और विभिन्न एआई क्लाइंट टूल के साथ पूरी तरह से संगत और निर्बाध रूप से इंटरऑपरेबल।", "zh": "与 Claude 及各类业界主流 AI 客户端工具链实现完全兼容与无缝对接。"}
        },
        {
            "title": {"ja": "動的ホットプラグローディング", "hi": "गतिशील हॉट-प्लग लोडिंग", "zh": "动态热插拔插件加载"},
            "desc": {"ja": "サーバーの再起動を必要とせず、実行中にリアルタイムでツールを登録・解除可能。", "hi": "सर्वर पुनरारंभ की आवश्यकता के बिना वास्तविक समय में टूल जोड़ने या हटाने की अनुमति देता है।", "zh": "无需重启服务，在运行时即可实时注册、更新或注销第三方工具扩展。"}
        }
    ]
}

AICHAIN_PATCH = {
    "subtitles": {
        "ja": "Android Termux向け超軽量ゼロ依存AIチェイニング＆自律エージェントフレームワーク",
        "hi": "एंड्रॉइड टर्मक्स के लिए अल्ट्रा-लाइटवेट ज़ीरो-डिपेंडेंसी एआई चेनिंग और स्वायत्त एजेंट फ्रेमवर्क",
        "zh": "面向 Android Termux 的超轻量零依赖 AI 链式调用与自主代理框架"
    },
    "challenge": {
        "ja": "重厚なエージェントフレームワーク（LangChain、LlamaIndexなど）は数百もの依存関係を要求し、モバイルTermux上でパッケージ衝突やOOMクラッシュを引き起こします。",
        "hi": "भारी एजेंट फ्रेम워크 (जैसे LangChain, LlamaIndex) सैकड़ों फूली हुई निर्भरताओं की मांग करते हैं, जिससे मोबाइल टर्मक्स पर पैकेज टकराव और OOM क्रैश होते हैं।",
        "zh": "厚重的代理框架（如 LangChain、LlamaIndex）包含数百个冗余依赖包，在移动端 Termux 上极易导致依赖冲突和内存崩溃。"
    },
    "breakthrough": {
        "ja": "50KB未満の極小フットプリントで、完全ゼロ依存のDAG実行、構造化プロンプトチェーン、および決定論的ツールディスパッチを提供します。",
        "hi": "50KB से कम के आकार में शुद्ध शून्य-निर्भरता डीएजी निष्पादन, संरचित प्रॉम्प्ट चेन और नियतात्मक टूल डिस्पैचिंग प्रदान करता है।",
        "zh": "以小于 50KB 的极小体积提供纯零外部依赖的 DAG 执行流、结构化提示词链与确定性工具调度。"
    },
    "features": [
        {
            "title": {"ja": "ゼロ外部依存性", "hi": "शून्य बाहरी निर्भरताएं", "zh": "纯原生零外部依赖"},
            "desc": {"ja": "追加パッケージのインストール不要で、標準Python環境のみで即座に動作。", "hi": "अतिरिक्त पैकेज स्थापना के बिना केवल मानक पायथन वातावरण में तुरंत निष्पादित करने योग्य।", "zh": "无需安装任何第三方额外模块，纯原生标准库环境即可即刻启动运行。"}
        },
        {
            "title": {"ja": "ReAct自律エージェントループ", "hi": "ReAct स्वायत्त एजेंट लूप", "zh": "ReAct 自主代理思考循环"},
            "desc": {"ja": "思考(Thought)、行動(Action)、観察(Observation)から成る軽量自律ループを実装。", "hi": "विचार (Thought), कार्य (Action) और अवलोकन (Observation) से निर्मित कुशल स्वायत्त लूप।", "zh": "内置思考 (Thought)、行动 (Action)、观察 (Observation) 的高效轻量自主决策闭环。"}
        },
        {
            "title": {"ja": "構造化ツール呼び出し", "hi": "संरचित टूल कॉलिंग", "zh": "结构化安全工具调用"},
            "desc": {"ja": "JSONスキーマに基づく厳格な型検証と安全なツール実行制御を完備。", "hi": "JSON स्कीमा पर आधारित सख्त प्रकार सत्यापन और सुरक्षित टूल निष्पादन नियंत्रण प्रदान करता है।", "zh": "基于标准 JSON Schema 进行严格的参数类型校验与默认拒绝的安全工具调用防护。"}
        }
    ]
}

SUBTITLES_PATCH = {
    "bitnet": {
        "en": "Sovereign 1.58-Bit On-Device LLM Inference Engine with ARM64 NEON DotProd SIMD & Native Vulkan GPU Acceleration",
        "ko": "ARM64 NEON DotProd SIMD 및 네이티브 Vulkan GPU 가속을 탑재한 소버린 1.58비트 온디바이스 LLM 추론 엔진",
        "ja": "ARM64 NEON DotProd SIMDおよびネイティブVulkan GPU高速化を備えたソブリン1.58ビットオンデバイスLLM推論エンジン",
        "hi": "ARM64 NEON DotProd SIMD और मूल Vulkan GPU त्वरण के साथ सॉवरेन 1.58-बिट ऑन-डिवाइस LLM इनफेरेंस इंजन",
        "zh": "搭载 ARM64 NEON DotProd SIMD 与原生 Vulkan GPU 加速的端侧 1.58-Bit 大模型推理引擎",
        "ar": "Sovereign 1.58-Bit On-Device LLM Inference Engine with ARM64 NEON DotProd SIMD & Native Vulkan GPU Acceleration",
        "fr": "Sovereign 1.58-Bit On-Device LLM Inference Engine with ARM64 NEON DotProd SIMD & Native Vulkan GPU Acceleration",
        "de": "Sovereign 1.58-Bit On-Device LLM Inference Engine with ARM64 NEON DotProd SIMD & Native Vulkan GPU Acceleration",
        "es": "Sovereign 1.58-Bit On-Device LLM Inference Engine with ARM64 NEON DotProd SIMD & Native Vulkan GPU Acceleration",
        "ru": "Sovereign 1.58-Bit On-Device LLM Inference Engine with ARM64 NEON DotProd SIMD & Native Vulkan GPU Acceleration",
        "vi": "Sovereign 1.58-Bit On-Device LLM Inference Engine with ARM64 NEON DotProd SIMD & Native Vulkan GPU Acceleration",
        "pl": "Sovereign 1.58-Bit On-Device LLM Inference Engine with ARM64 NEON DotProd SIMD & Native Vulkan GPU Acceleration",
        "la": "Sovereign 1.58-Bit On-Device LLM Inference Engine with ARM64 NEON DotProd SIMD & Native Vulkan GPU Acceleration"
    },
    "diffusion": {
        "en": "Official Z-Image Turbo (6.0B DiT) & Pure Native On-Device Diffusion Acceleration Runtime",
        "ko": "공식 Z-Image Turbo (6.0B DiT) 및 순수 네이티브 온디바이스 Diffusion 가속 런타임",
        "ja": "公式Z-Image Turbo（6.0B DiT）および完全ネイティブオンデバイスDiffusion高速化ランタイム",
        "hi": "आधिकारिक Z-Image Turbo (6.0B DiT) और शुद्ध मूल ऑन-डिवाइस डिफ्यूज़न त्वरण रनटाइम",
        "zh": "官方 Z-Image Turbo (6.0B DiT) 与纯原生端侧扩散模型硬件加速运行时",
        "ar": "Official Z-Image Turbo (6.0B DiT) & Pure Native On-Device Diffusion Acceleration Runtime",
        "fr": "Official Z-Image Turbo (6.0B DiT) & Pure Native On-Device Diffusion Acceleration Runtime",
        "de": "Official Z-Image Turbo (6.0B DiT) & Pure Native On-Device Diffusion Acceleration Runtime",
        "es": "Official Z-Image Turbo (6.0B DiT) & Pure Native On-Device Diffusion Acceleration Runtime",
        "ru": "Official Z-Image Turbo (6.0B DiT) & Pure Native On-Device Diffusion Acceleration Runtime",
        "vi": "Official Z-Image Turbo (6.0B DiT) & Pure Native On-Device Diffusion Acceleration Runtime",
        "pl": "Official Z-Image Turbo (6.0B DiT) & Pure Native On-Device Diffusion Acceleration Runtime",
        "la": "Official Z-Image Turbo (6.0B DiT) & Pure Native On-Device Diffusion Acceleration Runtime"
    },
    "playwright": {
        "en": "Rootless Android Native Headless Browser Automation & Stealth Web Scraping Engine",
        "ko": "루팅 없는 안드로이드 네이티브 헤드리스 브라우저 자동화 및 스텔스 웹 스크래핑 엔진",
        "ja": "非ルート環境Androidネイティブヘッドレスブラウザ自動化＆ステルスWebスクレイピングエンジン",
        "hi": "रूटलेस एंड्रॉइड नेटिव हेडलेस ब्राउज़र ऑटोमेशन और स्टेल्थ वेब स्क्रैपिंग इंजन",
        "zh": "免 Root 环境 Android 原生无头浏览器自动化与高隐匿性网页采集引擎",
        "ar": "Rootless Android Native Headless Browser Automation & Stealth Web Scraping Engine",
        "fr": "Rootless Android Native Headless Browser Automation & Stealth Web Scraping Engine",
        "de": "Rootless Android Native Headless Browser Automation & Stealth Web Scraping Engine",
        "es": "Rootless Android Native Headless Browser Automation & Stealth Web Scraping Engine",
        "ru": "Rootless Android Native Headless Browser Automation & Stealth Web Scraping Engine",
        "vi": "Rootless Android Native Headless Browser Automation & Stealth Web Scraping Engine",
        "pl": "Rootless Android Native Headless Browser Automation & Stealth Web Scraping Engine",
        "la": "Rootless Android Native Headless Browser Automation & Stealth Web Scraping Engine"
    },
    "stt": {
        "en": "Unified On-Device Speech-to-Text & Neural Multi-Speaker Diarization Engine",
        "ko": "통합 온디바이스 음성 인식(STT) 및 신경망 다중 화자 분리(Diarization) 엔진",
        "ja": "統合オンデバイス音声認識（STT）＆ニューラルマルチ話者ダイアライゼーションエンジン",
        "hi": "एकीकृत ऑन-डिवाइस स्पीच-टू-टेक्स्ट और न्यूरल मल्टी-स्पीकर डायराइजेशन इंजन",
        "zh": "统一端侧离线语音识别 (STT) 与神经网络多说话人分离引擎",
        "ar": "Unified On-Device Speech-to-Text & Neural Multi-Speaker Diarization Engine",
        "fr": "Unified On-Device Speech-to-Text & Neural Multi-Speaker Diarization Engine",
        "de": "Unified On-Device Speech-to-Text & Neural Multi-Speaker Diarization Engine",
        "es": "Unified On-Device Speech-to-Text & Neural Multi-Speaker Diarization Engine",
        "ru": "Unified On-Device Speech-to-Text & Neural Multi-Speaker Diarization Engine",
        "vi": "Unified On-Device Speech-to-Text & Neural Multi-Speaker Diarization Engine",
        "pl": "Unified On-Device Speech-to-Text & Neural Multi-Speaker Diarization Engine",
        "la": "Unified On-Device Speech-to-Text & Neural Multi-Speaker Diarization Engine"
    },
    "tts": {
        "en": "Production-Grade 4-Tier On-Device Speech Synthesis Framework (Multilingual Neural TTS)",
        "ko": "프로덕션급 4계층 온디바이스 음성 합성 프레임워크 (다국어 신경망 TTS)",
        "ja": "プロダクショングレード4層オンデバイス音声合成フレームワーク（多言語ニューラルTTS）",
        "hi": "उत्पादन-ग्रेड 4-स्तरीय ऑन-डिवाइस स्पीच सिंथेसिस फ्रेमवर्क (बहुभाषी न्यूरल टीटीएस)",
        "zh": "工业级四级梯队端侧语音合成框架（多语言神经网络 TTS）",
        "ar": "Production-Grade 4-Tier On-Device Speech Synthesis Framework (Multilingual Neural TTS)",
        "fr": "Production-Grade 4-Tier On-Device Speech Synthesis Framework (Multilingual Neural TTS)",
        "de": "Production-Grade 4-Tier On-Device Speech Synthesis Framework (Multilingual Neural TTS)",
        "es": "Production-Grade 4-Tier On-Device Speech Synthesis Framework (Multilingual Neural TTS)",
        "ru": "Production-Grade 4-Tier On-Device Speech Synthesis Framework (Multilingual Neural TTS)",
        "vi": "Production-Grade 4-Tier On-Device Speech Synthesis Framework (Multilingual Neural TTS)",
        "pl": "Production-Grade 4-Tier On-Device Speech Synthesis Framework (Multilingual Neural TTS)",
        "la": "Production-Grade 4-Tier On-Device Speech Synthesis Framework (Multilingual Neural TTS)"
    },
    "llamacpp": {
        "en": "Production-Grade GGUF LLM Runtime Utilizing Device Resources, Model Manager & OpenAI API",
        "ko": "기기 자원 최적화, 모델 매니저 및 OpenAI 규격 API를 지원하는 프로덕션급 GGUF LLM 런타임",
        "ja": "デバイスリソース最適化、モデルマネージャー、OpenAI互換APIを備えたプロダクショングレードGGUF LLMランタイム",
        "hi": "डिवाइस संसाधन अनुकूलन, मॉडल मैनेजर और OpenAI एपीआई से सुसज्जित उत्पादन-ग्रेड GGUF LLM रनटाइम",
        "zh": "具备设备资源自适应、模型管理器与 OpenAI 兼容 API 的工业级 GGUF 大模型运行时",
        "ar": "Production-Grade GGUF LLM Runtime Utilizing Device Resources, Model Manager & OpenAI API",
        "fr": "Production-Grade GGUF LLM Runtime Utilizing Device Resources, Model Manager & OpenAI API",
        "de": "Production-Grade GGUF LLM Runtime Utilizing Device Resources, Model Manager & OpenAI API",
        "es": "Production-Grade GGUF LLM Runtime Utilizing Device Resources, Model Manager & OpenAI API",
        "ru": "Production-Grade GGUF LLM Runtime Utilizing Device Resources, Model Manager & OpenAI API",
        "vi": "Production-Grade GGUF LLM Runtime Utilizing Device Resources, Model Manager & OpenAI API",
        "pl": "Production-Grade GGUF LLM Runtime Utilizing Device Resources, Model Manager & OpenAI API",
        "la": "Production-Grade GGUF LLM Runtime Utilizing Device Resources, Model Manager & OpenAI API"
    },
    "vision": {
        "en": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine with Hardware Offloading",
        "ko": "하드웨어 오프로딩을 지원하는 제로 의존성 온디바이스 컴퓨터 비전 및 멀티모달 VLM 추론 엔진",
        "ja": "ハードウェアオフローディング対応ゼロ依存オンデバイスコンピュータビジョン＆マルチモーダルVLM推論エンジン",
        "hi": "हार्डवेयर ऑफलोडिंग के साथ शून्य-निर्भरता ऑन-डिवाइस कंप्यूटर विज़न और मल्टीमॉडल वीएलएम इनफेरेंस इंजन",
        "zh": "具备硬件直接卸载能力的零依赖端侧计算机视觉与多模态 VLM 推理引擎",
        "ar": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine with Hardware Offloading",
        "fr": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine with Hardware Offloading",
        "de": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine with Hardware Offloading",
        "es": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine with Hardware Offloading",
        "ru": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine with Hardware Offloading",
        "vi": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine with Hardware Offloading",
        "pl": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine with Hardware Offloading",
        "la": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine with Hardware Offloading"
    }
}

CLUSTER_ENTRY = {
    "subtitles": {
        "en": "Symmetric Disaggregated Mobile RAM Pooling & On-Device AI Acceleration Runtime with Compute-Memory Decoupling",
        "ko": "연산, 메모리 디커플링 기반 대칭형 분산 모바일 RAM 풀링 및 온디바이스 AI 가속 런타임",
        "ja": "演算・メモリ分離に基づく対称型分散モバイルRAMプーリング＆オンデバイスAIアクセラレーションランタイム",
        "hi": "कंप्यूट-मेमोरी डिकूपलिंग के साथ सममित वियोजित मोबाइल रैम पूलिंग और ऑन-डिवाइस एआई त्वरण रनटाइम",
        "zh": "基于算力-内存解耦的对称式分布式移动端 RAM 池化与端侧 AI 加速运行时",
        "ar": "Symmetric Disaggregated Mobile RAM Pooling & On-Device AI Acceleration Runtime with Compute-Memory Decoupling",
        "fr": "Symmetric Disaggregated Mobile RAM Pooling & On-Device AI Acceleration Runtime with Compute-Memory Decoupling",
        "de": "Symmetric Disaggregated Mobile RAM Pooling & On-Device AI Acceleration Runtime with Compute-Memory Decoupling",
        "es": "Symmetric Disaggregated Mobile RAM Pooling & On-Device AI Acceleration Runtime with Compute-Memory Decoupling",
        "ru": "Symmetric Disaggregated Mobile RAM Pooling & On-Device AI Acceleration Runtime with Compute-Memory Decoupling",
        "vi": "Symmetric Disaggregated Mobile RAM Pooling & On-Device AI Acceleration Runtime with Compute-Memory Decoupling",
        "pl": "Symmetric Disaggregated Mobile RAM Pooling & On-Device AI Acceleration Runtime with Compute-Memory Decoupling",
        "la": "Symmetric Disaggregated Mobile RAM Pooling & On-Device AI Acceleration Runtime with Compute-Memory Decoupling"
    },
    "challenge": {
        "en": "Executing frontier 70B scale models on standalone mobile devices inevitably triggers Android Low Memory Killer (LMK) termination and thermal throttling. Conventional distributed inference forces compute on all nodes, overheating lower-tier battery-powered devices.",
        "ko": "단일 모바일 기기에서 70B급 프론티어 거대 모델을 구동하면 안드로이드 LMK(Low Memory Killer) 강제 종료 및 스로틀링이 불가피합니다. 기존 분산 추론은 모든 노드에서 연산을 수행하여 배터리 기반 단말기의 과열을 초래합니다.",
        "ja": "単一のモバイル端末で70Bクラスの超巨大モデルを実行すると、Android LMK（Low Memory Killer）による強制終了やサーマルスロットリングが不可避となります。従来の分散推論は全ノードで計算を強制し、低スペック端末の過熱を引き起こします。",
        "hi": "स्टैंडअलोन मोबाइल उपकरणों पर 70B पैमाने के मॉडल निष्पादित करने से अनिवार्य रूप से एंड्रॉइड एलएमके टर्मिनेशन और थर्मल थ्रॉटलिंग सक्रिय हो जाती है। पारंपरिक वितरित इनफेरेंस सभी नोड्स पर कंप्यूटिंग को बाध्य करता है, जिससे निचले स्तर के बैटरी चालित उपकरण अत्यधिक गर्म हो जाते हैं।",
        "zh": "在单台手机上运行 70B 级前沿大模型必然会触发 Android LMK 强杀进程与发热降频。传统分布式推断强迫所有节点共同参与计算，导致低配电池供电设备严重过热。",
        "ar": "Executing frontier 70B scale models on standalone mobile devices inevitably triggers Android Low Memory Killer (LMK) termination and thermal throttling. Conventional distributed inference forces compute on all nodes, overheating lower-tier battery-powered devices.",
        "fr": "Executing frontier 70B scale models on standalone mobile devices inevitably triggers Android Low Memory Killer (LMK) termination and thermal throttling. Conventional distributed inference forces compute on all nodes, overheating lower-tier battery-powered devices.",
        "de": "Executing frontier 70B scale models on standalone mobile devices inevitably triggers Android Low Memory Killer (LMK) termination and thermal throttling. Conventional distributed inference forces compute on all nodes, overheating lower-tier battery-powered devices.",
        "es": "Executing frontier 70B scale models on standalone mobile devices inevitably triggers Android Low Memory Killer (LMK) termination and thermal throttling. Conventional distributed inference forces compute on all nodes, overheating lower-tier battery-powered devices.",
        "ru": "Executing frontier 70B scale models on standalone mobile devices inevitably triggers Android Low Memory Killer (LMK) termination and thermal throttling. Conventional distributed inference forces compute on all nodes, overheating lower-tier battery-powered devices.",
        "vi": "Executing frontier 70B scale models on standalone mobile devices inevitably triggers Android Low Memory Killer (LMK) termination and thermal throttling. Conventional distributed inference forces compute on all nodes, overheating lower-tier battery-powered devices.",
        "pl": "Executing frontier 70B scale models on standalone mobile devices inevitably triggers Android Low Memory Killer (LMK) termination and thermal throttling. Conventional distributed inference forces compute on all nodes, overheating lower-tier battery-powered devices.",
        "la": "Executing frontier 70B scale models on standalone mobile devices inevitably triggers Android Low Memory Killer (LMK) termination and thermal throttling. Conventional distributed inference forces compute on all nodes, overheating lower-tier battery-powered devices."
    },
    "breakthrough": {
        "en": "AMEVA-Cluster unifies idle LPDDR memory across multiple heterogeneous mobile smartphones into a single disaggregated memory pool using a symmetric master/worker binary. Compute is fully isolated on a single flagship GPU, while edge phones serve strictly as passive RAM caches, completely preventing thermal throttling and Android Low Memory Killer (LMK) SIGKILL terminations. Features built-in storage-assisted hybrid failover to local UFS 3.1 flash mmap streaming and fast-path HMAC mutual authentication Guard proxies.",
        "ko": "AMEVA-Cluster는 대칭 마스터/워커 바이너리를 통해 이종 모바일 스마트폰의 유휴 LPDDR 메모리를 단일 분산 메모리 풀로 통합합니다. 연산은 단일 플래그십 GPU에 완전 격리되고 에지 단말기는 순수 수동 RAM 캐시로만 동작하여 과열과 LMK SIGKILL 종료를 차단합니다. 로컬 UFS 3.1 플래시 mmap 스트리밍 기반 하이브리드 장애 조치 및 HMAC 상호 인증 Guard 프록시를 탑재했습니다.",
        "ja": "AMEVA-Clusterは対称型マスター／ワーカーバイナリにより、異種スマートフォンの遊休LPDDRメモリを単一の分散メモリプールに統合します。計算は単一のフラッグシップGPUに完全隔離され、エッジ端末は受動的なRAMキャッシュとしてのみ動作し、過熱とLMK SIGKILL終了を防止します。ローカルUFS 3.1フラッシュmmapストリーミングによるハイブリッドフェイルオーバーおよびHMAC相互認証Guardプロキシを備えています。",
        "hi": "AMEVA-Cluster सममित मास्टर/वर्कर बाइनरी का उपयोग करके कई विषम स्मार्टफोन की निष्क्रिय LPDDR मेमोरी को एकल वियोजित मेमोरी पूल में एकीकृत करता है। कंप्यूट को एकल फ्लैगशिप जीपीयू पर पूरी तरह से अलग किया जाता है, जबकि किनारे के फोन केवल निष्क्रिय रैम कैश के रूप में काम करते हैं, जिससे ओवरहीटिंग और एंड्रॉइड एलएमके SIGKILL समाप्त हो जाते हैं।",
        "zh": "AMEVA-Cluster 通过单一对称的主从二进制架构，将多台异构闲置手机的 LPDDR 内存聚合为统一的分布式内存池。所有计算完全隔离在单台旗舰 GPU 上执行，其余终端严格充当被动 RAM 缓存，从根本上杜绝发热降频与 LMK SIGKILL 进程终止。内置基于本地 UFS 3.1 闪存 mmap 流式回退机制与高速 HMAC 双向认证安全代理。",
        "ar": "AMEVA-Cluster unifies idle LPDDR memory across multiple heterogeneous mobile smartphones into a single disaggregated memory pool using a symmetric master/worker binary.",
        "fr": "AMEVA-Cluster unifies idle LPDDR memory across multiple heterogeneous mobile smartphones into a single disaggregated memory pool using a symmetric master/worker binary.",
        "de": "AMEVA-Cluster unifies idle LPDDR memory across multiple heterogeneous mobile smartphones into a single disaggregated memory pool using a symmetric master/worker binary.",
        "es": "AMEVA-Cluster unifies idle LPDDR memory across multiple heterogeneous mobile smartphones into a single disaggregated memory pool using a symmetric master/worker binary.",
        "ru": "AMEVA-Cluster unifies idle LPDDR memory across multiple heterogeneous mobile smartphones into a single disaggregated memory pool using a symmetric master/worker binary.",
        "vi": "AMEVA-Cluster unifies idle LPDDR memory across multiple heterogeneous mobile smartphones into a single disaggregated memory pool using a symmetric master/worker binary.",
        "pl": "AMEVA-Cluster unifies idle LPDDR memory across multiple heterogeneous mobile smartphones into a single disaggregated memory pool using a symmetric master/worker binary.",
        "la": "AMEVA-Cluster unifies idle LPDDR memory across multiple heterogeneous mobile smartphones into a single disaggregated memory pool using a symmetric master/worker binary."
    },
    "features": [
        {
            "title": {"en": "Symmetric Single Binary CLI", "ko": "대칭형 단일 바이너리 CLI", "ja": "対称型単一バイナリCLI", "hi": "सममित एकल बाइनरी सीएलआई", "zh": "对称单二进制 CLI"},
            "desc": {"en": "All-in-one architecture supporting both master and worker roles via single CLI flag.", "ko": "단일 CLI 플래그로 마스터와 워커 역할을 모두 지원하는 올인원 아키텍처.", "ja": "単一のCLIフラグでマスターとワーカーの両方の役割をサポートするオールインワン設計。", "hi": "एकल सीएलआई फ़्लैग के माध्यम से मास्टर और वर्कर दोनों भूमिकाओं का समर्थन करने वाला आर्किटेक्चर।", "zh": "通过单一命令行参数即可无缝切换 Master 与 Worker 角色的二合一轻量架构。"}
        },
        {
            "title": {"en": "Compute-Memory Decoupling", "ko": "연산, 메모리 완전 분리", "ja": "計算・メモリ完全分離", "hi": "कंप्यूट-मेमोरी डिकूपलिंग", "zh": "算力与内存彻底解耦"},
            "desc": {"en": "Worker nodes execute zero GPU passes, acting solely as RAM caches to prevent heat and failure.", "ko": "워커 노드는 GPU 연산을 전혀 수행하지 않고 순수 RAM 캐시로만 동작하여 과열과 장애를 방지합니다.", "ja": "ワーカーノードはGPU計算を一切実行せず、RAMキャッシュとしてのみ動作し過熱を防止。", "hi": "वर्कर नोड्स कोई जीपीयू पास निष्पादित नहीं करते हैं, केवल गर्मी और विफलता को रोकने के लिए रैम कैश के रूप में कार्य करते हैं।", "zh": "从节点绝不执行繁重 GPU 算子，严格作为只读 RAM 缓存运行以彻底防止设备发热。"}
        },
        {
            "title": {"en": "300MB Safety Guard-Band", "ko": "300MB 안전 보호 버퍼", "ja": "300MB安全保護バッファ", "hi": "300MB सुरक्षा गार्ड-बैंड", "zh": "300MB 系统安全保护预留"},
            "desc": {"en": "Automatically deducts buffer memory from usable pool to protect against Android LMK kills.", "ko": "안드로이드 LMK 강제 종료를 방지하기 위해 가용 메모리 풀에서 안전 버퍼를 자동 공제합니다.", "ja": "Android LMKキルを防ぐため、使用可能プールから安全マージンを自動控除。", "hi": "एंड्रॉइड एलएमके किल्स से बचाने के लिए उपयोग करने योग्य पूल से स्वचालित रूप से बफर मेमोरी काटता है।", "zh": "自动从可用内存池中扣除安全冗余量，防止触发 Android 操作系统底层 LMK 强杀。"}
        },
        {
            "title": {"en": "Mutual Authentication Guard Proxy", "ko": "HMAC 상호 인증 가드 프록시", "ja": "HMAC相互認証Guardプロキシ", "hi": "म्युचुअल प्रमाणीकरण गार्ड प्रॉक्सी", "zh": "HMAC 双向认证防护代理"},
            "desc": {"en": "0.001s Fail-Fast HMAC-SHA256 verification rejecting unauthorized RPC traffic and DoS attempts.", "ko": "0.001초 미만 HMAC-SHA256 고속 검증으로 미인가 RPC 트래픽과 DoS 시도를 즉각 차단합니다.", "ja": "0.001秒未満のHMAC-SHA256検証により、不正なRPCトラフィックとDoS攻撃を即時遮断。", "hi": "अनधिकृत आरपीसी ट्रैफ़िक और DoS हमलों को अस्वीकार करने वाला 0.001s फ़ेल-फ़ास्ट HMAC-SHA256 सत्यापन।", "zh": "0.001 秒级极速 HMAC-SHA256 鉴权，毫秒级主动拦截未授权 RPC 流量与 DoS 攻击。"}
        },
        {
            "title": {"en": "Storage-Assisted Hybrid Failover", "ko": "스토리지 기반 하이브리드 장애 복구", "ja": "ストレージ連携ハイブリッドフェイルオーバー", "hi": "स्टोरेज-सहायता प्राप्त हाइब्रिड फ़ेलओवर", "zh": "闪存流式混合故障转移"},
            "desc": {"en": "Gracefully degrades to local UFS 3.1 flash streaming upon worker disconnects without crashing.", "ko": "워커 연결이 끊어지더라도 크래시 없이 로컬 UFS 3.1 플래시 스트리밍으로 유연하게 복구됩니다.", "ja": "ワーカー切断時もクラッシュすることなくローカルUFS 3.1フラッシュストリーミングへ正常に縮退。", "hi": "बिना क्रैश हुए वर्कर डिस्कनेक्ट होने पर स्थानीय यूएफएस 3.1 फ्लैश स्ट्रीमिंग में सुरक्षित रूप से गिरावट।", "zh": "从节点发生异常断连时，平滑降级至本地 UFS 3.1 闪存 mmap 流式加载，杜绝崩溃。"}
        },
        {
            "title": {"en": "6-Modality Pluggable Engine", "ko": "6대 모달리티 플러그형 분산 엔진", "ja": "6モダリティ対応プラグインエンジン", "hi": "6-मॉडल प्लगेबल इंजन", "zh": "六模态可插拔分布式引擎"},
            "desc": {"en": "Standardized distributed tensor sharding across LLM, Diffusion, Vision, STT, TTS, and Training.", "ko": "LLM, Diffusion, Vision, STT, TTS, Training 전반에 걸친 표준화된 분산 텐서 샤딩 지원.", "ja": "LLM、Diffusion、Vision、STT、TTS、Trainingにわたる標準化された分散テンソルシャーディング。", "hi": "एलएलएम, डिफ्यूज़न, विज़न, एसटीटी, टीटीएस और प्रशिक्षण में मानकीकृत वितरित टेंसर शार्डिंग।", "zh": "在 LLM、扩散模型、视觉、STT、TTS 及微调训练全模态间提供标准化的张量切分支持。"}
        }
    ]
}

PRIVACY_PATCH = {
    "subtitles": {
        "en": "Zero-Egress Network Identity Sanitization & Differential Privacy Runtime",
        "ko": "제로 데이터 유출 네트워크 식별자 마스킹 및 차분 프라이버시 런타임",
        "ja": "ゼロ漏洩ネットワーク識別子マスキング＆差分プライバシーランタイム",
        "hi": "ज़ीरो-एग्रेस नेटवर्क पहचान स्वच्छता और अंतर गोपनीयता रनटाइम",
        "zh": "零外泄网络标识脱敏与差分隐私运行时",
        "ar": "Zero-Egress Network Identity Sanitization & Differential Privacy Runtime",
        "fr": "Zero-Egress Network Identity Sanitization & Differential Privacy Runtime",
        "de": "Zero-Egress Network Identity Sanitization & Differential Privacy Runtime",
        "es": "Zero-Egress Network Identity Sanitization & Differential Privacy Runtime",
        "ru": "Zero-Egress Network Identity Sanitization & Differential Privacy Runtime",
        "vi": "Zero-Egress Network Identity Sanitization & Differential Privacy Runtime",
        "pl": "Zero-Egress Network Identity Sanitization & Differential Privacy Runtime",
        "la": "Zero-Egress Network Identity Sanitization & Differential Privacy Runtime"
    },
    "challenge": {
        "en": "Mobile network telemetry and edge agent requests leak hardware MAC addresses, BSSIDs, and precise IPv4/IPv6 identifiers to upstream gateways.",
        "ko": "모바일 네트워크 원격 측정 및 에지 에이전트 요청 시 하드웨어 MAC 주소, BSSID 및 정밀 IPv4/IPv6 식별자가 상위 게이트웨이로 유출되는 취약점이 존재합니다.",
        "ja": "モバイルネットワークのテレメトリやエッジエージェント要求において、MACアドレス、BSSID、詳細なIPv4/IPv6識別子が上位ゲートウェイに漏洩する課題があります。",
        "hi": "मोबाइल नेटवर्क टेलीमेट्री और एज एजेंट अनुरोध हार्डवेयर मैक पते, BSSID और सटीक IPv4/IPv6 पहचानकर्ताओं को अपस्ट्रीम गेटवे पर लीक करते हैं।",
        "zh": "移动网络遥测与边缘代理请求极易向上游网关泄露硬件 MAC 地址、BSSID 及精确的 IPv4/IPv6 网络标识。",
        "ar": "Mobile network telemetry and edge agent requests leak hardware MAC addresses, BSSIDs, and precise IPv4/IPv6 identifiers to upstream gateways.",
        "fr": "Mobile network telemetry and edge agent requests leak hardware MAC addresses, BSSIDs, and precise IPv4/IPv6 identifiers to upstream gateways.",
        "de": "Mobile network telemetry and edge agent requests leak hardware MAC addresses, BSSIDs, and precise IPv4/IPv6 identifiers to upstream gateways.",
        "es": "Mobile network telemetry and edge agent requests leak hardware MAC addresses, BSSIDs, and precise IPv4/IPv6 identifiers to upstream gateways.",
        "ru": "Mobile network telemetry and edge agent requests leak hardware MAC addresses, BSSIDs, and precise IPv4/IPv6 identifiers to upstream gateways.",
        "vi": "Mobile network telemetry and edge agent requests leak hardware MAC addresses, BSSIDs, and precise IPv4/IPv6 identifiers to upstream gateways.",
        "pl": "Mobile network telemetry and edge agent requests leak hardware MAC addresses, BSSIDs, and precise IPv4/IPv6 identifiers to upstream gateways.",
        "la": "Mobile network telemetry and edge agent requests leak hardware MAC addresses, BSSIDs, and precise IPv4/IPv6 identifiers to upstream gateways."
    },
    "breakthrough": {
        "en": "Hardware-isolated subnet zeroing and dynamic token-bucket anonymization preventing client fingerprinting across distributed inference nodes.",
        "ko": "하드웨어 격리 서브넷 제로화 및 동적 토큰 버킷 익명화를 적용하여 분산 추론 노드 전반에서 클라이언트 핑거프린팅을 차단합니다.",
        "ja": "ハードウェア隔離サブネットゼロ化および動的トークンバケット匿名化により、分散推論ノード全体でのクライアントフィンガープリンティングを防止します。",
        "hi": "हार्डवेयर-पृथक सबनेट ज़ीरोइंग और गतिशील टोकन-बकेट अनामीकरण जो वितरित इनफेरेंस नोड्स में क्लाइंट फ़िंगरप्रिंटिंग को रोकता है।",
        "zh": "采用硬件隔离的子网置零与动态令牌桶匿名化机制，全面阻止分布式推理节点间的客户端指纹追踪。",
        "ar": "Hardware-isolated subnet zeroing and dynamic token-bucket anonymization preventing client fingerprinting across distributed inference nodes.",
        "fr": "Hardware-isolated subnet zeroing and dynamic token-bucket anonymization preventing client fingerprinting across distributed inference nodes.",
        "de": "Hardware-isolated subnet zeroing and dynamic token-bucket anonymization preventing client fingerprinting across distributed inference nodes.",
        "es": "Hardware-isolated subnet zeroing and dynamic token-bucket anonymization preventing client fingerprinting across distributed inference nodes.",
        "ru": "Hardware-isolated subnet zeroing and dynamic token-bucket anonymization preventing client fingerprinting across distributed inference nodes.",
        "vi": "Hardware-isolated subnet zeroing and dynamic token-bucket anonymization preventing client fingerprinting across distributed inference nodes.",
        "pl": "Hardware-isolated subnet zeroing and dynamic token-bucket anonymization preventing client fingerprinting across distributed inference nodes.",
        "la": "Hardware-isolated subnet zeroing and dynamic token-bucket anonymization preventing client fingerprinting across distributed inference nodes."
    },
    "features": [
        {
            "title": {"en": "IP Masking & Subnet Sanitization", "ko": "IP 마스킹 및 서브넷 제로화", "ja": "IPマスキング＆サブネット無害化", "hi": "आईपी मास्किंग और सबनेट सैनिटाइजेशन", "zh": "IP 脱敏与子网置零"},
            "desc": {"en": "Zeros host bits of IPv4 and IPv6 client addresses prior to telemetry persistence.", "ko": "원격 측정 데이터 저장 전 IPv4 및 IPv6 클라이언트 주소의 호스트 비트를 자동으로 영(0)으로 치환합니다.", "ja": "テレメトリ保存前にIPv4およびIPv6クライアントアドレスのホストビットをゼロクリア。", "hi": "टेलीमेट्री स्थायित्व से पहले IPv4 और IPv6 क्लाइंट पतों के होस्ट बिट्स को शून्य करता है।", "zh": "在遥测数据持久化存储前，强制将 IPv4 与 IPv6 客户端地址的主机位清零脱敏。"}
        },
        {
            "title": {"en": "Target Type Strict Allowlisting", "ko": "대상 식별자 화이트리스트 검증", "ja": "対象識別子ホワイトリスト検証", "hi": "लक्षित प्रकार सख्त अनुमति सूची", "zh": "目标类型白名单强制校验"},
            "desc": {"en": "Validates client event targets against strict server-side enum allowlists to prevent arbitrary payload storage.", "ko": "클라이언트 이벤트 대상을 서버 측 열거형 허용 목록으로 검증하여 임의의 페이로드 저장을 원천 차단합니다.", "ja": "クライアントイベント対象を厳格なサーバー側列挙型で検証し、不正なペイロード保存を防止。", "hi": "मनमाने पेलोड स्टोरेज को रोकने के लिए सख्त सर्वर-साइड एनम अनुमति सूचियों के खिलाफ क्लाइंट इवेंट लक्ष्यों को मान्य करता है।", "zh": "基于服务端严格枚举白名单校验客户端事件目标，杜绝任意非受控载荷存储。"}
        },
        {
            "title": {"en": "Zero Leak Telemetry Guard", "ko": "데이터 유출 없는 제로 리크 텔레메트리", "ja": "データ漏洩ゼロの安全テレメトリ", "hi": "ज़ीरो-लीक टेलीमेट्री सुरक्षा", "zh": "零泄露合规安全遥测"},
            "desc": {"en": "Guarantees zero client PII egress across edge clustering and distributed inference workloads.", "ko": "에지 클러스터링 및 분산 추론 환경에서 클라이언트 개인 식별 정보(PII)의 외부 유출을 원천 방지합니다.", "ja": "エッジクラスタリングおよび分散推論ワークロード全体でクライアントPIIの流出を完全遮断。", "hi": "एज क्लस्टरिंग और वितरित इनफेरेंस वर्कलोड में शून्य क्लाइंट पीआईआई बहिर्वाह की गारंटी देता है।", "zh": "严格保障边缘集群与分布式推理任务全流程中客户端个人敏感信息 (PII) 零外泄。"}
        }
    ]
}

COMMON_HOME_PATCH = {
    "en": {
        "quickInstallTitle": "1-Line Quick Installation",
        "quickInstallDesc": "Install the official package directly into your runtime:",
        "challengeTitle": "The Engineering Challenge",
        "breakthroughTitle": "The Architectural Breakthrough",
        "featuresTitle": "Key Capabilities & Built-in Hardening",
        "matrixTitle": "Supported Compute Kernels & Operations",
        "matrixCol1": "Subsystem Category",
        "matrixCol2": "Operations & Kernels",
        "matrixCol3": "Status",
        "codeExampleTitle": "Canonical Usage Example",
        "nextStepsTitle": "Getting Started & Deep Guides",
        "linkInstall": "Detailed Installation Guide (Hardware dependencies, Termux setup, WebGPU flags)",
        "linkQuickstart": "Quickstart Recipes & Common Execution Patterns",
        "linkApi": "100% Full API Reference & Struct Definitions"
    },
    "ko": {
        "quickInstallTitle": "1줄 빠른 설치",
        "quickInstallDesc": "런타임에 공식 패키지를 즉시 설치하십시오:",
        "challengeTitle": "엔지니어링 당면 과제",
        "breakthroughTitle": "아키텍처 혁신 및 해결책",
        "featuresTitle": "핵심 기능 및 내장 하드닝 사양",
        "matrixTitle": "지원 연산 커널 및 하드웨어 가속 매트릭스",
        "matrixCol1": "서브시스템 분류",
        "matrixCol2": "연산 및 실행 커널",
        "matrixCol3": "지원 상태",
        "codeExampleTitle": "표준 실행 코드 예제",
        "nextStepsTitle": "시작하기 및 심화 엔지니어링 가이드",
        "linkInstall": "상세 설치 가이드 (하드웨어 의존성, Termux 설정, WebGPU 플래그)",
        "linkQuickstart": "퀵스타트 레시피 및 공통 실행 패턴",
        "linkApi": "전체 API 명세 및 구조체 정의"
    },
    "ja": {
        "quickInstallTitle": "1行クイックインストール",
        "quickInstallDesc": "ランタイムに公式パッケージを直接インストールします:",
        "challengeTitle": "エンジニアリング上の課題",
        "breakthroughTitle": "アーキテクチャの技術的ブレークスルー",
        "featuresTitle": "主要機能と組み込みの堅牢化",
        "matrixTitle": "対応演算カーネルおよびハードウェア高速化マトリクス",
        "matrixCol1": "サブシステム分類",
        "matrixCol2": "演算および実行カーネル",
        "matrixCol3": "対応状況",
        "codeExampleTitle": "標準使用例",
        "nextStepsTitle": "スタートガイドと詳細ドキュメント",
        "linkInstall": "詳細インストールガイド（ハードウェア依存関係、Termux設定、WebGPUフラグ）",
        "linkQuickstart": "クイックスタートレシピと共通実行パターン",
        "linkApi": "完全なAPIリファレンスおよび構造体定義"
    },
    "hi": {
        "quickInstallTitle": "1-पंक्ति त्वरित स्थापना",
        "quickInstallDesc": "आधिकारिक पैकेज को सीधे अपने रनटाइम में स्थापित करें:",
        "challengeTitle": "इंजीनियरिंग चुनौती",
        "breakthroughTitle": "स्थापत्य की सफलता",
        "featuresTitle": "प्रमुख क्षमताएं और अंतर्निहित सुरक्षा",
        "matrixTitle": "समर्थित कंप्यूट कर्नेल और संचालन मैट्रिक्स",
        "matrixCol1": "उपप्रणाली श्रेणी",
        "matrixCol2": "संचालन और कर्नेल",
        "matrixCol3": "स्थिति",
        "codeExampleTitle": "मानक उपयोग उदाहरण",
        "nextStepsTitle": "शुरुआत और गहन गाइड",
        "linkInstall": "विस्तृत स्थापना गाइड (हार्डवेयर निर्भरताएं, Termux सेटअप, WebGPU फ़्लैग)",
        "linkQuickstart": "त्वरित प्रारंभ रेसिपी और सामान्य निष्पादन पैटर्न",
        "linkApi": "100% पूर्ण एपीआई संदर्भ और संरचना परिभाषाएं"
    },
    "zh": {
        "quickInstallTitle": "单行快速安装",
        "quickInstallDesc": "直接将官方软件包安装到您的运行时：",
        "challengeTitle": "工程面临的挑战",
        "breakthroughTitle": "架构层面的技术突破",
        "featuresTitle": "核心功能与内置系统加固",
        "matrixTitle": "支持的计算算子与硬件加速矩阵",
        "matrixCol1": "子系统分类",
        "matrixCol2": "算子与执行内核",
        "matrixCol3": "支持状态",
        "codeExampleTitle": "标准使用代码示例",
        "nextStepsTitle": "入门指南与进阶工程文档",
        "linkInstall": "详细安装指南（硬件依赖、Termux 配置、WebGPU 标志）",
        "linkQuickstart": "快速上手配方与通用执行模式",
        "linkApi": "完整 API 参考规范与结构体定义"
    }
}
