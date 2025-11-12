import React from 'react'
import { useTranslation } from 'react-i18next'
import { Calendar, ExternalLink, Award, FileText, Star, Clock } from 'lucide-react'

const Certifications = () => {
  const { t } = useTranslation()

  const certifications = [
    // ALX Africa Certificates
    {
      id: 1,
      name: "Data Analytics",
      issuer: "ALX Africa",
      date: "Aug 2025",
      credentialId: "JM2TYSR86E",
      description: "Comprehensive data analytics training covering data manipulation, visualization, and statistical analysis techniques.",
      skills: ["Data Analysis", "Data Visualization", "Statistical Methods", "SQL", "Tableau"],
      link: "https://savanna.alxafrica.com/certificates/JM2TYSR86E",
      category: "data-analytics",
      level: "Intermediate",
      importance: "high",
      logo: "alx_africa"
    },
    {
      id: 2,
      name: "Professional Foundations",
      issuer: "ALX Africa", 
      date: "Apr 2025",
      credentialId: "7cmRCGYhyJ",
      description: "Professional skills development including leadership, communication, and workplace readiness.",
      skills: ["Leadership", "Professional Communication", "Teamwork", "Project Management"],
      link: "https://savanna.alxafrica.com/certificates/7cmRCGYhyJ",
      category: "professional",
      level: "Foundation",
      importance: "medium",
      logo: "alx_africa"
    },

    // DeepLearning.AI Certificates
    {
      id: 3,
      name: "Generative AI for Everyone",
      issuer: "DeepLearning.AI",
      date: "Aug 2025",
      credentialId: "SU8M84XWMVTM",
      description: "Comprehensive understanding of generative AI models, applications, and ethical considerations.",
      skills: ["Generative AI", "LLMs", "AI Ethics", "Prompt Engineering"],
      link: "https://www.coursera.org/account/accomplishments/verify/SU8M84XWMVTM",
      category: "ai",
      level: "Intermediate",
      importance: "high",
      logo: "deeplearning_ai"
    },
    {
      id: 4,
      name: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI",
      date: "Jul 2025", 
      credentialId: "BN3MWVGKWNYC",
      description: "Foundational deep learning concepts including neural networks, backpropagation, and optimization.",
      skills: ["Neural Networks", "Deep Learning", "Backpropagation", "TensorFlow"],
      link: "https://www.coursera.org/account/accomplishments/verify/BN3MWVGKWNYC",
      category: "deep-learning",
      level: "Intermediate",
      importance: "high",
      logo: "deeplearning_ai"
    },

    // IBM Certificates
    {
      id: 5,
      name: "Machine Learning with Python",
      issuer: "IBM",
      date: "Jun 2025",
      credentialId: "0CWBT1R1XLLN",
      description: "Practical machine learning implementation using Python and scikit-learn for real-world applications.",
      skills: ["Scikit-learn", "Python", "Model Evaluation", "Feature Engineering"],
      link: "https://www.coursera.org/account/accomplishments/records/0CWBT1R1XLLN",
      category: "machine-learning",
      level: "Intermediate",
      importance: "high",
      logo: "ibm"
    },
    {
      id: 6,
      name: "Introduction to Data Engineering",
      issuer: "IBM",
      date: "May 2025",
      credentialId: "Q5KOYUJOHGEN", 
      description: "Fundamentals of data engineering including ETL processes, data pipelines, and data warehousing.",
      skills: ["ETL", "Data Pipelines", "Data Warehousing", "SQL"],
      link: "https://www.coursera.org/account/accomplishments/verify/Q5KOYUJOHGEN",
      category: "data-engineering",
      level: "Foundation",
      importance: "medium",
      logo: "ibm"
    },
    {
      id: 7,
      name: "Python for Data Science, AI & Development",
      issuer: "IBM",
      date: "May 2025",
      credentialId: "09JXC0YKPAUG",
      description: "Comprehensive Python programming skills for data science, AI applications, and software development.",
      skills: ["Python", "Pandas", "NumPy", "Data Manipulation"],
      link: "https://www.coursera.org/account/accomplishments/records/09JXC0YKPAUG",
      category: "programming",
      level: "Intermediate",
      importance: "high",
      logo: "ibm"
    },

    // Other Certificates
    {
      id: 8,
      name: "Scrum Foundation Professional Certification - SFPC™",
      issuer: "Certiprof",
      date: "May 2024",
      expiryDate: "May 2027",
      credentialId: "96401893",
      description: "Agile project management foundation with Scrum methodology for software development teams.",
      skills: ["Scrum", "Agile Methodology", "Project Management", "Team Collaboration"],
      link: "https://www.credly.com/badges/1a74390a-d9d3-45f8-b121-5408ab05c855/linked_in_profile",
      category: "project-management",
      level: "Foundation",
      importance: "medium",
      logo: "certiprof"
    }
  ]

  // ALX Data Science Program (In Progress)
  const alxProgram = {
    name: "ALX Data Science Program",
    issuer: "ALX Africa",
    status: "in-progress",
    progress: [
      { name: "Professional Foundations", status: "completed", date: "Jan 2025", duration: "14 weeks" },
      { name: "Data Analytics", status: "completed", date: "Apr 2025", duration: "14 weeks" },
      { name: "Python", status: "completed", date: "Aug 2025", duration: "8 weeks" },
      { name: "Machine Learning", status: "current", date: "Oct 2025", duration: "16 weeks" }
    ],
    description: "Comprehensive Data Science program covering foundational to advanced topics including machine learning, statistical analysis, and data visualization through real-world projects."
  }

  const getCategoryColor = (category) => {
    const colors = {
      'machine-learning': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'data-analytics': 'bg-green-500/20 text-green-400 border-green-500/30',
      'data-engineering': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'ai': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'deep-learning': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
      'programming': 'bg-red-500/20 text-red-400 border-red-500/30',
      'professional': 'bg-teal-500/20 text-teal-400 border-teal-500/30',
      'project-management': 'bg-amber-500/20 text-amber-400 border-amber-500/30'
    }
    return colors[category] || colors.programming
  }

  const getCategoryName = (category) => {
    const names = {
      'machine-learning': 'Machine Learning',
      'data-analytics': 'Data Analytics', 
      'data-engineering': 'Data Engineering',
      'ai': 'Artificial Intelligence',
      'deep-learning': 'Deep Learning',
      'programming': 'Programming',
      'professional': 'Professional Skills',
      'project-management': 'Project Management'
    }
    return names[category] || category
  }

  const getLogo = (logo) => {
    // You can replace these with actual logo images or icons
    const logos = {
      'alx_africa': '🅰️',
      'deeplearning_ai': '🧠', 
      'ibm': '🔵',
      'certiprof': '📋'
    }
    return logos[logo] || '📜'
  }

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-primary-dark/80 to-primary-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Award size={32} className="text-accent-green mr-3" />
            <h2 className="section-title text-gradient">
              Certifications & Training
            </h2>
          </div>
          <p className="section-subtitle">
            Validated expertise in data science, machine learning, and professional development
          </p>
        </div>

        {/* ALX Data Science Program */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card group hover:border-accent-blue/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-accent-blue/20 rounded-xl mr-4">
                <Clock size={24} className="text-accent-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">ALX Data Science Program</h3>
                <p className="text-gray-400">Comprehensive training program in progress</p>
              </div>
              <span className="ml-auto px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-500/30">
                In Progress
              </span>
            </div>

            <p className="text-gray-400 mb-6">
              {alxProgram.description}
            </p>

            <div className="space-y-4">
              {alxProgram.progress.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      course.status === 'completed' ? 'bg-green-500' : 
                      course.status === 'current' ? 'bg-yellow-500 animate-pulse' : 'bg-gray-500'
                    }`}></div>
                    <div>
                      <h4 className="text-white font-medium">{course.name}</h4>
                      <p className="text-gray-400 text-sm">{course.duration} • {course.date}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    course.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                    course.status === 'current' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {course.status === 'completed' ? 'Completed' : 
                     course.status === 'current' ? 'In Progress' : 'Upcoming'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Completed Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="card group hover:border-accent-green/30 transition-all duration-300">
                {/* Certificate Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{getLogo(cert.logo)}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-accent-green transition-colors leading-tight">
                        {cert.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(cert.category)}`}>
                    {getCategoryName(cert.category)}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Date and ID */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {cert.expiryDate ? `Issued ${cert.date} · Expires ${cert.expiryDate}` : `Issued ${cert.date}`}
                  </div>
                  {cert.credentialId && (
                    <div className="flex items-center">
                      <FileText size={14} className="mr-1" />
                      ID: {cert.credentialId}
                    </div>
                  )}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verify Link */}
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent-green hover:text-accent-blue transition-colors text-sm font-medium"
                >
                  Show Credential
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="card text-center">
            <div className="text-accent-blue text-2xl font-bold mb-2">{certifications.length}</div>
            <div className="text-white font-semibold">Total Certifications</div>
            <div className="text-gray-400 text-sm mt-1">Completed</div>
          </div>
          <div className="card text-center">
            <div className="text-accent-green text-2xl font-bold mb-2">4</div>
            <div className="text-white font-semibold">Data Science</div>
            <div className="text-gray-400 text-sm mt-1">ML & Analytics</div>
          </div>
          <div className="card text-center">
            <div className="text-accent-purple text-2xl font-bold mb-2">2</div>
            <div className="text-white font-semibold">AI & Deep Learning</div>
            <div className="text-gray-400 text-sm mt-1">Advanced Topics</div>
          </div>
          <div className="card text-center">
            <div className="text-accent-orange text-2xl font-bold mb-2">1</div>
            <div className="text-white font-semibold">In Progress</div>
            <div className="text-gray-400 text-sm mt-1">ALX Program</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications