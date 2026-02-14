import { motion } from 'framer-motion';

const myProjects = [
  { 
    title: "CyberSecure-Hub", 
    desc: "A MERN stack platform for encrypted note storage and secure file monitoring.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    link: "https://your-live-link.com" 
  },
  { 
    title: "Resume Analyzer", 
    desc: "AI-powered tool detecting skill gaps and providing personalized learning roadmaps.",
    image: "https://www.shutterstock.com/image-photo/hr-professional-analyzing-digital-resume-260nw-2653317133.jpg",
    link: "http://resume-analyzer-three-inky.vercel.app/"
  },
  { 
    title: "CivicFlow", 
    desc: "A full stack platform for developer collaboration featuring real-time map integration.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    link: "https://your-github-link.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 px-6">
      {/* BALANCED HEADING: Scaled down from 6xl to match other sections */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-blue-600 mb-16 md:mb-24 uppercase tracking-tighter">
        Projects
      </h2>
      
      {/* CONSTRAINED GRID: Reduced from 1400px to 5xl (approx 1024px) for better laptop alignment */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {myProjects.map((proj, i) => (
          <motion.a 
            key={i}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -15, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            /* Smaller radius and tightened aspect ratio for standard scale */
            className="content-box !p-0 aspect-[4/5] md:aspect-[3/4] group cursor-pointer relative overflow-hidden rounded-[2rem] block border border-white/5"
          >
            {/* Background Image */}
            <img 
              src={proj.image} 
              alt={proj.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-100" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent z-10" />

            {/* TEXT CONTENT: Downscaled font sizes to prevent page overflow */}
            <div className="relative z-20 h-full w-full flex flex-col justify-end p-8 md:p-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white uppercase leading-tight mb-3">
                {proj.title}
              </h3>
              
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                {proj.desc}
              </p>
              
              {/* Animated Hover Line */}
              <div className="flex items-center gap-3 mt-6">
                <div className="w-8 h-1 bg-blue-600 group-hover:w-16 transition-all duration-500 shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Project
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}