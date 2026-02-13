import { motion } from 'framer-motion';

const skillIcons = [
  { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Tailwind", src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
];

export default function Home() {
  return (
    <div className="grid-bg min-h-screen bg-[#050505] selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          /* Adjusted standard responsive sizes for the circle container */
          className="w-84 h-84 md:w-120 md:h-120 rounded-full border-[6px] border-blue-600/50 overflow-hidden mb-10 shadow-[0_0_50px_rgba(37,99,235,0.2)]"
        >
          <img 
            src="Sharon (2).jpeg" 
            alt="Sharon Biju"
            /* object-top: Ensures the head isn't cut off.
               Alternatively, use style={{ objectPosition: '50% 20%' }} for precise tie placement.
            */
            className="w-full h-full object-cover object-top scale-110" 
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-blue-500 mb-6 uppercase leading-tight">
            SHARON T <span className="text-blue-600">KURIYAKOSE</span>
          </h1>
          <p className="text-3xl text-slate-500 font-black uppercase tracking-[0.5em] mb-12">
            MERN Stack Developer
          </p>

          <motion.a
            href="/Sharon-CV.pdf"
            download="Sharon-CV.pdf"
            whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-blue-600/10 border-2 border-blue-600 text-white font-black uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </section>

      {/* 2. ENHANCED SKILLS MARQUEE */}
      <div className="py-24 overflow-hidden relative pause-on-hover border-y border-white/5 bg-white/[0.01]">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
        
        <div className="animate-marquee flex items-center">
          {[...skillIcons, ...skillIcons].map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center mx-16 md:mx-24 group">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={skill.src} 
                  className="w-24 h-24 md:w-32 md:h-32 relative z-10 transition-all duration-500 grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                  alt={skill.name} 
                />
              </div>
              <span className="mt-6 text-sm font-black text-slate-700 uppercase tracking-widest group-hover:text-blue-500 transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. ABOUT ME SECTION */}
      <section id="about" className="py-40 px-6 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] border border-white/5 rounded-[4rem] p-12 md:p-28 max-w-7xl w-full shadow-3xl relative overflow-hidden"
        >
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
          <h2 className="text-5xl md:text-7xl font-black text-white text-center mb-16 uppercase tracking-tighter">
            About Me
          </h2>
          <p className="text-slate-400 text-xl md:text-3xl leading-[1.6] text-center font-extralight max-w-5xl mx-auto">
            I'm a <span className="text-white font-bold">MERN Stack Developer</span> who enjoys building modern, 
            responsive web applications using React, Node.js, Express, and MongoDB. I'm passionate 
            about solving problems and turning ideas into clean, functional code. I also enjoy 
            programming in Java, Python especially for automating tasks and 
            learning new concepts. My goal is to keep improving and build user-friendly solutions 
            that make an impact.
          </p>
        </motion.div>
      </section>
    </div>
  );
}