// projectsData.js
import getProjectImages from '../components/projects/getProjectImages';

const projects_ENG = [
  // Real-time B2B voice agent
  {
    id: "b2b-voice-agent-pfe",
    folderid: "b2b-voice-agent-pfe",
    projectType: "web",
    platforme: "Real-Time Conversational AI System",
    title: "Real-Time AI Voice Agent for B2B Telephony",
    image: getProjectImages('b2b-voice-agent-pfe', [
      'system-architecture.png',
      'dashboard-overview.png',
      'live-call-monitoring.png',
      'use-case-diagram.png',
      'barge-in-sequence-diagram.png',
      'llm-training-loss.png',
      'tts-eval-loss.png',
      'tts-latency-rtf.png'
    ]),
    category: "Conversational AI & Speech Systems",
    date: "Feb 2026 - Jul 2026",
    client_for: "Arboris Management",
    role: "AI Engineer & System Architect",
    description: "A real-time AI voice pipeline for B2B phone conversations in Moroccan Darija mixed with French, built at Arboris Management. It combines domain-adapted speech recognition, dialogue, and text-to-speech models with an asynchronous multi-call architecture and natural mid-call interruption handling, validated end to end in a sandbox environment and designed for telephony deployment via Asterisk/SIP.",
    research_paper: "",

    technology: ["Python", "PyTorch", "Whisper", "LoRA / QLoRA", "Qwen2.5", "XTTS v2 (Coqui)", "vLLM", "FastAPI", "Asterisk", "Next.js"],
    technology_used: {
      'speech_and_language': ["Whisper (domain-adapted with LoRA)", "Qwen2.5-7B-Instruct (QLoRA)", "XTTS v2 (Coqui, fine-tuned)", "Automatic speech recognition", "Dialogue generation", "Speech synthesis"],
      'architecture': ["Asynchronous microservices", "Concurrent multi-call handling", "Barge-in / interruption recovery"],
      'telephony': ["Asterisk / SIP (architecture designed)", "Live PSTN integration: remaining work"],
      'serving': ["vLLM", "FastAPI"],
      'front_end': ["Next.js"]
    },

    RoleResp: [{
      Title_1: "AI Engineer & System Architect",
      Data: [
        {
          Title: "Speech, Language & Voice Synthesis",
          Data: [
            "Built the training corpus from real B2B call recordings and domain-adapted Whisper for speech recognition on Darija-French code-switched speech",
            "Fine-tuned Qwen2.5-7B-Instruct for the agent's dialogue generation, tailored to B2B phone conversations",
            "Fine-tuned XTTS v2 (Coqui) on a small, single-speaker Darija/French dataset to produce the agent's voice, evaluated through training-loss trajectory and synthesis-latency tests rather than a formal quality benchmark",
            "Co-authored a research paper on the speech-recognition component of the system (see the linked paper for the full methodology and results)"
          ]
        },
        {
          Title: "System Architecture",
          Data: [
            "Designed an asynchronous, concurrent microservices architecture built to handle multiple calls at once, replacing an earlier sequential 'stop-and-go' pipeline, and validated it end to end in a sandbox test environment",
            "Worked on the telephony integration architecture around Asterisk/SIP, with full live PSTN connection remaining as the next stage",
            "Implemented barge-in so callers can interrupt the agent mid-sentence without it losing conversational context"
          ]
        },
        {
          Title: "Delivery",
          Data: [
            "Took the project from an internship at Arboris Management to a validated AI voice pipeline, with live telephony integration as the next step",
            "Built the Next.js dashboard used to monitor and manage live calls"
          ]
        }
      ],
    }],

    KeyFeatures: [{
      Title_1: "What the Agent Does",
      Data: [
        {
          Title: "Bilingual, Code-Switched Conversation",
          Data: [
            "Understands and responds naturally to Darija mixed with French, the way B2B calls actually sound in Morocco",
            "Domain-adapted rather than relying on a generic multilingual model"
          ]
        },
        {
          Title: "Real Interruptions, Not Scripted Turns",
          Data: [
            "Callers can cut the agent off mid-sentence and it recovers context instead of restarting or ignoring them",
            "Feels like a live conversation rather than a rigid IVR menu"
          ]
        },
        {
          Title: "Handles Many Calls at Once",
          Data: [
            "Asynchronous architecture serves multiple concurrent calls with fast round-trip response",
            "No sequential bottleneck between calls"
          ]
        }
      ],
    }],

    ChallSolu: [{
      Title_1: "Challenges & Solutions",
      Data: [
        {
          Title: "Low-Resource, Code-Switched Speech",
          Data: [
            "Challenge: Moroccan Darija has limited annotated speech data and no standard orthography, and it's frequently mixed with French mid-sentence. I also hadn't worked on speech models before this project",
            "Solution: researched and learned domain adaptation for speech models from scratch, then combined a public Darija speech corpus with purpose-collected B2B call recordings",
            "Result: a speech-recognition component accurate enough for real B2B calls, documented in the co-authored research paper"
          ]
        },
        {
          Title: "Conversational Latency",
          Data: [
            "Challenge: a sequential pipeline meant each stage of the call (listen, understand, respond) waited on the last, which felt slow and unnatural over the phone",
            "Solution: redesigned the pipeline as asynchronous microservices instead of a linear chain",
            "Result: fast enough round-trip response that the conversation feels live"
          ]
        },
        {
          Title: "Natural Interruptions",
          Data: [
            "Challenge: most voice bots break or lose context if the caller talks over them",
            "Solution: implemented barge-in detection and interruption recovery into the conversation flow",
            "Result: callers can interrupt naturally without derailing the call"
          ]
        }
      ],
    }],

    github_link: "#",
    live_demo: ""
  },

  // 0. Domain-adaptive ASR research paper
  {
    id: "darija-asr-research",
    folderid: "darija-asr-research",
    projectType: "research",
    platforme: "Speech Recognition Research",
    title: "Domain-Adaptive ASR for Moroccan Darija-French Code-Switched B2B Telephony",
    image: getProjectImages('project-darija-asr-research', [
      'b2b-benchmark-wer.png',
      'general-darija-benchmark-cer.png',
      'accuracy-latency-tradeoff.png',
      'lora-rank-effect.png',
      'training-data-ablation.png',
      'utterance-length-effect.png',
      'methodology-dataflow.png'
    ]),
    category: "Speech Recognition & Domain Adaptation",
    date: "2026",
    client_for: "Academic Research",
    role: "Lead Researcher",
    description: "A domain-adaptive speech-recognition study for Moroccan Darija-French code-switched B2B phone calls, built as the speech-recognition component of a larger real-time voice-agent project. Whisper-large-v3-turbo was adapted with LoRA, testing different training-data mixes and adapter ranks. The best setup reached 18.22% WER on a B2B telephony benchmark and 6.64% on general Darija, with a Real-Time Factor of 0.047. Co-authored with an academic and an industry supervisor.",
    research_paper: "",

    technology: ["Python", "PyTorch", "Whisper", "LoRA", "Hugging Face", "faster-whisper"],
    technology_used: {
      'modeling': ["Whisper-large-v3-turbo", "LoRA (ranks 8 / 32 / 64)", "Parameter-efficient fine-tuning"],
      'evaluation': ["Word Error Rate", "Character Error Rate", "Real-Time Factor", "Frozen, append-only evaluation protocol"],
      'data': ["DODa general-Darija corpus", "Recorded B2B telephony audio", "Linguistic-boundary text normalization"],
      'tooling': ["Hugging Face Transformers", "PyTorch", "faster-whisper"]
    },

    researchResults: {
      keyMetrics: [
        { metric: "B2B Telephony WER", value: "18.22%", description: "n = 1,010, best configuration (LoRA r=64)" },
        { metric: "General-Darija WER", value: "6.64%", description: "n = 1,270, held out" },
        { metric: "Real-Time Factor", value: "0.047", description: "Single-utterance inference" }
      ],
      keyFindings: [
        "Combining a small amount of domain-matched B2B audio with a general Darija corpus outperforms training on either one alone",
        "Going from LoRA rank 8 to 64 improved accuracy on both benchmarks without hurting latency",
        "The fine-tuned model landed on a better accuracy-latency trade-off than the public Darija ASR baselines and the original multilingual Whisper models",
        "Conventional WER disproportionately penalizes very short utterances (1-2 words), which are common in phone calls and worth accounting for with complementary metrics"
      ]
    },

    RoleResp: [{
      Title_1: "Lead Researcher",
      Data: [
        {
          Title: "Data & Methodology",
          Data: [
            "Built the domain-specific B2B telephony speech corpus and combined it with the public DODa general-Darija dataset",
            "Defined a frozen, append-only train/eval split protocol to keep evaluation benchmarks genuinely unseen across iterations",
            "Applied a linguistic-boundary text-normalization rule (Arabic script for Darija, Latin script for French) to the transcription data"
          ]
        },
        {
          Title: "Experimentation",
          Data: [
            "Fine-tuned Whisper-large-v3-turbo with LoRA across three ranks (8/32/64) and three data compositions (DODa-only, B2B-only, combined)",
            "Benchmarked against public Moroccan Darija ASR models and original multilingual Whisper baselines under one evaluation protocol",
            "Measured WER, CER and RTF on both a held-out general-Darija benchmark and an independently constructed B2B telephony benchmark"
          ]
        },
        {
          Title: "Analysis & Writing",
          Data: [
            "Ran an error analysis by conversational utterance length, showing where conventional WER overstates error on short turns",
            "Wrote and co-authored the paper with an academic supervisor at FSBM, Hassan II University, and an industry supervisor"
          ]
        }
      ],
    }],

    KeyFeatures: [{
      Title_1: "Research Methodology",
      Data: [
        {
          Title: "Controlled Dataset Ablation",
          Data: [
            "Models trained on: (i) general Darija speech alone, (ii) domain-specific B2B recordings alone, (iii) the combined corpus",
            "Isolates the marginal contribution of domain-matched data versus general-domain speech",
            "All splits frozen and append-only to prevent evaluation leakage across training iterations"
          ]
        },
        {
          Title: "LoRA Capacity Ablation",
          Data: [
            "Adapter rank varied across 8, 32 and 64 under otherwise identical training conditions",
            "Evaluated jointly on accuracy (WER/CER) and inference efficiency (RTF)",
            "Rank 64 on the combined corpus produced the best result on both benchmarks"
          ]
        },
        {
          Title: "Deployment-Aware Evaluation",
          Data: [
            "Held-out general-Darija benchmark (n=1,270) plus an independently built B2B telephony benchmark (n=1,010)",
            "Real-Time Factor measured alongside WER/CER, since the ASR model is one stage of a larger real-time voice pipeline",
            "Utterance-length error analysis to characterize WER behavior on short, real telephone turns"
          ]
        }
      ],
    }],

    ChallSolu: [{
      Title_1: "Research Challenges & Solutions",
      Data: [
        {
          Title: "Low-Resource, Code-Switched, Domain-Specific Speech",
          Data: [
            "Challenge: Moroccan Darija has limited annotated speech data, no standard orthography, and frequent code-switching with French, worsened by B2B-specific vocabulary and channel noise",
            "Solution: combine a public general-Darija corpus with purpose-collected B2B recordings, normalized under a consistent linguistic-boundary convention",
            "Result: 18.22% WER on the B2B benchmark, well below every evaluated public baseline"
          ]
        },
        {
          Title: "Accuracy Without a Latency Penalty",
          Data: [
            "Challenge: the ASR component feeds a real-time conversational pipeline, so accuracy gains that cost inference speed are self-defeating",
            "Solution: evaluate accuracy and Real-Time Factor jointly across every LoRA configuration rather than optimizing WER alone",
            "Result: the best-accuracy configuration also kept RTF at 0.047, on par with (and slightly better than) the unmodified base model"
          ]
        },
        {
          Title: "Evaluation Integrity Across Iterations",
          Data: [
            "Challenge: iterative model development risks evaluation data leaking into training over successive rounds",
            "Solution: a frozen, append-only train/eval split protocol that never reshuffles previously held-out data",
            "Result: benchmark numbers stay comparable and genuinely unseen across the whole development cycle"
          ]
        }
      ],
    }],

    metrics: {
      wer_b2b: "18.22%",
      wer_darija: "6.64%",
      rtf: "0.047",
      coauthors: "3 (academic + industry supervision)"
    },

    github_link: "#",
    live_demo: ""
  },

  // 1. Retail Zoning System for WafR
  {
    id: "retail-zoning-system",
    folderid: "retail-zoning",
    projectType: "research",
    platforme: "Geospatial Zoning System",
    title: "Intelligent Zoning System for Morocco's Retail Distribution Network",
    image: getProjectImages('project-retail-zoning', [
      'zoning-national-map.png',
      'casablanca-zones.png', 
      'dashboard.png',
      'tools.png',
      'merge.png',
      'clustering.png'
    ]),
    category: "Data Science & Geospatial Analytics",
    date: "2025",
    client_for: "WafR - Final Year Project",
    role: "Data Scientist & Geospatial Analyst",
    description: "Development of a national zoning system to optimize commercial coverage of informal grocery stores in Morocco. Using geospatial data, socio-demographic indicators, and capacity-constrained clustering to balance sales territories.",
    research_paper: "",
    
    technology: ["Python", "GeoPandas", "Scikit-learn", "OpenStreetMap", "QGIS", "Folium", "FastAPI", "React"],
    technology_used: {
      'data_processing': ["Pandas", "NumPy", "Data Cleaning"],
      'geospatial': ["GeoPandas", "OpenStreetMap", "QGIS", "Folium"],
      'ml_clustering': ["Scikit-learn", "Constrained K-Means", "Capacity Clustering"],
      'visualization': ["Matplotlib", "Seaborn", "Folium", "QGIS"],
      'data_sources': ["Census 2024", "Points of Interest", "Demographic Data"],
      'front_end': ["React", "Tailwind CSS", "JavaScript"],
      'back_end': ["Python", "FastAPI"],
      //'ai_ml': ["Scikit-learn", "K-Means Constrained", "Clustering Capacité"]
    },
    
    researchResults: {
      keyMetrics: [
        { metric: "Points of Interest Collected", value: "72,000", description: "Initial raw data" },
        { metric: "Estimated Grocery Stores", value: "69,000", description: "After weighting and cleaning" },
        { metric: "Commercial Zones Created", value: "535", description: "Balanced national zones" },
        { metric: "Target Stores per Zone", value: "300-400", description: "Balanced workload" }
      ],
      cityCoverage: [
        { city: "Casablanca", zones: 32 },
        { city: "Marrakech", zones: 27 },
        { city: "Rabat", zones: 13 },
        { city: "Fès", zones: 10 },
        { city: "Agadir", zones: 10 },
        { city: "Salé", zones: 10 },
        { city: "Tanger", zones: 11 }
      ]
    },
    
    RoleResp: [{
      Title_1: "Data Scientist & Geospatial Analyst",
      Data: [
        {
          Title: "Data Collection and Preprocessing",
          Data: [
            "Extraction and cleaning of 72,000 points of interest (mosques, souks, schools, hospitals)",
            "Integration of 2024 census data for demographic weighting",
            "Urban-rural classification and data deduplication"
          ]
        },
        {
          Title: "Modeling and Estimation",
          Data: [
            "Development of population-density-activity weighting model",
            "Realistic estimation of grocery store distribution at national scale",
            "Reduction from 72,000 to 69,000 points via minimization strategy"
          ]
        },
        {
          Title: "Clustering and Intelligent Zoning",
          Data: [
            "Implementation of capacity-constrained K-Means algorithm",
            "Creation of 535 balanced commercial zones (300-400 stores/zone)",
            "Ensuring spatial coherence and urban morphological alignment"
          ]
        }
      ],
    }],
    
    KeyFeatures: [{
      Title_1: "Research Methodology",
      Data: [
        {
          Title: "Geospatial Data Preparation",
          Data: [
            "Integration of administrative boundaries and census indicators",
            "Alignment to common coordinate system",
            "Enrichment with commune-level attributes"
          ]
        },
        {
          Title: "Demand Estimation and Weight Assignment",
          Data: [
            "Composite weighting based on population, density and souk activity",
            "Capture of demographic pressure and urban intensity",
            "Modeling of traditional market commercial activity"
          ]
        },
        {
          Title: "Capacity-Constrained Clustering",
          Data: [
            "Algorithm respecting maximum workload per cluster",
            "Weighted initialization to avoid starting biases",
            "Production of operationally fair zones"
          ]
        }
      ],
    }],
    
    ChallSolu: [{
      Title_1: "Technical Challenges & Solutions",
      Data: [
        {
          Title: "Informal Commerce Nature",
          Data: [
            "Challenge: Lack of official data on informal grocery stores",
            "Solution: Use of geospatial proxies (POIs) and demographic weighting",
            "Result: Realistic estimation of 69,000 stores from indirect signals"
          ]
        },
        {
          Title: "Territory Balancing",
          Data: [
            "Challenge: Creating balanced zones despite variable density",
            "Solution: Capacity-constrained clustering algorithm",
            "Result: 535 zones with 300-400 stores each, spatially coherent"
          ]
        },
        {
          Title: "National Coverage",
          Data: [
            "Challenge: Inclusion of rural and low-density areas",
            "Solution: Urban-rural classification and differentiated treatment",
            "Result: System covering entire Moroccan territory"
          ]
        }
      ],
    }],
    
    BusinessImpact: [{
      Title_1: "Operational Impact for WafR",
      Data: [
        {
          Title: "Field Operations Optimization",
          Data: [
            "Reduction of uneven coverage (overserved vs neglected areas)",
            "Efficient deployment of commercial teams",
            "Balanced territory assignment for sales teams"
          ]
        },
        {
          Title: "Data-Driven Decision Making",
          Data: [
            "Improved spatial visibility on distribution network",
            "Integration of population and density variations in planning",
            "Standardized, reusable framework for commercial strategy"
          ]
        }
      ],
    }],
    
    VisualsMedia: {
      Maps: [
        { 
          image: ['zoning-national-map.png', 'casablanca-zones.png'],
          info: [
            'National map showing 535 commercial zones',
            'Zoning detail in Casablanca with 32 balanced zones'
          ]
        }
      ],
      Process: [
        { 
          image: ['merge.png', 'clustering.png'],
          info: [
            'Multi-source data integration and fusion process',
            'Visualization of capacity-constrained clustering algorithm'
          ]
        }
      ],
      Tools: [
        { 
          image: ['dashboard.png', 'tools.png'],
          info: [
            'System analysis and monitoring dashboard',
            'Technical stack and development tools used'
          ]
        }
      ]
    },
    
    metrics: {
      data_points: "72,000 POIs",
      estimated_stores: "69,000",
      zones_created: "535",
      target_per_zone: "300-400",
      coverage: "National"
    }
  },

  // 1. Intelligent RAG System
  {
    id: "rag-system",
    folderid: "rag-system",
    projectType: "web",
    platforme: "Full-Stack Web Application",
    title: "Intelligent RAG System for Math Education",
    image: getProjectImages('project-rag-system'),
    category: "AI & Education",
    date: "2025",
    client_for: "Academic Project",
    role: "Full-Stack AI Developer",
    description: "An intelligent Retrieval-Augmented Generation system that helps students find and understand math exercises. Features web scraping, AI-powered explanations, semantic search, and a modern web interface.",
    github_link: "https://github.com/NizarBelaatik/RAG_Math_College",
    live_demo: "",
    
    technology: ["Python", "FastAPI", "React", "FAISS", "HuggingFace", "OpenRouter API"],
    technology_used: {
      'front_end': ["React", "Tailwind CSS", "JavaScript"],
      'back_end': ["Python", "FastAPI", "LangChain"],
      'ai_ml': ["HuggingFace Embeddings", "FAISS", "OpenRouter API"],
      'database': ['JSONL', "Vector Database"],
      'tools': ['Selenium', 'BeautifulSoup', 'pdfplumber']
    },
    
    RoleResp: [{
      Title_1: "Full-Stack AI Developer",
      Data: [
        {
          Title: "Data Pipeline Development",
          Data: [
            "Built web scraping system to extract math exercises from AlloSchool",
            "Implemented PDF processing and text extraction pipeline",
            "Created AI enrichment system using OpenRouter API for step-by-step explanations"
          ]
        },
        {
          Title: "RAG System Architecture",
          Data: [
            "Designed vector search system with FAISS and HuggingFace embeddings",
            "Implemented semantic search backend with FastAPI",
            "Built React frontend with real-time chat interface"
          ]
        },
        {
          Title: "AI Integration",
          Data: [
            "Integrated multiple AI models for content generation and enrichment",
            "Implemented caching and optimization for API calls",
            "Developed prompt engineering for educational content"
          ]
        }
      ],
    }],
    
    KeyFeatures: [{
      Title_1: null,
      Data: [
        {
          Title: "Intelligent Search & Retrieval",
          Data: [
            "Semantic search across 1,500+ math exercises",
            "FAISS vector database for fast similarity search",
            "Multilingual embeddings for French/Arabic content"
          ]
        },
        {
          Title: "AI-Powered Explanations",
          Data: [
            "Step-by-step solutions generated by AI",
            "Automatic correction for missing answers",
            "Contextual explanations based on student queries"
          ]
        },
        {
          Title: "Modern Web Interface",
          Data: [
            "Real-time chat interface with response navigation",
            "Responsive design with Tailwind CSS",
            "Multiple answer regeneration and filtering"
          ]
        }
      ],
    }],
    
    VisualsMedia: {
      ScreenShot: [
        { 
          image: ['rag-dashboard.png'],
          info: ['Main dashboard showing search interface and chat functionality']
        },
        { 
          image: ['rag-results.png'],
          info: ['Search results with multiple exercise solutions and navigation']
        }
      ],
      Diagrams: [
        { 
          image: ['rag-architecture.png'],
          info: ['System architecture diagram showing data flow and components']
        }
      ],
      VideoDemo: [
        { 
          video: ['rag-demo.mp4'],
          info: ['Live demonstration of the RAG system in action']
        }
      ]
    },
  },

  // 2. GAN Optimization Research
  {
    id: "gan-optimization",
    folderid: "gan-optimization", 
    projectType: "research",
    platforme: "Machine Learning Research",
    title: "GAN Optimization: Comparative Study of Optimization Algorithms",
    image: getProjectImages('project-gan-optimization'),
    category: "Deep Learning & GANs",
    date: "Jun-2025",
    client_for: "Academic Research",
    role: "ML Research Engineer",
    description: "Research analyzing the impact of optimization algorithms (Adam, RMSprop, SGD, Lookahead) on GAN training stability and output quality using DCGAN architecture on CIFAR-10 dataset.",
    github_link: "https://github.com/NizarBelaatik/gan-optimization-benchmark",
    research_paper: "",
    
    technology: ["PyTorch", "Python", "DCGAN", "CIFAR-10", "Adam", "RMSprop", "SGD", "Lookahead"],
    technology_used: {
      'ml_framework': ["PyTorch", "NumPy", "Matplotlib", "Seaborn"],
      'architecture': ["DCGAN", "CNN", "Generator-Discriminator"],
      'optimizers': ["Adam", "RMSprop", "SGD+Momentum", "Lookahead"],
      'dataset': ["CIFAR-10", "Image Processing"],
      'evaluation': ["Loss Analysis", "FID Score", "Visual Quality Assessment", "Mode Collapse Detection"]
    },
    
    researchResults: {
      fidScores: [
        { optimizer: "SGD with Momentum", score: 284.68, rank: 1 },
        { optimizer: "RMSprop", score: 286.49, rank: 2 },
        { optimizer: "Lookahead", score: 293.12, rank: 3 },
        { optimizer: "Adam", score: 294.13, rank: 4 }
      ],
      keyFindings: [
        "Lookahead showed the most stable convergence with minimal oscillations",
        "Adam converged fastest but exhibited occasional instability",
        "SGD with Momentum provided steady but slower improvement",
        "RMSprop was prone to divergence and repetitive patterns"
      ]
    },
    
    RoleResp: [{
      Title_1: "ML Research Engineer",
      Data: [
        {
          Title: "Experimental Design & Implementation",
          Data: [
            "Designed controlled experiments comparing 4 optimization algorithms on DCGAN architecture",
            "Implemented consistent training pipeline with PyTorch on CIFAR-10 dataset",
            "Developed evaluation metrics including FID scores and loss analysis"
          ]
        },
        {
          Title: "Performance Analysis",
          Data: [
            "Calculated Fréchet Inception Distance (FID) for quantitative comparison",
            "Analyzed training stability through loss curve visualization",
            "Evaluated visual quality and diversity across 15 training epochs"
          ]
        }
      ],
    }],
    
    KeyFeatures: [{
      Title_1: "Research Methodology",
      Data: [
        {
          Title: "Systematic Benchmarking",
          Data: [
            "Systematic comparison of Adam, RMSprop, SGD+Momentum, and Lookahead optimizers",
            "Quantitative analysis using loss curves and Fréchet Inception Distance (FID)",
            "Qualitative assessment through visual inspection of generated samples"
          ]
        },
        {
          Title: "Technical Implementation",
          Data: [
            "DCGAN architecture with consistent hyperparameters across all experiments",
            "Training on CIFAR-10 dataset (60,000 images, 10 classes)",
            "15 epochs training with batch size 64 and binary cross-entropy loss"
          ]
        },
        {
          Title: "Key Findings & Insights",
          Data: [
            "Identified Lookahead as most stable optimizer with smooth convergence",
            "Adam showed fastest convergence but occasional instability",
            "SGD with Momentum provided stable but slower training progression",
            "RMSprop exhibited sensitivity to adversarial dynamics"
          ]
        }
      ],
    }],
    
    ChallSolu: [{
      Title_1: "Research Challenges & Solutions",
      Data: [
        {
          Title: "Training Instability & Mode Collapse",
          Data: [
            "Challenge: GAN training prone to divergence and mode collapse with certain optimizers",
            "Solution: Implemented Lookahead optimizer and careful hyperparameter tuning",
            "Result: Achieved stable training with diverse output generation"
          ]
        },
        {
          Title: "Objective Evaluation Metrics",
          Data: [
            "Challenge: Subjective nature of GAN evaluation makes comparison difficult",
            "Solution: Combined quantitative (FID scores, loss curves) and qualitative (visual inspection) methods",
            "Result: Assessment covering both stability and output quality"
          ]
        },
        {
          Title: "Reproducible Research",
          Data: [
            "Challenge: Ensuring consistent experimental conditions across optimizer comparisons",
            "Solution: Standardized architecture, dataset, and training procedures",
            "Result: Fair and reproducible benchmarking of optimization algorithms"
          ]
        }
      ],
    }],
    
    VisualsMedia: {
      ScreenShot: [
        { 
          image: ['gan-loss-curves.png', 'gan-comparison.png'],
          info: ['Generator and discriminator loss curves across optimizers', 'Comparative analysis of training stability']
        },
        { 
          image: ['gan-samples-evolution.png', 'gan-epoch-comparison.png'],
          info: ['Generated image progression across training epochs', 'Visual quality comparison at different training stages']
        }
      ],
      Diagrams: [
        { 
          image: ['gan-architecture.png', 'gan-experimental-setup.png'],
          info: ['DCGAN architecture diagram', 'Experimental setup and methodology flowchart']
        }
      ],
      ResearchData: [
        {
          image: ['gan-fid-scores.png', 'gan-results-table.png'],
          info: ['FID score comparison across optimizers', 'Quantitative results summary table']
        }
      ]
    },
    
    // Add specific metrics for this project
    metrics: {
      optimizers_tested: "4",
      training_epochs: "15",
      dataset_size: "60,000 images",
      best_fid_score: "284.68 (SGD)",
      key_finding: "Lookahead = Most Stable"
    }
  },
  
  // 2. RecruSmart Microservices Recruitment Platform
  {
    id: "recrusmart-microservices",
    folderid: "recrusmart-microservices",
    projectType: "web",
    platforme: "Microservices Architecture Platform",
    title: "RecruSmart - Intelligent Recruitment Platform",
    image: getProjectImages('project-recrusmart',['recrusmart-homepage.png',
      'recrusmart-homepage-dark.png', 
      'recrusmart-offers.png', 
      'recrusmart-login.png', 
      'recrusmart-registration.png']),
      
    category: "Microservices & Enterprise Architecture",
    date: "2025",
    client_for: "Academic Project",
    role: "Full-Stack Microservices Developer & System Architect",
    description: "An intelligent recruitment platform built with microservices architecture, Domain-Driven Design, and event-driven communication. Features AI-powered CV analysis, automated matching, and multi-channel notifications.",
    github_link: "",
    live_demo: "",
    
    technology: ["Spring Boot", "Node.js", "FastAPI", "React", "Docker", "Kubernetes", "RabbitMQ", "MongoDB", "MySQL"],
    technology_used: {
      'backend_frameworks': ["Spring Boot (Java)", "Node.js/Express", "FastAPI (Python)"],
      'frontend': ["React 18", "TypeScript", "Tailwind CSS"],
      'architecture': ["Microservices", "Domain-Driven Design", "Event-Driven Architecture"],
      'databases': ["MongoDB", "MySQL", "Cloudflare R2"],
      'messaging': ["RabbitMQ", "Event Sourcing"],
      'infrastructure': ["Docker", "Kubernetes", "Consul", "Spring Cloud Gateway"],
      'ai_ml': ["spaCy", "Sentence Transformers", "Mistral 7B", "NLP"]
    },
    
    RoleResp: [{
      Title_1: "System Architect & Full-Stack Developer",
      Data: [
        {
          Title: "Domain-Driven Design Implementation",
          Data: [
            "Designed and implemented 6 bounded contexts using strategic DDD patterns",
            "Created context maps and defined ubiquitous language for recruitment domain",
            "Implemented aggregates, domain events, and value objects across services"
          ]
        },
        {
          Title: "Microservices Architecture Development",
          Data: [
            "Built 6 independent microservices using polyglot persistence",
            "Implemented event-driven communication with RabbitMQ",
            "Designed and deployed API Gateway with Spring Cloud Gateway",
            "Configured service discovery using Consul"
          ]
        },
        {
          Title: "AI Integration & Business Logic",
          Data: [
            "Integrated NLP models for automated CV analysis and scoring",
            "Implemented intelligent matching algorithms between candidates and job offers",
            "Developed notification system with multi-channel delivery (Email, WhatsApp)"
          ]
        }
      ],
    }],
    
    KeyFeatures: [{
      Title_1: "Architecture & Technical Features",
      Data: [
        {
          Title: "Microservices Architecture",
          Data: [
            "6 independent services: Auth, Candidate, Offer, AI, Interview, Notification",
            "Polyglot persistence with MongoDB and MySQL",
            "Event-driven communication via RabbitMQ",
            "Containerized with Docker and orchestrated with Kubernetes"
          ]
        },
        {
          Title: "Domain-Driven Design Implementation",
          Data: [
            "Strategic design with bounded contexts and context mapping",
            "Tactical patterns: Aggregates, Domain Events, Value Objects",
            "Ubiquitous language aligned with recruitment business domain"
          ]
        },
        {
          Title: "Intelligent Recruitment Features",
          Data: [
            "AI-powered CV analysis using spaCy and transformer models",
            "Automated candidate-offer matching with scoring algorithms",
            "Multi-language support (French/Arabic) for Moroccan market",
            "Google Calendar and Meet integration for interview scheduling"
          ]
        }
      ],
    }],
    
    ChallSolu: [{
      Title_1: "Architectural Challenges & Solutions",
      Data: [
        {
          Title: "Distributed Transaction Management",
          Data: [
            "Challenge: Maintaining data consistency across multiple services",
            "Solution: Implemented event-driven sagas with compensating transactions",
            "Result: Reliable business processes without distributed transactions"
          ]
        },
        {
          Title: "Service Communication & Discovery",
          Data: [
            "Challenge: Dynamic service location and load balancing",
            "Solution: Used Consul for service discovery and API Gateway for routing",
            "Result: Resilient communication with automatic failover"
          ]
        },
        {
          Title: "AI Integration in Distributed System",
          Data: [
            "Challenge: Integrating CPU-intensive AI processing in microservices",
            "Solution: Isolated AI service with async processing and message queues",
            "Result: Scalable AI features without blocking other services"
          ]
        }
      ],
    }],
    
    researchResults: {
      performanceMetrics: [
        { metric: "API Response Time", value: "< 200ms", description: "95% of requests" },
        { metric: "Service Scalability", value: "Independent Scaling", description: "Per microservice basis" },
        { metric: "Test Coverage", value: "80%", description: "Unit and integration tests" },
        { metric: "Deployment Frequency", value: "CI/CD Pipeline", description: "GitHub Actions + Argo CD" }
      ]
    },
    
    VisualsMedia: {
      Architecture: [
        { 
          image: ['recrusmart-context-map.png', 'recrusmart-eda-architecture.png'],
          info: ['Domain-Driven Design Context Map', 'Event-Driven Architecture Diagram']
        }
      ],
      UML: [
        { 
          image: ['recrusmart-use-case.png', 'recrusmart-sequence-diagram.png', 'recrusmart-class-diagram.png', 'recrusmart-activity-diagram.png'],
          info: ['Use Case Diagram', 'Sequence Diagram', 'Class Diagram', 'Activity Diagram']
        }
      ],
      /*Implementation: [
        { 
          image: ['recrusmart-postman-tests.png', 'recrusmart-dockerfile.png'],
          info: ['Postman API Testing', 'Docker Configuration']
        }
      ],*/
      Interface: [
        { 
          image: ['recrusmart-homepage.png','recrusmart-homepage-dark.png', 'recrusmart-offers.png', 'recrusmart-login.png', 'recrusmart-registration.png'],
          info: ['Homepage Interface','Homepage Interface (Dark Mode)', 'Job Offers Listing', 'Login Page', 'Registration Page']
        }
      ]
    },
    
    metrics: {
      microservices: "6",
      bounded_contexts: "6",
      technologies: "9+",
      deployment: "Docker + Kubernetes",
      communication: "REST + RabbitMQ"
    }
  },
  // 4. Blockchain Certificate Registry
  {
    id: "blockchain-certificate",
    folderid: "blockchain-certificate",
    projectType: "web",
    platforme: "Decentralized Application (dApp)",
    title: "Blockchain Certificate Registry dApp",
    image: getProjectImages('project-blockchain-certificate'),
    category: "Blockchain & Web3",
    date: "2025", 
    client_for: "Academic Project",
    role: "Blockchain Full-Stack Developer",
    description: "A full-stack decentralized application for registering and managing digital certificates on the Ethereum blockchain. Users can register file hashes, transfer ownership, and manage digital assets securely.",
    github_link: "https://github.com/NizarBelaatik/digital-ownership-dapp",
    live_demo: "",
    
    technology: ["Solidity", "React", "Web3.js", "Truffle", "Ganache"],
    technology_used: {
      'blockchain': ["Solidity", "Ethereum", "Smart Contracts"],
      'front_end': ["React", "Web3.js", "CSS"],
      'back_end': ["Node.js", "Truffle", "Ganache"],
      'tools': ['MetaMask', 'Git']
    },
    
    RoleResp: [{
      Title_1: "Blockchain Full-Stack Developer",
      Data: [
        {
          Title: "Smart Contract Development",
          Data: [
            "Designed and implemented Solidity smart contract for certificate management",
            "Implemented ownership transfer and registration functions",
            "Ensured security best practices and gas optimization"
          ]
        },
        {
          Title: "dApp Frontend",
          Data: [
            "Built React interface for interacting with smart contracts",
            "Integrated Web3.js for blockchain connectivity",
            "Implemented MetaMask integration for user authentication"
          ]
        },
        {
          Title: "Testing & Deployment",
          Data: [
            "Set up local blockchain development with Ganache",
            "Implemented comprehensive testing for smart contracts",
            "Configured Truffle for contract compilation and migration"
          ]
        }
      ],
    }],
    
    KeyFeatures: [{
      Title_1: null,
      Data: [
        {
          Title: "Digital Asset Management",
          Data: [
            "Register files on blockchain using SHA-256 hashes",
            "Transfer ownership of certificates between addresses",
            "View and manage all registered assets"
          ]
        },
        {
          Title: "Blockchain Integration",
          Data: [
            "Smart contract deployment on Ethereum blockchain",
            "MetaMask integration for secure transactions",
            "Real-time blockchain interaction via Web3.js"
          ]
        },
        {
          Title: "User Experience",
          Data: [
            "File upload with automatic hash generation",
            "Ownership transfer with address validation",
            "Asset listing with search and filter capabilities"
          ]
        }
      ],
    }],
    
    VisualsMedia: {
      ScreenShot: [
        { 
          image: ['dapp-dashboard.png'],
          info: ['Main dApp interface showing certificate registration and management']
        },
        { 
          image: ['dapp-transfer.png'],
          info: ['Ownership transfer interface with address validation']
        }
      ],
      Diagrams: [
        { 
          image: ['blockchain-architecture.png'],
          info: ['System architecture showing smart contract and dApp interaction']
        }
      ]
    },
  },

  // ========== YOUR EXISTING PROJECTS ==========
  
  // 4. Integrated Project Management Platform (your existing project1)
  {
      id: "1",
      folderid:"1",
      projectType:"web",
      platforme:"Web Application",
      title: "Integrated Project Management Platform",
      image: getProjectImages('project-1'),
      category: "IGEP",
      date:"September 2023 - February 2024",
      client_for: "Freelance",
      role: "Full-Stack",
      description: "A comprehensive platform designed to centralize project management tasks, including data collection, processing, and verification. The platform integrates form submission, data management, real-time communication, and role-based access control. Additionally, it includes a backup server to ensure data integrity and recovery.",
      github_link: "#",
      
      technology: ["Python","Django","RESTful API","HTML","CSS","JavaScript","Jquery","Bootstrap"],
      technology_used:{'front_end':["HTML","CSS","JavaScript","Jquery","Bootstrap"],
        'back_end':["Python","Django","RESTful API","JSON"],
        'database':['SQL',"Postgresql"],
        'techFra':null
      },
      details: "",
  
      RoleResp:[
        {
        Title_1:"Front-end Development",
        Data:[
          {Title:"User Interface Design:",
            Data:["Designed and implemented the user interface using HTML, CSS, and JavaScript.",
              "Ensured a responsive and intuitive design using Bootstrap for a seamless user experience across devices.",
            ]
          },
          {Title:"Form Integration:",
            Data:["Developed forms to capture various types of data (text, numbers, images, signatures).",
              "Integrated automated geolocation features allowing users to capture their location with a single click."
            ]
          },
          {Title:"Communication Features:",
            Data:["Implemented chatbox functionality for real-time communication between users within each project."]
          },
          {Title:"User Experience (UX):",
            Data:["Ensured the platform was user-friendly and visually consistent.",
              "Conducted usability testing to refine the interface and improve user interactions."]
          },
          

        ],
      },
    
      {
        Title_1:"Back-end Development",
        Data:[
          {Title:"Server-Side Logic:",
            Data:["Developed backend functionality using Django, including user authentication, role-based access control, and data processing.",
              "Implemented RESTful APIs to handle communication between frontend and backend systems."]
          },
          {Title:"Database Management:",
            Data:["Designed and managed the PostgreSQL database schema to store user information, project data, and backup records.",
              "Implemented CRUD (Create, Read, Update, Delete) operations for managing project and user data.",
              "Created a robust database structure that supported all required functionalities and data integrity."]
          },
          {Title:"Backup System:",
            Data:["Implemented a local server backup system to automatically save all data daily.",
              "Ensured that backup processes were reliable and data could be restored as needed.",
              "Enhanced data security and reliability with a regular backup process, ensuring minimal data loss."]
          },
          {Title:"Role-Based Access Control:",
            Data:["Developed and managed role-based access control to restrict and grant access to various parts of the platform based on user roles.",
              "Implemented effective access controls to protect sensitive information and manage user permissions."]
          },

        ],
      },
      {
        Title_1:"Additional Contributions",
        Data:[
          {Title:"Integration and Testing:",
            Data:["Integrated frontend and backend components to ensure seamless functionality.",
              "Conducted extensive testing to identify and fix bugs, optimize performance, and ensure overall stability.",
            "Delivered a fully functional platform with minimal issues, meeting project requirements and user expectations."]
          },
          {Title:"Documentation:",
            Data:["Created comprehensive documentation for both the frontend and backend components, including setup instructions, usage guidelines, and troubleshooting tips."]
          },
          {Title:"Collaboration and Communication:",
            Data:["Coordinated with other team members and stakeholders to gather requirements, provide updates, and incorporate feedback.",
              "Ensured that the project met the needs of all users through effective communication and collaboration."]
          },
        ],
      }],
      KeyFeatures:[{
        Title_1:null,
        Data:[{
            Title:'User Authentication and Role-Based Access:',
            Data:["Registration: Access to the platform is granted only to users registered by an administrator.",
              "Role-Based Access Control: Users can only view or interact with parts of the platform that are relevant to their assigned roles."
            ]
          },
          {Title:'Data Collection and Management:',
            Data:["Form Integration: Users fill out forms with text, numbers, images, and signatures.",
              "Downloadable Forms: Forms can be downloaded as XLSX files for offline processing.",
              "File Management: Includes a recycle bin for recovering accidentally deleted files.",
            ]
          },
          {Title:'Communication and Collaboration:',
            Data:["Chatbox: Each project/client includes a chatbox for real-time communication.",
              "Project Status Tracking: Track and update project statuses, including added, finished, sent, and modified.",
            ]
          },
          {Title:'Reporting and Statistics:',
            Data:["Project Statistics: Track and view statistics on project progress and statuses.",
              "Worker Statistics: Administrators can view performance metrics for auditreurs, including project counts and statuses over various time periods.",
            ]
          },
        ],
      }],
      ChallSolu:[{
        Title_1:null,
        Data:[
          {Title:'Secure Access Management:',
            Data:["Challenge: Ensuring that only authorized users can access the platform and its features.",
              "Solution: Implement Django's built-in authentication system and role-based permissions to control access."
            ]
          },
          {Title:'User Experience:',
            Data:["Challenge: Balancing complex functionality with a user-friendly interface.",
              "Solution: Use Bootstrap and jQuery to create an intuitive and responsive design."]
          },
          {Title:'Data Management and Recovery:',
            Data:["Challenge: Managing and recovering data efficiently.",
              "Solution: Include a recycle bin feature and robust error handling mechanisms."]
          },
        ],
      }],
      Reflection:[{
        Title_1:'What You Learned',
        Data:[
            {
              Title:"Role-Based Access Control: Gained hands-on experience with implementing secure, role-based access control, ensuring that users only have access to relevant data and functionalities.",
              Data:null,},
            {
              Title:"Data Integrity and Backup: Learned the importance of regular data backups and recovery processes to prevent data loss and ensure business continuity.",
              Data:null,},
            {
              Title:"Integration of Frontend and Backend: Enhanced skills in integrating frontend and backend technologies, ensuring seamless data flow and user interaction.",
              Data:null,},
            {
              Title:"User Authentication: Improved understanding of secure authentication methods and user management in web applications.",
              Data:null,},
              
             
        ],
      },
      {
        Title_1:'Improvements',
        Data:[{
            Title:"Enhanced User Interface:",
            Data:[
              "Improvement: Continuously refine the user interface for a more intuitive experience based on user feedback.",
              "Plan: Conduct user testing and implement design improvements.",
            ]
          } ,
          {
            Title:"Advanced Analytics:",
            Data:[
              "Improvement: Expand reporting and analytics features to provide more detailed insights into project and worker performance.",
              "Plan: Integrate advanced data visualization tools and reporting features.",
            ]
          } ,
          {
            Title:"Scalability:",
            Data:[
              "Improvement: Improve the platform’s scalability to handle increased user load and data volume.",
              "Plan: Optimize backend processes and consider cloud-based solutions for scalability.",
            ]
          } ,
          {
            Title:"Automated Backup Enhancements:",
            Data:[
              "Improvement: Enhance the backup system to include cloud storage options and more frequent backup intervals.",
              "Plan: Implement incremental backups and explore hybrid backup solutions.",
            ]
          } 
        ],
      }
    ],
  
      VisualsMedia:{
        ScreenShot:[
          {ImInTitle:"Dashboard",
            ImInData:[
              { 
                image:['1.png'],
                info:["The dashboard provides an overview of recent activities and the status of projects. It displays key statistics such as the number of projects added (ajoute), finished (fini), sent (envoye), and modified (modification faite)."]
              },
            ]
          },
          {ImInTitle:"Project Table with Chatbox and Files Box",
            ImInData:[
              { 
                image:['2.png'],
                info:["This screen displays a table of projects organized by their current state. Each project entry includes a chatbox for communication and a files box for managing project documents."]
              },
            ]
          },
          {ImInTitle:"Auditreur Overview",
            ImInData:[
              { 
                image:['3.png'],
                info:["An overview screen focused on the performance and activity of auditreurs. It shows statistics related to the projects they have worked on over various time periods."]
              },
            ]
          },
          {ImInTitle:"Projects by State and Auditreur Activity",
            ImInData:[
              { 
                image:['track1.png'],
                info:["This screen provides a detailed view of projects organized by their state, such as fini, envoye, and modification faite. It includes statistics on how many projects in each state were handled by a specific auditreur (e.g., Auditreur X) over various time periods."]
              },
            ]
          },
          {ImInTitle:"Auditreur Activity Overview",
            ImInData:[
              { 
                image:['track2.png'],
                info:["An overview of individual auditreur activities, showing detailed statistics on what they have worked on over various time periods."]
              },
            ]
          },
          {ImInTitle:"Visiteur Technique Overview",
            ImInData:[
              { 
                image:['vt1.png'],
                info:["An overview screen that shows the overall activity and contributions of the Visiteur Technique, including the projects they are involved in and their data submissions."]
              },
            ]
          },

          {ImInTitle:"Form for Visiteur Technique",
            ImInData:[
              { 
                image:['vt2.png'],
                info:["The form that the Visiteur Technique needs to fill out when collecting and submitting project data. It includes fields for text, numbers, images, signatures, and automated geolocation."]
              },
            ]
          },
          
        ],

        Diagrams:null,

        VideoDemo:null
      },
  
    },

    {
      id: "student-life-management-system",
      folderid:"2",
      projectType:"web",
      platforme:"Web Application: The system is a web-based platform accessible via modern web browsers. This allows students, administrators, and responsible personnel to interact with the system from any device with an internet connection.",
      title: "Student Life Management System",
      image: getProjectImages('project-2'),
      category: "Education Management System: This application falls under the category of educational management systems, focusing on enhancing administrative efficiency and improving student services. It supports functionalities like schedule management, document handling, and communication within an academic institution.",
      date:"February 2023 - June 2023",
      project_for:"Faculte Des science Ben M'Sik",
      client_for:'Academic Project',
      role: "Full-Stack",
      description: "The Student Life Management System is a web application designed to streamline student interactions with their academic institution. It facilitates the management of various aspects such as scheduling, document requests, and administrative tasks. The system aims to enhance the student experience by providing a user-friendly platform for accessing and managing academic and administrative services.",
      github_link: "#",
      
      technology: ["JAVA","JEE","HTML","CSS","JavaScript"],
      technology_used:{'front_end':["HTML","CSS","JavaScript"],
        'back_end':["JAVA","JEE"],
        'database':['SQL',"MySql"],
        'techFra':null,
        'tech':['Apache','XAMPP'],
      },
      details: "",
    
      AboutProject:[{
        Title_1:null,
        Data_without_Style:true,
        
        Data:[
          {
            Title:null,
            Title2:"This project involves creating a web application for the Faculty of Sciences BEN M’SIK to streamline access to administrative documents for students. The app aims to address delays in document retrieval, which can disrupt academic progress. It offers a quick solution for students to request and download essential documents like transcripts, enrollment certificates, and success certificates with a single click.",
            Data:null
          },
          {
            Title:null,
            Title2:"The application features two main areas:",
            Data:["Administrator Dashboard: Manages document updates, student records, and scheduling.",
              "Student Portal: Allows students to request, download documents, and view their schedules."
            ]
          },
          {
            Title:null,
            Title2:"The user-friendly interface is designed to improve administrative efficiency and facilitate students' academic management.",
            Data:null
          },

        ],
      },],
      ProblemStatment:[{
        Title_1:null,
        Data_without_Style:true,
        Data:[
          {
            Title:null,
            Title2:"The primary challenge addressed by this application is the need for a digital signature feature to allow students to download administrative documents quickly and flexibly. The application also seeks to improve the efficiency of managing schedules, document requests, and administrative duties.",
            Data:null
          }

        ],
      }],

      RoleResp:[
        {
          Title_1:"Full-stack Developer",
          Data:[
            {Title:'Front-end Development',
              Data:[
                "Designed and implemented the user interface using HTML, CSS, and JavaScript to ensure a seamless and engaging user experience.",
                "Developed interactive elements and ensured cross-browser compatibility.",
                "Created responsive designs to ensure usability across various devices and screen sizes.",
              ]
            },
            {Title:'Back-end Development',
              Data:["Developed server-side logic using Java JEE, including the implementation of RESTful APIs to handle client requests and data processing.",
                "Managed user authentication, session management, and data security.",
                "Integrated the application with the MySQL database, implementing CRUD operations and optimizing database queries for performance."
              ]
            },
            {Title:'Database Management',
              Data:[
                "Designed the database schema and relationships to support the application’s features.",
                "Ensured data consistency and integrity through careful design and indexing.",
                "Developed SQL queries for efficient data retrieval and reporting.",
              ]
            },
            {Title:'Collaboration',
              Data:[
                "Worked closely with team members to define requirements, design solutions, and implement features.",
                "Participated in code reviews and provided feedback to ensure code quality and adherence to best practices.",
              ]
            }
          ],
        },
      ],
      KeyFeatures:[{
        Title_1:'For Students',
        Data:[
          {Title:'View Schedules',
            Data:["Course schedules (Lectures, TD, TP)",
              "Exam schedules (Regular and Rescheduled)"
            ] 
          },
          {Title:'Request Documents',
            Data:["Diploma requests",
              "Permanent file withdrawal",
              "Temporary file withdrawal"
            ] 
          },
          {Title:'Download Documents',
            Data:["Enrollment certificate",
              "Transcript of grades"
            ] 
          },
          {Title:'Consult Events and News',
            Data:["New scholarship opportunities",
              "Recent updates"] 
          },
          {Title:'Access Group Chat',
            Data:["Engage with peers and administrators"] 
          },

        ],
      },
      {
        Title_1:'For Administrators',
        Data:[
          {Title:'Manage Document Requests',
            Data:['Approve or reject requests'] 
          },
          {Title:'Manage Schedules',
            Data:['Add, update, or delete schedules'] 
          },
          {Title:'Manage Students',
            Data:['Add, update, or remove student records'] 
          },

        ],
      },
      {
        Title_1:'For Responsible',
        Data:[
          {Title:'Database Management',
            Data:['Populate and maintain the database'] 
          },

        ],
      },],
    
      ChallSolu:[{
          Title_1:null,
          Data:[{
            Title:'Digital Signature Implementation',
            Data:["Challenge: Integrating a digital signature feature for document validation and secure downloads.",
              "Solution: Implemented a secure digital signature mechanism and ensured compatibility with various document formats."
            ]
          },{
            Title:'Data Management',
            Data:["Challenge: Efficiently managing and synchronizing large amounts of student and schedule data.",
              "Solution: Optimized database schema and used indexing to improve data retrieval performance."
            ]
          },],
          
        },
      ],

      Reflection:[{
        Title_1:null,
        Data:[
          {
            Title:'Personal Growth:',
            Title2:"Working on this project provided significant opportunities for growth in both front-end and back-end development. I gained hands-on experience with Java JEE and improved my ability to integrate front-end and back-end components effectively. The challenge of implementing a digital signature feature pushed me to deepen my understanding of security practices and data management.",
            Data:null,
          },
          {
            Title:'Challenges Faced:',
            Title2:"One of the primary challenges was integrating the digital signature functionality, which required careful consideration of security and compatibility. Additionally, ensuring the application’s responsiveness across different devices demanded meticulous attention to detail in the front-end development phase.",
            Data:null,
          },
          {
            Title:"Lessons Learned:",
            Data:["Full-Stack Integration: Gained valuable insights into how front-end and back-end components interact and the importance of seamless integration for a cohesive user experience.",
              "Security Practices: Enhanced my understanding of security measures, particularly in handling sensitive data and implementing digital signatures.",
              "Collaboration and Communication: Improved my ability to work collaboratively with team members, communicate effectively, and manage project requirements and deadlines."
            ]
          },

          {
            Title:"Impact:",
            Title2:" The project successfully streamlined student interactions with academic services, providing a more efficient and user-friendly platform. The experience has prepared me for future full-stack development roles and enhanced my problem-solving skills in both front-end and back-end development.",
            Data:null,
          },
          
        ],
      },],

      
    
      VisualsMedia:{
        ScreenShot:[
          {
            ImInTitle:"Student",
            ImInData:[{ 
                image:['1.jpg'],
                info:['Page for news and events.']
              },
              { 
                image:['2.jpg'],
                info:['Document request page.']
              },
              { 
                image:['3.jpg'],
                info:['Document download page.']
              },
              { 
                image:['4.jpg'],
                info:['Page to change the password.']
              },
              { 
                image:['5.jpg'],
                info:['Page to edit personal information.']
              },
              { 
                image:['chat.jpg'],
                info:['Group chat page.']
              }]
          },

          {
            ImInTitle:"Administrator",
            ImInData:[{ 
                image:['admin1.jpg'],
                info:["Page for adding, deleting, and editing news and events."]
              },
              { 
                image:['admin2.jpg'],
                info:["Page to accept or reject requests."]
              },
              { 
                image:['admin3.jpg'],
                info:["Page for adding, deleting, and editing a student."]
              },
              { 
                image:['admin4.jpg'],
                info:["Page for adding and updating a schedule."]
              },]
          }
        ],
        Diagrams:[
          {ImInTitle:"Use Case Diagrams",
            ImInData:[{ 
              image:['actA.jpg'],
              info:["Administrator"]
            },
            { 
              image:['actE.jpg'],
              info:["Student"]
            },]},

          {ImInTitle:"Sequence Diagrams",
            ImInData:[{ 
              image:['Diagram (2).jpg','Diagram (3).jpg','Diagram (4).jpg','Diagram (5).jpg','Diagram (6).jpg','Diagram (7).jpg'],
              info:['']
            }]},
          {ImInTitle:"Global Class Diagram",
            ImInData:[{ 
              image:['Diagram (1).jpg'],
              info:['']
            }]}
        ],
        VideoDemo:null
      },

    
    },

    
    {
      id: "3",
      folderid:"3",
      projectType:"web",
      platforme:"Web application, accessible on both desktop and mobile browsers.",
      title: "Real-Time Live Chat Application",
      image: getProjectImages('project-3'),
      category: "",
      date:"June 2024",
      client_for: "Freelance",
      role: "Full-Stack",
      description: "The Real-Time Live Chat Application is a web-based platform that allows users to engage in single or group chats in real-time. Users can send text messages, images, and files, making it ideal for both casual conversations and professional collaboration.",
      github_link: "#",
      
    
      technology: ["Python","Django","RESTful API","HTML","CSS","JavaScript","Jquery","Bootstrap"],
      technology_used:{'front_end':["HTML","CSS","JavaScript","Jquery","Bootstrap"],
        'back_end':["Python","Django","RESTful API","JSON"],
        'database':['SQL',"Postgresql"],
        'techFra':['Git']
      },
      details: "",
    
      RoleResp:[{
        Title_1:'Full-Stack Developer',
        Title_2:null,
        Data:[
          {Title:'Back-end Development',
            Data:["Designed and implemented the database schema for storing",
            "implementing real-time chat functionality using Django Channels"]
          },
          {Title:'Front-end Development',
            Data:["Created responsive UI components using Bootstrap and custom CSS",
              "Integrated AJAX calls for real-time data updates and interactive features",]
          }
        ],
      }],
    
      KeyFeatures:[{
        Title_1:null,
        Data:[
          {Title:'Single & Group Chat',
            Data:['Users can initiate one-on-one conversations or create/join group chats with multiple participants.'] 
          },
          {Title:'Real-Time Messaging',
            Data:['Messages are delivered instantly using WebSocket connections, ensuring smooth, real-time communication.'] 
          },
          {Title:'Multimedia Support',
            Data:['Users can send text messages, images, and files (e.g., PDFs, DOCs) with previews for images.'] 
          },
          {Title:'User Authentication',
            Data:['Secure user login with Django’s authentication system, including password reset and profile management.'] 
          },
          {Title:'Message History',
            Data:['All conversations are stored in the database, allowing users to view chat history at any time.'] 
          },
          {Title:'Notifications',
            Data:['Real-time notifications for new messages, even when the user is not on the chat page.'] 
          },
          {Title:'Responsive Design',
            Data:['The application is fully responsive, providing a seamless experience across all devices.'] 
          },
          
        ],
      }],
    
      Deployment:{
        Title_1:null,
        Data:[
          {Title:'Real-Time Communication',
            Data:['Managing real-time communication using WebSocket connections while ensuring performance and reliability, especially in group chats.'] 
          },
          {Title:'File Handling',
            Data:['Ensured secure and efficient file uploads and downloads, including support for large files and image previews.'] 
          },
          {Title:'Scalability',
            Data:['Optimized the application to handle hundreds of simultaneous users and multiple active group chats without lag.'] 
          },
        ],
      },
    
      ChallSolu:null,
    
      

      VisualsMedia:{
        ScreenShot:[
          {ImInTitle:null,
            ImInData:[{ 
                image:['real_time_chat.png'],
                info:['Real-Time Chat Interaction: User A and User B Messaging']
              }]
            }
          
        ],
        Diagrams:null,
        VideoDemo:[{
          video:['realtimechatVid.mkv'],
          info:['Live Chat Demonstration: Real-Time Messaging and Media Sharing between Users']
        }]
      },
    
    }, 
    
    
    
    {
      id: "4",
      folderid:"4",
      projectType:"desk",
      platforme:"Desktop application, compatible with Windows, macOS, and Linux.",
      title: "Twitch Channel Points TTS (Text-to-Speech)",
      image: getProjectImages('project-4'),
      category: "Software Development",
      date:"May 2020 - June 2020",
      client_for: "Freelance",
      role: "Software Dev",
      description: "Developed a Twitch Channel Points TTS (Text-to-Speech) application that allows streamers to convert messages redeemed by viewers using channel points into speech. This enhances audience interaction by giving a voice to viewers during live streams.",
      github_link: "#",
      
  
      technology: ['Python','PyQt5','Selenium'],
      technology_used:{'Proglang':['Python','PyQt5'],
        'database':null,
        'frameworks':['PySide2','Selenium',],
        'Packaging':['PyInstaller'],
        'techFra':['Qt Designer','Git','Github']
      },
      details: "",
  
      RoleResp:[{
        Title_1:'',
        Title_2:null,
        Data:[{
            Title:'Designed and developed the entire application, from initial concept to final deployment.',
            Data:null 
          },
          {
            Title:'Implemented and tested the TTS functionality using PySide2.QtTextToSpeech.',
            Data:null 
          },
          {
            Title:'Integrated Selenium for real-time monitoring of channel points redemptions.',
            Data:null 
          },
          {
            Title:'Developed the words filter and speed adjustment features.',
            Data:null 
          },
          {
            Title:'Packaged the application for cross-platform distribution using PyInstaller.',
            Data:null 
          },]
      }],
  
      KeyFeatures:[{
        Title_1:null,
        Data:[
          {Title:'Text-to-Speech Integration:',
            Data:['Converts viewer messages redeemed with channel points into speech using the PySide2.QtTextToSpeech module.'] 
          },
          {Title:'Twitch Channel Points Integration:',
            Data:['Automatically detects when channel points are redeemed and triggers the TTS function.'] 
          },
          {Title:'Words Filter:',
            Data:['Includes a customizable filter to block inappropriate or unwanted words from being spoken.'] 
          },
          {Title:'Adjustable TTS Speed:',
            Data:['Allows streamers to control the speed of the speech, offering a more personalized viewer experience.'] 
          },
          {Title:'Customizable Voices:',
            Data:['Streamers can select different voices and adjust speech rate and pitch.'] 
          },
          {Title:'Cross-Platform Support:',
            Data:['Packaged into a standalone executable using PyInstaller for easy deployment on any platform.'] 
          },
        ],
      }],
  
      Deployment:{
        Title_1:null,
        Data:[
          {Title:'',
            Data:[''] 
          },
        ],
      },
  
      ChallSolu:null,
      
      Outcome:{
        Title_1:null,
        Title_2:"The TTS app enhanced audience interaction on Twitch streams, resulting in a 20% increase in viewer engagement. The words filter and adjustable TTS speed received positive feedback from streamers, who appreciated the control and customization options.",
        
      },

      ScreenShotDiag:{
        ScreenShot:[
          {ImInTitle:null,
            ImInData:[{ 
              image:['tts_1.png'],
              info:['Main Interface',
                'Screenshot of the main user interface where streamers can select TTS settings and manage the words filter.'
              ]
            },]
          }
          
        ],
        Diagrams:null,
        VideoDemo:null
      },
  
    },


    {
      id: "5",
      folderid:"5",
      projectType:"desk",
      platforme:"Desktop application, compatible with Windows, macOS, and Linux.",
      title: "YouTube Video & Music Downloader",
      image: getProjectImages('project-5'),
      category: "Software Development",
      date:"july 2022",
      client_for: "Freelance",
      role: "Software Dev",
      description: "The YouTube Video & Music Downloader is a desktop application that allows users to download videos or music from YouTube. Users can choose between single video downloads or entire playlists, with the option to select from multiple quality choices, including HD, SD, and audio-only formats.",
      github_link: "#",
      
  
      technology: [ 'Python','PyQt5'],
      technology_used:{'Proglang':['Python','PyQt5'],
        'database':null,
        'techFra':['Qt Designer','Git']
      },
      details: "Detailed information about Project Two.",
  


      RoleResp:[{
        Title_1:'',
        Title_2:null,
        Data:[{
            Title:'Designed and developed the entire application, from initial concept to final deployment.',
            Data:null 
          },
          {
            Title:'Packaged the application for cross-platform distribution using PyInstaller.',
            Data:null 
          },]
      }],
  
  
      KeyFeatures:[{
        Title_1:null,
        Data:[{
            Title:'Single Video Download:',
            Data:['Users can paste a YouTube video URL and choose the desired download quality (1080p, 720p, 480p, 360p, audio-only).']
          },
          {Title:'Playlist Download:',
            Data:['The application supports downloading entire playlists with the option to select video quality for each video or download all as audio files.']
          },
          {Title:'Quality Selection:',
            Data:['Users can choose from available resolutions or download only the audio in MP3 format.']
          },
          {Title:'Download Management:',
            Data:[' The application provides a progress bar for each download, pause/resume functionality, and a download history tab.']
          },
          {Title:'Batch Processing:',
            Data:['Ability to queue multiple downloads.'] //, which are processed sequentially or in parallel.
          },
        ],
      }],
  
      Deployment:[{
        Title_1:null,
        Data:[{
            Title:'Packaging:',
            Data:["Packaged as an executable using PyInstaller for Windows, and as .app for macOS, and an AppImage for Linux."]
          },
          {Title:'CI/CD:',
            Data:["Integrated with GitHub Actions for automated testing and building the application across all supported platforms."]
          },
        ],
      }],
  
      ChallSolu:null,
  
      ScreenShotDiag:{
        ScreenShot:[
          {ImInTitle:null,
            ImInData:[{ 
                image:['YD_1.png'],
                info:['A screenshot of the main interface showing the single download window, with quality selection.']
              },{ 
                image:['YD_2.png'],
                info:['A screenshot showing multiple downloads window, with quality selection.']
              },]}
          
        ],
        Diagrams:null,
        VideoDemo:null
      },
  
    
  }
];

export default projects_ENG;


