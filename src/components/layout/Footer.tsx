import { Link } from 'react-router-dom';

// socialLinks intentionally removed — icons are rendered inline in navbar/mobile areas

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#d4af37] mb-3">KURA FILMS</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium Cinematic Production Company from Ethiopia
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-[#d4af37] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#d4af37] transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-[#d4af37] transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-[#d4af37] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Film Production</li>
              <li>Documentary</li>
              <li>Commercial</li>
              <li>Music Videos</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Addis Ababa, Ethiopia</li>
              <li>info@kurafilms.com</li>
              <li>+251 11 123 4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-slate-500 text-sm space-y-2">
          <p>&copy; {new Date().getFullYear()} Kura Films. All rights reserved. Crafted with passion in Ethiopia.</p>
          <p>Developed by Yanol Tech</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
