const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-2 bg-green-500 rounded-full"></div>
        </div>

        <div className="grid gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6">
              Data Scientist &amp; Spatial Analyst with a Software Engineering Foundation
            </h3>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a Computer Science student who works at the intersection of geospatial
                analysis, machine learning, and software engineering. My Black Bear Road-Crossing
                project — combining ArcGIS Pro modeling with public wildlife and transportation
                datasets — is a good example of how I like to work: pull real data, build a
                defensible spatial model, and turn it into something a decision-maker can act on.
              </p>

              <p>
                With a foundation in Python, C++, and Java, I move comfortably between exploratory
                analysis, predictive modeling, and the engineering work needed to make a project
                reproducible and shippable rather than a one-off notebook. I'm especially
                interested in applying that mix — spatial/environmental data plus ML plus solid
                software practices — to sustainability and conservation problems.
              </p>

              <p>
                Outside of coding, I lead the University of Florida's OUTdoors club and spend my
                free time bird watching, hiking, and sculpting.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 hover:border-green-500/50 transition-colors duration-300">
                <div className="flex items-center mb-3">
                  <i className="fas fa-graduation-cap text-green-400 text-xl mr-3"></i>
                  <h4 className="text-lg font-semibold text-gray-100">Education</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  B.S. in Computer Science, University of Florida
                  <br />
                  Minor in Mathematics
                </p>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 hover:border-green-500/50 transition-colors duration-300">
                <div className="flex items-center mb-3">
                  <i className="fas fa-certificate text-green-400 text-xl mr-3"></i>
                  <h4 className="text-lg font-semibold text-gray-100">Certificates</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  AI Fundamentals and Applications (UFL)
                  <br />
                  Geographic AI and Big Data (UFL)
                  <br />
                  Machine Learning Foundations (Cornell Tech)
                  <br />
                  Fundamentals of Deep Learning (NVIDIA)
                  <br />
                  Building Models for GIS Analysis Using ArcGIS (Esri)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
