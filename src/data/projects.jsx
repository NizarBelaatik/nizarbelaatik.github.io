export const projectCategories = {
  'all': 'All Projects',
  'web-dev': 'Web Development',
  'mobile': 'Mobile Development',
  'machine-learning': 'Machine Learning',
  'deep-learning': 'Deep Learning',
  'data-science': 'Data Science',
  'research': 'Research Papers',
  'computer-vision': 'Computer Vision',
  'nlp': 'Natural Language Processing',
  'big-data': 'Big Data',
  'cloud': 'Cloud & DevOps'
};

export const projects = [
  // Web Development Projects
  {
    id: 1,
    title: "E-commerce Analytics Dashboard",
    description: "Full-stack dashboard with real-time analytics, customer insights, and sales tracking for e-commerce businesses.",
    fullDescription: "A comprehensive analytics platform built with modern web technologies to provide real-time business intelligence for e-commerce stores.",
    category: "web-dev",
    tags: ["React", "Node.js", "MongoDB", "D3.js", "Socket.io", "Express"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "D3.js", "Chart.js", "Socket.io"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard.vercel.app",
    featured: true,
    status: "completed",
    year: 2023,
    highlights: [
      "Real-time sales tracking",
      "Customer behavior analytics",
      "Interactive data visualizations",
      "Multi-store support"
    ]
  },
  {
    id: 2,
    title: "Portfolio Website Builder",
    description: "Drag-and-drop portfolio builder with AI-powered content suggestions and responsive templates.",
    category: "web-dev",
    tags: ["Next.js", "TypeScript", "AI", "Tailwind", "Prisma"],
    technologies: ["Next.js 13", "TypeScript", "OpenAI API", "Tailwind CSS", "Prisma", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com/yourusername/portfolio-builder",
    liveUrl: "https://portfoliobuilder.vercel.app",
    featured: true,
    status: "completed",
    year: 2023
  },

  // Machine Learning Projects
  {
    id: 3,
    title: "Customer Churn Prediction",
    description: "Machine learning model predicting customer churn with 92% accuracy using ensemble methods.",
    fullDescription: "Advanced predictive analytics solution that helps businesses identify customers at risk of churning, enabling proactive retention strategies.",
    category: "machine-learning",
    tags: ["Python", "Scikit-learn", "XGBoost", "Pandas", "MLOps"],
    technologies: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "Pandas", "NumPy", "MLflow"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com/yourusername/churn-prediction",
    liveUrl: null,
    featured: true,
    status: "completed",
    year: 2023,
    metrics: {
      accuracy: "92%",
      precision: "89%",
      recall: "85%"
    }
  },
  {
    id: 4,
    title: "Fraud Detection System",
    description: "Real-time fraud detection using anomaly detection algorithms and streaming data processing.",
    category: "machine-learning",
    tags: ["Python", "Isolation Forest", "Kafka", "Spark", "Docker"],
    technologies: ["Python", "Scikit-learn", "PySpark", "Kafka", "Docker", "FastAPI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com/yourusername/fraud-detection",
    liveUrl: null,
    featured: false,
    status: "completed",
    year: 2023
  },

  // Deep Learning Projects
  {
    id: 5,
    title: "Image Classification with CNN",
    description: "Advanced image classification system using convolutional neural networks and transfer learning.",
    fullDescription: "A deep learning solution for image classification that leverages state-of-the-art CNN architectures and transfer learning techniques.",
    category: "deep-learning",
    tags: ["TensorFlow", "Keras", "CNN", "Transfer Learning", "Computer Vision"],
    technologies: ["TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com/yourusername/cnn-classification",
    liveUrl: null,
    featured: true,
    status: "completed",
    year: 2023,
    metrics: {
      accuracy: "95%",
      "inference time": "50ms"
    }
  },
  {
    id: 6,
    title: "Neural Style Transfer",
    description: "Artistic style transfer application using neural networks to apply artistic styles to images.",
    category: "deep-learning",
    tags: ["PyTorch", "CNN", "Style Transfer", "Computer Vision"],
    technologies: ["PyTorch", "OpenCV", "NumPy", "Flask"],
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com/yourusername/style-transfer",
    liveUrl: "https://style-transfer-demo.herokuapp.com",
    featured: false,
    status: "completed",
    year: 2022
  },

  // Research Projects
  {
    id: 7,
    title: "Advanced NLP for Clinical Text",
    description: "Research on transformer models for clinical text analysis and medical entity recognition.",
    fullDescription: "Academic research focusing on adapting transformer architectures for clinical text processing, improving accuracy in medical entity recognition and relationship extraction.",
    category: "research",
    tags: ["Transformers", "BERT", "Clinical NLP", "Research", "Hugging Face"],
    technologies: ["PyTorch", "Hugging Face", "spaCy", "BioBERT", "ScispaCy"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com/yourusername/clinical-nlp",
    liveUrl: null,
    featured: true,
    status: "research",
    year: 2023,
    publication: "Journal of Medical Informatics, 2023",
    collaborators: ["University Research Lab", "Medical Center"]
  },
  {
    id: 8,
    title: "Federated Learning for Healthcare",
    description: "Privacy-preserving machine learning approach for distributed healthcare data analysis.",
    category: "research",
    tags: ["Federated Learning", "Privacy", "Healthcare", "Research", "PySyft"],
    technologies: ["PyTorch", "PySyft", "Differential Privacy", "Flower Framework"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com/yourusername/federated-healthcare",
    liveUrl: null,
    featured: false,
    status: "research",
    year: 2023
  },

  // Data Science Projects
  {
    id: 9,
    title: "Stock Market Prediction",
    description: "Time series forecasting of stock prices using LSTM networks and technical indicators.",
    category: "data-science",
    tags: ["LSTM", "Time Series", "Finance", "Python", "TensorFlow"],
    technologies: ["Python", "TensorFlow", "Pandas", "NumPy", "yfinance", "TA-Lib"],
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com/yourusername/stock-prediction",
    liveUrl: null,
    featured: false,
    status: "completed",
    year: 2022
  },

  // Big Data Projects
  {
    id: 10,
    title: "Real-time Data Pipeline",
    description: "Scalable data processing pipeline for handling streaming data with Apache Kafka and Spark.",
    category: "big-data",
    tags: ["Apache Kafka", "Spark", "Docker", "AWS", "Real-time"],
    technologies: ["Apache Kafka", "Apache Spark", "Docker", "AWS EMR", "Python"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com/yourusername/data-pipeline",
    liveUrl: null,
    featured: false,
    status: "completed",
    year: 2023
  },

  // Mobile Development
  {
    id: 11,
    title: "Health Tracking Mobile App",
    description: "Cross-platform mobile application for health monitoring and fitness tracking.",
    category: "mobile",
    tags: ["React Native", "Firebase", "HealthKit", "Redux", "Mobile"],
    technologies: ["React Native", "Firebase", "Redux", "HealthKit API", "Chart.js"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com/yourusername/health-tracker",
    liveUrl: "https://apps.apple.com/app/health-tracker",
    featured: false,
    status: "completed",
    year: 2023
  },

  // Cloud & DevOps
  {
    id: 12,
    title: "Microservices Architecture",
    description: "Cloud-native microservices architecture with CI/CD pipeline and container orchestration.",
    category: "cloud",
    tags: ["Kubernetes", "Docker", "AWS", "CI/CD", "Microservices"],
    technologies: ["Kubernetes", "Docker", "AWS EKS", "GitHub Actions", "Helm"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com/yourusername/microservices-demo",
    liveUrl: null,
    featured: false,
    status: "completed",
    year: 2023
  }
];