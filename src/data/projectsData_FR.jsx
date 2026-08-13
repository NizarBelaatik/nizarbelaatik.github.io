// projectsData.js
import getProjectImages from '../components/projects/getProjectImages';

const projects_FR = [
  // Agent vocal B2B temps réel — projet de fin d'études (PFE)
  {
    id: "b2b-voice-agent-pfe",
    folderid: "b2b-voice-agent-pfe",
    projectType: "web",
    platforme: "Système d'IA Conversationnelle Temps Réel",
    title: "Agent Vocal IA Temps Réel pour la Téléphonie B2B",
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
    category: "IA Conversationnelle & Systèmes Vocaux",
    date: "Fév 2026 - Présent",
    client_for: "Arboris Management · PFE",
    role: "Ingénieur IA & Architecte Système",
    description: "Un pipeline vocal IA temps réel pour des conversations téléphoniques B2B en darija marocaine mêlée de français, développé comme projet de fin d'études (PFE) chez Arboris Management. Il combine des modèles de reconnaissance vocale, de dialogue et de synthèse vocale adaptés au domaine avec une architecture asynchrone multi-appels et une gestion naturelle des interruptions en plein appel, validé de bout en bout dans un environnement de test et conçu pour un déploiement téléphonique via Asterisk/SIP.",
    research_paper: "/papers/darija-asr-research-paper.docx",

    technology: ["Python", "PyTorch", "Whisper", "LoRA / QLoRA", "Qwen2.5", "XTTS v2 (Coqui)", "vLLM", "FastAPI", "Asterisk", "Next.js"],
    technology_used: {
      'speech_and_language': ["Whisper (adapté au domaine par LoRA)", "Qwen2.5-7B-Instruct (QLoRA)", "XTTS v2 (Coqui, fine-tuné)", "Reconnaissance vocale automatique", "Génération de dialogue", "Synthèse vocale"],
      'architecture': ["Microservices asynchrones", "Gestion concurrente de plusieurs appels", "Barge-in / reprise après interruption"],
      'telephony': ["Asterisk / SIP (architecture conçue)", "Intégration PSTN en direct : travail restant"],
      'serving': ["vLLM", "FastAPI"],
      'front_end': ["Next.js"]
    },

    RoleResp: [{
      Title_1: "Ingénieur IA & Architecte Système",
      Data: [
        {
          Title: "Modélisation Vocale, Linguistique & Synthèse",
          Data: [
            "Constitution du corpus d'entraînement à partir de vrais appels B2B et adaptation au domaine de Whisper pour la reconnaissance vocale sur de la parole darija-français à code-switching",
            "Fine-tuning de Qwen2.5-7B-Instruct pour la génération de dialogue de l'agent, adapté aux conversations téléphoniques B2B",
            "Fine-tuning de XTTS v2 (Coqui) sur un petit jeu de données mono-locuteur darija/français pour produire la voix de l'agent, évalué via la trajectoire de perte d'entraînement et des tests de latence de synthèse plutôt qu'un benchmark de qualité formel",
            "Co-écriture d'un article de recherche sur le composant de reconnaissance vocale du système (voir l'article lié pour la méthodologie et les résultats complets)"
          ]
        },
        {
          Title: "Architecture Système",
          Data: [
            "Conception d'une architecture microservices asynchrone et concurrente pour gérer plusieurs appels à la fois, remplaçant un pipeline séquentiel antérieur, validée de bout en bout dans un environnement de test",
            "Travail sur l'architecture d'intégration téléphonique autour d'Asterisk/SIP, la connexion PSTN complète en direct restant l'étape suivante",
            "Implémentation du barge-in pour que les appelants puissent interrompre l'agent en pleine phrase sans perte de contexte conversationnel"
          ]
        },
        {
          Title: "Mise en Production",
          Data: [
            "Transition du projet d'un stage de fin d'études (PFE) chez Arboris Management vers un pipeline vocal IA validé, l'intégration téléphonique en direct restant la prochaine étape",
            "Construction du tableau de bord Next.js utilisé pour surveiller et gérer les appels en direct"
          ]
        }
      ],
    }],

    KeyFeatures: [{
      Title_1: "Ce que Fait l'Agent",
      Data: [
        {
          Title: "Conversation Bilingue à Code-Switching",
          Data: [
            "Comprend et répond naturellement à la darija mêlée de français, comme sonnent réellement les appels B2B au Maroc",
            "Adapté au domaine plutôt que basé sur un modèle multilingue générique"
          ]
        },
        {
          Title: "De Vraies Interruptions, Pas des Tours Scriptés",
          Data: [
            "Les appelants peuvent couper l'agent en pleine phrase, qui reprend le contexte au lieu de redémarrer ou de les ignorer",
            "Donne l'impression d'une conversation en direct plutôt que d'un menu IVR rigide"
          ]
        },
        {
          Title: "Gère Plusieurs Appels à la Fois",
          Data: [
            "Architecture asynchrone servant plusieurs appels simultanés avec une réponse rapide",
            "Aucun goulot d'étranglement séquentiel entre les appels"
          ]
        }
      ],
    }],

    ChallSolu: [{
      Title_1: "Défis & Solutions",
      Data: [
        {
          Title: "Parole à Faibles Ressources et à Code-Switching",
          Data: [
            "Défi : la darija marocaine dispose de peu de données vocales annotées, n'a pas d'orthographe standard et alterne fréquemment avec le français. Je n'avais jamais travaillé sur des modèles vocaux avant ce projet",
            "Solution : recherche et apprentissage de l'adaptation au domaine pour les modèles vocaux depuis zéro, puis combinaison d'un corpus public de darija avec des enregistrements B2B collectés spécifiquement",
            "Résultat : un composant de reconnaissance vocale assez précis pour de vrais appels B2B, documenté dans l'article co-écrit"
          ]
        },
        {
          Title: "Latence Conversationnelle",
          Data: [
            "Défi : un pipeline séquentiel faisait attendre chaque étape de l'appel (écoute, compréhension, réponse) sur la précédente, ce qui semblait lent et peu naturel au téléphone",
            "Solution : refonte du pipeline en microservices asynchrones plutôt qu'une chaîne linéaire",
            "Résultat : une réponse assez rapide pour que la conversation semble se dérouler en direct"
          ]
        },
        {
          Title: "Interruptions Naturelles",
          Data: [
            "Défi : la plupart des agents vocaux se bloquent ou perdent le contexte quand l'appelant leur coupe la parole",
            "Solution : implémentation de la détection de barge-in et de la reprise après interruption dans le flux conversationnel",
            "Résultat : les appelants peuvent interrompre naturellement sans faire dérailler l'appel"
          ]
        }
      ],
    }],

    github_link: "#",
    live_demo: ""
  },

  // 0. Article de recherche — ASR adaptatif au domaine
  {
    id: "darija-asr-research",
    folderid: "darija-asr-research",
    projectType: "research",
    platforme: "Recherche en Reconnaissance Vocale",
    title: "ASR Adaptatif au Domaine pour la Téléphonie B2B Darija-Français à Code-Switching",
    image: getProjectImages('project-darija-asr-research', [
      'b2b-benchmark-wer.png',
      'general-darija-benchmark-cer.png',
      'accuracy-latency-tradeoff.png',
      'lora-rank-effect.png',
      'training-data-ablation.png',
      'utterance-length-effect.png',
      'methodology-dataflow.png'
    ]),
    category: "Reconnaissance Vocale & Adaptation au Domaine",
    date: "2026",
    client_for: "Recherche Académique",
    role: "Chercheur Principal",
    description: "Une étude de reconnaissance vocale adaptative au domaine pour des appels téléphoniques B2B en darija marocaine à code-switching avec le français, menée comme composante ASR d'un projet plus large d'agent vocal conversationnel temps réel. Whisper-large-v3-turbo a été adapté par LoRA, en testant différents mélanges de données d'entraînement et rangs d'adaptateur. La meilleure configuration atteint 18,22 % WER sur un benchmark B2B indépendant et 6,64 % en darija générale, pour un facteur temps réel de 0,047. Co-écrit avec un encadrant académique et un encadrant industriel.",
    research_paper: "/papers/darija-asr-research-paper.docx",

    technology: ["Python", "PyTorch", "Whisper", "LoRA", "Hugging Face", "faster-whisper"],
    technology_used: {
      'modeling': ["Whisper-large-v3-turbo", "LoRA (rangs 8 / 32 / 64)", "Fine-tuning paramétriquement efficace"],
      'evaluation': ["Word Error Rate", "Character Error Rate", "Facteur Temps Réel", "Protocole d'évaluation figé et cumulatif"],
      'data': ["Corpus général darija DODa", "Audio téléphonique B2B enregistré", "Normalisation textuelle par frontière linguistique"],
      'tooling': ["Hugging Face Transformers", "PyTorch", "faster-whisper"]
    },

    researchResults: {
      keyMetrics: [
        { metric: "WER Téléphonie B2B", value: "18,22 %", description: "n = 1 010, meilleure configuration (LoRA r=64)" },
        { metric: "WER Darija Générale", value: "6,64 %", description: "n = 1 270, indépendant" },
        { metric: "Facteur Temps Réel", value: "0,047", description: "Inférence à énoncé unique" }
      ],
      keyFindings: [
        "Combiner une petite quantité d'audio B2B au domaine avec un corpus général de darija surpasse l'entraînement sur l'une ou l'autre source seule",
        "Passer d'un rang LoRA de 8 à 64 améliore la précision sur les deux benchmarks sans pénaliser la latence",
        "Le modèle fine-tuné atteint un meilleur compromis précision-latence que les modèles ASR darija publics et les modèles Whisper multilingues d'origine",
        "Le WER conventionnel pénalise disproportionnellement les énoncés très courts (1-2 mots), fréquents en téléphonie, d'où l'intérêt de métriques complémentaires"
      ]
    },

    RoleResp: [{
      Title_1: "Chercheur Principal",
      Data: [
        {
          Title: "Données & Méthodologie",
          Data: [
            "Constitution du corpus vocal B2B spécifique au domaine, combiné au jeu de données public DODa de darija générale",
            "Définition d'un protocole de split train/eval figé et cumulatif pour garantir des benchmarks réellement indépendants entre itérations",
            "Application d'une règle de normalisation textuelle par frontière linguistique (alphabet arabe pour la darija, latin pour le français) aux données de transcription"
          ]
        },
        {
          Title: "Expérimentation",
          Data: [
            "Fine-tuning de Whisper-large-v3-turbo par LoRA sur trois rangs (8/32/64) et trois compositions de données (DODa seul, B2B seul, combiné)",
            "Comparaison avec des modèles ASR darija publics et les modèles Whisper multilingues d'origine sous un protocole d'évaluation unique",
            "Mesure du WER, du CER et du RTF sur un benchmark darija générale indépendant et un benchmark B2B construit séparément"
          ]
        },
        {
          Title: "Analyse & Rédaction",
          Data: [
            "Analyse d'erreur par longueur d'énoncé conversationnel, montrant où le WER conventionnel surestime l'erreur sur les tours courts",
            "Rédaction et co-écriture de l'article avec un encadrant académique à la FSBM, Université Hassan II, et un encadrant industriel"
          ]
        }
      ],
    }],

    KeyFeatures: [{
      Title_1: "Méthodologie de Recherche",
      Data: [
        {
          Title: "Ablation Contrôlée du Jeu de Données",
          Data: [
            "Modèles entraînés sur : (i) la darija générale seule, (ii) les enregistrements B2B seuls, (iii) le corpus combiné",
            "Isole la contribution marginale des données propres au domaine par rapport à la parole générale",
            "Tous les splits figés et cumulatifs pour éviter toute fuite d'évaluation entre itérations d'entraînement"
          ]
        },
        {
          Title: "Ablation de la Capacité LoRA",
          Data: [
            "Rang de l'adaptateur varié entre 8, 32 et 64 dans des conditions d'entraînement par ailleurs identiques",
            "Évaluation conjointe de la précision (WER/CER) et de l'efficacité d'inférence (RTF)",
            "Le rang 64 sur le corpus combiné produit le meilleur résultat sur les deux benchmarks"
          ]
        },
        {
          Title: "Évaluation Orientée Déploiement",
          Data: [
            "Benchmark darija générale indépendant (n=1 270) plus un benchmark téléphonie B2B construit séparément (n=1 010)",
            "Facteur Temps Réel mesuré conjointement au WER/CER, le modèle ASR n'étant qu'une étape d'un pipeline vocal temps réel plus large",
            "Analyse d'erreur par longueur d'énoncé pour caractériser le comportement du WER sur des tours téléphoniques courts et réels"
          ]
        }
      ],
    }],

    ChallSolu: [{
      Title_1: "Défis de Recherche & Solutions",
      Data: [
        {
          Title: "Parole à Faibles Ressources, à Code-Switching et Spécifique au Domaine",
          Data: [
            "Défi : la darija marocaine dispose de peu de données vocales annotées, n'a pas d'orthographe standard et alterne fréquemment avec le français, aggravé par le vocabulaire B2B et le bruit de canal téléphonique",
            "Solution : combiner un corpus public de darija générale avec des enregistrements B2B collectés spécifiquement, normalisés selon une convention de frontière linguistique cohérente",
            "Résultat : 18,22 % WER sur le benchmark B2B, largement sous chaque référence publique évaluée"
          ]
        },
        {
          Title: "Précision Sans Pénalité de Latence",
          Data: [
            "Défi : le composant ASR alimente un pipeline conversationnel temps réel, donc tout gain de précision qui coûte en vitesse d'inférence est contre-productif",
            "Solution : évaluer conjointement précision et Facteur Temps Réel pour chaque configuration LoRA plutôt que d'optimiser le WER seul",
            "Résultat : la configuration la plus précise maintient aussi un RTF de 0,047, comparable (et légèrement meilleur) au modèle de base non modifié"
          ]
        },
        {
          Title: "Intégrité de l'Évaluation Entre Itérations",
          Data: [
            "Défi : le développement itératif de modèles risque de faire fuiter les données d'évaluation vers l'entraînement au fil des cycles",
            "Solution : un protocole de split train/eval figé et cumulatif qui ne remélange jamais les données déjà mises de côté",
            "Résultat : des chiffres de benchmark qui restent comparables et réellement indépendants sur tout le cycle de développement"
          ]
        }
      ],
    }],

    metrics: {
      wer_b2b: "18,22 %",
      wer_darija: "6,64 %",
      rtf: "0,047",
      coauthors: "3 (encadrement académique + industriel)"
    },

    github_link: "#",
    live_demo: ""
  },

  // 1. Retail Zoning System for WafR
  {
    id: "retail-zoning-system",
    folderid: "retail-zoning",
    projectType: "research",
    platforme: "Système de Zoning Géospatial",
    title: "Système de Zoning Intelligent pour le Réseau de Distribution Marocain",
    image: getProjectImages('project-retail-zoning', [
      'zoning-national-map.png',
      'casablanca-zones.png', 
      'dashboard.png',
      'tools.png',
      'merge.png',
      'clustering.png'
    ]),
    category: "Data Science & Géospatial Analytics",
    date: "2025",
    client_for: "WafR - Projet de Fin d'Année",
    role: "Data Scientist & Géospatial Analyst",
    description: "Développement d'un système national de zoning pour optimiser la couverture commerciale des épiceries informelles au Maroc. Utilisation de données géospatiales, d'indicateurs socio-démographiques et de clustering sous contraintes pour équilibrer les territoires de vente.",
    research_paper: "",
    
    technology: ["Python", "GeoPandas", "Scikit-learn", "OpenStreetMap", "QGIS", "Folium", "FastAPI", "React"],
    technology_used: {
      'data_processing': ["Pandas", "NumPy", "Data Cleaning"],
      'geospatial': ["GeoPandas", "OpenStreetMap", "QGIS", "Folium"],
      'ml_clustering': ["Scikit-learn", "K-Means Contraint", "Clustering Capacité"],
      'visualization': ["Matplotlib", "Seaborn", "Folium", "QGIS"],
      'data_sources': ["RGPH 2024", "Points d'Intérêt", "Données Démographiques"],
      'front_end': ["React", "Tailwind CSS", "JavaScript"],
      'back_end': ["Python", "FastAPI"],
      //'ai_ml': ["Scikit-learn", "K-Means Contraint", "Clustering Capacité"]
    },
    
    researchResults: {
      keyMetrics: [
        { metric: "Points d'Intérêt Collectés", value: "72,000", description: "Données brutes initiales" },
        { metric: "Épiceries Estimées", value: "69,000", description: "Après pondération et nettoyage" },
        { metric: "Zones Commerciales Créées", value: "535", description: "Zones équilibrées nationales" },
        { metric: "Cible Stores par Zone", value: "300-400", description: "Charge de travail équilibrée" }
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
      Title_1: "Data Scientist & Analyste Géospatial",
      Data: [
        {
          Title: "Collecte et Prétraitement des Données",
          Data: [
            "Extraction et nettoyage de 72,000 points d'intérêt (mosquées, souks, écoles, hôpitaux)",
            "Intégration des données du RGPH 2024 pour la pondération démographique",
            "Classification urbain-rural et déduplication des données"
          ]
        },
        {
          Title: "Modélisation et Estimation",
          Data: [
            "Développement d'un modèle de pondération population-densité-activité",
            "Estimation réaliste de la distribution des épiceries à l'échelle nationale",
            "Réduction de 72,000 à 69,000 points via stratégie de minimisation"
          ]
        },
        {
          Title: "Clustering et Zoning Intelligent",
          Data: [
            "Implémentation d'algorithme K-Means sous contraintes de capacité",
            "Création de 535 zones commerciales équilibrées (300-400 stores/zone)",
            "Assurance de la cohérence spatiale et morphologique urbaine"
          ]
        }
      ],
    }],
    
    KeyFeatures: [{
      Title_1: "Méthodologie de Recherche",
      Data: [
        {
          Title: "Préparation des Données Géospatiales",
          Data: [
            "Intégration des limites administratives et indicateurs de recensement",
            "Alignement sur système de coordonnées commun",
            "Enrichissement avec attributs au niveau communal"
          ]
        },
        {
          Title: "Estimation de la Demande et Pondération",
          Data: [
            "Pondération composite basée sur population, densité et activité des souks",
            "Capture de la pression démographique et de l'intensité urbaine",
            "Modélisation de l'activité commerciale des marchés traditionnels"
          ]
        },
        {
          Title: "Clustering Sous Contraintes de Capacité",
          Data: [
            "Algorithme respectant la charge de travail maximale par cluster",
            "Initialisation pondérée pour éviter les biais de départ",
            "Production de zones opérationnellement équitables"
          ]
        }
      ],
    }],
    
    ChallSolu: [{
      Title_1: "Défis Techniques & Solutions",
      Data: [
        {
          Title: "Nature Informelle du Commerce",
          Data: [
            "Défi : Absence de données officielles sur les épiceries informelles",
            "Solution : Utilisation de proxies géospatiaux (POIs) et pondération démographique",
            "Résultat : Estimation réaliste de 69,000 épiceries à partir de signaux indirects"
          ]
        },
        {
          Title: "Équilibrage des Territoires",
          Data: [
            "Défi : Création de zones équilibrées malgré la densité variable",
            "Solution : Algorithme de clustering sous contraintes de capacité",
            "Résultat : 535 zones avec 300-400 stores chacune, cohérentes spatialement"
          ]
        },
        {
          Title: "Couverture Nationale",
          Data: [
            "Défi : Inclusion des zones rurales et faible densité",
            "Solution : Classification urbain-rural et traitement différencié",
            "Résultat : Système couvrant l'ensemble du territoire marocain"
          ]
        }
      ],
    }],
    
    BusinessImpact: [{
      Title_1: "Impact Opérationnel pour WafR",
      Data: [
        {
          Title: "Optimisation des Opérations Terrain",
          Data: [
            "Réduction de la couverture inégale (zones surdesservies vs négligées)",
            "Déploiement efficace des équipes commerciales",
            "Assignation équilibrée des territoires aux équipes de vente"
          ]
        },
        {
          Title: "Prise de Décision Data-Driven",
          Data: [
            "Visibilité spatiale améliorée sur le réseau de distribution",
            "Intégration des variations de population et densité dans la planification",
            "Cadre standardisé et réutilisable pour la stratégie commerciale"
          ]
        }
      ],
    }],
    
    VisualsMedia: {
      Maps: [
        { 
          image: ['zoning-national-map.png', 'casablanca-zones.png'],
          info: [
            'Carte nationale montrant les 535 zones commerciales',
            'Détail du zoning à Casablanca avec 32 zones équilibrées'
          ]
        }
      ],
      Process: [
        { 
          image: ['merge.png', 'clustering.png'],
          info: [
            'Processus de fusion et intégration des données multi-sources',
            'Visualisation de l\'algorithme de clustering sous contraintes'
          ]
        }
      ],
      Tools: [
        { 
          image: ['dashboard.png', 'tools.png'],
          info: [
            'Dashboard d\'analyse et de monitoring du système',
            'Stack technique et outils de développement utilisés'
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

  // 1. Système RAG Intelligent
  {
    id: "rag-system",
    folderid: "rag-system",
    projectType: "web",
    platforme: "Application Web Full-Stack",
    title: "Système RAG Intelligent pour l'Éducation Mathématique",
    image: getProjectImages('project-rag-system'),
    category: "IA & Éducation",
    date: "2025",
    client_for: "Projet Académique",
    role: "Développeur Full-Stack IA",
    description: "Un système intelligent de Génération Augmentée par Récupération qui aide les étudiants à trouver et comprendre des exercices de mathématiques. Intègre du web scraping, des explications alimentées par IA, une recherche sémantique et une interface web moderne.",
    github_link: "https://github.com/NizarBelaatik/RAG_Math_College",
    live_demo: "",
    
    technology: ["Python", "FastAPI", "React", "FAISS", "HuggingFace", "OpenRouter API"],
    technology_used: {
      'front_end': ["React", "Tailwind CSS", "JavaScript"],
      'back_end': ["Python", "FastAPI", "LangChain"],
      'ai_ml': ["HuggingFace Embeddings", "FAISS", "OpenRouter API"],
      'database': ['JSONL', "Base de Données Vectorielle"],
      'tools': ['Selenium', 'BeautifulSoup', 'pdfplumber']
    },
    
    RoleResp: [{
      Title_1: "Développeur Full-Stack IA",
      Data: [
        {
          Title: "Développement du Pipeline de Données",
          Data: [
            "Construction d'un système de web scraping pour extraire des exercices mathématiques d'AlloSchool",
            "Implémentation d'un pipeline de traitement PDF et d'extraction de texte",
            "Création d'un système d'enrichissement IA utilisant OpenRouter API pour des explications étape par étape"
          ]
        },
        {
          Title: "Architecture du Système RAG",
          Data: [
            "Conception d'un système de recherche vectorielle avec FAISS et HuggingFace embeddings",
            "Implémentation d'un backend de recherche sémantique avec FastAPI",
            "Construction d'un frontend React avec interface de chat en temps réel"
          ]
        },
        {
          Title: "Intégration IA",
          Data: [
            "Intégration de multiples modèles IA pour la génération et l'enrichissement de contenu",
            "Implémentation de cache et d'optimisation pour les appels API",
            "Développement d'ingénierie de prompt pour le contenu éducatif"
          ]
        }
      ],
    }],
    
    KeyFeatures: [{
      Title_1: null,
      Data: [
        {
          Title: "Recherche & Récupération Intelligente",
          Data: [
            "Recherche sémantique sur 1500+ exercices mathématiques",
            "Base de données vectorielle FAISS pour une recherche de similarité rapide",
            "Embeddings multilingues pour le contenu français/arabe"
          ]
        },
        {
          Title: "Explications Alimentées par IA",
          Data: [
            "Solutions étape par étape générées par IA",
            "Correction automatique pour les réponses manquantes",
            "Explications contextuelles basées sur les requêtes des étudiants"
          ]
        },
        {
          Title: "Interface Web Moderne",
          Data: [
            "Interface de chat en temps réel avec navigation des réponses",
            "Design responsive avec Tailwind CSS",
            "Régénération et filtrage multiples des réponses"
          ]
        }
      ],
    }],
    
    VisualsMedia: {
      ScreenShot: [
        { 
          image: ['rag-dashboard.png'],
          info: ['Tableau de bord principal montrant l\'interface de recherche et la fonctionnalité de chat']
        },
        { 
          image: ['rag-results.png'],
          info: ['Résultats de recherche avec multiples solutions d\'exercices et navigation']
        }
      ],
      Diagrams: [
        { 
          image: ['rag-architecture.png'],
          info: ['Diagramme d\'architecture système montrant le flux de données et les composants']
        }
      ],
      VideoDemo: [
        { 
          video: ['rag-demo.mp4'],
          info: ['Démonstration en direct du système RAG en action']
        }
      ]
    },
  },

  // 2. Recherche d'Optimisation GAN
  {
    id: "gan-optimization",
    folderid: "gan-optimization", 
    projectType: "research",
    platforme: "Recherche en Machine Learning",
    title: "Optimisation GAN : Étude Comparative des Algorithmes d'Optimisation",
    image: getProjectImages('project-gan-optimization'),
    category: "Deep Learning & GANs",
    date: "Juin-2025",
    client_for: "Recherche Académique",
    role: "Ingénieur Recherche ML",
    description: "Recherche analysant l'impact des algorithmes d'optimisation (Adam, RMSprop, SGD, Lookahead) sur la stabilité de l'entraînement GAN et la qualité des sorties utilisant l'architecture DCGAN sur le dataset CIFAR-10.",
    github_link: "https://github.com/NizarBelaatik/gan-optimization-benchmark",
    research_paper: "",
    
    technology: ["PyTorch", "Python", "DCGAN", "CIFAR-10", "Adam", "RMSprop", "SGD", "Lookahead"],
    technology_used: {
      'ml_framework': ["PyTorch", "NumPy", "Matplotlib", "Seaborn"],
      'architecture': ["DCGAN", "CNN", "Générateur-Discriminateur"],
      'optimizers': ["Adam", "RMSprop", "SGD+Momentum", "Lookahead"],
      'dataset': ["CIFAR-10", "Traitement d'Image"],
      'evaluation': ["Analyse des Pertes", "Score FID", "Évaluation de la Qualité Visuelle", "Détection de l'Effondrement des Modes"]
    },
    
    researchResults: {
      fidScores: [
        { optimizer: "SGD avec Momentum", score: 284.68, rank: 1 },
        { optimizer: "RMSprop", score: 286.49, rank: 2 },
        { optimizer: "Lookahead", score: 293.12, rank: 3 },
        { optimizer: "Adam", score: 294.13, rank: 4 }
      ],
      keyFindings: [
        "Lookahead a montré la convergence la plus stable avec des oscillations minimales",
        "Adam a convergé le plus rapidement mais a montré une instabilité occasionnelle",
        "SGD avec Momentum a fourni une amélioration constante mais plus lente",
        "RMSprop était sujet à la divergence et aux motifs répétitifs"
      ]
    },
    
    RoleResp: [{
      Title_1: "Ingénieur Recherche ML",
      Data: [
        {
          Title: "Conception Expérimentale & Implémentation",
          Data: [
            "Conception d'expériences contrôlées comparant 4 algorithmes d'optimisation sur l'architecture DCGAN",
            "Implémentation d'un pipeline d'entraînement cohérent avec PyTorch sur le dataset CIFAR-10",
            "Développement de métriques d'évaluation incluant les scores FID et l'analyse des pertes"
          ]
        },
        {
          Title: "Analyse de Performance",
          Data: [
            "Calcul de la Distance de Fréchet Inception (FID) pour la comparaison quantitative",
            "Analyse de la stabilité de l'entraînement via visualisation des courbes de perte",
            "Évaluation de la qualité visuelle et de la diversité sur 15 époques d'entraînement"
          ]
        }
      ],
    }],
    
    KeyFeatures: [{
      Title_1: "Méthodologie de Recherche",
      Data: [
        {
          Title: "Benchmarking Systématique",
          Data: [
            "Comparaison systématique des optimiseurs Adam, RMSprop, SGD+Momentum et Lookahead",
            "Analyse quantitative utilisant les courbes de perte et la Distance de Fréchet Inception (FID)",
            "Évaluation qualitative via inspection visuelle des échantillons générés"
          ]
        },
        {
          Title: "Implémentation Technique",
          Data: [
            "Architecture DCGAN avec hyperparamètres cohérents à travers toutes les expériences",
            "Entraînement sur le dataset CIFAR-10 (60 000 images, 10 classes)",
            "15 époques d'entraînement avec taille de lot 64 et perte d'entropie croisée binaire"
          ]
        },
        {
          Title: "Conclusions & Insights Clés",
          Data: [
            "Identification de Lookahead comme optimiseur le plus stable avec convergence fluide",
            "Adam a montré la convergence la plus rapide mais une instabilité occasionnelle",
            "SGD avec Momentum a fourni une progression d'entraînement stable mais plus lente",
            "RMSprop a montré une sensibilité aux dynamiques adverses"
          ]
        }
      ],
    }],
    
    ChallSolu: [{
      Title_1: "Défis de Recherche & Solutions",
      Data: [
        {
          Title: "Instabilité de l'Entraînement & Effondrement des Modes",
          Data: [
            "Défi : L'entraînement GAN sujet à la divergence et l'effondrement des modes avec certains optimiseurs",
            "Solution : Implémentation de l'optimiseur Lookahead et réglage minutieux des hyperparamètres",
            "Résultat : Entraînement stable atteint avec génération de sorties diversifiées"
          ]
        },
        {
          Title: "Métriques d'Évaluation Objectives",
          Data: [
            "Défi : La nature subjective de l'évaluation GAN rend la comparaison difficile",
            "Solution : Combinaison de méthodes quantitatives (scores FID, courbes de perte) et qualitatives (inspection visuelle)",
            "Résultat : Évaluation couvrant à la fois la stabilité et la qualité des sorties"
          ]
        },
        {
          Title: "Recherche Reproductible",
          Data: [
            "Défi : Assurer des conditions expérimentales cohérentes à travers les comparaisons d'optimiseurs",
            "Solution : Standardisation de l'architecture, du dataset et des procédures d'entraînement",
            "Résultat : Benchmarking équitable et reproductible des algorithmes d'optimisation"
          ]
        }
      ],
    }],
    
    VisualsMedia: {
      ScreenShot: [
        { 
          image: ['gan-loss-curves.png', 'gan-comparison.png'],
          info: ['Courbes de perte du générateur et du discriminateur par optimiseur', 'Analyse comparative de la stabilité de l\'entraînement']
        },
        { 
          image: ['gan-samples-evolution.png', 'gan-epoch-comparison.png'],
          info: ['Progression des images générées à travers les époques d\'entraînement', 'Comparaison de la qualité visuelle à différents stades d\'entraînement']
        }
      ],
      Diagrams: [
        { 
          image: ['gan-architecture.png', 'gan-experimental-setup.png'],
          info: ['Diagramme d\'architecture DCGAN', 'Organigramme de la configuration expérimentale et de la méthodologie']
        }
      ],
      ResearchData: [
        {
          image: ['gan-fid-scores.png', 'gan-results-table.png'],
          info: ['Comparaison des scores FID par optimiseur', 'Tableau récapitulatif des résultats quantitatifs']
        }
      ]
    },
    
    metrics: {
      optimizers_tested: "4",
      training_epochs: "15",
      dataset_size: "60 000 images",
      best_fid_score: "284.68 (SGD)",
      key_finding: "Lookahead = Plus Stable"
    }
  },
  
  // 3. Plateforme de Recrutement RecruSmart Microservices
  {
    id: "recrusmart-microservices",
    folderid: "recrusmart-microservices",
    projectType: "web",
    platforme: "Plateforme Architecturale Microservices",
    title: "RecruSmart - Plateforme de Recrutement Intelligente",
    image: getProjectImages('project-recrusmart',[
      'recrusmart-homepage.png',
      'recrusmart-homepage-dark.png', 
      'recrusmart-offers.png', 
      'recrusmart-login.png', 
      'recrusmart-registration.png'
    ]),
      
    category: "Architecture Microservices & Entreprise",
    date: "2025",
    client_for: "Projet Académique",
    role: "Développeur Full-Stack Microservices & Architecte Système",
    description: "Une plateforme de recrutement intelligente construite avec une architecture microservices, Domain-Driven Design et une communication événementielle. Intègre l'analyse de CV par IA, l'appariement automatisé et les notifications multi-canaux.",
    github_link: "",
    live_demo: "",
    
    technology: ["Spring Boot", "Node.js", "FastAPI", "React", "Docker", "Kubernetes", "RabbitMQ", "MongoDB", "MySQL"],
    technology_used: {
      'frameworks_backend': ["Spring Boot (Java)", "Node.js/Express", "FastAPI (Python)"],
      'frontend': ["React 18", "TypeScript", "Tailwind CSS"],
      'architecture': ["Microservices", "Domain-Driven Design", "Architecture Événementielle"],
      'bases_de_donnees': ["MongoDB", "MySQL", "Cloudflare R2"],
      'messagerie': ["RabbitMQ", "Event Sourcing"],
      'infrastructure': ["Docker", "Kubernetes", "Consul", "Spring Cloud Gateway"],
      'ai_ml': ["spaCy", "Sentence Transformers", "Mistral 7B", "NLP"]
    },
    
    RoleResp: [{
      Title_1: "Architecte Système & Développeur Full-Stack",
      Data: [
        {
          Title: "Implémentation Domain-Driven Design",
          Data: [
            "Conception et implémentation de 6 contextes délimités utilisant les patterns stratégiques DDD",
            "Création de cartes de contexte et définition du langage ubiquitaire pour le domaine du recrutement",
            "Implémentation des agrégats, événements métier et objets valeur à travers les services"
          ]
        },
        {
          Title: "Développement d'Architecture Microservices",
          Data: [
            "Construction de 6 microservices indépendants utilisant la persistance polyglotte",
            "Implémentation de la communication événementielle avec RabbitMQ",
            "Conception et déploiement d'API Gateway avec Spring Cloud Gateway",
            "Configuration de la découverte de services avec Consul"
          ]
        },
        {
          Title: "Intégration IA & Logique Métier",
          Data: [
            "Intégration de modèles NLP pour l'analyse automatisée des CV et le scoring",
            "Implémentation d'algorithmes intelligents d'appariement candidats-offres",
            "Développement du système de notification avec livraison multi-canaux (Email, WhatsApp)"
          ]
        }
      ],
    }],
    
    KeyFeatures: [{
      Title_1: "Fonctionnalités Architecture & Techniques",
      Data: [
        {
          Title: "Architecture Microservices",
          Data: [
            "6 services indépendants : Authentification, Candidats, Offres, IA, Entretiens, Notifications",
            "Persistance polyglotte avec MongoDB et MySQL",
            "Communication événementielle via RabbitMQ",
            "Conteneurisation avec Docker et orchestration avec Kubernetes"
          ]
        },
        {
          Title: "Implémentation Domain-Driven Design",
          Data: [
            "Conception stratégique avec contextes délimités et cartographie de contexte",
            "Patterns tactiques : Agrégats, Événements Métier, Objets Valeur",
            "Langage ubiquitaire aligné avec le domaine métier du recrutement"
          ]
        },
        {
          Title: "Fonctionnalités Intelligentes de Recrutement",
          Data: [
            "Analyse de CV alimentée par IA utilisant spaCy et modèles transformers",
            "Appariement automatisé candidat-offre avec algorithmes de scoring",
            "Support multilingue (Français/Arabe) pour le marché marocain",
            "Intégration Google Calendar et Meet pour la planification des entretiens"
          ]
        }
      ],
    }],
    
    ChallSolu: [{
      Title_1: "Défis Architecturaux & Solutions",
      Data: [
        {
          Title: "Gestion des Transactions Distribuées",
          Data: [
            "Défi : Maintenir la cohérence des données à travers multiples services",
            "Solution : Implémentation de sagas événementielles avec transactions compensatoires",
            "Résultat : Processus métier fiables sans transactions distribuées"
          ]
        },
        {
          Title: "Communication & Découverte de Services",
          Data: [
            "Défi : Localisation dynamique des services et équilibrage de charge",
            "Solution : Utilisation de Consul pour la découverte et API Gateway pour le routage",
            "Résultat : Communication résiliente avec basculement automatique"
          ]
        },
        {
          Title: "Intégration IA dans un Système Distribué",
          Data: [
            "Défi : Intégration du traitement IA intensif en CPU dans les microservices",
            "Solution : Service IA isolé avec traitement asynchrone et files de messages",
            "Résultat : Fonctionnalités IA scalables sans bloquer les autres services"
          ]
        }
      ],
    }],
    
    researchResults: {
      performanceMetrics: [
        { metric: "Temps de Réponse API", value: "< 200ms", description: "95% des requêtes" },
        { metric: "Scalabilité des Services", value: "Mise à l'Échelle Indépendante", description: "Par microservice" },
        { metric: "Couverture de Tests", value: "80%", description: "Tests unitaires et d'intégration" },
        { metric: "Fréquence de Déploiement", value: "Pipeline CI/CD", description: "GitHub Actions + Argo CD" }
      ]
    },
    
    VisualsMedia: {
      Architecture: [
        { 
          image: ['recrusmart-context-map.png', 'recrusmart-eda-architecture.png'],
          info: ['Carte de Contexte Domain-Driven Design', 'Diagramme Architecture Événementielle']
        }
      ],
      UML: [
        { 
          image: ['recrusmart-use-case.png', 'recrusmart-sequence-diagram.png', 'recrusmart-class-diagram.png', 'recrusmart-activity-diagram.png'],
          info: ['Diagramme de Cas d\'Utilisation', 'Diagramme de Séquence', 'Diagramme de Classes', 'Diagramme d\'Activités']
        }
      ],
      Interface: [
        { 
          image: ['recrusmart-homepage.png','recrusmart-homepage-dark.png', 'recrusmart-offers.png', 'recrusmart-login.png', 'recrusmart-registration.png'],
          info: ['Interface Page d\'Accueil', 'Interface Page d\'Accueil (Mode Sombre)', 'Liste des Offres d\'Emploi', 'Page de Connexion', 'Page d\'Inscription']
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

  // 4. Registre de Certificats Blockchain
  {
    id: "blockchain-certificate",
    folderid: "blockchain-certificate",
    projectType: "web",
    platforme: "Application Décentralisée (dApp)",
    title: "Registre de Certificats Blockchain dApp",
    image: getProjectImages('project-blockchain-certificate'),
    category: "Blockchain & Web3",
    date: "2025", 
    client_for: "Projet Académique",
    role: "Développeur Blockchain Full-Stack",
    description: "Une application décentralisée full-stack pour enregistrer et gérer des certificats numériques sur la blockchain Ethereum. Les utilisateurs peuvent enregistrer des hachages de fichiers, transférer la propriété et gérer des actifs numériques de manière sécurisée.",
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
      Title_1: "Développeur Blockchain Full-Stack",
      Data: [
        {
          Title: "Développement de Smart Contracts",
          Data: [
            "Conception et implémentation de smart contracts Solidity pour la gestion de certificats",
            "Implémentation des fonctions de transfert de propriété et d'enregistrement",
            "Assurance des bonnes pratiques de sécurité et optimisation du gas"
          ]
        },
        {
          Title: "Frontend dApp",
          Data: [
            "Construction d'interface React pour interagir avec les smart contracts",
            "Intégration de Web3.js pour la connectivité blockchain",
            "Implémentation de l'intégration MetaMask pour l'authentification utilisateur"
          ]
        },
        {
          Title: "Tests & Déploiement",
          Data: [
            "Configuration du développement blockchain local avec Ganache",
            "Implémentation de tests complets pour les smart contracts",
            "Configuration de Truffle pour la compilation et migration des contrats"
          ]
        }
      ],
    }],
    
    KeyFeatures: [{
      Title_1: null,
      Data: [
        {
          Title: "Gestion d'Actifs Numériques",
          Data: [
            "Enregistrement de fichiers sur la blockchain utilisant des hachages SHA-256",
            "Transfert de propriété des certificats entre adresses",
            "Visualisation et gestion de tous les actifs enregistrés"
          ]
        },
        {
          Title: "Intégration Blockchain",
          Data: [
            "Déploiement de smart contracts sur la blockchain Ethereum",
            "Intégration MetaMask pour des transactions sécurisées",
            "Interaction blockchain en temps réel via Web3.js"
          ]
        },
        {
          Title: "Expérience Utilisateur",
          Data: [
            "Upload de fichiers avec génération automatique de hachage",
            "Transfert de propriété avec validation d'adresse",
            "Liste d'actifs avec capacités de recherche et filtrage"
          ]
        }
      ],
    }],
    
    VisualsMedia: {
      ScreenShot: [
        { 
          image: ['dapp-dashboard.png'],
          info: ['Interface principale dApp montrant l\'enregistrement et la gestion des certificats']
        },
        { 
          image: ['dapp-transfer.png'],
          info: ['Interface de transfert de propriété avec validation d\'adresse']
        }
      ],
      Diagrams: [
        { 
          image: ['blockchain-architecture.png'],
          info: ['Architecture système montrant l\'interaction smart contract et dApp']
        }
      ]
    },
  },

  // ========== PROJETS EXISTANTS ==========
  
  // 5. Plateforme de Gestion de Projet Intégrée
  {
    id: "1",
    folderid: "1",
    projectType: "web",
    platforme: "Application Web",
    title: "Plateforme de Gestion de Projet Intégrée",
    image: getProjectImages('project-1'),
    category: "IGEP",
    date: "Septembre 2023 - Février 2024",
    client_for: "Freelance",
    role: "Full-Stack",
    description: "Une plateforme complète conçue pour centraliser les tâches de gestion de projet, incluant la collecte, le traitement et la vérification des données. La plateforme intègre la soumission de formulaires, la gestion des données, la communication en temps réel et le contrôle d'accès basé sur les rôles. Inclut également un serveur de sauvegarde pour assurer l'intégrité et la récupération des données.",
    github_link: "#",
    
    technology: ["Python", "Django", "RESTful API", "HTML", "CSS", "JavaScript", "Jquery", "Bootstrap"],
    technology_used: {
      'front_end': ["HTML", "CSS", "JavaScript", "Jquery", "Bootstrap"],
      'back_end': ["Python", "Django", "RESTful API", "JSON"],
      'database': ['SQL', "PostgreSQL"],
      'techFra': null
    },
    details: "",

    RoleResp: [
      {
        Title_1: "Développement Front-end",
        Data: [
          {
            Title: "Conception d'Interface Utilisateur:",
            Data: [
              "Conception et implémentation de l'interface utilisateur utilisant HTML, CSS et JavaScript.",
              "Assurance d'un design responsive et intuitif utilisant Bootstrap pour une expérience utilisateur fluide sur tous les appareils."
            ]
          },
          {
            Title: "Intégration de Formulaires:",
            Data: [
              "Développement de formulaires pour capturer divers types de données (texte, nombres, images, signatures).",
              "Intégration de fonctionnalités de géolocalisation automatisée permettant aux utilisateurs de capturer leur position en un clic."
            ]
          },
          {
            Title: "Fonctionnalités de Communication:",
            Data: [
              "Implémentation de fonctionnalités de chatbox pour la communication en temps réel entre utilisateurs dans chaque projet."
            ]
          },
          {
            Title: "Expérience Utilisateur (UX):",
            Data: [
              "Assurance que la plateforme soit conviviale et visuellement cohérente.",
              "Réalisation de tests d'utilisabilité pour affiner l'interface et améliorer les interactions utilisateur."
            ]
          }
        ]
      },
      {
        Title_1: "Développement Back-end",
        Data: [
          {
            Title: "Logique Serveur:",
            Data: [
              "Développement des fonctionnalités backend utilisant Django, incluant l'authentification utilisateur, le contrôle d'accès basé sur les rôles et le traitement des données.",
              "Implémentation d'API RESTful pour gérer la communication entre frontend et backend."
            ]
          },
          {
            Title: "Gestion de Base de Données:",
            Data: [
              "Conception et gestion du schéma de base de données PostgreSQL pour stocker les informations utilisateur, les données de projet et les enregistrements de sauvegarde.",
              "Implémentation des opérations CRUD (Create, Read, Update, Delete) pour gérer les données de projet et utilisateur.",
              "Création d'une structure de base de données robuste supportant toutes les fonctionnalités requises et l'intégrité des données."
            ]
          },
          {
            Title: "Système de Sauvegarde:",
            Data: [
              "Implémentation d'un système de sauvegarde de serveur local pour sauvegarder automatiquement toutes les données quotidiennement.",
              "Assurance que les processus de sauvegarde soient fiables et que les données puissent être restaurées si nécessaire.",
              "Amélioration de la sécurité et de la fiabilité des données avec un processus de sauvegarde régulier, assurant une perte de données minimale."
            ]
          },
          {
            Title: "Contrôle d'Accès Basé sur les Rôles:",
            Data: [
              "Développement et gestion du contrôle d'accès basé sur les rôles pour restreindre et accorder l'accès à diverses parties de la plateforme selon les rôles utilisateur.",
              "Implémentation de contrôles d'accès efficaces pour protéger les informations sensibles et gérer les permissions utilisateur."
            ]
          }
        ]
      },
      {
        Title_1: "Contributions Additionnelles",
        Data: [
          {
            Title: "Intégration et Tests:",
            Data: [
              "Intégration des composants frontend et backend pour assurer une fonctionnalité fluide.",
              "Réalisation de tests approfondis pour identifier et corriger les bugs, optimiser les performances et assurer la stabilité globale.",
              "Livraison d'une plateforme entièrement fonctionnelle avec des problèmes minimaux, répondant aux exigences du projet et aux attentes des utilisateurs."
            ]
          },
          {
            Title: "Documentation:",
            Data: [
              "Création d'une documentation complète pour les composants frontend et backend, incluant les instructions d'installation, les directives d'utilisation et les conseils de dépannage."
            ]
          },
          {
            Title: "Collaboration et Communication:",
            Data: [
              "Coordination avec les autres membres de l'équipe et les parties prenantes pour recueillir les exigences, fournir des mises à jour et incorporer les retours.",
              "Assurance que le projet réponde aux besoins de tous les utilisateurs grâce à une communication et une collaboration efficaces."
            ]
          }
        ]
      }
    ],
    KeyFeatures: [{
      Title_1: null,
      Data: [{
          Title: 'Authentification Utilisateur et Contrôle d\'Accès Basé sur les Rôles:',
          Data: [
            "Inscription : L'accès à la plateforme n'est accordé qu'aux utilisateurs inscrits par un administrateur.",
            "Contrôle d'Accès Basé sur les Rôles : Les utilisateurs ne peuvent visualiser ou interagir qu'avec les parties de la plateforme pertinentes pour leurs rôles attribués."
          ]
        },
        {
          Title: 'Collecte et Gestion de Données:',
          Data: [
            "Intégration de Formulaires : Les utilisateurs remplissent des formulaires avec du texte, des nombres, des images et des signatures.",
            "Formulaires Téléchargeables : Les formulaires peuvent être téléchargés au format XLSX pour un traitement hors ligne.",
            "Gestion de Fichiers : Inclut une corbeille pour récupérer les fichiers supprimés accidentellement."
          ]
        },
        {
          Title: 'Communication et Collaboration:',
          Data: [
            "Chatbox : Chaque projet/client inclut une chatbox pour la communication en temps réel.",
            "Suivi de l'État des Projets : Suivre et mettre à jour les statuts des projets, incluant ajouté, terminé, envoyé et modifié."
          ]
        },
        {
          Title: 'Rapports et Statistiques:',
          Data: [
            "Statistiques de Projet : Suivre et visualiser les statistiques sur la progression et les statuts des projets.",
            "Statistiques des Travailleurs : Les administrateurs peuvent visualiser les métriques de performance pour les auditeurs, incluant les comptes de projets et les statuts sur diverses périodes."
          ]
        }
      ]
    }],
    ChallSolu: [{
      Title_1: null,
      Data: [
        {
          Title: 'Gestion d\'Accès Sécurisée:',
          Data: [
            "Défi : S'assurer que seuls les utilisateurs autorisés puissent accéder à la plateforme et ses fonctionnalités.",
            "Solution : Implémentation du système d'authentification intégré de Django et des permissions basées sur les rôles pour contrôler l'accès."
          ]
        },
        {
          Title: 'Expérience Utilisateur:',
          Data: [
            "Défi : Équilibrer les fonctionnalités complexes avec une interface conviviale.",
            "Solution : Utilisation de Bootstrap et jQuery pour créer un design intuitif et responsive."
          ]
        },
        {
          Title: 'Gestion et Récupération des Données:',
          Data: [
            "Défi : Gérer et récupérer les données efficacement.",
            "Solution : Inclusion d'une fonctionnalité de corbeille et de mécanismes robustes de gestion d'erreurs."
          ]
        }
      ]
    }],
    Reflection: [{
      Title_1: 'Ce Que Vous Avez Appris',
      Data: [
        {
          Title: "Contrôle d'Accès Basé sur les Rôles : Acquis une expérience pratique de l'implémentation d'un contrôle d'accès sécurisé basé sur les rôles, assurant que les utilisateurs n'aient accès qu'aux données et fonctionnalités pertinentes.",
          Data: null
        },
        {
          Title: "Intégrité des Données et Sauvegarde : Appris l'importance des sauvegardes régulières de données et des processus de récupération pour prévenir la perte de données et assurer la continuité des activités.",
          Data: null
        },
        {
          Title: "Intégration Frontend et Backend : Amélioré les compétences en intégration des technologies frontend et backend, assurant un flux de données fluide et une interaction utilisateur.",
          Data: null
        },
        {
          Title: "Authentification Utilisateur : Amélioré la compréhension des méthodes d'authentification sécurisées et de la gestion des utilisateurs dans les applications web.",
          Data: null
        }
      ]
    },
    {
      Title_1: 'Améliorations',
      Data: [{
          Title: "Interface Utilisateur Améliorée:",
          Data: [
            "Amélioration : Affiner continuellement l'interface utilisateur pour une expérience plus intuitive basée sur les retours utilisateurs.",
            "Plan : Réaliser des tests utilisateurs et implémenter des améliorations de design."
          ]
        },
        {
          Title: "Analytiques Avancées:",
          Data: [
            "Amélioration : Étendre les fonctionnalités de reporting et d'analytique pour fournir des insights plus détaillés sur la performance des projets et des travailleurs.",
            "Plan : Intégrer des outils avancés de visualisation de données et des fonctionnalités de reporting."
          ]
        },
        {
          Title: "Scalabilité:",
          Data: [
            "Amélioration : Améliorer la scalabilité de la plateforme pour gérer une charge utilisateur accrue et un volume de données plus important.",
            "Plan : Optimiser les processus backend et considérer des solutions cloud pour la scalabilité."
          ]
        },
        {
          Title: "Améliorations des Sauvegardes Automatisées:",
          Data: [
            "Amélioration : Améliorer le système de sauvegarde pour inclure des options de stockage cloud et des intervalles de sauvegarde plus fréquents.",
            "Plan : Implémenter des sauvegardes incrémentielles et explorer des solutions de sauvegarde hybrides."
          ]
        }
      ]
    }],

    VisualsMedia: {
      ScreenShot: [
        {
          ImInTitle: "Tableau de Bord",
          ImInData: [
            {
              image: ['1.png'],
              info: ["Le tableau de bord fournit une vue d'ensemble des activités récentes et du statut des projets. Il affiche les statistiques clés telles que le nombre de projets ajoutés, terminés, envoyés et modifiés."]
            }
          ]
        },
        {
          ImInTitle: "Tableau des Projets avec Chatbox et Boîte de Fichiers",
          ImInData: [
            {
              image: ['2.png'],
              info: ["Cet écran affiche un tableau de projets organisés par leur état actuel. Chaque entrée de projet inclut une chatbox pour la communication et une boîte de fichiers pour gérer les documents du projet."]
            }
          ]
        },
        {
          ImInTitle: "Vue d'Ensemble Auditeur",
          ImInData: [
            {
              image: ['3.png'],
              info: ["Un écran de vue d'ensemble axé sur la performance et l'activité des auditeurs. Il montre les statistiques liées aux projets sur lesquels ils ont travaillé sur diverses périodes."]
            }
          ]
        },
        {
          ImInTitle: "Projets par État et Activité Auditeur",
          ImInData: [
            {
              image: ['track1.png'],
              info: ["Cet écran fournit une vue détaillée des projets organisés par leur état, comme terminé, envoyé et modifié. Il inclut des statistiques sur combien de projets dans chaque état ont été gérés par un auditeur spécifique sur diverses périodes."]
            }
          ]
        },
        {
          ImInTitle: "Vue d'Ensemble de l'Activité Auditeur",
          ImInData: [
            {
              image: ['track2.png'],
              info: ["Une vue d'ensemble des activités individuelles des auditeurs, montrant des statistiques détaillées sur ce sur quoi ils ont travaillé sur diverses périodes."]
            }
          ]
        },
        {
          ImInTitle: "Vue d'Ensemble Visiteur Technique",
          ImInData: [
            {
              image: ['vt1.png'],
              info: ["Un écran de vue d'ensemble qui montre l'activité globale et les contributions du Visiteur Technique, incluant les projets dans lesquels il est impliqué et ses soumissions de données."]
            }
          ]
        },
        {
          ImInTitle: "Formulaire pour Visiteur Technique",
          ImInData: [
            {
              image: ['vt2.png'],
              info: ["Le formulaire que le Visiteur Technique doit remplir lors de la collecte et soumission des données de projet. Il inclut des champs pour le texte, les nombres, les images, les signatures et la géolocalisation automatisée."]
            }
          ]
        }
      ],
      Diagrams: null,
      VideoDemo: null
    }
  },

  // 6. Système de Gestion de la Vie Étudiante
  {
    id: "student-life-management-system",
    folderid: "2",
    projectType: "web",
    platforme: "Application Web : Le système est une plateforme web accessible via les navigateurs web modernes. Cela permet aux étudiants, administrateurs et personnel responsable d'interagir avec le système depuis n'importe quel appareil avec une connexion internet.",
    title: "Système de Gestion de la Vie Étudiante",
    image: getProjectImages('project-2'),
    category: "Système de Gestion Éducative : Cette application relève de la catégorie des systèmes de gestion éducative, se concentrant sur l'amélioration de l'efficacité administrative et l'amélioration des services aux étudiants. Elle supporte des fonctionnalités comme la gestion des emplois du temps, le traitement des documents et la communication au sein d'un établissement académique.",
    date: "Février 2023 - Juin 2023",
    project_for: "Faculté des Sciences Ben M'Sik",
    client_for: 'Projet Académique',
    role: "Full-Stack",
    description: "Le Système de Gestion de la Vie Étudiante est une application web conçue pour rationaliser les interactions des étudiants avec leur établissement académique. Il facilite la gestion de divers aspects tels que la planification, les demandes de documents et les tâches administratives. Le système vise à améliorer l'expérience étudiante en fournissant une plateforme conviviale pour accéder et gérer les services académiques et administratifs.",
    github_link: "#",
    
    technology: ["JAVA", "JEE", "HTML", "CSS", "JavaScript"],
    technology_used: {
      'front_end': ["HTML", "CSS", "JavaScript"],
      'back_end': ["JAVA", "JEE"],
      'database': ['SQL', "MySQL"],
      'techFra': null,
      'tech': ['Apache', 'XAMPP']
    },
    details: "",
    
    AboutProject: [{
      Title_1: null,
      Data_without_Style: true,
      Data: [
        {
          Title: null,
          Title2: "Ce projet implique la création d'une application web pour la Faculté des Sciences BEN M'SIK pour rationaliser l'accès aux documents administratifs pour les étudiants. L'app vise à résoudre les délais dans la récupération des documents, qui peuvent perturber la progression académique. Elle offre une solution rapide pour que les étudiants demandent et téléchargent des documents essentiels comme les relevés de notes, les certificats d'inscription et les certificats de réussite en un clic.",
          Data: null
        },
        {
          Title: null,
          Title2: "L'application comporte deux zones principales :",
          Data: [
            "Tableau de Bord Administrateur : Gère les mises à jour de documents, les dossiers étudiants et la planification.",
            "Portail Étudiant : Permet aux étudiants de demander, télécharger des documents et visualiser leurs emplois du temps."
          ]
        },
        {
          Title: null,
          Title2: "L'interface conviviale est conçue pour améliorer l'efficacité administrative et faciliter la gestion académique des étudiants.",
          Data: null
        }
      ]
    }],
    ProblemStatment: [{
      Title_1: null,
      Data_without_Style: true,
      Data: [
        {
          Title: null,
          Title2: "Le défi principal abordé par cette application est le besoin d'une fonctionnalité de signature numérique pour permettre aux étudiants de télécharger des documents administratifs rapidement et flexiblement. L'application cherche également à améliorer l'efficacité de la gestion des emplois du temps, des demandes de documents et des tâches administratives.",
          Data: null
        }
      ]
    }],

    RoleResp: [
      {
        Title_1: "Développeur Full-Stack",
        Data: [
          {
            Title: 'Développement Front-end',
            Data: [
              "Conception et implémentation de l'interface utilisateur utilisant HTML, CSS et JavaScript pour assurer une expérience utilisateur fluide et engageante.",
              "Développement d'éléments interactifs et assurance de la compatibilité multi-navigateurs.",
              "Création de designs responsives pour assurer l'utilisabilité sur divers appareils et tailles d'écran."
            ]
          },
          {
            Title: 'Développement Back-end',
            Data: [
              "Développement de la logique serveur utilisant Java JEE, incluant l'implémentation d'API RESTful pour gérer les requêtes client et le traitement des données.",
              "Gestion de l'authentification utilisateur, de la gestion des sessions et de la sécurité des données.",
              "Intégration de l'application avec la base de données MySQL, implémentation des opérations CRUD et optimisation des requêtes de base de données pour la performance."
            ]
          },
          {
            Title: 'Gestion de Base de Données',
            Data: [
              "Conception du schéma de base de données et des relations pour supporter les fonctionnalités de l'application.",
              "Assurance de la cohérence et de l'intégrité des données grâce à une conception minutieuse et à l'indexation.",
              "Développement de requêtes SQL pour une récupération efficace des données et le reporting."
            ]
          },
          {
            Title: 'Collaboration',
            Data: [
              "Travail étroit avec les membres de l'équipe pour définir les exigences, concevoir les solutions et implémenter les fonctionnalités.",
              "Participation aux revues de code et fourniture de retours pour assurer la qualité du code et l'adhésion aux meilleures pratiques."
            ]
          }
        ]
      }
    ],
    KeyFeatures: [{
      Title_1: 'Pour les Étudiants',
      Data: [
        {
          Title: 'Visualiser les Emplois du Temps',
          Data: [
            "Emplois du temps des cours (Cours, TD, TP)",
            "Emplois du temps des examens (Régulier et Reporté)"
          ]
        },
        {
          Title: 'Demander des Documents',
          Data: [
            "Demandes de diplôme",
            "Retrait de dossier permanent",
            "Retrait de dossier temporaire"
          ]
        },
        {
          Title: 'Télécharger des Documents',
          Data: [
            "Certificat d'inscription",
            "Relevé de notes"
          ]
        },
        {
          Title: 'Consulter les Événements et Actualités',
          Data: [
            "Nouvelles opportunités de bourses",
            "Actualités récentes"
          ]
        },
        {
          Title: 'Accéder au Chat de Groupe',
          Data: [
            "Interagir avec les pairs et administrateurs"
          ]
        }
      ]
    },
    {
      Title_1: 'Pour les Administrateurs',
      Data: [
        {
          Title: 'Gérer les Demandes de Documents',
          Data: ['Approuver ou rejeter les demandes']
        },
        {
          Title: 'Gérer les Emplois du Temps',
          Data: ['Ajouter, mettre à jour ou supprimer les emplois du temps']
        },
        {
          Title: 'Gérer les Étudiants',
          Data: ['Ajouter, mettre à jour ou supprimer les dossiers étudiants']
        }
      ]
    },
    {
      Title_1: 'Pour les Responsables',
      Data: [
        {
          Title: 'Gestion de Base de Données',
          Data: ['Remplir et maintenir la base de données']
        }
      ]
    }],
    
    ChallSolu: [{
      Title_1: null,
      Data: [{
        Title: 'Implémentation de Signature Numérique',
        Data: [
          "Défi : Intégrer une fonctionnalité de signature numérique pour la validation des documents et les téléchargements sécurisés.",
          "Solution : Implémentation d'un mécanisme de signature numérique sécurisé et assurance de la compatibilité avec divers formats de documents."
        ]
      }, {
        Title: 'Gestion des Données',
        Data: [
          "Défi : Gérer et synchroniser efficacement de grandes quantités de données étudiantes et d'emplois du temps.",
          "Solution : Optimisation du schéma de base de données et utilisation de l'indexation pour améliorer les performances de récupération des données."
        ]
      }]
    }],

    Reflection: [{
      Title_1: null,
      Data: [
        {
          Title: 'Croissance Personnelle :',
          Title2: "Travailler sur ce projet a fourni des opportunités significatives de croissance dans le développement front-end et back-end. J'ai acquis une expérience pratique avec Java JEE et amélioré ma capacité à intégrer efficacement les composants front-end et back-end. Le défi de l'implémentation d'une fonctionnalité de signature numérique m'a poussé à approfondir ma compréhension des pratiques de sécurité et de la gestion des données.",
          Data: null
        },
        {
          Title: 'Défis Rencontrés :',
          Title2: "Un des défis principaux était l'intégration de la fonctionnalité de signature numérique, qui nécessitait une considération minutieuse de la sécurité et de la compatibilité. De plus, assurer la réactivité de l'application sur différents appareils demandait une attention méticuleuse aux détails dans la phase de développement front-end.",
          Data: null
        },
        {
          Title: "Leçons Apprises :",
          Data: [
            "Intégration Full-Stack : Acquis des insights précieux sur la manière dont les composants front-end et back-end interagissent et l'importance d'une intégration fluide pour une expérience utilisateur cohérente.",
            "Pratiques de Sécurité : Amélioré ma compréhension des mesures de sécurité, particulièrement dans le traitement des données sensibles et l'implémentation des signatures numériques.",
            "Collaboration et Communication : Amélioré ma capacité à travailler en collaboration avec les membres de l'équipe, communiquer efficacement et gérer les exigences et délais du projet."
          ]
        },
        {
          Title: "Impact :",
          Title2: "Le projet a réussi à rationaliser les interactions des étudiants avec les services académiques, fournissant une plateforme plus efficace et conviviale. L'expérience m'a préparé pour les futurs rôles de développement full-stack et a amélioré mes compétences en résolution de problèmes dans le développement front-end et back-end.",
          Data: null
        }
      ]
    }],

    VisualsMedia: {
      ScreenShot: [
        {
          ImInTitle: "Étudiant",
          ImInData: [{
              image: ['1.jpg'],
              info: ['Page pour les actualités et événements.']
            },
            {
              image: ['2.jpg'],
              info: ['Page de demande de documents.']
            },
            {
              image: ['3.jpg'],
              info: ['Page de téléchargement de documents.']
            },
            {
              image: ['4.jpg'],
              info: ['Page pour changer le mot de passe.']
            },
            {
              image: ['5.jpg'],
              info: ['Page pour modifier les informations personnelles.']
            },
            {
              image: ['chat.jpg'],
              info: ['Page de chat de groupe.']
            }]
        },
        {
          ImInTitle: "Administrateur",
          ImInData: [{
              image: ['admin1.jpg'],
              info: ["Page pour ajouter, supprimer et éditer les actualités et événements."]
            },
            {
              image: ['admin2.jpg'],
              info: ["Page pour accepter ou rejeter les demandes."]
            },
            {
              image: ['admin3.jpg'],
              info: ["Page pour ajouter, supprimer et éditer un étudiant."]
            },
            {
              image: ['admin4.jpg'],
              info: ["Page pour ajouter et mettre à jour un emploi du temps."]
            }]
        }
      ],
      Diagrams: [
        {
          ImInTitle: "Diagrammes de Cas d'Utilisation",
          ImInData: [{
              image: ['actA.jpg'],
              info: ["Administrateur"]
            },
            {
              image: ['actE.jpg'],
              info: ["Étudiant"]
            }]
        },
        {
          ImInTitle: "Diagrammes de Séquence",
          ImInData: [{
            image: ['Diagram (2).jpg', 'Diagram (3).jpg', 'Diagram (4).jpg', 'Diagram (5).jpg', 'Diagram (6).jpg', 'Diagram (7).jpg'],
            info: ['']
          }]
        },
        {
          ImInTitle: "Diagramme de Classes Global",
          ImInData: [{
            image: ['Diagram (1).jpg'],
            info: ['']
          }]
        }
      ],
      VideoDemo: null
    }
  },

  // 7. Application de Chat en Temps Réel
  {
    id: "3",
    folderid: "3",
    projectType: "web",
    platforme: "Application web, accessible sur les navigateurs desktop et mobile.",
    title: "Application de Chat en Temps Réel",
    image: getProjectImages('project-3'),
    category: "",
    date: "Juin 2024",
    client_for: "Freelance",
    role: "Full-Stack",
    description: "L'Application de Chat en Temps Réel est une plateforme web qui permet aux utilisateurs de s'engager dans des chats individuels ou de groupe en temps réel. Les utilisateurs peuvent envoyer des messages texte, des images et des fichiers, la rendant idéale pour les conversations occasionnelles et la collaboration professionnelle.",
    github_link: "#",
    
    technology: ["Python", "Django", "RESTful API", "HTML", "CSS", "JavaScript", "Jquery", "Bootstrap"],
    technology_used: {
      'front_end': ["HTML", "CSS", "JavaScript", "Jquery", "Bootstrap"],
      'back_end': ["Python", "Django", "RESTful API", "JSON"],
      'database': ['SQL', "PostgreSQL"],
      'techFra': ['Git']
    },
    details: "",
    
    RoleResp: [{
      Title_1: 'Développeur Full-Stack',
      Title_2: null,
      Data: [
        {
          Title: 'Développement Back-end',
          Data: [
            "Conception et implémentation du schéma de base de données pour le stockage",
            "Implémentation de la fonctionnalité de chat en temps réel utilisant Django Channels"
          ]
        },
        {
          Title: 'Développement Front-end',
          Data: [
            "Création de composants UI responsives utilisant Bootstrap et CSS personnalisé",
            "Intégration d'appels AJAX pour les mises à jour de données en temps réel et les fonctionnalités interactives"
          ]
        }
      ]
    }],
    
    KeyFeatures: [{
      Title_1: null,
      Data: [
        {
          Title: 'Chat Individuel & de Groupe',
          Data: ['Les utilisateurs peuvent initier des conversations individuelles ou créer/rejoindre des chats de groupe avec multiples participants.']
        },
        {
          Title: 'Messagerie en Temps Réel',
          Data: ['Les messages sont délivrés instantanément utilisant des connexions WebSocket, assurant une communication en temps réel fluide.']
        },
        {
          Title: 'Support Multimédia',
          Data: ['Les utilisateurs peuvent envoyer des messages texte, des images et des fichiers (ex. PDFs, DOC) avec des aperçus pour les images.']
        },
        {
          Title: 'Authentification Utilisateur',
          Data: ['Connexion utilisateur sécurisée avec le système d\'authentification de Django, incluant la réinitialisation de mot de passe et la gestion de profil.']
        },
        {
          Title: 'Historique des Messages',
          Data: ['Toutes les conversations sont stockées dans la base de données, permettant aux utilisateurs de visualiser l\'historique de chat à tout moment.']
        },
        {
          Title: 'Notifications',
          Data: ['Notifications en temps réel pour les nouveaux messages, même quand l\'utilisateur n\'est pas sur la page de chat.']
        },
        {
          Title: 'Design Responsive',
          Data: ['L\'application est entièrement responsive, fournissant une expérience fluide sur tous les appareils.']
        }
      ]
    }],
    
    Deployment: {
      Title_1: null,
      Data: [
        {
          Title: 'Communication en Temps Réel',
          Data: ['Gérer la communication en temps réel utilisant des connexions WebSocket tout en assurant performance et fiabilité, particulièrement dans les chats de groupe.']
        },
        {
          Title: 'Gestion de Fichiers',
          Data: ['Assuré des uploads et téléchargements de fichiers sécurisés et efficaces, incluant le support des fichiers volumineux et des aperçus d\'images.']
        },
        {
          Title: 'Scalabilité',
          Data: ['Optimisé l\'application pour gérer des centaines d\'utilisateurs simultanés et multiples chats de groupe actifs sans lag.']
        }
      ]
    },
    
    ChallSolu: null,

    VisualsMedia: {
      ScreenShot: [
        {
          ImInTitle: null,
          ImInData: [{
            image: ['real_time_chat.png'],
            info: ['Interaction de Chat en Temps Réel : Utilisateur A et Utilisateur B en train de chatter']
          }]
        }
      ],
      Diagrams: null,
      VideoDemo: [{
        video: ['realtimechatVid.mkv'],
        info: ['Démonstration de Chat en Direct : Messagerie en Temps Réel et Partage de Médias entre Utilisateurs']
      }]
    }
  },
  
  // 8. Twitch Channel Points TTS (Text-to-Speech)
  {
    id: "4",
    folderid: "4",
    projectType: "desk",
    platforme: "Application desktop, compatible avec Windows, macOS et Linux.",
    title: "Twitch Channel Points TTS (Text-to-Speech)",
    image: getProjectImages('project-4'),
    category: "Développement Logiciel",
    date: "Mai 2020 - Juin 2020",
    client_for: "Freelance",
    role: "Développeur Logiciel",
    description: "Développement d'une application Twitch Channel Points TTS (Text-to-Speech) qui permet aux streamers de convertir les messages échangés par les viewers utilisant les points de chaîne en parole. Cela améliore l'interaction avec l'audience en donnant une voix aux viewers pendant les streams en direct.",
    github_link: "#",
    
    technology: ['Python', 'PyQt5', 'Selenium'],
    technology_used: {
      'Proglang': ['Python', 'PyQt5'],
      'database': null,
      'frameworks': ['PySide2', 'Selenium'],
      'Packaging': ['PyInstaller'],
      'techFra': ['Qt Designer', 'Git', 'Github']
    },
    details: "",

    RoleResp: [{
      Title_1: '',
      Title_2: null,
      Data: [{
          Title: 'Conçu et développé l\'application entière, du concept initial au déploiement final.',
          Data: null
        },
        {
          Title: 'Implémenté et testé la fonctionnalité TTS utilisant PySide2.QtTextToSpeech.',
          Data: null
        },
        {
          Title: 'Intégré Selenium pour la surveillance en temps réel des échanges de points de chaîne.',
          Data: null
        },
        {
          Title: 'Développé les fonctionnalités de filtre de mots et d\'ajustement de vitesse.',
          Data: null
        },
        {
          Title: 'Packagé l\'application pour la distribution multiplateforme utilisant PyInstaller.',
          Data: null
        }]
    }],

    KeyFeatures: [{
      Title_1: null,
      Data: [
        {
          Title: 'Intégration Text-to-Speech :',
          Data: ['Convertit les messages des viewers échangés avec des points de chaîne en parole utilisant le module PySide2.QtTextToSpeech.']
        },
        {
          Title: 'Intégration Twitch Channel Points :',
          Data: ['Détecte automatiquement quand les points de chaîne sont échangés et déclenche la fonction TTS.']
        },
        {
          Title: 'Filtre de Mots :',
          Data: ['Inclut un filtre personnalisable pour bloquer les mots inappropriés ou non souhaités d\'être prononcés.']
        },
        {
          Title: 'Vitesse TTS Ajustable :',
          Data: ['Permet aux streamers de contrôler la vitesse de la parole, offrant une expérience viewer plus personnalisée.']
        },
        {
          Title: 'Voix Personnalisables :',
          Data: ['Les streamers peuvent sélectionner différentes voix et ajuster le débit et la hauteur de la parole.']
        },
        {
          Title: 'Support Multiplateforme :',
          Data: ['Packagé dans un exécutable autonome utilisant PyInstaller pour un déploiement facile sur n\'importe quelle plateforme.']
        }
      ]
    }],

    Deployment: {
      Title_1: null,
      Data: [
        {
          Title: '',
          Data: ['']
        }
      ]
    },

    ChallSolu: null,
    
    Outcome: {
      Title_1: null,
      Title_2: "L'application TTS a amélioré l'interaction avec l'audience sur les streams Twitch, résultant en une augmentation de 20% de l'engagement des viewers. Le filtre de mots et la vitesse TTS ajustable ont reçu des retours positifs des streamers, qui ont apprécié le contrôle et les options de personnalisation."
    },

    ScreenShotDiag: {
      ScreenShot: [
        {
          ImInTitle: null,
          ImInData: [{
            image: ['tts_1.png'],
            info: ['Interface Principale',
              'Capture d\'écran de l\'interface utilisateur principale où les streamers peuvent sélectionner les paramètres TTS et gérer le filtre de mots.'
            ]
          }]
        }
      ],
      Diagrams: null,
      VideoDemo: null
    }
  },

  // 9. Téléchargeur YouTube Vidéo & Musique
  {
    id: "5",
    folderid: "5",
    projectType: "desk",
    platforme: "Application desktop, compatible avec Windows, macOS et Linux.",
    title: "Téléchargeur YouTube Vidéo & Musique",
    image: getProjectImages('project-5'),
    category: "Développement Logiciel",
    date: "Juillet 2022",
    client_for: "Freelance",
    role: "Développeur Logiciel",
    description: "Le Téléchargeur YouTube Vidéo & Musique est une application desktop qui permet aux utilisateurs de télécharger des vidéos ou de la musique depuis YouTube. Les utilisateurs peuvent choisir entre des téléchargements de vidéos individuelles ou des playlists entières, avec l'option de sélectionner parmi de multiples choix de qualité, incluant HD, SD et formats audio uniquement.",
    github_link: "#",
    
    technology: ['Python', 'PyQt5'],
    technology_used: {
      'Proglang': ['Python', 'PyQt5'],
      'database': null,
      'techFra': ['Qt Designer', 'Git']
    },
    details: "Informations détaillées sur le Projet Deux.",

    RoleResp: [{
      Title_1: '',
      Title_2: null,
      Data: [{
          Title: 'Conçu et développé l\'application entière, du concept initial au déploiement final.',
          Data: null
        },
        {
          Title: 'Packagé l\'application pour la distribution multiplateforme utilisant PyInstaller.',
          Data: null
        }]
    }],

    KeyFeatures: [{
      Title_1: null,
      Data: [{
          Title: 'Téléchargement de Vidéo Individuelle :',
          Data: ['Les utilisateurs peuvent coller une URL de vidéo YouTube et choisir la qualité de téléchargement désirée (1080p, 720p, 480p, 360p, audio uniquement).']
        },
        {
          Title: 'Téléchargement de Playlist :',
          Data: ['L\'application supporte le téléchargement de playlists entières avec l\'option de sélectionner la qualité vidéo pour chaque vidéo ou télécharger tout en fichiers audio.']
        },
        {
          Title: 'Sélection de Qualité :',
          Data: ['Les utilisateurs peuvent choisir parmi les résolutions disponibles ou télécharger seulement l\'audio en format MP3.']
        },
        {
          Title: 'Gestion des Téléchargements :',
          Data: ['L\'application fournit une barre de progression pour chaque téléchargement, fonctionnalité pause/reprise et un onglet d\'historique de téléchargement.']
        },
        {
          Title: 'Traitement par Lots :',
          Data: ['Capacité de mettre en file d\'attente de multiples téléchargements.']
        }
      ]
    }],

    Deployment: [{
      Title_1: null,
      Data: [{
          Title: 'Packaging :',
          Data: ["Packagé comme un exécutable utilisant PyInstaller pour Windows, et comme .app pour macOS, et une AppImage pour Linux."]
        },
        {
          Title: 'CI/CD :',
          Data: ["Intégré avec GitHub Actions pour les tests automatisés et la construction de l'application sur toutes les plateformes supportées."]
        }
      ]
    }],

    ChallSolu: null,

    ScreenShotDiag: {
      ScreenShot: [
        {
          ImInTitle: null,
          ImInData: [{
              image: ['YD_1.png'],
              info: ['Une capture d\'écran de l\'interface principale montrant la fenêtre de téléchargement unique, avec sélection de qualité.']
            }, {
              image: ['YD_2.png'],
              info: ['Une capture d\'écran montrant la fenêtre de téléchargements multiples, avec sélection de qualité.']
            }]
        }
      ],
      Diagrams: null,
      VideoDemo: null
    }
  }
];

export default projects_FR;