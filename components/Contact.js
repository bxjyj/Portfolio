const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);


    const contactInfo = [
        {
            icon: 'fas fa-envelope',
            title: 'Email',
            value: 'alex@example.com',
            link: 'mailto:alex@example.com'
        },
        {
            icon: 'fas fa-phone',
            title: 'Phone',
            value: '+1 (555) 123-4567',
            link: 'tel:+15551234567'
        },
        {
            icon: 'fas fa-map-marker-alt',
            title: 'Location',
            value: 'San Francisco, CA',
            link: '#'
        },
        {
            icon: 'fas fa-clock',
            title: 'Available',
            value: 'Mon - Fri, 9AM - 6PM PST',
            link: '#'
        }
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

                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-500/30 transition-colors duration-300">
                                        <i className={`${info.icon} text-green-400 text-lg`}></i>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 font-medium">{info.title}</div>
                                        <div className="text-gray-200 font-semibold">{info.value}</div>
                                    </div>
                                </a>
                            ))}
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
