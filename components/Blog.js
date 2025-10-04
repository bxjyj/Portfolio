const Blog = () => {
    const [showAll, setShowAll] = React.useState(false);
    const [selectedPost, setSelectedPost] = React.useState(null);

    const featuredPosts = window.blogData.filter(post => post.featured);
    const displayPosts = showAll ? window.blogData : featuredPosts;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    const BlogCard = ({ post }) => (
        <article className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-green-500/10">
            <div className="relative overflow-hidden">
                <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                    <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                    <i className="fas fa-calendar mr-2"></i>
                    <span>{formatDate(post.date)}</span>
                    <span className="mx-2">•</span>
                    <i className="fas fa-clock mr-2"></i>
                    <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-green-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => setSelectedPost(post)}
                        className="text-green-400 hover:text-green-300 font-medium text-sm transition-colors duration-300 flex items-center group"
                    >
                        Read More
                        <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                    </button>
                    
                    <div className="flex items-center text-gray-400 text-sm">
                        <i className="fas fa-eye mr-1"></i>
                        <span>1.2k views</span>
                    </div>
                </div>
            </div>
        </article>
    );

    const BlogModal = ({ post, onClose }) => {
        if (!post) return null;

        return (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-700">
                    <div className="flex justify-between items-center p-6 border-b border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-100">{post.title}</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                            <i className="fas fa-times text-xl"></i>
                        </button>
                    </div>
                    
                    <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                        <div className="flex items-center text-sm text-gray-400 mb-6">
                            <i className="fas fa-calendar mr-2"></i>
                            <span>{formatDate(post.date)}</span>
                            <span className="mx-2">•</span>
                            <i className="fas fa-clock mr-2"></i>
                            <span>{post.readTime}</span>
                            <span className="mx-2">•</span>
                            <div className="flex gap-2">
                                {post.tags.map((tag, index) => (
                                    <span 
                                        key={index}
                                        className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="prose prose-invert max-w-none">
                            <div 
                                className="text-gray-300 leading-relaxed"
                                dangerouslySetInnerHTML={{ 
                                    __html: post.content.replace(/\n/g, '<br>').replace(/#{1,6}\s(.+)/g, '<h$1>$2</h$1>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>')
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="blog" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
                        <span className="gradient-text">Blog</span>
                    </h2>
                    <div className="w-24 h-1 bg-green-500 rounded-full mb-6"></div>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        Thoughts, tutorials, and insights about data science, machine learning, and the tech industry
                    </p>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {displayPosts.map((post, index) => (
                        <div key={post.id} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <BlogCard post={post} />
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        {showAll ? 'Show Less' : 'View All Posts'}
                        <i className={`fas fa-arrow-${showAll ? 'up' : 'down'} ml-2`}></i>
                    </button>
                </div>


                {/* Blog Modal */}
                {selectedPost && (
                    <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
                )}
            </div>
        </section>
    );
};

// Export for use in App.js
window.Blog = Blog;
