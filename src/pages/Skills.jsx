import { motion } from 'framer-motion';
import { skills } from '../data/skills'; 

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      {/* BALANCED HEADING: Reduced from 7xl to match the Home/About sections */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-blue-600 mb-16 md:mb-24 uppercase tracking-tighter">
        Technical Stack
      </h2>
      
      {/* CONSTRAINED GRID: Reduced from 7xl to 5xl to prevent the grid from stretching too wide */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {skills.map((group, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -15, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            /* Tighter padding to match the new scale */
            className="content-box !p-8 md:!p-10 flex flex-col items-center cursor-pointer rounded-[2.5rem]" 
          >
            {/* Category Header: Reduced font and tracking for better readability */}
            <h3 className="text-blue-500 font-black text-lg md:text-xl uppercase tracking-[0.3em] mb-8 text-center w-full border-b border-white/10 pb-5">
              {group.category}
            </h3>
            
            <div className="grid grid-cols-2 gap-8 w-full">
              {group.items.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-3 group">
                  <div className="relative">
                    {/* Background glow behind icons */}
                    <div className="absolute inset-0 bg-blue-500/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* SCALED DOWN ICONS: Reduced from 24 to 20 for a balanced look */}
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 relative z-10 transition-all duration-700 grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]" 
                    />
                  </div>
                  
                  {/* Smaller label text */}
                  <span className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors text-center">
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