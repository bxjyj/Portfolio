const Hobbies = () => {
    const [selectedHobby, setSelectedHobby] = React.useState(null);

    const hobbies = [
        {
            title: "Hiking",
            description: "Exploring nature trails and mountains. There's nothing like fresh air and beautiful views to clear the mind.",
            image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
            photos: [
                "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1464822759844-d150baec5d0b?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            ],
            summary: "Hiking is my way of connecting with nature and staying active. I've completed over 50 trails across different states, from easy day hikes to challenging multi-day backpacking trips. The mountains have taught me perseverance and the importance of preparation."
        },
        {
            title: "Bird Watching",
            description: "Observing and identifying birds in their natural habitats. A peaceful hobby that connects me with nature and wildlife.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
            photos: [
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
            ],
            summary: "Bird watching has taught me patience and attention to detail. I've spotted over 200 different species and keep detailed records of my observations. It's a meditative practice that helps me stay present and appreciate the beauty of wildlife."
        },
        {
            title: "Sculpting",
            description: "Creating three-dimensional art from various materials. A hands-on hobby that combines creativity with technical skill.",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
            photos: [
                "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop"
            ],
            summary: "Sculpting allows me to express creativity through physical form. I work primarily with clay and wood, creating both abstract and representational pieces. This hobby has improved my spatial reasoning and attention to detail, skills that translate well to data visualization."
        }
    ];

    const HobbyModal = ({ hobby, onClose }) => {
        if (!hobby) return null;

        return (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-gray-700">
                    <div className="flex justify-between items-center p-6 border-b border-gray-700">
                        <h2 className="text-3xl font-bold text-gray-100">{hobby.title}</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                            <i className="fas fa-times text-2xl"></i>
                        </button>
                    </div>
                    
                    <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                        {/* Hero Image */}
                        <div className="mb-8">
                            <img 
                                src={hobby.image} 
                                alt={hobby.title}
                                className="w-full h-64 object-cover rounded-xl"
                            />
                        </div>

                        {/* Summary */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-100 mb-4">About My {hobby.title}</h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {hobby.summary}
                            </p>
                        </div>

                        {/* Photo Gallery */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-100 mb-6">Gallery</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {hobby.photos.map((photo, index) => (
                                    <div key={index} className="group">
                                        <img 
                                            src={photo} 
                                            alt={`${hobby.title} photo ${index + 1}`}
                                            className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="hobbies" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
                        <span className="gradient-text">Hobbies</span>
                    </h2>
                    <div className="w-24 h-1 bg-green-500 rounded-full mb-6"></div>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        Beyond data science, I enjoy various activities that keep me creative, active, and continuously learning
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hobbies.map((hobby, index) => (
                        <div 
                            key={index} 
                            className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 fade-in-up cursor-pointer"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => setSelectedHobby(hobby)}
                        >
                            <div className="relative overflow-hidden">
                                <img 
                                    src={hobby.image} 
                                    alt={hobby.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-green-500/90 text-white px-6 py-3 rounded-full font-semibold">
                                        <i className="fas fa-eye mr-2"></i>
                                        View Details
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-green-400 transition-colors duration-300">
                                    {hobby.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {hobby.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Personal Philosophy */}
                <div className="mt-20 text-center">
                    <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
                        <div className="mb-6">
                            <i className="fas fa-quote-left text-green-400 text-4xl mb-4"></i>
                        </div>
                        <blockquote className="text-xl md:text-2xl text-gray-200 italic leading-relaxed mb-6">
                            "The best data scientists are those who maintain curiosity about the world around them. 
                            My hobbies help me stay creative, think differently, and approach problems from unique angles."
                        </blockquote>
                        <div className="text-gray-400">
                            <cite className="not-italic font-semibold text-green-400">Alex Johnson</cite>
                            <span className="mx-2">•</span>
                            <span>Data Scientist</span>
                        </div>
                    </div>
                </div>

                {/* Hobby Modal */}
                {selectedHobby && (
                    <HobbyModal hobby={selectedHobby} onClose={() => setSelectedHobby(null)} />
                )}
            </div>
        </section>
    );
};

// Export for use in App.js
window.Hobbies = Hobbies;