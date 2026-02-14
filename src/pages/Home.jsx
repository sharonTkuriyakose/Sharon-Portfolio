import { motion } from 'framer-motion';
/* 1. IMPORT METHOD: This ensures Vite correctly maps the image path during hosting */
import profileImg from '../assets/profile.jpeg'; 

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
    <div className="grid-bg min-h-screen bg-[#050505] selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full border-[5px] border-blue-600/50 overflow-hidden mb-6 shadow-[0_0_40px_rgba(37,99,235,0.15)]"
          >
            <img 
              /* 2. DYNAMIC SRC: Uses the imported variable instead of a string path */
              src={profileImg} 
              alt="Sharon T Kuriyakose"
              className="w-full h-full object-cover object-top scale-110" 
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center w-full"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-blue-500 mb-3 uppercase leading-[1.1]">
              SHARON T <span className="text-blue-600">KURIYAKOSE</span>
            </h1>
            
            <p className="text-base sm:text-xl text-slate-500 font-black uppercase tracking-[0.2em] md:tracking-[0.4em] mb-8">
              Full Stack Developer
            </p>

            <motion.a
              href="/Sharon-CV.pdf"
              download="Sharon-CV.pdf"
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 md:px-9 md:py-4 bg-blue-600/10 border-2 border-blue-600 text-white text-sm font-black uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.2)]"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* 2. ENHANCED SKILLS MARQUEE */}
      <div className="py-12 md:py-20 overflow-hidden relative pause-on-hover border-y border-white/5 bg-white/[0.01]">
        <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
        
        <div className="animate-marquee flex items-center">
          {[...skillIcons, ...skillIcons].map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center mx-8 md:mx-16 group">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={skill.src} 
                  className="w-12 h-12 md:w-20 md:h-20 relative z-10 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110" 
                  alt={skill.name} 
                />
              </div>
              <span className="mt-3 text-[10px] md:text-xs font-black text-slate-700 uppercase tracking-widest group-hover:text-blue-500 transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. ABOUT ME SECTION */}
      <section id="about" className="py-20 md:py-28 px-6 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 md:p-16 max-w-5xl w-full shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -bottom-40 -right-40 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[90px]" />
          
          <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-8 uppercase tracking-tighter">
            About Me
          </h2>
          
          <div className="text-slate-400 text-base md:text-xl leading-relaxed space-y-6 font-extralight max-w-3xl mx-auto text-center">
            <p>
               <span className="text-white font-bold">Passionate Full Stack Developer</span> with a knack for 
              building seamless, end-to-end digital solutions. My expertise lies in architecting scalable web 
              applications using <span className="text-white font-bold">React</span>, <span className="text-white font-bold">Node.js</span>, 
              and <span className="text-white font-bold">MongoDB</span>, ensuring both high performance and 
              an intuitive user experience.
            </p>
            
            <p>
              I also enjoy programming in <span className="text-white font-bold">Java</span> and <span className="text-white font-bold">Python</span>, 
              which I often utilize to build efficient automation tools and data-driven systems. Driven by the challenge of 
              turning ideas into clean, functional code, I am constantly learning and evolving to build technology that makes a meaningful impact.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}