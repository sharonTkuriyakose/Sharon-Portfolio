import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-black/90 backdrop-blur-xl border-b border-white/5 py-4 px-6 md:px-10 lg:px-12">
      {/* FIX: Changed 'max-w-6xl' to 'max-w-full' to attach items to the corners. 
        'mx-0' ensures it doesn't try to center itself.
      */}
      <div className="max-w-full mx-0 flex justify-between items-center w-full">
        
        {/* Brand Name - Attached to the far left corner */}
        <h1 className="text-xs md:text-sm lg:text-base font-black text-white uppercase tracking-tighter shrink-0">
          SHARON T KURIYAKOSE
        </h1>

        {/* Desktop Links - Attached to the far right corner */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-bold text-slate-400 hover:text-blue-500 uppercase tracking-[0.2em] transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-white p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 flex flex-col items-center py-10 gap-8 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-xl font-black text-white uppercase tracking-tighter hover:text-blue-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}