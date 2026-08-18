const CONTACT_EMAIL = 'xu.j@ufl.edu';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/bxjyj', color: 'hover:text-gray-300' },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/jiayi-jade-xu/',
      color: 'hover:text-blue-400',
    },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Jade Xu</h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Data Scientist &amp; Spatial Analyst turning geographic and environmental data into
                decisions.
              </p>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
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
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
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
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-green-400 mr-3"></i>
                <span className="text-gray-400">Gainesville, FL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <i className="fas fa-arrow-up mr-2"></i>
            Back to Top
          </button>
          <p className="text-gray-500 text-sm mt-6">&copy; {currentYear} Jade Xu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
