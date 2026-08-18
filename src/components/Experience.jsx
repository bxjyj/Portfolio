import experienceData from '../data/experience';

const Experience = () => {
  if (experienceData.length === 0) return null;

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experienceData.map((role) => (
            <div
              key={role.id}
              className="bg-gray-800/50 p-6 md:p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-100">{role.role}</h3>
                  <p className="text-green-400 font-medium">
                    {role.organization}
                    {role.location ? ` · ${role.location}` : ''}
                  </p>
                </div>
                <p className="text-gray-400 text-sm whitespace-nowrap">
                  {role.startDate} – {role.endDate}
                </p>
              </div>

              {role.summary && <p className="text-gray-300 mb-4">{role.summary}</p>}

              {role.highlights?.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {role.highlights.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check-circle text-green-400 mr-3 mt-1"></i>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {role.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {role.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full border border-green-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
