import { useEffect } from 'react';

const ProjectDetail = ({ project, goBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [project]);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800/90 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={goBack} className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Portfolio
            </button>
            <div className="flex space-x-4">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                  <i className="fab fa-github text-xl"></i>
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                  <i className="fas fa-external-link-alt text-xl"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
                <div className="absolute inset-0 bg-green-500/10 rounded-2xl"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">{project.title}</h1>
                <div className="w-24 h-2 bg-green-500 rounded-full mb-6"></div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">{project.description}</p>

              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-green-500/10 text-green-400 text-sm font-medium rounded-full border border-green-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {(project.liveLink || project.githubLink) && (
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center group"
                    >
                      View Live Demo
                      <i className="fas fa-external-link-alt ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      <i className="fab fa-github mr-2"></i>
                      View Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      {(project.overview || project.highlights?.length > 0) && (
        <section className="py-20 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {project.overview && (
              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-6">Project Overview</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed">{project.overview}</p>
                </div>
              </div>
            )}

            {project.highlights?.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Highlights</h3>
                <ul className="space-y-3">
                  {project.highlights.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check-circle text-green-400 mr-3 mt-1"></i>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;
