import React from 'react'
import { useTranslation } from 'react-i18next'
import { Calendar, MapPin, Award, GraduationCap, BookOpen } from 'lucide-react'

const Education = () => {
  const { t } = useTranslation()

  const education = [
    {
      id: 1,
      degree: "Master's in Data Science & Big Data",
      university: "University Name",
      location: "City, Country",
      duration: "2022 - 2024",
      description: "Specialized in machine learning, deep learning, and big data technologies with focus on practical applications and research.",
      achievements: [
        "GPA: 3.8/4.0",
        "Research focus: NLP and Computer Vision",
        "Teaching Assistant for Machine Learning course",
        "Published research paper in peer-reviewed journal"
      ],
      gpa: "3.8/4.0",
      relevantCourses: [
        "Advanced Machine Learning", "Deep Learning", "Big Data Analytics", 
        "Natural Language Processing", "Statistical Methods", "Data Mining",
        "Distributed Systems", "Cloud Computing", "Time Series Analysis"
      ],
      thesis: "Advanced Transformer Models for Clinical Text Analysis",
      category: "masters"
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      university: "University Name", 
      location: "City, Country",
      duration: "2018 - 2022",
      description: "Comprehensive foundation in computer science principles with focus on algorithms, data structures, and software engineering.",
      achievements: [
        "Graduated with Honors",
        "Dean's List for 3 semesters",
        "Senior Project: Real-time E-commerce Analytics Platform"
      ],
      gpa: "3.6/4.0",
      relevantCourses: [
        "Data Structures & Algorithms", "Database Systems", "Software Engineering",
        "Operating Systems", "Computer Networks", "Web Development",
        "Statistics & Probability", "Linear Algebra", "Calculus"
      ],
      category: "bachelors"
    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-primary-dark to-primary-dark/80">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap size={32} className="text-accent-purple mr-3" />
            <h2 className="section-title text-gradient">
              Education
            </h2>
          </div>
          <p className="section-subtitle">
            Academic background and qualifications in Data Science and Computer Science
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {education.map((edu) => (
              <div key={edu.id} className="card group hover:border-accent-purple/30 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent-purple transition-colors">
                        {edu.degree}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                        edu.category === 'masters' 
                          ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                      }`}>
                        {edu.category === 'masters' ? "Master's Degree" : "Bachelor's Degree"}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 mb-4">
                      <span className="font-medium text-accent-blue text-lg">{edu.university}</span>
                      <span className="mx-3">•</span>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {edu.location}
                      </div>
                    </div>

                    <p className="text-gray-400 text-lg mb-4">
                      {edu.description}
                    </p>
                  </div>

                  <div className="flex items-center text-gray-400 lg:ml-4 lg:mt-0 mt-2">
                    <Calendar size={18} className="mr-2" />
                    <span className="font-medium">{edu.duration}</span>
                  </div>
                </div>

                {/* GPA & Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="flex items-center mb-3">
                      <Award size={18} className="text-accent-green mr-2" />
                      <span className="text-accent-green font-semibold text-lg">GPA: {edu.gpa}</span>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-400 flex items-start">
                            <span className="text-accent-purple mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Relevant Courses */}
                  <div>
                    <div className="flex items-center mb-3">
                      <BookOpen size={18} className="text-accent-blue mr-2" />
                      <h4 className="text-white font-semibold">Relevant Coursework:</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-lg text-sm border border-accent-blue/20"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Thesis for Master's */}
                {edu.thesis && (
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Master's Thesis:</h4>
                    <p className="text-gray-400">{edu.thesis}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education