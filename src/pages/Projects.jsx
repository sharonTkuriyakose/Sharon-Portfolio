import { motion } from 'framer-motion';

const myProjects = [
  { 
    title: "CyberHub", 
    desc: "A cybersecurity platform for threat detection and real-time monitoring.",
    // Replace these URLs with the specific Google/External image links you want
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    link: "https://your-live-link.com" 
  },
  { 
    title: "Resume Analyzer", 
    desc: "AI-powered tool detecting skill gaps and providing personalized learning roadmaps.",
    image: "https://www.shutterstock.com/image-photo/hr-professional-analyzing-digital-resume-260nw-2653317133.jpg",
    link: "https://your-github-link.com"
  },
  { 
    title: "Devflow", 
    desc: "A full stack platform for fetching project solutions and developer collaboration.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    link: "https://your-github-link.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-40 px-6">
      <h2 className="text-6xl md:text-6xl font-black text-center text-blue-600 mb-32 uppercase tracking-tighter">
        Projects
      </h2>
      
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-16">
        {myProjects.map((proj, i) => (
          /* Using an <a> tag to make the entire card a clickable link */
          <motion.a 
            key={i}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -20, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="content-box !p-0 aspect-[3/4] group cursor-pointer relative overflow-hidden rounded-[3rem] block"
          >
            {/* Background Image - Fetched from external URL */}
            <img 
              src={proj.image} 
              alt={proj.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" 
            />
            
            {/* Dark Gradient Scrim for Text Clarity */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10" />

            {/* Text Content Layer */}
            <div className="relative z-20 h-full w-full flex flex-col justify-end p-12 md:p-16">
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase leading-none mb-6 drop-shadow-2xl">
                {proj.title}
              </h3>
              
              <p className="text-slate-200 text-lg md:text-2xl leading-relaxed font-light drop-shadow-xl">
                {proj.desc}
              </p>
              
              {/* Visual "View Project" prompt that appears on hover */}
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-1 bg-blue-600 group-hover:w-24 transition-all duration-500 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                 
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}