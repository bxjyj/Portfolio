const BlogDetail = ({ blog, goBack }) => {
    if (!blog) return null;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

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
                        <div className="flex items-center space-x-4 text-gray-300">
                            <span className="text-sm">{blog.readTime}</span>
                            <span className="text-sm">{formatDate(blog.date)}</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6 leading-tight">
                            {blog.title}
                        </h1>
                        <div className="w-24 h-2 bg-green-500 rounded-full mx-auto mb-8"></div>
                        
                        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 mb-8">
                            <div className="flex items-center">
                                <i className="fas fa-calendar mr-2"></i>
                                {formatDate(blog.date)}
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-clock mr-2"></i>
                                {blog.readTime}
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            {blog.tags.map((tag, index) => (
                                <span 
                                    key={index}
                                    className="px-4 py-2 bg-green-500/10 text-green-400 text-sm font-medium rounded-full border border-green-500/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative mb-12">
                        <img 
                            src={blog.image} 
                            alt={blog.title}
                            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-green-500/10 rounded-2xl"></div>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-20 bg-gray-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg prose-invert max-w-none">
                        <div 
                            className="text-gray-300 leading-relaxed"
                            dangerouslySetInnerHTML={{ 
                                __html: blog.content.replace(/\n/g, '<br/>').replace(/#{1,6}\s/g, (match) => {
                                    const level = match.trim().length;
                                    return `<h${level} class="text-${level === 1 ? '4xl' : level === 2 ? '3xl' : level === 3 ? '2xl' : 'xl'} font-bold text-gray-100 mb-4 mt-8">`;
                                }).replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                                .replace(/\*(.*?)\*/g, '<em class="text-green-400">$1</em>')
                                .replace(/^- (.*$)/gm, '<li class="ml-6">$1</li>')
                                .replace(/(<li.*<\/li>)/s, '<ul class="list-disc list-inside space-y-2 mb-6">$1</ul>')
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Author Info */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
                        <div className="flex items-start space-x-6">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                                <i className="fas fa-user text-white text-xl"></i>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-100 mb-2">Jade Xu</h3>
                                <p className="text-gray-300 mb-4">
                                    Aspiring Data Analyst passionate about machine learning, statistical analysis, 
                                    and creating data-driven stories that make a difference.
                                </p>
                                <div className="flex space-x-4">
                                    <a 
                                        href="https://github.com/bxjyj" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                                    >
                                        <i className="fab fa-github text-xl"></i>
                                    </a>
                                    <a 
                                        href="https://www.linkedin.com/in/jiayi-jade-xu/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                                    >
                                        <i className="fab fa-linkedin text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            <section className="py-20 bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-100 mb-4">More Articles</h2>
                        <p className="text-gray-400 text-lg">Explore more of my writing</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {window.blogData?.filter(b => b.id !== blog.id).slice(0, 3).map((relatedBlog) => (
                            <div key={relatedBlog.id} className="bg-gray-700/50 rounded-xl overflow-hidden border border-gray-600 hover:border-green-500/50 transition-all duration-300 group">
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={relatedBlog.image} 
                                        alt={relatedBlog.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-green-400 transition-colors duration-300">
                                        {relatedBlog.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                        {relatedBlog.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400 text-sm">{relatedBlog.readTime}</span>
                                        <span className="text-gray-400 text-sm">{formatDate(relatedBlog.date)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

// Export for use in Router.js
window.BlogDetail = BlogDetail;
