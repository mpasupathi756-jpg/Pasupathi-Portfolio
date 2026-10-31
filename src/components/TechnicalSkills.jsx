import { technicalSkills } from '../data/portfolioData';

const SkillBadge = ({ name }) => (
  <div className="inline-flex items-center px-3.5 py-1.5 bg-white/5 hover:bg-[#ff2a2a]/20 hover:border-[#ff2a2a]/50 border border-white/10 rounded-full text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105">
    {name}
  </div>
);

const SkillCard = ({ category, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-[#ff2a2a]/40 hover:shadow-[0_20px_50px_rgba(255,42,42,0.12)] transition-all duration-500 flex flex-col justify-between"
  >
    <div>
      <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/10">
        <h3 className="text-white text-base sm:text-lg font-black tracking-tight uppercase">
          {category.title}
        </h3>
        <span className="text-[10px] font-mono font-bold text-[#ff2a2a] px-2 py-0.5 rounded bg-[#ff2a2a]/10 border border-[#ff2a2a]/20">
          0{index + 1}
        </span>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} />
        ))}
      </div>
    </div>
  </div>
);

const TechnicalSkills = () => {
  return (
    <section id="skills" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Background glow elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-xs font-bold text-white/70 mb-6 shadow-sm bg-white/5 backdrop-blur-sm uppercase tracking-wider">
            Verified Technical Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Technical Skillset
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Technologies, frameworks, databases, and architectural patterns I have learned and applied in real projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;

