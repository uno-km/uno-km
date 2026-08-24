/**
 * Vercel Serverless Function: AMEVA Multi-Tier Hierarchical & 3D Knowledge Graph Engine
 * Route: /api/graph
 * 
 * Powered by Neon PostgreSQL (@neondatabase/serverless)
 * - 4-Tier Hierarchical (Root -> Domain -> TLP Project -> Core Kernel/Algorithm)
 * - N:M Multi-Parent & Multi-Child Graph Relations
 * - 3D Coordinates & Physics Metadata
 * - Auto-Schema Initialization & Seed Hydration on First Connection
 * - High-Speed Edge Caching
 */
import { neon } from '@neondatabase/serverless';

let isGraphSchemaReady = false;

// 4-Tier Initial Knowledge Graph Data
const SEED_NODES = [
    // ── Tier 1: Ecosystem Root ──
    {
        node_id: 'AMEVA-Universe',
        name: 'AMEVA Universe',
        category: 'ROOT',
        depth_level: 1,
        parent_id: null,
        description: 'Sovereign On-Device AI & Autonomous Systems Ecosystem without Cloud Dependency.',
        tech_stack: ['WebGPU', 'ARM64 Bionic', 'Pyodide WASM', 'C++17', 'TypeScript'],
        tags: ['root', 'sovereign-ai', 'edge-native', 'meritocracy'],
        node_radius: 32.0,
        node_weight: 5.0,
        group_color: '#7C3AED',
        pos_x: 0, pos_y: 0, pos_z: 0,
        orbit_phase: 0, orbit_freq: 0.001,
        repo_url: 'https://github.com/uno-km',
        docs_url: 'https://uno-km.vercel.app/foundation/',
        tour_order: 1,
        audio_narrative: 'AMEVA Open-Source Foundation is a sovereign edge AI and autonomous software engineering ecosystem.'
    },

    // ── Tier 2: Domain Categories ──
    {
        node_id: 'Mobile-Bionic-AI',
        name: 'Mobile & Bionic ARM64',
        category: 'DOMAIN',
        depth_level: 2,
        parent_id: 'AMEVA-Universe',
        description: 'Non-root Android Termux user-space AI runtimes with ARM NEON SIMD acceleration.',
        tech_stack: ['Android Bionic', 'ARM64 NEON', 'Clang', 'C++17'],
        tags: ['mobile-ai', 'arm64', 'termux', 'simd'],
        node_radius: 24.0,
        node_weight: 3.5,
        group_color: '#3ECF8E',
        pos_x: -120, pos_y: 60, pos_z: 20,
        orbit_phase: 0.5, orbit_freq: 0.002,
        repo_url: 'https://github.com/uno-km',
        docs_url: 'https://uno-km.vercel.app/foundation/charter.html',
        tour_order: 2,
        audio_narrative: 'Mobile Bionic AI domain provides non-root native runtimes optimized for modern smartphone processors.'
    },
    {
        node_id: 'WebGPU-Browser-AI',
        name: 'Browser & WebGPU AI',
        category: 'DOMAIN',
        depth_level: 2,
        parent_id: 'AMEVA-Universe',
        description: 'Browser-native WebGPU tensor compute shaders and zero-server client execution.',
        tech_stack: ['WebGPU', 'WGSL', 'WASM', 'Next.js', 'TypeScript'],
        tags: ['webgpu', 'in-browser-ai', 'client-compute', 'wgsl'],
        node_radius: 24.0,
        node_weight: 3.5,
        group_color: '#00EFFF',
        pos_x: 120, pos_y: -60, pos_z: -20,
        orbit_phase: 1.2, orbit_freq: 0.002,
        repo_url: 'https://github.com/uno-km',
        docs_url: 'https://uno-km.vercel.app/lib/forge/',
        tour_order: 3,
        audio_narrative: 'Browser WebGPU AI enables massive parallel neural network execution directly in the user browser with zero cloud costs.'
    },
    {
        node_id: 'Security-Observability',
        name: 'Security & Traffic Governance',
        category: 'DOMAIN',
        depth_level: 2,
        parent_id: 'AMEVA-Universe',
        description: '0-Data privacy-first browser observability, bot classification, and deterministic threat scoring.',
        tech_stack: ['WebCrypto', 'TypeScript', 'Edge Middleware', 'Neon PostgreSQL'],
        tags: ['security', 'observability', 'bot-detection', 'privacy'],
        node_radius: 24.0,
        node_weight: 3.5,
        group_color: '#10B981',
        pos_x: 60, pos_y: 120, pos_z: -40,
        orbit_phase: 2.0, orbit_freq: 0.002,
        repo_url: 'https://github.com/uno-km/ameva-sentinel',
        docs_url: 'https://uno-km.vercel.app/sdk/sentinel/',
        tour_order: 4,
        audio_narrative: 'Security Observability domain guarantees zero keystroke logging and sovereign data protection.'
    },
    {
        node_id: 'Autonomous-Systems',
        name: 'Autonomous Systems & Multi-Agent',
        category: 'DOMAIN',
        depth_level: 2,
        parent_id: 'AMEVA-Universe',
        description: 'Decentralized multi-agent state machines, SRE terminal mesh, and generative simulations.',
        tech_stack: ['Docker', 'node-pty', 'WebSocket', 'Multi-Agent DAG'],
        tags: ['multi-agent', 'orchestra', 'sre', 'terminal'],
        node_radius: 24.0,
        node_weight: 3.5,
        group_color: '#F59E0B',
        pos_x: -60, pos_y: -120, pos_z: 40,
        orbit_phase: 2.8, orbit_freq: 0.002,
        repo_url: 'https://github.com/uno-km',
        docs_url: 'https://uno-km.vercel.app/foundation/',
        tour_order: 5,
        audio_narrative: 'Autonomous systems domain orchestrates hierarchical agent networks and resilient terminal workflows.'
    },

    // ── Tier 3: Flagship TLP Libraries & Projects ──
    {
        node_id: 'termux-bitnet',
        name: 'Termux-BitNet',
        category: 'TLP_LIBRARY',
        depth_level: 3,
        parent_id: 'Mobile-Bionic-AI',
        description: '1.58-bit (i2_s) On-Device LLM Inference Engine with ARM64 NEON DotProd SIMD acceleration.',
        tech_stack: ['C++17', 'ARM64 NEON', 'DotProd', 'Python ctypes', 'Node.js npm'],
        tags: ['bitnet', '1.58-bit', 'llm', 'on-device', 'neon'],
        node_radius: 18.0,
        node_weight: 2.5,
        group_color: '#3ECF8E',
        pos_x: -180, pos_y: 80, pos_z: 30,
        orbit_phase: 0.8, orbit_freq: 0.003,
        repo_url: 'https://github.com/uno-km/termux-bitnet',
        docs_url: 'https://uno-km.vercel.app/lib/bitnet/',
        pypi_package: 'termux-bitnet',
        npm_package: 'termux-bitnet',
        tour_order: 6,
        audio_narrative: 'Termux-BitNet delivers ternary 1.58-bit LLM inference directly on mobile memory with low RAM footprint.'
    },
    {
        node_id: 'termux-train',
        name: 'Termux-Train',
        category: 'TLP_LIBRARY',
        depth_level: 3,
        parent_id: 'Mobile-Bionic-AI',
        description: 'Bionic Native Tensor, Dynamic DAG Autograd, SafeTensors zero-copy, and On-Device LoRA Training.',
        tech_stack: ['Python', 'OpenBLAS NEON', 'SafeTensors', 'LoRA'],
        tags: ['autograd', 'lora', 'training', 'transformer', 'rope'],
        node_radius: 18.0,
        node_weight: 2.5,
        group_color: '#3ECF8E',
        pos_x: -150, pos_y: 130, pos_z: 10,
        orbit_phase: 1.0, orbit_freq: 0.003,
        repo_url: 'https://github.com/uno-km/termux-train',
        docs_url: 'https://uno-km.vercel.app/lib/train/',
        pypi_package: 'termux-train',
        tour_order: 7,
        audio_narrative: 'Termux-Train enables reverse-mode automatic differentiation and fine-tuning on mobile CPUs.'
    },
    {
        node_id: 'termux-stt',
        name: 'Termux-STT',
        category: 'TLP_LIBRARY',
        depth_level: 3,
        parent_id: 'Mobile-Bionic-AI',
        description: 'Unified Whisper.cpp, Vosk, Sherpa-ONNX with Pure-Python 128d Speaker Diarization.',
        tech_stack: ['Whisper.cpp', 'Vosk', 'Sherpa-ONNX', 'Python'],
        tags: ['stt', 'whisper', 'diarization', 'audio-ai'],
        node_radius: 18.0,
        node_weight: 2.5,
        group_color: '#3ECF8E',
        pos_x: -190, pos_y: 20, pos_z: -20,
        orbit_phase: 1.4, orbit_freq: 0.003,
        repo_url: 'https://github.com/uno-km/termux-stt',
        docs_url: 'https://uno-km.vercel.app/lib/stt/',
        pypi_package: 'termux-stt',
        npm_package: 'termux-stt',
        tour_order: 8,
        audio_narrative: 'Termux-STT provides unified mobile voice transcription and real-time speaker separation.'
    },
    {
        node_id: 'termux-diffusion',
        name: 'Termux-Diffusion',
        category: 'TLP_LIBRARY',
        depth_level: 3,
        parent_id: 'Mobile-Bionic-AI',
        description: 'Native On-Device Stable Diffusion Image Generation for Android ARM64.',
        tech_stack: ['C++ NEON', 'GGUF', 'Stable Diffusion', 'Python'],
        tags: ['diffusion', 'image-generation', 'arm64', 'gguf'],
        node_radius: 18.0,
        node_weight: 2.5,
        group_color: '#3ECF8E',
        pos_x: -100, pos_y: 160, pos_z: -30,
        orbit_phase: 1.8, orbit_freq: 0.003,
        repo_url: 'https://github.com/uno-km/termux-diffusion',
        docs_url: 'https://uno-km.vercel.app/lib/diffusion/',
        pypi_package: 'termux-diffusion',
        npm_package: 'termux-diffusion',
        tour_order: 9,
        audio_narrative: 'Termux-Diffusion generates high-resolution AI art on mobile phones without network connection.'
    },
    {
        node_id: 'termux-playwright',
        name: 'Termux-Playwright',
        category: 'TLP_LIBRARY',
        depth_level: 3,
        parent_id: 'Mobile-Bionic-AI',
        description: 'Non-root Chromium browser automation and direct CDP control on Android Termux.',
        tech_stack: ['Chromium CDP', 'Node.js', 'Python', 'Bionic ARM64'],
        tags: ['browser-automation', 'playwright', 'scraping', 'cdp'],
        node_radius: 18.0,
        node_weight: 2.5,
        group_color: '#3ECF8E',
        pos_x: -140, pos_y: -40, pos_z: 50,
        orbit_phase: 2.2, orbit_freq: 0.003,
        repo_url: 'https://github.com/uno-km/termux-playwright-demo',
        docs_url: 'https://uno-km.vercel.app/lib/playwright/',
        pypi_package: 'termux-playwright',
        npm_package: 'termux-playwright',
        tour_order: 10,
        audio_narrative: 'Termux-Playwright turns any spare smartphone into a 5-watt distributed web scraping node.'
    },
    {
        node_id: 'AMEVA-Forge',
        name: 'AMEVA-Forge',
        category: 'TLP_LIBRARY',
        depth_level: 3,
        parent_id: 'WebGPU-Browser-AI',
        description: 'Browser-Native WebGPU Autograd Engine with PyTorch compatibility and WGSL compute shaders.',
        tech_stack: ['WebGPU', 'WGSL', 'Pyodide', 'WASM'],
        tags: ['webgpu', 'autograd', 'browser-dl', 'pytorch-compat'],
        node_radius: 18.0,
        node_weight: 2.5,
        group_color: '#00EFFF',
        pos_x: 180, pos_y: -80, pos_z: -30,
        orbit_phase: 0.7, orbit_freq: 0.003,
        repo_url: 'https://github.com/uno-km/AMEVA-Forge',
        docs_url: 'https://uno-km.vercel.app/lib/forge/',
        pypi_package: 'ameva',
        tour_order: 11,
        audio_narrative: 'AMEVA-Forge offloads neural network training computations to the client GPU via WebGPU.'
    },
    {
        node_id: 'AMEVA-Workstation',
        name: 'AMEVA Workstation',
        category: 'APPLICATION',
        depth_level: 3,
        parent_id: 'WebGPU-Browser-AI',
        description: 'Client-side WebGPU local AI, spatial canvas map, nested documents, and autonomous agent orchestration.',
        tech_stack: ['React', 'Next.js', 'WebLLM', 'Qwen2.5', 'Canvas'],
        tags: ['workstation', 'pwa', 'local-llm', 'spatial-canvas'],
        node_radius: 20.0,
        node_weight: 3.0,
        group_color: '#00EFFF',
        pos_x: 150, pos_y: -140, pos_z: 20,
        orbit_phase: 1.3, orbit_freq: 0.003,
        repo_url: 'https://github.com/uno-km/AMEVA-Workstation-Web',
        docs_url: 'https://ameva-workstation-web-core.vercel.app/',
        demo_url: 'https://ameva-workstation-web-core.vercel.app/',
        tour_order: 12,
        audio_narrative: 'AMEVA Workstation is the flagship desktop web app with in-browser Qwen AI and infinite canvas.'
    },
    {
        node_id: 'AMEVA-Sentinel',
        name: 'AMEVA-Sentinel',
        category: 'TLP_LIBRARY',
        depth_level: 3,
        parent_id: 'Security-Observability',
        description: '0-Data privacy threat scoring and automated bot traffic governance SDK.',
        tech_stack: ['TypeScript', 'WebCrypto', 'Node.js', 'PostgreSQL'],
        tags: ['bot-governance', 'privacy', 'security-sdk', 'risk-scoring'],
        node_radius: 18.0,
        node_weight: 2.5,
        group_color: '#10B981',
        pos_x: 90, pos_y: 180, pos_z: -50,
        orbit_phase: 2.1, orbit_freq: 0.003,
        repo_url: 'https://github.com/uno-km/ameva-sentinel',
        docs_url: 'https://uno-km.vercel.app/sdk/sentinel/',
        npm_package: '@ameva/sentinel',
        tour_order: 13,
        audio_narrative: 'AMEVA-Sentinel evaluates session risk deterministically without capturing private user keystrokes.'
    },
    {
        node_id: 'AMEVA-DocFold',
        name: 'AMEVA-DocFold',
        category: 'TLP_LIBRARY',
        depth_level: 3,
        parent_id: 'Autonomous-Systems',
        description: 'Multi-layer semantic folding pipeline compressing complex context without semantic loss.',
        tech_stack: ['Python', 'Semantic DAG', 'Lossless Folding'],
        tags: ['docfold', 'semantic-compression', 'context-folding'],
        node_radius: 16.0,
        node_weight: 2.0,
        group_color: '#F59E0B',
        pos_x: -80, pos_y: -180, pos_z: 30,
        orbit_phase: 2.7, orbit_freq: 0.003,
        repo_url: 'https://github.com/uno-km/ameva-docfold',
        docs_url: 'https://uno-km.vercel.app/',
        tour_order: 14,
        audio_narrative: 'DocFold folds large documents into structured semantic tokens with evidence preservation.'
    },

    // ── Tier 4: Core Kernels, Algorithms & Hardware Primitives ──
    {
        node_id: 'ARM64-NEON-DotProd',
        name: 'ARM64 NEON vdotq_s32',
        category: 'CORE_ENGINE',
        depth_level: 4,
        parent_id: 'termux-bitnet',
        description: 'Vectorized assembly dot product kernel executing 16 ternary integer weights per cycle.',
        tech_stack: ['ARMv8.2-A', 'NEON', 'DotProd', 'vdotq_s32'],
        tags: ['neon', 'dotprod', 'assembly', 'kernel'],
        node_radius: 12.0,
        node_weight: 1.5,
        group_color: '#3ECF8E',
        pos_x: -240, pos_y: 90, pos_z: 40,
        orbit_phase: 0.9, orbit_freq: 0.004,
        tour_order: 15
    },
    {
        node_id: 'LoRA-Adapter-Engine',
        name: 'LoRA Low-Rank Tuning',
        category: 'ALGORITHM',
        depth_level: 4,
        parent_id: 'termux-train',
        description: 'Low-rank matrix decomposition adapter fine-tuning with SafeTensors weight checkpoints.',
        tech_stack: ['SafeTensors', 'LoRA', 'Gradient Descent'],
        tags: ['lora', 'fine-tuning', 'adapter'],
        node_radius: 12.0,
        node_weight: 1.5,
        group_color: '#3ECF8E',
        pos_x: -200, pos_y: 170, pos_z: 20,
        orbit_phase: 1.1, orbit_freq: 0.004,
        tour_order: 16
    },
    {
        node_id: 'WGSL-Compute-Shaders',
        name: 'WGSL Tensor Shaders',
        category: 'CORE_ENGINE',
        depth_level: 4,
        parent_id: 'AMEVA-Forge',
        description: 'Parallel WebGPU compute pipelines with zero-allocation ring buffer pooling.',
        tech_stack: ['WGSL', 'WebGPU', 'Buffer Pooling'],
        tags: ['wgsl', 'shader', 'gpu-compute'],
        node_radius: 12.0,
        node_weight: 1.5,
        group_color: '#00EFFF',
        pos_x: 230, pos_y: -90, pos_z: -40,
        orbit_phase: 0.8, orbit_freq: 0.004,
        tour_order: 17
    },
    {
        node_id: 'Pure-Python-Diarization',
        name: '128d X-Vector Diarization',
        category: 'ALGORITHM',
        depth_level: 4,
        parent_id: 'termux-stt',
        description: 'Pure Python K-Means clustering and cosine distance speaker separation.',
        tech_stack: ['Python', 'X-Vector', 'K-Means'],
        tags: ['diarization', 'clustering', 'audio'],
        node_radius: 12.0,
        node_weight: 1.5,
        group_color: '#3ECF8E',
        pos_x: -240, pos_y: 10, pos_z: -30,
        orbit_phase: 1.5, orbit_freq: 0.004,
        tour_order: 18
    },
    {
        node_id: 'Deterministic-Risk-Core',
        name: '0~100 Threat Scoring Core',
        category: 'ALGORITHM',
        depth_level: 4,
        parent_id: 'AMEVA-Sentinel',
        description: 'Multi-factor rule matrix assessing client anomaly without capturing user keystrokes.',
        tech_stack: ['Rule Engine', 'Entropy Matrix'],
        tags: ['risk-scoring', 'entropy', 'bot-rules'],
        node_radius: 12.0,
        node_weight: 1.5,
        group_color: '#10B981',
        pos_x: 120, pos_y: 230, pos_z: -60,
        orbit_phase: 2.2, orbit_freq: 0.004,
        tour_order: 19
    }
];

const SEED_EDGES = [
    // Tier 1 -> Tier 2
    { source_node_id: 'AMEVA-Universe', target_node_id: 'Mobile-Bionic-AI', relation_type: 'HIERARCHY', edge_weight: 4.0, label: 'Ecosystem Pillar' },
    { source_node_id: 'AMEVA-Universe', target_node_id: 'WebGPU-Browser-AI', relation_type: 'HIERARCHY', edge_weight: 4.0, label: 'Ecosystem Pillar' },
    { source_node_id: 'AMEVA-Universe', target_node_id: 'Security-Observability', relation_type: 'HIERARCHY', edge_weight: 4.0, label: 'Ecosystem Pillar' },
    { source_node_id: 'AMEVA-Universe', target_node_id: 'Autonomous-Systems', relation_type: 'HIERARCHY', edge_weight: 4.0, label: 'Ecosystem Pillar' },

    // Tier 2 -> Tier 3
    { source_node_id: 'Mobile-Bionic-AI', target_node_id: 'termux-bitnet', relation_type: 'HIERARCHY', edge_weight: 3.0, label: 'Flagship LLM' },
    { source_node_id: 'Mobile-Bionic-AI', target_node_id: 'termux-train', relation_type: 'HIERARCHY', edge_weight: 3.0, label: 'Tensor & Autograd' },
    { source_node_id: 'Mobile-Bionic-AI', target_node_id: 'termux-stt', relation_type: 'HIERARCHY', edge_weight: 3.0, label: 'Voice STT' },
    { source_node_id: 'Mobile-Bionic-AI', target_node_id: 'termux-diffusion', relation_type: 'HIERARCHY', edge_weight: 3.0, label: 'Image Gen' },
    { source_node_id: 'Mobile-Bionic-AI', target_node_id: 'termux-playwright', relation_type: 'HIERARCHY', edge_weight: 3.0, label: 'Automation' },

    { source_node_id: 'WebGPU-Browser-AI', target_node_id: 'AMEVA-Forge', relation_type: 'HIERARCHY', edge_weight: 3.0, label: 'Tensor Engine' },
    { source_node_id: 'WebGPU-Browser-AI', target_node_id: 'AMEVA-Workstation', relation_type: 'HIERARCHY', edge_weight: 3.5, label: 'Primary Web App' },

    { source_node_id: 'Security-Observability', target_node_id: 'AMEVA-Sentinel', relation_type: 'HIERARCHY', edge_weight: 3.0, label: 'Security SDK' },
    { source_node_id: 'Autonomous-Systems', target_node_id: 'AMEVA-DocFold', relation_type: 'HIERARCHY', edge_weight: 3.0, label: 'Semantic Compression' },

    // Cross-Domain Multi-Node Relations (N:M)
    { source_node_id: 'termux-train', target_node_id: 'termux-bitnet', relation_type: 'DEPENDENCY', edge_weight: 2.0, label: 'Weight Quantization' },
    { source_node_id: 'AMEVA-Workstation', target_node_id: 'AMEVA-Forge', relation_type: 'DATA_FLOW', edge_weight: 2.5, label: 'Client GPU Acceleration' },
    { source_node_id: 'AMEVA-Sentinel', target_node_id: 'AMEVA-Workstation', relation_type: 'SECURITY_SHIELD', edge_weight: 2.0, label: 'Traffic Shield' },

    // Tier 3 -> Tier 4 (Kernels & Algorithms)
    { source_node_id: 'termux-bitnet', target_node_id: 'ARM64-NEON-DotProd', relation_type: 'HARDWARE_BINDING', edge_weight: 2.0, label: 'SIMD Acceleration' },
    { source_node_id: 'termux-train', target_node_id: 'LoRA-Adapter-Engine', relation_type: 'ALGORITHM_CORE', edge_weight: 2.0, label: 'Adapter Tuning' },
    { source_node_id: 'AMEVA-Forge', target_node_id: 'WGSL-Compute-Shaders', relation_type: 'HARDWARE_BINDING', edge_weight: 2.0, label: 'GPU Pipeline' },
    { source_node_id: 'termux-stt', target_node_id: 'Pure-Python-Diarization', relation_type: 'ALGORITHM_CORE', edge_weight: 2.0, label: 'Speaker Diarization' },
    { source_node_id: 'AMEVA-Sentinel', target_node_id: 'Deterministic-Risk-Core', relation_type: 'ALGORITHM_CORE', edge_weight: 2.0, label: 'Risk Evaluation' }
];

async function ensureGraphSchemaAndSeed(sql) {
    if (isGraphSchemaReady) return;
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS graph_nodes (
                node_id VARCHAR(100) PRIMARY KEY,
                name VARCHAR(150) NOT NULL,
                category VARCHAR(50) NOT NULL,
                depth_level INT DEFAULT 1,
                parent_id VARCHAR(100),
                description TEXT,
                tech_stack TEXT[],
                tags TEXT[],
                node_radius NUMERIC(5,2) DEFAULT 16.0,
                node_weight NUMERIC(5,2) DEFAULT 1.0,
                group_color VARCHAR(30) DEFAULT '#7C3AED',
                pos_x NUMERIC(8,3) DEFAULT 0.0,
                pos_y NUMERIC(8,3) DEFAULT 0.0,
                pos_z NUMERIC(8,3) DEFAULT 0.0,
                orbit_phase NUMERIC(6,4) DEFAULT 0.0,
                orbit_freq NUMERIC(6,4) DEFAULT 0.002,
                repo_url TEXT,
                docs_url TEXT,
                demo_url TEXT,
                pypi_package VARCHAR(100),
                npm_package VARCHAR(100),
                tour_order INT,
                audio_narrative TEXT,
                is_active BOOLEAN DEFAULT TRUE,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `;

        await sql`
            CREATE TABLE IF NOT EXISTS graph_edges (
                edge_id BIGSERIAL PRIMARY KEY,
                source_node_id VARCHAR(100) NOT NULL,
                target_node_id VARCHAR(100) NOT NULL,
                relation_type VARCHAR(50) DEFAULT 'HIERARCHY',
                edge_weight NUMERIC(4,2) DEFAULT 1.0,
                is_bidirectional BOOLEAN DEFAULT FALSE,
                label VARCHAR(100),
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                CONSTRAINT uq_graph_edge_link UNIQUE (source_node_id, target_node_id, relation_type)
            );
        `;

        // Check if nodes are seeded
        const countRes = await sql`SELECT count(*)::int as cnt FROM graph_nodes;`;
        if (countRes && countRes[0].cnt === 0) {
            console.log('🌱 Seeding 4-Tier Knowledge Graph into Neon PostgreSQL...');
            for (const n of SEED_NODES) {
                await sql`
                    INSERT INTO graph_nodes (
                        node_id, name, category, depth_level, parent_id, description,
                        tech_stack, tags, node_radius, node_weight, group_color,
                        pos_x, pos_y, pos_z, orbit_phase, orbit_freq,
                        repo_url, docs_url, demo_url, pypi_package, npm_package,
                        tour_order, audio_narrative
                    ) VALUES (
                        ${n.node_id}, ${n.name}, ${n.category}, ${n.depth_level}, ${n.parent_id}, ${n.description},
                        ${n.tech_stack}, ${n.tags}, ${n.node_radius}, ${n.node_weight}, ${n.group_color},
                        ${n.pos_x}, ${n.pos_y}, ${n.pos_z}, ${n.orbit_phase}, ${n.orbit_freq},
                        ${n.repo_url}, ${n.docs_url}, ${n.demo_url || null}, ${n.pypi_package || null}, ${n.npm_package || null},
                        ${n.tour_order}, ${n.audio_narrative}
                    ) ON CONFLICT (node_id) DO NOTHING;
                `;
            }

            for (const e of SEED_EDGES) {
                await sql`
                    INSERT INTO graph_edges (
                        source_node_id, target_node_id, relation_type, edge_weight, label
                    ) VALUES (
                        ${e.source_node_id}, ${e.target_node_id}, ${e.relation_type}, ${e.edge_weight}, ${e.label}
                    ) ON CONFLICT DO NOTHING;
                `;
            }
            console.log('✅ 4-Tier Knowledge Graph successfully seeded into Neon DB.');
        }

        isGraphSchemaReady = true;
    } catch (err) {
        console.warn('Knowledge Graph Schema Init Warning:', err.message);
    }
}

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    const dbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || process.env.POSTGRES_URL;

    // Fallback in-memory response if DB URL is absent
    if (!dbUrl) {
        const d3Links = SEED_EDGES.map(e => ({
            source: e.source_node_id,
            target: e.target_node_id,
            value: e.edge_weight,
            type: e.relation_type,
            label: e.label
        }));
        return res.status(200).json({
            ok: true,
            source: 'embedded_fallback',
            data: {
                nodes: SEED_NODES.map(n => ({
                    id: n.node_id,
                    name: n.name,
                    group: n.depth_level,
                    category: n.category,
                    radius: n.node_radius,
                    description: n.description,
                    tech_stack: n.tech_stack,
                    tags: n.tags,
                    url: n.docs_url || n.repo_url,
                    repo_url: n.repo_url,
                    docs_url: n.docs_url,
                    phaseX: n.orbit_phase,
                    phaseY: n.orbit_phase,
                    freqX: n.orbit_freq,
                    freqY: n.orbit_freq,
                    metadata: {
                        root: n.depth_level === 1,
                        depth: n.depth_level,
                        pypi: n.pypi_package,
                        npm: n.npm_package
                    }
                })),
                links: d3Links
            }
        });
    }

    try {
        const sql = neon(dbUrl);
        await ensureGraphSchemaAndSeed(sql);

        // GET: Fetch Active Graph Structure
        if (req.method === 'GET') {
            const rawNodes = await sql`
                SELECT node_id, name, category, depth_level, parent_id, description,
                       tech_stack, tags, node_radius, node_weight, group_color,
                       pos_x, pos_y, pos_z, orbit_phase, orbit_freq,
                       repo_url, docs_url, demo_url, pypi_package, npm_package,
                       tour_order, audio_narrative
                FROM graph_nodes
                WHERE is_active = true
                ORDER BY depth_level ASC, tour_order ASC;
            `;

            const rawEdges = await sql`
                SELECT source_node_id, target_node_id, relation_type, edge_weight, label
                FROM graph_edges;
            `;

            // Transform into D3 Force-Directed Graph standard format
            const formattedNodes = rawNodes.map(n => ({
                id: n.node_id,
                name: n.name,
                group: n.depth_level,
                category: n.category,
                radius: parseFloat(n.node_radius) || 16,
                weight: parseFloat(n.node_weight) || 1.0,
                color: n.group_color,
                description: n.description,
                tech_stack: n.tech_stack || [],
                tags: n.tags || [],
                url: n.docs_url || n.repo_url,
                repo_url: n.repo_url,
                docs_url: n.docs_url,
                demo_url: n.demo_url,
                phaseX: parseFloat(n.orbit_phase) || 0,
                phaseY: parseFloat(n.orbit_phase) || 0,
                freqX: parseFloat(n.orbit_freq) || 0.002,
                freqY: parseFloat(n.orbit_freq) || 0.002,
                tour_order: n.tour_order,
                audio_narrative: n.audio_narrative,
                metadata: {
                    root: n.depth_level === 1,
                    depth: n.depth_level,
                    category: n.category,
                    pypi: n.pypi_package,
                    npm: n.npm_package
                }
            }));

            const formattedLinks = rawEdges.map(e => ({
                source: e.source_node_id,
                target: e.target_node_id,
                value: parseFloat(e.edge_weight) || 1.0,
                type: e.relation_type,
                label: e.label
            }));

            res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
            return res.status(200).json({
                ok: true,
                source: 'neon_postgresql',
                total_nodes: formattedNodes.length,
                total_edges: formattedLinks.length,
                data: {
                    nodes: formattedNodes,
                    links: formattedLinks
                }
            });
        }

        // POST: Dynamic Node/Edge Upsert
        if (req.method === 'POST') {
            const body = req.body || {};
            const { action, node, edge } = body;

            if (action === 'upsert_node' && node) {
                await sql`
                    INSERT INTO graph_nodes (
                        node_id, name, category, depth_level, parent_id, description,
                        tech_stack, tags, node_radius, node_weight, group_color,
                        repo_url, docs_url, pypi_package, npm_package
                    ) VALUES (
                        ${node.node_id}, ${node.name}, ${node.category || 'PROJECT'}, ${node.depth_level || 3},
                        ${node.parent_id || 'AMEVA-Universe'}, ${node.description || ''},
                        ${node.tech_stack || []}, ${node.tags || []}, ${node.node_radius || 16}, ${node.node_weight || 1},
                        ${node.group_color || '#3ECF8E'}, ${node.repo_url || ''}, ${node.docs_url || ''},
                        ${node.pypi_package || ''}, ${node.npm_package || ''}
                    ) ON CONFLICT (node_id) DO UPDATE SET
                        name = EXCLUDED.name,
                        description = EXCLUDED.description,
                        tech_stack = EXCLUDED.tech_stack,
                        tags = EXCLUDED.tags,
                        updated_at = CURRENT_TIMESTAMP;
                `;
                return res.status(200).json({ ok: true, message: `Node ${node.node_id} upserted.` });
            }

            if (action === 'upsert_edge' && edge) {
                await sql`
                    INSERT INTO graph_edges (
                        source_node_id, target_node_id, relation_type, edge_weight, label
                    ) VALUES (
                        ${edge.source}, ${edge.target}, ${edge.relation_type || 'HIERARCHY'}, ${edge.weight || 1.0}, ${edge.label || ''}
                    ) ON CONFLICT (source_node_id, target_node_id, relation_type) DO UPDATE SET
                        edge_weight = EXCLUDED.edge_weight,
                        label = EXCLUDED.label;
                `;
                return res.status(200).json({ ok: true, message: 'Edge upserted.' });
            }

            return res.status(400).json({ ok: false, error: 'Invalid action or payload' });
        }

    } catch (error) {
        console.error('Neon DB Graph API Error:', error);
        return res.status(500).json({ ok: false, error: error.message });
    }
}
