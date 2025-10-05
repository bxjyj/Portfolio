const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const socialLinks = [
        {
            name: 'GitHub',
            icon: 'fab fa-github',
            url: 'https://github.com/bxjyj',
            color: 'hover:text-gray-300'
        },
        {
            name: 'LinkedIn',
            icon: 'fab fa-linkedin',
            url: 'https://www.linkedin.com/in/jiayi-jade-xu/',
            color: 'hover:text-blue-400'
        }
    ];

    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love to hear from you. 
                        Let's discuss how we can work together to solve data challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-100 mb-6">
                                Let's Connect
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                I'm always interested in new opportunities and exciting projects. 
                                Whether you have a data challenge to solve or just want to chat about 
                                data science, feel free to reach out!
                            </p>
                        </div>

                        {/* Social Links */}
                        <div>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 transform`}
                                        aria-label={social.name}
                                    >
                                        <i className={`${social.icon} text-xl`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// Export for use in App.js
window.Contact = Contact;
