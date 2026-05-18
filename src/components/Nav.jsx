import { Download } from "lucide-react";
import { media } from "../constants/media";

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-5 gap-8 md:px-6 h-20">
        <div className="font-extrabold flex items-center gap-2">
          <img src={media.logo} alt="" className="w-12" />
          Corperland
        </div>
        <div className="grow hidden md:flex items-center gap-8">
          <a
            className="font-inter text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Services
          </a>
          <a
            className="font-inter text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Job Board
          </a>
          <a
            className="font-inter text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Information Hub
          </a>
          <a
            className="font-inter text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            About Us
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block font-inter text-primary font-semibold hover:opacity-80 transition-opacity">
            Login
          </button>
          <button className="flex items-center gap-2 bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-semibold hover:scale-95 transition-all duration-200">
            Download
            <Download size={17} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
