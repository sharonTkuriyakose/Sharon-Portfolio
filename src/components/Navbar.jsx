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
    <nav className="fixed top-0 left-0 w-full z-[100] bg-black/90 backdrop-blur-xl border-b border-white/5 py-5 px-6 md:px-12 lg:px-20">
      {/* FIX: Removed 'max-w-7xl' and replaced with 'max-w-full' 
         This pushes the name to the far left and links to the far right.
      */}
      <div className="max-w-full mx-auto flex justify-between items-center">
        
        {/* Brand Name - Hugs the left side */}
        <h1 className="text-base md:text-2xl font-black text-white uppercase tracking-tighter shrink-0">
          SHARON T KURIYAKOSE
        </h1>

        {/* Desktop Links - Hugs the right side on laptops */}
        <div className="hidden md:flex items-center gap-10 lg:gap-16">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[20px] font-bold text-slate-400 hover:text-blue-500 uppercase tracking-[0.2em] transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 flex flex-col items-center py-12 gap-8 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black text-white uppercase tracking-tighter hover:text-blue-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}