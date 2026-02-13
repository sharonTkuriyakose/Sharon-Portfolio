import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass-card p-6 rounded-3xl group cursor-pointer shadow-sm hover:shadow-2xl transition-all"
    >
      <div className="h-48 bg-slate-200 rounded-2xl mb-6 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 opacity-20 group-hover:opacity-40 transition-opacity" />
      </div>
      <h3 className="text-2xl font-black text-slate-900 mb-2">{project.title}</h3>
      <p className="text-slate-500 mb-4 line-clamp-2">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded uppercase tracking-wider">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}