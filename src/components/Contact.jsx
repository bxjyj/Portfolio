import { useState } from 'react';

// This site has no backend, so the form composes a mailto: link rather than
// silently failing to "submit" anywhere. If you'd rather have messages land
// in an inbox without opening the visitor's mail client, swap this handler
// for a service like Formspree or EmailJS (both have a free tier and just
// need a form POST/JS snippet — no server required).
const CONTACT_EMAIL = 'xu.j@ufl.edu';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/bxjyj', color: 'hover:text-gray-300' },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/jiayi-jade-xu/',
      color: 'hover:text-blue-400',
    },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || `Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have
                a data challenge to solve or just want to chat about data science and GIS, feel
                free to reach out!
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                <i className="fas fa-envelope text-green-400 mr-3"></i>
                {CONTACT_EMAIL}
              </a>
              <div className="flex items-center text-gray-300">
                <i className="fas fa-map-marker-alt text-green-400 mr-3"></i>
                Gainesville, FL
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
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

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-green-500 transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-green-500 transition-colors duration-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-green-500 transition-colors duration-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-green-500 transition-colors duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center group"
            >
              Send Message
              <i className="fas fa-paper-plane ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
