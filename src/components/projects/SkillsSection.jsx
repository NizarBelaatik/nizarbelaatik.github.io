// components/Portfolio/SkillsSection.jsx
import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["PyTorch", "GANs", "Transformers", "Computer Vision", "NLP", "RAG Systems", "TensorFlow", "Scikit-learn", "Keras", "OpenCV", "Clustering Algorithms", "Reinforcement Learning"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Blockchain & Web3", 
      skills: ["Solidity", "Smart Contracts", "Web3.js", "dApp Development", "Ethereum"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Full-Stack Development",
      skills: ["React", "Python", "Django", "FastAPI", "JavaScript", "REST APIs"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Tools & Technologies",
      skills: ["Docker", "Git", "AWS", "PostgreSQL", "MongoDB", "Linux"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set spanning AI research, blockchain development, 
            and full-stack engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className={`w-12 h-1 bg-gradient-to-r ${category.color} rounded-full mb-4`}></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;