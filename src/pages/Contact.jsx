import { motion } from 'framer-motion';
import { Github, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const email = "sharonbiju717@gmail.com";
  const whatsappIcon = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";

  /* This link bypasses local apps and opens Gmail in a new browser tab */
  const gmailWebCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Portfolio%20Inquiry`;

  return (
    <section id="contact" className="py-24 md:py-32 px-6 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        /* MAX-WIDTH: Reduced to 3xl (768px) to match the centered, balanced design */
        className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-10 md:p-16 max-w-3xl w-full shadow-2xl text-center relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px]" />

        {/* HEADING: Scaled down from 7xl to 5xl for a professional laptop look */}
        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">
          Contact Me
        </h2>

        <div className="space-y-5 mb-10">
          {/* PHONE: Downscaled text sizes */}
          <div className="flex items-center justify-center gap-3 text-lg md:text-xl text-slate-300 font-light">
            <Phone className="text-blue-500 w-5 h-5 md:w-6 md:h-6" />
            <p>Phone: <a href="tel:6238405728" className="text-white font-medium hover:text-blue-400 transition-colors">6238405728</a></p>
          </div>

          {/* WHATSAPP */}
          <div className="flex items-center justify-center gap-3 text-lg md:text-xl text-slate-300 font-light">
            <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 md:w-6 md:h-6" />
            <p>WhatsApp: <a href="https://wa.me/916238405728" target="_blank" rel="noreferrer" className="text-white font-medium hover:text-[#25D366] transition-colors">6238405728</a></p>
          </div>
          
          {/* EMAIL */}
          <div className="flex items-center justify-center gap-3 text-lg md:text-xl text-slate-300 font-light">
            <Mail className="text-[#ef4444] w-5 h-5 md:w-6 md:h-6" />
            <p>
              Email:{" "}
              <a 
                href={gmailWebCompose}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline transition-all"
              >
                {email}
              </a>
            </p>
          </div>
        </div>

        {/* SOCIAL ICONS: Reduced icon sizes and gap to match the new scale */}
        <div className="flex justify-center gap-8 border-t border-white/5 pt-8">
          <a href="https://github.com/sharonTkuriyakose" target="_blank" rel="noreferrer" className="group">
            <Github className="w-8 h-8 md:w-10 md:h-10 text-slate-600 group-hover:text-white transition-all duration-300" />
          </a>
          
          <a href="https://wa.me/916238405728" target="_blank" rel="noreferrer" className="group">
            <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-all duration-300" />
          </a>

          <a 
            href={gmailWebCompose} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group"
          >
            <Mail className="w-8 h-8 md:w-10 md:h-10 text-[#ef4444] group-hover:scale-110 transition-all duration-300" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}