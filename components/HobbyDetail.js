const HobbyDetail = ({ hobby, goBack }) => {
    if (!hobby) return null;

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
                        <div className="text-gray-300">
                            <i className="fas fa-heart mr-2"></i>
                            My Hobbies
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Hobby Image */}
                        <div className="order-2 lg:order-1">
                            <div className="relative">
                                <img 
                                    src={hobby.image} 
                                    alt={hobby.title}
                                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-green-500/10 rounded-2xl"></div>
                            </div>
                        </div>

                        {/* Hobby Info */}
                        <div className="order-1 lg:order-2 space-y-6">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                                    {hobby.title}
                                </h1>
                                <div className="w-24 h-2 bg-green-500 rounded-full mb-6"></div>
                            </div>
                            
                            <p className="text-xl text-gray-300 leading-relaxed">
                                {hobby.description}
                            </p>

                            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-lg font-semibold text-gray-100 mb-3">Why I Love This Hobby</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {hobby.summary}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="py-20 bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-100 mb-4">Gallery</h2>
                        <p className="text-gray-400 text-lg">Capturing moments and memories</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {hobby.photos.map((photo, index) => (
                            <div key={index} className="group">
                                <div className="relative overflow-hidden rounded-xl">
                                    <img 
                                        src={photo} 
                                        alt={`${hobby.title} photo ${index + 1}`}
                                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-sm font-medium">Photo {index + 1}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Personal Reflection */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-100 mb-4">Personal Reflection</h2>
                        <p className="text-gray-400 text-lg">How this hobby has shaped me</p>
                    </div>

                    <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
                        <div className="prose prose-lg prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {hobby.summary}
                            </p>
                            <p className="text-gray-300 leading-relaxed text-lg mt-6">
                                This hobby has taught me valuable lessons that extend beyond the activity itself. 
                                It has helped me develop patience, attention to detail, and a deeper appreciation 
                                for the world around me. These skills have also enhanced my work in data science, 
                                where careful observation and methodical approach are essential.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Export for use in Router.js
window.HobbyDetail = HobbyDetail;
