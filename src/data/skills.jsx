/**
 * Stack, grouped into scannable lines for the v6 skills grid.
 * Same skills as before — only the grouping changed, so each column
 * reads as a handful of lines rather than a wall of chips.
 * Titles come from i18n (`skills.*`); the tool names are proper nouns
 * and stay identical in both languages.
 */
export const skillColumns = [
  {
    titleKey: 'skills.speechAi',
    lines: [
      'Whisper · faster-whisper · Streaming ASR',
      'LoRA · QLoRA fine-tuning',
      'Qwen2.5 · LLM fine-tuning & serving',
      'vLLM · PagedAttention · Low-latency inference',
      'XTTS v2 · Speech synthesis',
      'Asterisk · SIP/PSTN · WebRTC telephony',
      'Barge-in · Real-time streaming pipelines'
    ]
  },
  {
    titleKey: 'skills.dsMlAi',
    lines: [
      'Python · Pandas · NumPy',
      'Statistical Analysis · Data Visualization',
      'Feature Engineering · A/B Testing',
      'Scikit-learn · XGBoost · Ensemble Methods',
      'Clustering · Classification'
    ]
  },
  {
    titleKey: 'skills.dlGenAi',
    lines: [
      'TensorFlow · PyTorch · Deep Learning',
      'Neural Networks · Transformers',
      'NLP · Large Language Models',
      'Hugging Face · LangChain · Text Generation',
      'Computer Vision · Object Detection',
      'MLOps · Model Deployment · Monitoring'
    ]
  },
  {
    titleKey: 'skills.webDev',
    lines: [
      'Spring Boot · JEE · Django · FastAPI',
      'React · Node.js · JavaScript',
      'HTML/CSS · Tailwind CSS',
      'REST APIs · GraphQL · Authentication',
      'Web Security · Testing · CI/CD'
    ]
  },
  {
    titleKey: 'skills.cloudDevOps',
    lines: [
      'AWS · Serverless · Auto Scaling',
      'Docker · Kubernetes · Containerization',
      'CI/CD Pipelines · Infrastructure as Code',
      'Git · Linux · Monitoring',
      'Microservices · Load Balancing'
    ]
  },
  {
    titleKey: 'skills.databasesBigData',
    lines: [
      'SQL · MySQL · PostgreSQL',
      'NoSQL · MongoDB · Redis',
      'Hadoop · Apache Spark · Kafka · Flink',
      'Data Warehousing · ETL Pipelines',
      'Data Modeling'
    ]
  },
  {
    titleKey: 'skills.methodologies',
    lines: [
      'Agile Development · Scrum',
      'Test-Driven Development · Code Review',
      'Git Workflow · Technical Documentation',
      'Project Management · System Design',
      'Data Governance · Model Versioning',
      'Experiment Tracking · ML Pipeline Design'
    ]
  }
]

export default skillColumns
