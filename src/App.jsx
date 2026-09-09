import React, { useState } from 'react';
import profileImg from '/public/profile.jpg';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const userData = {
    name: "Snehal Adurkar",
    fullName: "Snehal Jaydas Adurkar",
    headline: "Full-Stack Web & Android Developer",
    subheadline: "IT Support & Systems Specialist",
    email: "snehaladurkarbca@gmail.com",
    phone: "+91-8378040790",
    location: "Badlapur, Maharashtra",
    github: "https://github.com/SAdurkar",
    linkedin: "https://www.linkedin.com/search/results/all/?keywords=Snehal%20Jaydas%20Adurkar",
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
    setFormStatus('Opening email client...');
    
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
      items: ["MySQL", "Firebase", "MS SQL Server", "Git / GitHub", "Azure DevOps"]
    },
    {
      category: "IT Support & Infrastructure",
      items: ["Service Desk Operations", "Active Directory", "Windows OS Troubleshooting", "TCP/IP & VPN", "MS Office 365"]
    }
  ];

  const fullStackStrengths = [
    {
      title: "Client-Side UI/UX",
      desc: "Creating clean, responsive, and intuitive web interfaces tailored for smooth desktop and mobile interactions."
    },
    {
      title: "Backend & RESTful Services",
      desc: "Architecting modular Express.js servers, integrating third-party APIs (Gemini AI), and schema-driven database models."
    },
    {
      title: "Native Android Engineering",
      desc: "Developing native Android applications using Kotlin/Java, GPS location tracking, and Firebase Realtime Database."
    },
    {
      title: "Enterprise Issue Resolution",
      desc: "Diagnosing networking, operating system, and portal-level bottlenecks with systematic troubleshooting."
    }
  ];

  const projects = [
    {
      title: "AI-Powered Resume Analyzer & Cover Letter Generator",
      tagline: "Full-Stack AI Web Application",
      description: "Full-stack web application leveraging Node.js, Express, and Google Gemini AI to intelligently evaluate resumes against specific job descriptions. Features dynamic ATS matching metrics visualized using Chart.js and automatic customized cover letter generation.",
      tech: ["Node.js", "Express.js", "Gemini AI", "Chart.js", "PDF-Extraction"],
      hasCode: true,
      githubUrl: "https://github.com/SAdurkar/Resume-Analyzer"
    },
    {
      title: "SurakshaPlus – Women's Safety App",
      tagline: "Android Mobile Application",
      description: "Comprehensive women safety mobile application engineered in Android Studio with Kotlin/Java. Features instantaneous real-time GPS location tracking, trusted contact syncing, and an SOS panic button triggering immediate emergency alerts.",
      tech: ["Android Studio", "Kotlin", "Java", "Firebase", "SQL"],
      hasCode: true,
      githubUrl: "https://github.com/SAdurkar/SurakshaPlus"
    },
    {
      title: "Maintenance Request Portal",
      tagline: "Enterprise Web Portal",
      description: "Responsive intranet request management system featuring clean UI workflows, dynamic client validation using jQuery, and a relational MySQL backend for logging and resolving equipment issues.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "MySQL"],
      hasCode: false,
      githubUrl: null
    },
    {
      title: "Safety Volunteers Activity Log",
      tagline: "Operations Management Web Tool",
      description: "Dedicated operational dashboard enabling field safety volunteers to track, log, and audit safety observations with authenticated data storage.",
      tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      hasCode: false,
      githubUrl: null
    }
  ];

  return (
    <div className="bg-slate-100 text-slate-800 min-h-screen p-3 sm:p-6 lg:p-10 flex justify-center items-center selection:bg-emerald-200">
      
      {/* Outer Main Container */}
      <div className="bg-white w-full max-w-7xl rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden flex flex-col lg:flex-row">
        
        {/* LEFT SIDEBAR */}
        <aside className="w-full lg:w-[35%] bg-slate-50 p-6 sm:p-8 lg:p-9 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between">
          <div>
            {/* Profile Photo */}
            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-sm border-4 border-white bg-slate-200 mb-6 group relative">
              <img 
                src={profileImg} 
                alt={userData.name} 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
              />
            </div>

            {/* Name & Headline */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {userData.name}
            </h1>
            <p className="text-emerald-700 font-bold text-xs uppercase tracking-wider mt-1 mb-1 font-mono">
              {userData.headline}
            </p>
            <p className="text-slate-500 text-xs font-medium mb-5">
              {userData.subheadline}
            </p>

            {/* Location & Contact Pills */}
            <div className="flex flex-wrap gap-2 text-xs text-slate-600 mb-6">
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs font-medium">
                📍 {userData.location}
              </span>
              <a 
                href={`tel:${userData.phone}`} 
                className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs font-medium hover:border-emerald-500 hover:text-emerald-700 transition"
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
                className="flex items-center justify-center gap-1.5 py-2.5 px-4 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition shadow-2xs"
              >
                <span>GitHub</span>
                <span className="text-[10px]">↗</span>
              </a>
              <a 
                href={userData.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-4 bg-[#0A66C2] text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition shadow-2xs"
              >
                <span>LinkedIn</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>

            {/* Verified Certifications & Documents */}
            <div className="space-y-3 mb-6">
              {/* HPCL National Apprenticeship Certificate - Premium Dark Blue Card */}
              <div className="bg-slate-900 text-white border border-slate-800 p-4 rounded-2xl shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider">National Apprenticeship (NAC)</span>
                  <span className="text-[10px] bg-slate-800 text-emerald-300 border border-slate-700 px-2.5 py-0.5 rounded-full font-bold">99.50%</span>
                </div>
                <p className="text-xs font-bold text-white mt-1.5 leading-snug">
                  Hindustan Petroleum Corp. Ltd. (HPCL Refinery)
                </p>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Ministry of Skill Development & Entrepreneurship
                </p>
                
                <div className="mt-2.5 pt-2 border-t border-slate-800">
                  <a 
                    href={userData.hpclCertificate} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 hover:text-emerald-300 hover:underline cursor-pointer"
                  >
                    <span>📄 View National Certificate (PDF)</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
              </div>

              {/* ITI COPA Verified Marksheet - Clean White Card */}
              <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-amber-700 uppercase tracking-wider">ITI Marks Statement</span>
                  <span className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-full font-bold">398 / 400</span>
                </div>
                <p className="text-xs font-bold text-slate-900 mt-1.5 leading-snug">
                  Computer Operator & Programming Assistant (COPA)
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Practical: 299/300 | Sessional: 99/100 (DGT ATS)
                </p>

                <div className="mt-2.5 pt-2 border-t border-slate-100">
                  <a 
                    href={userData.itiMarksheet} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-700 hover:text-amber-900 hover:underline cursor-pointer"
                  >
                    <span>📄 View Official Marksheet (PDF)</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
              </div>

              {/* B.Sc IT Academic Distinction */}
              <div className="bg-emerald-50/70 border border-emerald-200 p-3.5 rounded-2xl">
                <span className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider block">Academic Distinction</span>
                <p className="text-xs font-semibold text-slate-800 mt-0.5 leading-snug">
                  Ranked 1st in B.Sc. IT (Semesters 5 & 6) with 9.0+ SGPA
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-5 border-t border-slate-200 space-y-2.5">
            <button 
              onClick={() => setIsContactOpen(true)} 
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-xs uppercase tracking-wider transition shadow-sm active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Send A Direct Message</span>
              <span>✉</span>
            </button>
            <button 
              onClick={handleDownload} 
              className="w-full py-3 border border-slate-300 hover:border-slate-800 bg-white text-slate-800 hover:bg-slate-50 font-bold rounded-2xl text-xs uppercase tracking-wider transition active:scale-95 cursor-pointer shadow-2xs"
            >
              Download Resume (PDF)
            </button>
            
            <div 
              onClick={handleCopyEmail}
              className="flex items-center justify-between px-3.5 py-2 bg-slate-200/70 hover:bg-slate-200 rounded-xl cursor-pointer transition text-slate-600"
              title="Click to copy email address"
            >
              <span className="text-[11px] font-mono select-all truncate">{userData.email}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-white px-2 py-0.5 rounded shadow-2xs">
                {copied ? "Copied!" : "Copy"}
              </span>
            </div>
          </div>
        </aside>

        {/* RIGHT MAIN CONTENT (Clean, Light & Readable) */}
        <main className="w-full lg:w-[65%] p-6 sm:p-10 lg:p-12 space-y-12 overflow-y-auto lg:max-h-[92vh] bg-white">
          
          {/* Section 01: Summary & Quick Metrics */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">01 / Profile Overview</span>
              <div className="h-[1px] bg-slate-200 flex-1"></div>
            </div>
            
            <p className="text-xl sm:text-2xl text-slate-700 font-light leading-relaxed">
              Passionate <strong className="font-bold text-slate-900">Full-Stack & Android Developer</strong> combined with enterprise IT Support experience. Specializing in modern web applications, generative AI integration using <span className="text-emerald-700 font-semibold">Node.js and Express</span>, robust mobile applications with <span className="text-emerald-700 font-semibold">Android SDK (Java/Kotlin)</span>, and systematic infrastructure troubleshooting.
            </p>

            <div className="grid grid-cols-3 gap-3 mt-6 text-center">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/90 shadow-2xs">
                <p className="text-xl sm:text-2xl font-black text-slate-900">1+ Yr</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Enterprise Exp</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/90 shadow-2xs">
                <p className="text-xl sm:text-2xl font-black text-slate-900">4+</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Built Projects</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/90 shadow-2xs">
                <p className="text-xl sm:text-2xl font-black text-emerald-700">9.0+</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">B.Sc. IT SGPA</p>
              </div>
            </div>
          </section>

          {/* Section 02: Full-Stack Architecture Strengths */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">02 / Development Pillars</span>
              <div className="h-[1px] bg-slate-200 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fullStackStrengths.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 transition shadow-2xs">
                  <h4 className="text-sm font-black text-slate-900 mb-1.5 flex items-center gap-2">
                    <span className="text-emerald-700 font-mono text-xs">0{idx + 1}.</span>
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 03: Projects */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">03 / Featured Projects</span>
              <div className="h-[1px] bg-slate-200 flex-1"></div>
            </div>

            <div className="space-y-6">
              {projects.map((proj, idx) => (
                <div 
                  key={idx} 
                  className="p-6 sm:p-7 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-2xs hover:shadow-sm transition"
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-emerald-700">
                        {proj.tagline}
                      </span>
                      <h3 className="text-lg sm:text-xl font-black tracking-tight mt-0.5 text-slate-900">
                        {proj.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed my-3.5 text-slate-600">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase bg-white text-slate-700 border border-slate-200 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {proj.hasCode && (
                    <div className="pt-3 border-t border-slate-200">
                      <a 
                        href={proj.githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-xs font-bold inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white transition shadow-2xs"
                      >
                        <span>View Source Code</span>
                        <span>↗</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section 04: Professional Experience */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">04 / Experience</span>
              <div className="h-[1px] bg-slate-200 flex-1"></div>
            </div>

            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900">Apprentice Trainee (IT)</h3>
                  <p className="text-xs font-bold text-emerald-700 uppercase">Hindustan Petroleum Corporation Limited (HPCL)</p>
                </div>
                <span className="text-xs font-mono font-semibold text-slate-500">Sept 2022 – Sept 2023</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
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
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">05 / Technical Stack</span>
              <div className="h-[1px] bg-slate-200 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.map((group, idx) => (
                <div key={idx} className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200">
                  <h4 className="text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-3">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 bg-white text-[11px] font-semibold text-slate-700 rounded-lg border border-slate-200 shadow-2xs">
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
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">06 / Education & Certifications</span>
              <div className="h-[1px] bg-slate-200 flex-1"></div>
            </div>

            <div className="space-y-3">
              {[
                { year: '2023 – 2026', title: 'Bachelor of Science in Information Technology (B.Sc. IT)', score: 'CGPA: 8.23', loc: 'Adarsh College, Badlapur (Mumbai University)' },
                { year: '2021 – 2022', title: 'NCVT: Computer Operator & Programming Assistant (COPA Certificate)', score: '90.83% Distinction', loc: 'Govt. Industrial Training Institute (ITI), Ambernath' },
                { year: '2018 – 2020', title: 'Higher Secondary Certificate (HSC Science PCMB)', score: '61.83%', loc: 'Smt. R.P.P. Junior College, Palshet' },
                { year: '2017 – 2018', title: 'Secondary School Certificate (SSC)', score: '71.60%', loc: 'New English School, Velneshwar' }
              ].map((edu, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 transition shadow-2xs">
                  <div className="mb-2 sm:mb-0">
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-900">{edu.title}</h4>
                    <p className="text-xs text-slate-500 font-medium">{edu.loc}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-base font-black text-slate-900 leading-tight">{edu.score}</p>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            
            <button 
              onClick={() => setIsContactOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition"
            >
              ✕
            </button>

            <h3 className="text-xl font-black text-slate-900 mb-1">Get In Touch</h3>
            <p className="text-xs text-slate-500 mb-6">Send a direct inquiry or opportunity message</p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-sm text-slate-900 focus:bg-white focus:outline-emerald-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-sm text-slate-900 focus:bg-white focus:outline-emerald-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">Message</label>
                <textarea 
                  name="message" 
                  rows="3" 
                  required 
                  placeholder="Hi Snehal, let's connect regarding an opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-sm text-slate-900 focus:bg-white focus:outline-emerald-600"
                ></textarea>
              </div>

              {formStatus && (
                <p className="text-xs text-emerald-700 font-bold">{formStatus}</p>
              )}

              <button 
                type="submit"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-sm cursor-pointer"
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