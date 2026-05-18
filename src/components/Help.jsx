import {
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
  Notebook,
} from "lucide-react";

const Help = () => {
  return (
    <section className="py-32 max-w-7xl mx-auto px-8 md:px-16">
      <h2 className="text-3xl font-extrabold text-center mb-8">
        What Do You Need Help With Today?
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 group">
          <div className="flex justify-between items-center">
            <button>
              <Notebook className="text-primary" />
            </button>

            <button className="group-hover:rotate-45 transition-all duration-300">
              <ArrowUpRight className="text-primary" />
            </button>
          </div>
          <h3 className="font-semibold text-xl mb-2 mt-16">
            NERD Registration
          </h3>
          <p className="text-on-surface-variant">
            Avoid cyber café errors. Get it done properly by experts who
            understand the system.
          </p>
        </div>
        <div className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 group border-primary/20">
          <div className="flex justify-between items-center">
            <button>
              <MapPin className="text-primary" />
            </button>

            <button className="group-hover:rotate-45 transition-all duration-300">
              <ArrowUpRight className="text-primary" />
            </button>
          </div>

          <h3 className="font-semibold text-xl mb-2 mt-16">
            Relocation Support
          </h3>
          <p className="text-on-surface-variant">
            Navigate relocation safely without scams. We provide verified
            consultants for your peace of mind.
          </p>
        </div>
        <div className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 group">
          <div className="flex justify-between items-center">
            <button>
              <BriefcaseBusiness className="text-primary" />
            </button>

            <button className="group-hover:rotate-45 transition-all duration-300">
              <ArrowUpRight className="text-primary" />
            </button>
          </div>

          <h3 className="font-semibold text-xl mb-2 mt-16">PPA &amp; Jobs</h3>
          <p className="text-on-surface-variant">
            Access verified opportunities. Secure PPAs and graduate roles that
            value your skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Help;
