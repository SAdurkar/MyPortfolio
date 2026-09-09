import React, { useState, useEffect } from 'react';
import profileImg from '/public/profile.jpg';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  // Sync dark class on body/root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const userData = {
    name: "Snehal Adurkar",
    fullName: "Snehal Jaydas Adurkar",
    headline: "Full-Stack Web & Android Developer",
    subheadline: "IT Support & Systems Specialist",
    email: "snehaladurkarbca@gmail.com",
    phone: "+91-8378040790",
    location: "Badlapur, Maharashtra",
    github: "https://github.com/SAdurkar",
    linkedin: "https://linkedin.com/in/snehal-adurkar",
    resumeFile: "./snehal_resume_IT.pdf.pdf",
    hpclCertificate: "./Certificate HPCL.pdf",
    itiMarksheet: "./ITI Marksheet.pdf"
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = userData.resumeFile;
    link.download = 'Snehal_Jaydas_Adurkar_Resume.pdf';
    link.click();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Sending...');
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    window.location.href = `mailto:${userData.email}?subject=Portfolio Contact from ${name}&body=Sender: ${name} (${email})%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    setTimeout(() => {
      setFormStatus('Message Triggered! Thank you.');
      setTimeout(() => {
        setIsContactOpen(false);
        setFormStatus('');
      }, 1500);
    }, 500);
  };

  const skillsData = [
    {
      category: "Frontend Engineering",
      items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "UI/UX Principles", "Tailwind CSS"]
    },
    {
      category: "Backend & AI Systems",
      items: ["Node.js", "Express.js", "REST APIs", "Google Gemini API", "Prompt Engineering"]
    },
    {
      category: "Mobile & Core Languages",
      items: ["Android SDK", "Java", "Kotlin", "Python", "C#", "ASP.NET MVC"]
    },
    {
      category: "Databases & Cloud",
      items: ["MySQL", "Firebase", "MS SQL Server", "Git / GitHub", "Azure DevOps (Basics)"]
    },
    {
      category: "IT Support & Infrastructure",
      items: ["Service Desk Operations", "Active Directory", "Windows OS Troubleshooting", "TCP/IP & VPN", "MS Office 365"]
    }
  ];

  const fullStackStrengths = [
    {
      title: "Client-Side UI/UX",
      desc: "Creating accessible, dynamic and fast-rendering client interfaces with responsive mobile-first layouts."
    },
    {
      title: "Backend & RESTful Services",
      desc: "Architecting modular Express.js servers, integrating third-party APIs (Gemini AI), and schema-driven database models."
    },
    {
      title: "Native Android Engineering",
      desc: "Developing native Android apps using Kotlin/Java, incorporating GPS sensors, background services, and Firebase Realtime DB."
    },
    {
      title: "Enterprise Issue Resolution",
      desc: "Diagnosing networking, operating system, and portal-level bottlenecks with systematic troubleshooting."
    }
  ];

  const projects = [
    {
      title: "AI-Powered Resume Analyzer & Cover Letter Generator",
      tagline: "Full-Stack AI Application",
      description: "Full-stack web application leveraging Node.js, Express, and Google Gemini AI to intelligently evaluate resumes against specific job descriptions. Features dynamic ATS matching metrics visualized using Chart.js and automatic customized cover letter generation.",
      tech: ["Node.js", "Express.js", "Gemini AI", "Chart.js", "PDF-Extraction"],
      hasCode: true,
      githubUrl: "https://github.com/SAdurkar/Resume-Analyzer",
      hasLiveDemo: true,
      demoUrl: "https://github.com/SAdurkar/Resume-Analyzer#demo",
      isLive: true
    },
    {
      title: "SurakshaPlus – Women's Safety App",
      tagline: "Android Mobile Application",
      description: "Comprehensive women safety mobile application engineered in Android Studio with Kotlin/Java. Features instantaneous real-time GPS location tracking, trusted contact syncing, and an SOS panic button triggering immediate emergency alerts.",
      tech: ["Android Studio", "Kotlin", "Java", "Firebase", "SQL"],
      hasCode: true,
      githubUrl: "https://github.com/SAdurkar/SurakshaPlus",
      hasLiveDemo: true,
      demoUrl: "https://github.com/SAdurkar/SurakshaPlus#screens",
      isLive: true
    },
    {
      title: "Maintenance Request Portal",
      tagline: "Enterprise Web Portal",
      description: "Responsive intranet request management system featuring clean UI workflows, dynamic client validation using jQuery, and a relational MySQL backend for logging and resolving equipment issues.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "MySQL"],
      hasCode: false,
      githubUrl: null,
      hasLiveDemo: false,
      demoUrl: null,
      isLive: false
    },
    {
      title: "Safety Volunteers Activity Log",
      tagline: "Operations Management Web Tool",
      description: "Dedicated operational dashboard enabling field safety volunteers to track, log, and audit safety observations with authenticated data storage.",
      tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      hasCode: false,
      githubUrl: null,
      hasLiveDemo: false,
      demoUrl: null,
      isLive: false
    }
  ];

  return (
    <div className={`${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-800'} min-h-screen p-2 sm:p-5 lg:p-10 flex justify-center items-center selection:bg-emerald-300 selection:text-slate-900 transition-colors duration-300 relative`}>
      
      {/* Floating Theme Toggle (Top-Right) */}
      <div className="fixed top-4 right-4 z-40">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full backdrop-blur-md bg-white/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 shadow-md hover:scale-105 transition-all text-xs font-bold text-slate-800 dark:text-slate-200 cursor-pointer"
          title="Toggle Light / Dark Mode"
        >
          <span>{darkMode ? '☀️ Light' : '🌙 Dark'}</span>
        </button>
      </div>

      {/* Outer Card Container */}
      <div className="bg-white dark:bg-slate-900 w-full max-w-7xl rounded-3xl sm:rounded-[2.5rem] shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden flex flex-col lg:flex-row transition-colors duration-300">
        
        {/* LEFT SIDEBAR */}
        <aside className="w-full lg:w-[36%] bg-slate-50 dark:bg-slate-900/50 p-6 sm:p-8 lg:p-9 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between">
          <div>
            {/* Profile Photo */}
            <div className="w-full h-72 sm:h-96 rounded-2xl sm:rounded-[2.2rem] overflow-hidden shadow-md border-4 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-800 mb-6 group relative">
              <img 
                src={profileImg} 
                alt={userData.name} 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
              />
            </div>

            {/* Name & Headline */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {userData.name}
            </h1>
            <p className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mt-1 mb-1 font-mono">
              {userData.headline}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-5">
              {userData.subheadline}
            </p>

            {/* Location & Contact Pills */}
            <div className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300 mb-5">
              <span className="flex items-center gap-1.5 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-xs font-medium">
                📍 {userData.location}
              </span>
              <a 
                href={`tel:${userData.phone}`} 
                className="flex items-center gap-1.5 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-xs font-medium hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
              >
                📞 {userData.phone}
              </a>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              <a 
                href={userData.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-4 bg-slate-900 dark:bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-700 transition shadow-xs border border-transparent dark:border-slate-700"
              >
                <span>GitHub</span>
                <span className="text-[10px]">↗</span>
              </a>
              <a 
                href={userData.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-4 bg-[#0A66C2] text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition shadow-xs"
              >
                <span>LinkedIn</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>

            {/* Verified Certifications & Honors */}
            <div className="space-y-3 mb-6">
              {/* HPCL National Apprenticeship Certificate (NAC) */}
              <div className="bg-blue-500/10 dark:bg-blue-400/10 border border-blue-300/60 dark:border-blue-500/30 p-3.5 rounded-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-blue-700 dark:text-blue-300 uppercase tracking-wider">National Apprenticeship (NAC)</span>
                  <span className="text-[10px] bg-blue-500/20 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full font-bold">99.50%</span>
                </div>
                <p className="text-xs font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                  Hindustan Petroleum Corp. Ltd. (HPCL Refinery)
                </p>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                  Ministry of Skill Development & Entrepreneurship (NCVET)
                </p>
                
                {/* View Document Link */}
                <div className="mt-2.5 pt-2 border-t border-blue-200/50 dark:border-blue-800/50">
                  <a 
                    href={userData.hpclCertificate} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-700 dark:text-blue-300 hover:underline cursor-pointer"
                  >
                    <span>📄 View National Certificate (PDF)</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
              </div>

              {/* NCVT COPA Verified Marksheet */}
              <div className="bg-amber-500/10 dark:bg-amber-400/10 border border-amber-300/60 dark:border-amber-500/30 p-3.5 rounded-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-amber-700 dark:text-amber-300 uppercase tracking-wider">AITT Marks Statement</span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-800 dark:text-amber-200 px-2 py-0.5 rounded-full font-bold">398 / 400</span>
                </div>
                <p className="text-xs font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                  Computer Operator & Programming Assistant (COPA)
                </p>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                  Practical: 299/300 | Sessional: 99/100 (DGT ATS)
                </p>

                {/* View Document Link */}
                <div className="mt-2.5 pt-2 border-t border-amber-200/50 dark:border-amber-800/50">
                  <a 
                    href={userData.itiMarksheet} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-700 dark:text-amber-300 hover:underline cursor-pointer"
                  >
                    <span>📄 View Official Marksheet (PDF)</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
              </div>

              {/* B.Sc IT Academic Distinction */}
              <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 p-3.5 rounded-2xl">
                <span className="text-[10px] font-extrabold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider block">Academic Distinction</span>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5 leading-snug">
                  Ranked 1st in B.Sc. IT (Semesters 5 & 6) with 9.0+ SGPA
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-5 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
            <button 
              onClick={() => setIsContactOpen(true)} 
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-xs uppercase tracking-wider transition shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Send A Direct Message</span>
              <span>✉</span>
            </button>
            <button 
              onClick={handleDownload} 
              className="w-full py-3 border-2 border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-slate-400 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-bold rounded-2xl text-xs uppercase tracking-wider transition active:scale-95 cursor-pointer"
            >
              Download Resume (PDF)
            </button>
            
            {/* Quick Copy Email Bar */}
            <div 
              onClick={handleCopyEmail}
              className="flex items-center justify-between px-3.5 py-2 bg-slate-200/70 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 rounded-xl cursor-pointer transition text-slate-600 dark:text-slate-300"
              title="Click to copy email address"
            >
              <span className="text-[11px] font-mono select-all truncate">{userData.email}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-700 px-2 py-0.5 rounded shadow-2xs">
                {copied ? "Copied!" : "Copy"}
              </span>
            </div>
          </div>
        </aside>

        {/* RIGHT MAIN CONTENT */}
        <main className="w-full lg:w-[64%] p-6 sm:p-10 lg:p-12 space-y-12 overflow-y-auto lg:max-h-[92vh]">
          
          {/* Section 01: Summary & Quick Metrics */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">01 / Profile Overview</span>
              <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-1"></div>
            </div>
            
            <p className="text-xl sm:text-2xl text-slate-700 dark:text-slate-300 font-light leading-relaxed">
              Passionate <strong className="font-bold text-slate-900 dark:text-white">Full-Stack & Android Developer</strong> combined with enterprise IT Support experience. Specializing in modern web applications, generative AI integration using <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Node.js and Express</span>, robust mobile applications with <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Android SDK (Java/Kotlin)</span>, and systematic infrastructure troubleshooting.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 mt-6 text-center">
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-800">
                <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">1+ Yr</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mt-0.5">Enterprise Exp</p>
              </div>
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-800">
                <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">4+</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mt-0.5">Built Projects</p>
              </div>
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-800">
                <p className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">9.0+</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mt-0.5">B.Sc. IT SGPA</p>
              </div>
            </div>
          </section>

          {/* Section 02: Full-Stack Architecture Strengths */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">02 / Development Pillars</span>
              <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fullStackStrengths.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-emerald-300 dark:hover:border-emerald-500/50 transition">
                  <h4 className="text-sm font-black text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">0{idx + 1}.</span>
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 03: Projects with Live Demo Links */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">03 / Featured Projects</span>
              <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-1"></div>
            </div>

            <div className="space-y-6">
              {projects.map((proj, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 sm:p-8 rounded-3xl transition-all border ${
                    proj.isLive 
                      ? 'bg-slate-900 text-white border-slate-800 shadow-lg' 
                      : 'bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div>
                      <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${proj.isLive ? 'text-emerald-400' : 'text-slate-500 dark:text-slate-400'}`}>
                        {proj.tagline}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black tracking-tight mt-1 text-white dark:text-white">
                        {proj.title}
                      </h3>
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed my-4 ${proj.isLive ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase ${
                          proj.isLive 
                            ? 'bg-slate-800 text-slate-300 border border-slate-700' 
                            : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-200 border border-slate-200 dark:border-slate-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Buttons (Live Demo & Source Code) */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200/20 dark:border-slate-700">
                    {proj.hasCode && (
                      <a 
                        href={proj.githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-xs font-bold inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition shadow-xs"
                      >
                        <span>View Source Code</span>
                        <span>↗</span>
                      </a>
                    )}
                    {proj.hasLiveDemo && (
                      <a 
                        href={proj.demoUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-xs font-bold inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 transition"
                      >
                        <span>App Preview & Readme</span>
                        <span>🔍</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 04: Professional Experience */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">04 / Experience</span>
              <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-1"></div>
            </div>

            <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">Apprentice Trainee (IT)</h3>
                  <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase">Hindustan Petroleum Corporation Limited (HPCL)</p>
                </div>
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">Sept 2022 – Sept 2023</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <li>Delivered technical support and issue resolution across HPCL enterprise portals (Gatepass and link management systems).</li>
                <li>Troubleshooted network connectivity, TCP/IP configurations, LAN/WAN, Wi-Fi, and secure VPN connections.</li>
                <li>Resolved hardware, software, Windows OS, and Active Directory user account tickets using incident management best practices.</li>
                <li>Prepared consolidated operational documentation, Excel reporting trackers, and technical presentation decks.</li>
              </ul>
            </div>
          </section>

          {/* Section 05: Technical Stack */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">05 / Technical Stack</span>
              <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.map((group, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-extrabold uppercase text-slate-800 dark:text-slate-200 tracking-wider mb-3">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 bg-white dark:bg-slate-700 text-[11px] font-semibold text-slate-700 dark:text-slate-200 rounded-lg border border-slate-200 dark:border-slate-600 shadow-2xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 06: Education & Qualifications */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">06 / Education & Certifications</span>
              <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-1"></div>
            </div>

            <div className="space-y-3">
              {[
                { year: '2023 – 2026', title: 'Bachelor of Science in Information Technology (B.Sc. IT)', score: 'CGPA: 8.23', loc: 'Adarsh College, Badlapur (Mumbai University)' },
                { year: '2021 – 2022', title: 'NCVT: Computer Operator & Programming Assistant (COPA Certificate)', score: '90.83% Distinction', loc: 'Govt. Industrial Training Institute (ITI), Ambernath' },
                { year: '2018 – 2020', title: 'Higher Secondary Certificate (HSC Science PCMB)', score: '61.83%', loc: 'Smt. R.P.P. Junior College, Palshet' },
                { year: '2017 – 2018', title: 'Secondary School Certificate (SSC)', score: '71.60%', loc: 'New English School, Velneshwar' }
              ].map((edu, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/70 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                  <div className="mb-2 sm:mb-0">
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">{edu.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{edu.loc}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-base font-black text-emerald-600 dark:text-emerald-400 leading-tight">{edu.score}</p>
                    <p className="text-[10px] font-mono text-slate-400">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>

      {/* WORKING CONTACT MODAL */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-700 relative">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsContactOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 dark:hover:text-white text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 transition"
            >
              ✕
            </button>

            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1">Get In Touch</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Drop a message directly to Snehal Adurkar</p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">Message</label>
                <textarea 
                  name="message" 
                  rows="3" 
                  required 
                  placeholder="Hi Snehal, let's discuss an opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-emerald-500"
                ></textarea>
              </div>

              {formStatus && (
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">{formStatus}</p>
              )}

              <button 
                type="submit"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-md cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}