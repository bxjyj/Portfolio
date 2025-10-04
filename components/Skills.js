const Skills = () => {
    const [activeCategory, setActiveCategory] = React.useState('programming');

    const skillCategories = [
        { key: 'programming', name: 'Programming Languages', icon: 'fas fa-code' },
        { key: 'frameworks', name: 'Frameworks & Libraries', icon: 'fas fa-layer-group' },
        { key: 'tools', name: 'Tools & Technology', icon: 'fas fa-tools' },
        { key: 'certificates', name: 'Certificates', icon: 'fas fa-certificate' }
    ];

    const SkillItem = ({ skill }) => (
        <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
            <i className={`${skill.icon} text-green-400 mr-4 text-xl group-hover:scale-110 transition-transform duration-300`}></i>
            <span className="text-gray-200 font-medium group-hover:text-green-400 transition-colors duration-300">{skill.name}</span>
        </div>
    );

    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
                        <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-green-500 rounded-full mb-6"></div>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        A comprehensive overview of my technical expertise and tools I use to solve data problems
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center mb-12">
                    {skillCategories.map((category) => (
                        <button
                            key={category.key}
                            onClick={() => setActiveCategory(category.key)}
                            className={`flex items-center px-6 py-3 m-2 rounded-full font-medium transition-all duration-300 ${
                                activeCategory === category.key
                                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-green-400'
                            }`}
                        >
                            <i className={`${category.icon} mr-2`}></i>
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-gray-100 mb-6">
                        {skillCategories.find(cat => cat.key === activeCategory)?.name}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {window.skillsData[activeCategory]?.map((skill, index) => (
                            <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                                <SkillItem skill={skill} />
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

// Export for use in App.js
window.Skills = Skills;
