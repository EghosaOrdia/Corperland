import { media } from "../constants/media";
import { BriefcaseBusiness, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero bg-primary/1.5 relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden hero-gradient">
      <div className="first h-9 w-9 lg:h-12 lg:w-12 border-3 border-white absolute rounded-full top-22 left-1 lg:top-1/10 lg:left-1/10">
        <img src="https://corperland.ng/build-marketing/assets/goodness-testimonial-d0730ebf.webp" />
        <img
          src={media.arrowRight}
          className="absolute top-7 left-7 lg:top-10 lg:left-10 w-4 lg:w-5 rotate-40"
          alt=""
        />
      </div>
      <div className="second h-9 w-9 lg:h-12 lg:w-12 border-3 border-white absolute rounded-full top-22 right-1 lg:top-40 lg:right-30">
        <img src="https://corperland.ng/build-marketing/assets/madonna-chioma-testimonial-f282d7d4.webp" />
        <img
          src={media.arrowRight}
          className="absolute top-7 right-7 lg:top-10 lg:right-10 w-4 lg:w-5 rotate-140"
          alt=""
        />
      </div>
      <div className="fourth h-9 w-9 lg:h-12 lg:w-12 border-3 border-white absolute rounded-full top-3/10 right-5 lg:top-100 lg:right-70">
        <img
          src="https://corperland.ng/build-marketing/assets/eleojo-victor-testimonial-a0d1f5ab.webp"
          alt=""
        />
        <img
          src={media.arrowRight}
          className="absolute -top-2 right-9 lg:-top-1 lg:right-12 w-4 lg:w-5 rotate-210"
          alt=""
        />
      </div>
      <div className="third h-9 w-9 lg:h-12 lg:w-12 border-3 border-white absolute rounded-full top-3/11 left-5 lg:top-120 lg:left-70">
        <img
          src="https://corperland.ng/build-marketing/assets/landing-hero-image-011b1365.webp"
          alt=""
          className="h-full mx-auto rounded-full"
        />
        <img
          src={media.arrowRight}
          className="absolute -top-2 left-9 lg:-top-1 lg:left-12 w-4 lg:w-5 -rotate-30 lg:-rotate-34"
          alt=""
        />
      </div>
      <div className="max-w-7xl mx-auto px-8 md:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-on-surface mb-4 leading-tight">
            Everything You Need for Your{" "}
            <span className="text-primary">NYSC</span> Service Year
          </h1>
          <p className="font-inter text-lg text-on-surface-variant mb-8 max-w-2xl mx-auto">
            From camp registration to relocation, PPA placement to your first
            job — we’ve got you covered throughout your journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all">
              Get Help Now
            </button>
            <button className="bg-surface-container text-primary border border-primary/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-all">
              Join Free Community
            </button>
          </div>
          <div className="flex flex-col items-center gap-2 mb-16">
            <div className="flex items-center gap-1">
              <Star className="stroke-0 fill-yellow-500" />
              <Star className="stroke-0 fill-yellow-500" />
              <Star className="stroke-0 fill-yellow-500" />
              <Star className="stroke-0 fill-yellow-500" />
              <Star className="stroke-0 fill-yellow-500" />
              <span className="font-bold ml-2">5.0</span>
            </div>
            <p className="text-xs font-inter text-on-surface-variant uppercase tracking-wider">
              from 80+ reviews
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <div className="glass-card bg-[#8ab28c] rounded-4xl overflow-hidden h-70 group">
            <img
              alt="Happy Corps Member"
              className="transition-transform duration-500 h-full mx-auto group-hover:scale-105"
              src={media.corper}
            />
          </div>
          <div className="bg-primary text-on-primary rounded-4xl p-8 flex flex-col justify-center text-left shadow-xl">
            <p className="text-4xl font-extrabold mb-2">10,000+</p>
            <p className="text-sm font-inter opacity-90 uppercase leading-relaxed">
              Corps Members Helped Across Nigeria
            </p>
          </div>
          <div className="glass-card rounded-4xl p-8 flex flex-col justify-center text-left border-primary/10">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <BriefcaseBusiness size={24} />
            </div>
            <p className="text-4xl font-extrabold text-on-surface mb-2">500+</p>
            <p className="text-sm font-inter text-on-surface-variant uppercase">
              PPA &amp; Graduate Job Opportunities
            </p>
          </div>
          <div className="bg-secondary-container text-on-secondary-container rounded-4xl p-8 flex flex-col justify-center text-left shadow-lg">
            <p className="text-5xl font-extrabold mb-2">36</p>
            <p className="text-sm font-inter opacity-80 uppercase font-bold">
              States Covered with Reliable Services
            </p>
            <div className="mt-6 flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-secondary-container bg-surface flex items-center justify-center text-[10px] font-bold">
                LG
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-secondary-container bg-surface flex items-center justify-center text-[10px] font-bold">
                AB
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-secondary-container bg-surface flex items-center justify-center text-[10px] font-bold">
                PH
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-secondary-container bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold">
                +33
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
