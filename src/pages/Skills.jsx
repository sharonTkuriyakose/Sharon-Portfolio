import { motion } from 'framer-motion';
import { skills } from '../data/skills'; 

export default function Skills() {
  return (
    <section id="skills" className="py-40 px-6">
      <h2 className="text-6xl md:text-7xl font-black text-center text-blue-600 mb-32 uppercase tracking-tighter">
        Technical Stack
      </h2>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20">
        {skills.map((group, i) => (
          <motion.div 
            key={i}
            /* 1. Added Hover Effect to match Projects section */
            whileHover={{ y: -20, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            
            /* Existing entrance animations */
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            /* Added cursor-pointer to signal that the box is interactive */
            className="content-box !p-10 md:!p-12 flex flex-col items-center cursor-pointer" 
          >
            {/* Category Header */}
            <h3 className="text-blue-500 font-black text-xl md:text-2xl uppercase tracking-[0.5em] mb-10 text-center w-full border-b border-white/10 pb-6">
              {group.category}
            </h3>
            
            <div className="grid grid-cols-2 gap-10 w-full">
              {group.items.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-4 group">
                  <div className="relative">
                    {/* Background glow behind icons */}
                    <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-20 h-20 md:w-24 md:h-24 relative z-10 transition-all duration-700 grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]" 
                    />
                  </div>
                  
                  <span className="text-sm md:text-base font-black text-slate-500 uppercase tracking-[0.3em] group-hover:text-white transition-colors text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}