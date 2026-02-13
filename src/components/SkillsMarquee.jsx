import { skills } from '../data/skills';

export default function SkillsMarquee() {
  // Flattening the skills data to get all icons in one list
  const allSkills = skills.flatMap(group => group.items);

  return (
    <div className="py-10 overflow-hidden bg-transparent relative">
      {/* Container for the sliding effect */}
      <div className="flex whitespace-nowrap animate-marquee group">
        {/* We double the list to create a seamless loop */}
        {[...allSkills, ...allSkills].map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center mx-12 transition-transform duration-300 group-hover:pause"
          >
            <img 
              src={skill.icon} 
              alt={skill.name} 
              className="w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
            />
            <span className="text-slate-500 text-xs font-bold mt-2 uppercase tracking-widest uppercase">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}