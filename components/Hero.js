const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-900 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8 fade-in-up">
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-100 leading-tight">
                                Hi, I'm <span className="gradient-text">Jade Xu</span>
                            </h1>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-500">
                                Aspiring Data Analyst
                            </h2>
                        </div>
                        
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
                            I transform complex data into actionable insights and build intelligent solutions 
                            that drive business growth. Passionate about machine learning, statistical analysis, 
                            and creating data-driven stories that make a difference.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center group"
                            >
                                View My Projects
                                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                            </button>
                            
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                            >
                                Get In Touch
                            </button>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex space-x-6 pt-4">
                            <a 
                                href="https://github.com/bxjyj" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-2xl hover:scale-110 transform"
                                aria-label="GitHub"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/jiayi-jade-xu/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-2xl hover:scale-110 transform"
                                aria-label="LinkedIn"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    
                    {/* Right Column - Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="w-100 h-100 lg:w-100 lg:h-100 rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src="images/IMG_4292.JPG" 
                                    alt="Jade Xu - Data Scientist"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/20 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-400/10 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Export for use in App.js
window.Hero = Hero;
