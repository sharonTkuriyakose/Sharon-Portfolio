import { skills } from '../data/skills';

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-500 uppercase tracking-widest">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((group) => (
          <div key={group.category} className="glass-card">
            <h3 className="text-blue-400 font-bold mb-6 text-sm uppercase tracking-wider border-b border-white/10 pb-2">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {group.items.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2 p-2 hover:bg-white/5 rounded-lg transition">
                  <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                  <span className="text-xs font-medium text-slate-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}