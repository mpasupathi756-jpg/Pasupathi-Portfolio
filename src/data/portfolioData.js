// ============================================================
// portfolioData.js — Centralized configuration for Pasupathi M's Portfolio
// Real, authenticated credentials for a Java Full Stack Developer
// ============================================================

import foodcartImg from '../assets/foodcart.png';
import moodwaveImg from '../assets/moodwave.png';
import portraitImg from '../assets/portrait.jpeg';

export const personalInfo = {
  name: "Pasupathi M",
  firstName: "Pasupathi",
  brandName: "Pasupathi M",
  title: "Java Full Stack Developer",
  roleSubtitle: "B.E. Computer Science & Engineering (2026)",
  location: "Bangalore, Karnataka",
  phone: "+91 8903290586",
  emails: {
    primary: "mpasupathi756@gmail.com",
    secondary: "",
  },
  summary:
    "Java Full Stack Developer graduating in 2026 with hands-on experience building full-stack web applications using Java, Servlets, JSP, JDBC, and MySQL. Solid understanding of Object-Oriented Programming (OOP) and MVC architecture, with frontend proficiency in HTML5 and CSS3. Seeking a Java Full Stack Developer or Backend Developer role.",
  resumeUrl: "/Pasupathi-Resume.pdf",
  portraitUrl: portraitImg,
};

// No intro video for fresher portfolio; setting empty string cleanly hides the section
export const introVideo = {
  badge: "Video Introduction",
  heading: "Meet Me",
  description: "A quick hello: who I am, what I build, and my engineering journey.",
  youtubeUrl: "",
};

export const academy = {
  name: "TAP Academy, Bengaluru",
  role: "Java Full Stack Development Intern",
  url: "https://thetapacademy.com/",
};

export const college = {
  name: "CMS College of Engineering",
  university: "Affiliated to Anna University, Chennai",
  location: "Coimbatore, Tamil Nadu",
  degree: "B.E. in Computer Science Engineering",
  period: "2022 – 2026",
  cgpa: "7.5",
};

export const socialLinks = {
  github: "https://github.com/mpasupathi756-jpg",
  linkedin: "https://linkedin.com/in/pasupathii",
  email: "mailto:mpasupathi756@gmail.com",
};

export const heroContent = {
  greeting: "Hi, I'm Pasupathi M",
  titleHighlight: "Java Full Stack Developer",
  statusBadge: "Available for Developer Roles",
  subtitle:
    "Graduating in 2026 with strong foundations in Java, JDBC, Servlets, JSP, MySQL, and clean MVC architecture. Passionate about building robust backend logic and reliable web applications.",
  ctaPrimary: { text: "View My Projects", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:mpasupathi756@gmail.com?subject=Hiring Inquiry — Java Full Stack Developer&body=Hello Pasupathi,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Pasupathi-Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello & Welcome!",
  bio: `I am <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Pasupathi M</span>, a Java Full Stack Developer graduating in 2026 with a B.E. in Computer Science Engineering from CMS College of Engineering (Anna University).<br/><br/>I have hands-on experience developing end-to-end web applications following the <strong>MVC architecture</strong> with <strong>Java, Servlets, JSP, JDBC, and MySQL</strong>. Through rigorous training at TAP Academy Bengaluru and a frontend internship at Talent Trek, I have gained real-world exposure to creating secure authentication, managing relational schemas, and developing clean responsive user interfaces.`,
  techStack: ["Java", "SQL", "Servlets & JSP", "JDBC", "MySQL", "MVC"],
  quickStats: [
    { label: "Degree", value: "B.E. CSE (2026)" },
    { label: "CGPA", value: "7.5 / 10" },
    { label: "Internships", value: "2 Completed" },
    { label: "Focus", value: "Java & MVC Web Apps" }
  ]
};

export const skillsContent = {
  badge: "Engineering Workflow",
  heading: "How I approach software development",
  description:
    "Following structured software engineering practices to design, develop, and deliver robust Java web applications.",
  cards: [
    {
      number: "01",
      title: "Analysis & OOP Design",
      text: "Analyzing project requirements, defining entity models, and applying Object-Oriented principles and MVC architecture before writing business code.",
    },
    {
      number: "02",
      title: "Database Modeling",
      text: "Designing normalized relational schemas in MySQL and PostgreSQL with primary/foreign key integrity, indexes, and optimized SQL queries.",
    },
    {
      number: "03",
      title: "Full-Stack Development",
      text: "Writing core business logic and controllers using Java, Servlets, and JDBC, combined with dynamic JSP, HTML5, and CSS3 responsive views.",
    },
    {
      number: "04",
      title: "Testing & Deployment",
      text: "Validating CRUD workflows and session authentication, testing locally on Apache Tomcat, and deploying applications to live cloud platforms.",
    },
  ],
  endText: "Built with passion & precision!",
};

// Pasupathi's Actual Technical Skills from Resume
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java (Core & OOP)" },
        { name: "SQL" },
        { name: "Data Structures & Collections" },
        { name: "Exception Handling" }
      ]
    },
    {
      title: "Backend & Architecture",
      skills: [
        { name: "JDBC" },
        { name: "Java Servlets" },
        { name: "JSP (JavaServer Pages)" },
        { name: "MVC Architecture" },
        { name: "Session & Cookie Management" },
        { name: "CRUD Operations" }
      ]
    },
    {
      title: "Frontend & UI Design",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Responsive Web Design" },
        { name: "Cross-Browser Compatibility" },
        { name: "UI Components" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "Relational Schema Design" },
        { name: "Query Optimization" }
      ]
    },
    {
      title: "Build Tools & Servers",
      skills: [
        { name: "Git & GitHub" },
        { name: "Maven" },
        { name: "Apache Tomcat" },
        { name: "VS Code / Eclipse" }
      ]
    },
    {
      title: "AI Tools & Modern Workflow",
      skills: [
        { name: "GitHub Copilot" },
        { name: "ChatGPT" },
        { name: "Claude" },
        { name: "Gemini" }
      ]
    }
  ]
};

// Pasupathi's Actual Internships from Resume
export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Java Full Stack Development Intern",
    location: "Bengaluru, Karnataka",
    duration: "2026",
    badge: "Intensive Full Stack Training",
    skills: [
      "Developed full stack web applications using Java, Servlets, JSP, JDBC, and MySQL.",
      "Implemented MVC architecture, secure role-based authentication, and CRUD operations.",
      "Built responsive user interfaces and integrated backend business logic seamlessly.",
      "Used Git, Maven, and Apache Tomcat for local server development and deployment."
    ],
    tech: ["Java", "Servlets", "JSP", "JDBC", "MySQL", "MVC", "Maven", "Apache Tomcat", "Git"]
  },
  {
    organization: "Talent Trek",
    role: "Web Development Intern",
    location: "Remote",
    duration: "2025",
    badge: "Frontend Internship",
    skills: [
      "Developed responsive, accessible web pages using HTML5 and CSS3.",
      "Built reusable UI components with cross-browser compatibility.",
      "Collaborated using Git/GitHub and adhered to web development best practices."
    ],
    tech: ["HTML5", "CSS3", "Responsive UI", "Git", "GitHub"]
  }
];

// Pasupathi's Actual Education & Academic Timeline from Resume
export const educationList = [
  {
    degree: "B.E. in Computer Science Engineering",
    institution: "CMS College of Engineering",
    affiliation: "Affiliated to Anna University, Chennai",
    location: "Coimbatore, Tamil Nadu",
    period: "2022 – 2026",
    score: "CGPA: 7.5",
    badge: "Current Degree",
    description: "Coursework covering Object-Oriented Programming, Data Structures, Relational Database Management Systems (RDBMS), Operating Systems, Software Engineering, and Computer Networks."
  },
  {
    degree: "Java Full Stack Specialization",
    institution: "TAP Academy",
    affiliation: "Professional Technical Training",
    location: "Bengaluru, Karnataka",
    period: "2026",
    score: "Hands-on Full Stack",
    badge: "Training & Internship",
    description: "Intensive training in Java, Servlets, JSP, JDBC, MySQL, and full-stack MVC application design, completing real-world production projects."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Government Higher Secondary School",
    affiliation: "State Board of Tamil Nadu",
    location: "Dharmapuri, Tamil Nadu",
    period: "2020 – 2022",
    score: "73%",
    badge: "Class XII",
    description: "Completed higher secondary education with specialization in Mathematics, Physics, Chemistry, and Computer Science."
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Government High School",
    affiliation: "State Board of Tamil Nadu",
    location: "Dharmapuri, Tamil Nadu",
    period: "2019 – 2020",
    score: "78%",
    badge: "Class X",
    description: "Strong academic foundation in Science and Mathematics, completing secondary education with 78% marks."
  }
];

// Pasupathi's Actual Projects from Resume & Live Deployments
export const projects = [
  {
    id: "foodcart",
    number: "01",
    badge: "🔥 Flagship Project",
    title: "FoodCart – Full Stack Food Ordering Platform",
    image: foodcartImg,
    description:
      "A complete full-stack food ordering application built with Java, JSP, Servlets, JDBC, and MySQL. Features clean MVC architecture, role-based authentication (Customer, Restaurant, Administrator), live cart management, CRUD operations, and cloud database persistence.",
    features: [
      "Role-based authentication & session security for users and administrators",
      "Dynamic menu browsing, real-time cart manipulation, and order lifecycle management",
      "Robust relational database design with JDBC transaction handling in MySQL",
      "Live production deployment on Railway cloud"
    ],
    techTags: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "MVC Architecture", "Apache Tomcat", "Railway"],
    links: {
      github: "https://github.com/mpasupathi756-jpg",
      demo: "https://foodcart-production-affe.up.railway.app",
    },
    isFlagship: true,
  },
  {
    id: "moodwave",
    number: "02",
    badge: "✨ Featured Project",
    title: "MoodWave – Dynamic Music Streaming Application",
    image: moodwaveImg,
    description:
      "A full-stack music streaming platform featuring mood-based recommendations and music discovery. Implemented user authentication, personalized playlists, music search, listening history, and real-time collaborative rooms with responsive audio controls.",
    features: [
      "Mood-based music recommendation engine and algorithmic playlist discovery",
      "User authentication, custom playlist curation, and listening history tracking",
      "Integration with music APIs for seamless playback and metadata indexing",
      "Modern responsive UI design optimized for both mobile and desktop"
    ],
    techTags: ["Full Stack", "JavaScript", "Music APIs", "PostgreSQL / MySQL", "Responsive UI", "Vercel"],
    links: {
      github: "https://github.com/mpasupathi756-jpg",
      demo: "https://mood-wave-gilt.vercel.app/",
    },
    isFlagship: false,
  }
];

// Soft Skills reflecting a strong fresher developer
export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Analytical approach to debugging code, optimizing SQL queries, and breaking down complex requirements into clean modular solutions."
  },
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Active team member experienced in Git branching, GitHub pull requests, collaborative code reviews, and remote internship settings."
  },
  {
    name: "Adaptability & Learning",
    icon: "🚀",
    desc: "Fast learner eager to master new technologies, tools, and best engineering practices, with proactive use of AI productivity tools."
  },
  {
    name: "Technical Communication",
    icon: "💬",
    desc: "Clear and confident communication when presenting project architectures, explaining database schemas, and discussing code design."
  }
];

// Footer layout data
export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Java • Servlets • JDBC • MySQL • MVC",
    "B.E. Computer Science & Engineering (2026)",
  ],
  credential: "CMS College of Engineering | Anna University",
  copyright: `© ${new Date().getFullYear()} Pasupathi M | All rights reserved`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

