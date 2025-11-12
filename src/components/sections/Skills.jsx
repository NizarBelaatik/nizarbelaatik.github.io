import React from 'react'
import { Brain, Code, Cloud, Database, Cpu } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation()

  const skillCategories = [
    {
      icon: Brain,
      title: t('skills.dsMlAi'),
      skills: [
        // Core Data Science
        "Python", "Pandas", "NumPy", "Statistical Analysis", "Data Visualization",
        "Feature Engineering", "A/B Testing", "Experimental Design",
        
        // Traditional ML
        "Scikit-learn", "XGBoost", "Ensemble Methods", "Clustering", "Classification",
        
        // Deep Learning & AI
        "TensorFlow", "PyTorch", "Deep Learning", "Neural Networks",
        
        // NLP & LLMs
        "Natural Language Processing", "Large Language Models", "Transformers",
        "Hugging Face", "LangChain", "Text Generation",
        
        // Computer Vision
        "Computer Vision", "Image Processing", "Object Detection",
        
        // MLOps & Deployment
        "Model Deployment", "MLOps", "Model Monitoring", "ML Pipeline"
      ]
    },
    {
      icon: Code,
      title: t('skills.webDev'),
      skills: [
        // Backend Frameworks
        "Spring Boot", "JEE", "Django", "FastAPI",
        
        // Frontend & Full Stack
        "React", "Node.js", "JavaScript", "HTML/CSS", "Tailwind CSS",
        
        // APIs & Services
        "REST APIs", "GraphQL", "Authentication", "Web Security",
        
        // Development Practices
        "Performance Optimization", "Responsive Design", "Testing", "CI/CD"
      ]
    },
    {
      icon: Cloud,
      title: t('skills.cloudDevOps'),
      skills: [
        // Cloud Platforms
        "AWS",
        
        // Containerization & Orchestration
        "Docker", "Kubernetes", "Containerization",
        
        // Infrastructure & Automation
        "CI/CD Pipelines", "Git", "Linux", "Infrastructure as Code",
        
        // Architecture & Services
        "Serverless", "Microservices", "Monitoring",
        
        // Security & Scaling
        "Cloud Security", "Auto Scaling", "Load Balancing"
      ]
    },
    {
      icon: Database,
      title: t('skills.databasesBigData'),
      skills: [
        // Relational Databases
        "SQL", "MySQL", "PostgreSQL",
        
        // NoSQL & In-Memory
        "NoSQL", "MongoDB", "Redis",
        
        // Big Data Technologies
        "Hadoop", "Apache Spark", "Apache Kafka", "Apache Flink",
        
        // Data Engineering
        "Data Warehousing", "ETL Pipelines", "Data Modeling"
      ]
    }
  ]

  const methodologies = [
    "Agile Development", "Scrum", "Test-Driven Development", "Git Workflow",
    "Code Review", "Technical Documentation", "Project Management", "System Design",
    "Data Governance", "Model Versioning", "Experiment Tracking", "ML Pipeline Design"
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-primary-dark/80 to-primary-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient">
            {t('skills.title')}
          </h2>
          <p className="section-subtitle">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Main Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="card group">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent-blue/20 rounded-xl mr-4">
                  <category.icon size={24} className="text-accent-blue" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-2 bg-white/5 rounded-lg text-white border border-white/10 hover:border-accent-blue/30 hover:bg-accent-blue/10 transition-all duration-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Methodologies & Practices */}
        <div className="card mb-12">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-accent-purple/20 rounded-xl mr-4">
              <Cpu size={24} className="text-accent-purple" />
            </div>
            <h3 className="text-2xl font-bold text-white">{t('skills.methodologies')}</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {methodologies.map((method) => (
              <span 
                key={method}
                className="px-4 py-2 bg-accent-purple/10 text-accent-purple rounded-lg border border-accent-purple/20 hover:bg-accent-purple/20 transition-colors"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-center group hover:border-accent-blue/30">
            <div className="text-accent-blue text-3xl font-bold mb-2">3+</div>
            <div className="text-white font-semibold text-lg">{t('skills.yearsExp')}</div>
            <div className="text-gray-400 text-sm mt-1">{t('skills.dataAiSolutions')}</div>
          </div>
          <div className="card text-center group hover:border-accent-green/30">
            <div className="text-accent-green text-3xl font-bold mb-2">50+</div>
            <div className="text-white font-semibold text-lg">{t('skills.projectsCompleted')}</div>
            <div className="text-gray-400 text-sm mt-1">{t('skills.productionApps')}</div>
          </div>
          <div className="card text-center group hover:border-accent-purple/30">
            <div className="text-accent-purple text-3xl font-bold mb-2">2</div>
            <div className="text-white font-semibold text-lg">{t('skills.researchPapers')}</div>
            <div className="text-gray-400 text-sm mt-1">{t('skills.peerReviewed')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills