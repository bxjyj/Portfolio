const Hobbies = ({ navigateTo }) => {

    const hobbies = [
        {
            id: 'hiking',
            title: "Hiking",
            description: "Exploring nature trails and enjoying the beauty of nature.",
            image: "images/boardwalk.jpg",
            photos: [
                "images/boardwalk.jpg"
            ],
            summary: "Hiking is my way of grounding myself and staying present in the moment. I love being able to walk amongst the trees and just enjoy the outdoors."
        },
        {
            id: 'bird-watching',
            title: "Bird Watching",
            description: "Observing and identifying birds in their natural habitats. A peaceful hobby that connects me with nature and wildlife.",
            image: "images/snowy.jpg",
            photos: [
                "images/heron.jpg", "images/blueheron.jpg", "images/redtail.jpg", "images/snailkite.jpg", "unknownbird.jpg"
            ],
            summary: "Bird watching has taught me to slow down and listen to the world revolve without you. I love listening and watching them fly by."
        },
        {
            id: 'sculpting',
            title: "Sculpting",
            description: "Creating three-dimensional art from various materials. A hands-on hobby that combines creativity with technical skill.",
            image: "images/IMG_5959.jpg",
            photos: [
                "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop"
            ],
            summary: "Sculpting allows me to express creativity through physical form. I work primarily with clay and wood, creating both abstract and representational pieces. This hobby has improved my spatial reasoning and attention to detail, skills that translate well to data visualization."
        }
    ];


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
                            onClick={() => navigateTo(`hobby/${hobby.id}`)}
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
            </div>
        </section>
    );
};

// Export for use in App.js
window.Hobbies = Hobbies;