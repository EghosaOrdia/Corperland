import { Globe2, Link2, Share2 } from "lucide-react";
import { media } from "../constants/media";

const Footer = () => {
  return (
    <footer className="bg-secondary text-on-secondary py-8 border-t border-on-secondary/10">
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div className="font-bold text-on-secondary mb-2 flex items-center gap-2">
            <img src={media.logo} alt="" className="w-12" />
            Corperland
          </div>
          <p className="text-sm opacity-60">
            © 2026 Corperland Ltd. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <a
            className="text-on-secondary/80 hover:text-on-secondary transition-opacity"
            href="#"
          >
            Services
          </a>
          <a
            className="text-on-secondary/80 hover:text-on-secondary transition-opacity"
            href="#"
          >
            Job Board
          </a>
          <a
            className="text-on-secondary/80 hover:text-on-secondary transition-opacity"
            href="#"
          >
            Information Hub
          </a>
          <a
            className="text-on-secondary/80 hover:text-on-secondary transition-opacity"
            href="#"
          >
            About Us
          </a>
          <a
            className="text-on-secondary/80 hover:text-on-secondary transition-opacity"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
        <div className="flex gap-4">
          <a
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            href="#"
          >
            <Share2 />
          </a>
          <a
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            href="#"
          >
            <Globe2 />
          </a>
          <a
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            href="#"
          >
            <Link2 />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
