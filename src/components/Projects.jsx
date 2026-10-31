import { projects, socialLinks } from '../data/portfolioData';

const GitHubIcon = () => (
  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
  </svg>
);

const ProjectCard = ({ project, aosDelay }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`relative rounded-3xl p-[1px] group transition-all duration-500 ${
        project.isFlagship
          ? 'bg-gradient-to-br from-red-500/60 via-white/10 to-red-500/30 hover:from-[#ff2a2a] hover:via-red-400/40 hover:to-red-500/70 shadow-[0_20px_50px_rgba(255,42,42,0.15)]'
          : 'bg-white/10 hover:bg-white/20'
      }`}
    >
      <div className={`rounded-3xl p-6 sm:p-8 md:p-10 h-full backdrop-blur-md transition-all duration-500 ${
        project.isFlagship
          ? 'bg-[#0e0e0e]/95 group-hover:bg-[#0e0e0e]/90'
          : 'bg-[#111111]/90 group-hover:bg-[#111111]/85'
      }`}>
        <div className="flex flex-col lg:flex-row gap-8 lg:items-center justify-between">
          
          {/* Left Column: Project Details */}
          <div className="flex-1">
            
            {/* Meta Row */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-mono font-bold text-white/40">
                {project.number}
              </span>
              {project.badge && (
                <span className={`text-[11px] font-black tracking-wider uppercase py-1 px-3 rounded-full border ${
                  project.isFlagship
                    ? 'bg-[#ff2a2a]/20 text-[#ff2a2a] border-[#ff2a2a]/40'
                    : 'bg-white/10 text-white/80 border-white/20'
                }`}>
                  {project.badge}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight group-hover:text-red-400 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {project.description}
            </p>

            {/* Feature Highlights */}
            {project.features && (
              <div className="mb-6 space-y-2">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 font-medium">
                    <CheckIcon />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/10 text-white/80 hover:bg-white/15 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links / Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white text-sm font-bold hover:bg-red-600 hover:shadow-[0_0_25px_rgba(255,42,42,0.5)] transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLinkIcon />
                  Live Application
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
                >
                  <GitHubIcon />
                  Source Code
                </a>
              )}
            </div>

          </div>

          {/* Right Column: Project Preview Image */}
          <div className="w-full lg:w-[46%] shrink-0">
            <a 
              href={project.links.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative rounded-2xl overflow-hidden border border-white/15 group/img shadow-2xl hover:border-red-500/50 transition-all duration-500 bg-neutral-900"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot preview`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
                  <ExternalLinkIcon /> View Live System
                </span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-xs text-white/70 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm uppercase tracking-wider">
            Featured Full Stack Systems
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Work That Speaks <br className="hidden md:block" />For Itself
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            Real full-stack applications with clean MVC architecture, relational database persistence, role-based security, and production cloud deployments.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              aosDelay={String((index + 1) * 150)}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div data-aos="fade-up" data-aos-delay="400" className="mt-16 flex justify-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-base sm:text-lg hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500 group"
          >
            <GitHubIcon />
            Explore All My GitHub Repositories
            <svg className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

