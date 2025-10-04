const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-green-500 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image */}
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=400&fit=crop" 
                                alt="Alex working on data analysis"
                                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-green-500/10 rounded-2xl"></div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="order-1 lg:order-2 space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6">
                            Passionate Data Scientist with a Love for Insights
                        </h3>
                        
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                I'm a junior Data Scientist with a strong foundation in statistics, machine learning, 
                                and data visualization. My journey began with a fascination for patterns in data and 
                                has evolved into a passion for creating meaningful insights that drive business decisions.
                            </p>
                            
                            <p>
                                With expertise in Python, R, and SQL, I specialize in transforming raw data into 
                                actionable insights through statistical analysis, predictive modeling, and compelling 
                                data visualizations. I'm particularly interested in machine learning applications 
                                and big data analytics.
                            </p>
                            
                            <p>
                                When I'm not crunching numbers, you'll find me exploring new datasets on Kaggle, 
                                contributing to open-source projects, or writing about my latest discoveries in 
                                data science and AI.
                            </p>
                        </div>

                        {/* Key Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 hover:border-green-500/50 transition-colors duration-300">
                                <div className="flex items-center mb-3">
                                    <i className="fas fa-graduation-cap text-green-400 text-xl mr-3"></i>
                                    <h4 className="text-lg font-semibold text-gray-100">Education</h4>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    B.S. in Data Science<br/>
                                    Minor in Statistics
                                </p>
                            </div>
                            
                            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 hover:border-green-500/50 transition-colors duration-300">
                                <div className="flex items-center mb-3">
                                    <i className="fas fa-briefcase text-green-400 text-xl mr-3"></i>
                                    <h4 className="text-lg font-semibold text-gray-100">Experience</h4>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    2+ years in data analysis<br/>
                                    Internship at Tech Corp
                                </p>
                            </div>
                            
                            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 hover:border-green-500/50 transition-colors duration-300">
                                <div className="flex items-center mb-3">
                                    <i className="fas fa-certificate text-green-400 text-xl mr-3"></i>
                                    <h4 className="text-lg font-semibold text-gray-100">Certifications</h4>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    AWS Certified<br/>
                                    Google Data Analytics
                                </p>
                            </div>
                            
                            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 hover:border-green-500/50 transition-colors duration-300">
                                <div className="flex items-center mb-3">
                                    <i className="fas fa-trophy text-green-400 text-xl mr-3"></i>
                                    <h4 className="text-lg font-semibold text-gray-100">Achievements</h4>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    Kaggle Expert<br/>
                                    Hackathon Winner
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Export for use in App.js
window.About = About;
