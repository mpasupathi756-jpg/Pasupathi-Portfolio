import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroContent, socialLinks, personalInfo } from '../data/portfolioData';
import { useMouseTilt } from '../hooks/useMouseTilt';

const Hero = () => {
  const { ref: cardRef, style: cardStyle } = useMouseTilt({ maxTiltX: 8, maxTiltY: 10, scale: 1.02 });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-black flex items-center pt-28 pb-16 md:py-0">
      {/* Background Ambient Glows & Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px] pointer-events-none z-0" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#ff2a2a]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Left Floating Social Bar for Large Screens */}
      <div className="hidden lg:flex flex-col gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-40 mix-blend-difference">
        <a 
          href={socialLinks.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-125"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-125"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a 
          href={socialLinks.email} 
          className="text-white/60 hover:text-[#ff2a2a] transition-all duration-300 transform hover:scale-125"
          aria-label="Email"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Column: Headlines & CTA */}
        <div className="flex-1 max-w-2xl text-left">
          
          {/* Status Badge */}
          <div data-aos="fade-down" className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md mb-6 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-white/80 text-xs font-semibold tracking-wide uppercase">
              {heroContent.statusBadge}
            </span>
          </div>

          {/* Main Title */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight leading-[1.1]"
          >
            {heroContent.greeting}, <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_#ffffff] hover:[-webkit-text-stroke:1.5px_#ff2a2a] transition-all">
              {heroContent.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/70 text-base sm:text-lg md:text-xl font-normal mb-8 leading-relaxed max-w-xl"
          >
            {heroContent.subtitle}
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap items-center gap-4 w-full"
          >
            {/* Primary Button */}
            <a 
              href={heroContent.ctaPrimary.href}
              className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm sm:text-base hover:bg-[#ff2a2a] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,42,42,0.5)]"
            >
              {heroContent.ctaPrimary.text}
            </a>
            
            {/* Secondary Button */}
            <a 
              href={heroContent.ctaSecondary.href}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/15 hover:border-white/40 transition-all duration-300 backdrop-blur-md"
            >
              {heroContent.ctaSecondary.text}
            </a>

            {/* Resume Download */}
            <a 
              href={heroContent.ctaResume.href}
              download
              className="px-5 py-3 rounded-full bg-transparent border border-white/20 text-white/90 text-sm font-semibold hover:border-[#ff2a2a] hover:text-[#ff2a2a] transition-all duration-300 backdrop-blur-md flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {heroContent.ctaResume.text}
            </a>
          </div>

          {/* Quick tech tags under buttons */}
          <div data-aos="fade-up" data-aos-delay="400" className="mt-10 flex flex-wrap items-center gap-2 text-xs font-mono text-white/50">
            <span className="text-white/30 uppercase font-bold tracking-wider">Core Focus:</span>
            {['Java', 'Servlets', 'JSP', 'JDBC', 'MySQL', 'MVC Pattern'].map((item) => (
              <span key={item} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/70">
                {item}
              </span>
            ))}
          </div>

        </div>

        {/* Right Column: Interactive 3D Mouse Tilt Spotlight Card */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="300"
          className="w-full sm:w-[380px] lg:w-[420px] shrink-0"
        >
          <div 
            ref={cardRef} 
            style={cardStyle}
            className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-[#ff2a2a]/40 via-white/10 to-transparent shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
          >
            <div className="rounded-3xl bg-[#0c0c0c]/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col items-center text-center border border-white/10">
              
              {/* Photo Frame */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden mb-6 p-1 border-2 border-white/15 group-hover:border-[#ff2a2a]/60 transition-colors duration-500 shadow-xl bg-neutral-900">
                <img 
                  src={personalInfo.portraitUrl} 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Title & Badge */}
              <h3 className="text-white text-2xl font-black tracking-tight mb-1">
                {personalInfo.name}
              </h3>
              <p className="text-[#ff2a2a] text-xs font-bold font-mono tracking-wider uppercase mb-4">
                {personalInfo.title}
              </p>

              {/* Quick Info Matrix */}
              <div className="w-full grid grid-cols-2 gap-2 text-left my-2 p-3 bg-white/5 rounded-xl border border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-white/40 uppercase block">Education</span>
                  <span className="text-xs font-semibold text-white/90">B.E. CSE (2026)</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-white/40 uppercase block">CGPA</span>
                  <span className="text-xs font-semibold text-emerald-400">7.5 / 10.0</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-white/40 uppercase block">Training</span>
                  <span className="text-xs font-semibold text-white/90">TAP Academy</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-white/40 uppercase block">Location</span>
                  <span className="text-xs font-semibold text-white/90">Bengaluru, IN</span>
                </div>
              </div>

              {/* Verified Full Stack Pill */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Hands-on Java MVC & Database Engineer</span>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="700"
        className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce flex flex-col items-center gap-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Scroll</span>
          <svg 
            className="w-5 h-5 text-white/60" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
