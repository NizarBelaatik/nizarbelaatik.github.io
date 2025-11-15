// pages/Portfolio.jsx
import React, { useState, useMemo } from 'react';
import ProjectFilter from '../components/projects/ProjectFilter';
import ProjectCard from '../components/projects/ProjectCard';
import SkillsSection from '../components/projects/SkillsSection';
import projects_ENG from '../data/projectsData';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects_ENG;
    
    return projects_ENG.filter(project => {
      switch (activeFilter) {
        case 'ai-ml':
          return project.category?.includes('AI') || 
                 project.technology_used?.ai_ml ||
                 project.title?.includes('GAN');
        case 'blockchain':
          return project.category?.includes('Blockchain') || 
                 project.technology_used?.blockchain;
        case 'web':
          return project.projectType === 'web';
        case 'desktop':
          return project.projectType === 'desk';
        case 'research':
          return project.projectType === 'research';
        default:
          return true;
      }
    });
  }, [activeFilter]);

  const projectCounts = useMemo(() => ({
    all: projects_ENG.length,
    'ai-ml': projects_ENG.filter(p => p.category?.includes('AI') || p.technology_used?.ai_ml).length,
    'blockchain': projects_ENG.filter(p => p.category?.includes('Blockchain') || p.technology_used?.blockchain).length,
    'web': projects_ENG.filter(p => p.projectType === 'web').length,
    'desktop': projects_ENG.filter(p => p.projectType === 'desk').length,
    'research': projects_ENG.filter(p => p.projectType === 'research').length,
  }), []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Showcasing my journey in AI research, blockchain development, and full-stack engineering. 
            From academic research to production applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🚀 {projects_ENG.length}+ Projects</span>
            <span>⚡ 4+ Years Experience</span>
            <span>🎯 Multiple Technologies</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              Explore my work across different domains and technologies
            </p>
          </div>

          <ProjectFilter 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter}
            projectCounts={projectCounts}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No projects found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal (you can implement this later) */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal content for project details */}
            <div className="p-6">
              <button 
                onClick={() => setSelectedProject(null)}
                className="float-right text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              {/* Add detailed project view here */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;