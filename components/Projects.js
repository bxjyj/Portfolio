const Projects = ({ navigateTo }) => {
    const [showAll, setShowAll] = React.useState(false);

    const featuredProjects = window.projectsData.filter(project => project.featured);
    const displayProjects = showAll ? window.projectsData : featuredProjects;

    const ProjectCard = ({ project }) => (
        <div 
            className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-green-500/10 cursor-pointer"
            onClick={() => navigateTo(`project/${project.id}`)}
        >
            <div className="relative overflow-hidden">
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-green-500/90 text-white px-6 py-3 rounded-full font-semibold">
                        <i className="fas fa-eye mr-2"></i>
                        View Details
                    </div>
                </div>
                <div className="absolute top-4 right-4">
                    <div className="flex space-x-2">
                        <a 
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-900/80 text-white p-2 rounded-full hover:bg-green-500 transition-colors duration-300"
                            aria-label="View GitHub"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <i className="fab fa-github text-sm"></i>
                        </a>
                        <a 
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-900/80 text-white p-2 rounded-full hover:bg-green-500 transition-colors duration-300"
                            aria-label="View Live Demo"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <i className="fas fa-external-link-alt text-sm"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                        <span 
                            key={index}
                            className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full border border-green-500/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <section id="projects" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
                        <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-green-500 rounded-full mb-6"></div>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        A collection of data science projects showcasing my skills in machine learning, 
                        data analysis, and visualization
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {displayProjects.map((project, index) => (
                        <div key={project.id} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        {showAll ? 'Show Less' : 'View All Projects'}
                        <i className={`fas fa-arrow-${showAll ? 'up' : 'down'} ml-2`}></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

// Export for use in App.js
window.Projects = Projects;
