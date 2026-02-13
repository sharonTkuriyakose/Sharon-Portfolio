import { motion } from 'framer-motion';
import { Github, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const email = "sharonbiju717@gmail.com";
  const whatsappIcon = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";

  /* This link bypasses local apps and opens Gmail in a new browser tab */
  const gmailWebCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Portfolio%20Inquiry`;

  return (
    <section id="contact" className="py-40 px-6 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#0a0a0a] border border-white/5 rounded-[3rem] p-12 md:p-24 max-w-4xl w-full shadow-3xl text-center"
      >
        <h2 className="text-5xl md:text-7xl font-black text-white mb-10 uppercase tracking-tighter">
          Contact Me
        </h2>

        <div className="space-y-6 mb-12">
          {/* Phone Link: Stays as tel: for mobile dialing */}
          <div className="flex items-center justify-center gap-4 text-xl md:text-3xl text-slate-300 font-light">
            <Phone className="text-blue-500 w-6 h-6 md:w-8 md:h-8" />
            <p>Phone: <a href="tel:6238405728" className="text-white font-medium hover:text-blue-400 transition-colors">6238405728</a></p>
          </div>

          {/* WhatsApp Link: Opens web or app chat */}
          <div className="flex items-center justify-center gap-4 text-xl md:text-3xl text-slate-300 font-light">
            <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 md:w-8 md:h-8" />
            <p>WhatsApp: <a href="https://wa.me/916238405728" target="_blank" rel="noreferrer" className="text-white font-medium hover:text-[#25D366] transition-colors">6238405728</a></p>
          </div>
          
          {/* Email Link: Now set to Gmail Web for guaranteed success */}
          <div className="flex items-center justify-center gap-4 text-xl md:text-3xl text-slate-300 font-light">
            <Mail className="text-[#ef4444] w-6 h-6 md:w-8 md:h-8" />
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

        {/* Bottom Social Icons */}
        <div className="flex justify-center gap-10 border-t border-white/5 pt-10">
          <a href="https://github.com/sharonTkuriyakose" target="_blank" rel="noreferrer" className="group">
            <Github className="w-10 h-10 md:w-14 md:h-14 text-slate-600 group-hover:text-white transition-all duration-300" />
          </a>
          
          <a href="https://wa.me/916238405728" target="_blank" rel="noreferrer" className="group">
            <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10 md:w-14 md:h-14 group-hover:scale-110 transition-all duration-300" />
          </a>

          {/* Red Email Icon also set to open Gmail Web */}
          <a 
            href={gmailWebCompose} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group"
          >
            <Mail className="w-10 h-10 md:w-14 md:h-14 text-[#ef4444] group-hover:scale-110 transition-all duration-300" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}