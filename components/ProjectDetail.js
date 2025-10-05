const ProjectDetail = ({ project, goBack }) => {
    if (!project) return null;

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Navigation */}
            <nav className="bg-gray-800/90 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <button
                            onClick={goBack}
                            className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                        >
                            <i className="fas fa-arrow-left mr-2"></i>
                            Back to Portfolio
                        </button>
                        <div className="flex space-x-4">
                            <a 
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                <i className="fab fa-github text-xl"></i>
                            </a>
                            <a 
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                <i className="fas fa-external-link-alt text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Project Image */}
                        <div className="order-2 lg:order-1">
                            <div className="relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-green-500/10 rounded-2xl"></div>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="order-1 lg:order-2 space-y-6">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                                    {project.title}
                                </h1>
                                <div className="w-24 h-2 bg-green-500 rounded-full mb-6"></div>
                            </div>
                            
                            <p className="text-xl text-gray-300 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-100 mb-4">Technologies Used</h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.techStack.map((tech, index) => (
                                        <span 
                                            key={index}
                                            className="px-4 py-2 bg-green-500/10 text-green-400 text-sm font-medium rounded-full border border-green-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                <a 
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center group"
                                >
                                    View Live Demo
                                    <i className="fas fa-external-link-alt ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                                </a>
                                
                                <a 
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                                >
                                    <i className="fab fa-github mr-2"></i>
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-20 bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-100 mb-6">Project Overview</h2>
                                <div className="prose prose-lg prose-invert max-w-none">
                                    <p className="text-gray-300 leading-relaxed">
                                        This project demonstrates my expertise in data science and machine learning. 
                                        Through careful analysis and implementation, I was able to create a solution 
                                        that addresses real-world challenges in the industry.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed">
                                        The project involved extensive data preprocessing, feature engineering, 
                                        and model optimization to achieve the best possible results. I utilized 
                                        modern data science tools and techniques to ensure scalability and maintainability.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-100 mb-4">Key Features</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-400 mr-3 mt-1"></i>
                                        <span className="text-gray-300">Advanced data preprocessing and cleaning</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-400 mr-3 mt-1"></i>
                                        <span className="text-gray-300">Machine learning model implementation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-400 mr-3 mt-1"></i>
                                        <span className="text-gray-300">Interactive data visualizations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-green-400 mr-3 mt-1"></i>
                                        <span className="text-gray-300">Real-time data processing capabilities</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-100 mb-4">Project Stats</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-2xl font-bold text-green-400">87%</div>
                                        <div className="text-gray-300 text-sm">Accuracy</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-green-400">2.5k</div>
                                        <div className="text-gray-300 text-sm">Data Points</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-green-400">5</div>
                                        <div className="text-gray-300 text-sm">Technologies</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-100 mb-4">Timeline</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">Planning</span>
                                        <span className="text-green-400">1 week</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">Development</span>
                                        <span className="text-green-400">3 weeks</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">Testing</span>
                                        <span className="text-green-400">1 week</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Export for use in Router.js
window.ProjectDetail = ProjectDetail;
