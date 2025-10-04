const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: 'fab fa-github',
            url: 'https://github.com',
            color: 'hover:text-gray-300'
        },
        {
            name: 'LinkedIn',
            icon: 'fab fa-linkedin',
            url: 'https://linkedin.com',
            color: 'hover:text-blue-400'
        }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-100 mb-4">
                                Jade Xu
                            </h3>
                            <p className="text-gray-400 leading-relaxed max-w-md">
                                Junior Data Scientist passionate about transforming data into insights 
                                and building intelligent solutions that drive business growth.
                            </p>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 transform`}
                                    aria-label={social.name}
                                >
                                    <i className={`${social.icon} text-lg`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-100 mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => scrollToSection(link.href.substring(1))}
                                        className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-left"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-100 mb-4">Get In Touch</h4>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <i className="fas fa-envelope text-green-400 mr-3"></i>
                                <a 
                                    href="mailto:alex@example.com"
                                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                                >
                                    xu.j@ufl.edu
                                </a>
                            </div>
                    
                            <div className="flex items-center">
                                <i className="fas fa-map-marker-alt text-green-400 mr-3"></i>
                                <span className="text-gray-400">Gainesville, FL</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back to Top Button */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        <i className="fas fa-arrow-up mr-2"></i>
                        Back to Top
                    </button>
                </div>
            </div>
        </footer>
    );
};

// Export for use in App.js
window.Footer = Footer;
