import { Calendar1, Check, MapPin, X } from "lucide-react";

const Relocation = () => {
  return (
    <section className="py-32 max-w-7xl mx-auto px-8 md:px-16">
      <div className="grid md:grid-cols-2 gap-32 items-center">
        <div className="order-2 md:order-1">
          <div className="relative">
            <div className="glass-card p-8 rounded-3xl shadow-xl max-w-sm ml-auto mr-12 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                  <Calendar1 />
                </div>
                <div>
                  <p className="font-bold">Consultation Booked</p>
                  <p className="text-xs opacity-60">Confirmed • 5m ago</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="opacity-60">Name</span>
                  <span className="font-semibold">Chioma Nwosu A.</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-60">Target State</span>
                  <span className="font-semibold flex items-center gap-1">
                    <MapPin size={15} className="text-primary" />
                    Lagos
                  </span>
                </div>
                <div className="flex justify-between border-t border-outline-variant pt-3">
                  <span className="font-bold">Status</span>
                  <span className="text-primary font-bold">Confirmed</span>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary-container/40 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full font-inter mb-4 inline-block">
            Most Popular
          </span>
          <h2 className="font-bold text-3xl mb-4">
            Navigating NYSC Relocation? Avoid Costly Mistakes.
          </h2>
          <p className="text-lg text-on-surface-variant mb-8">
            Relocation can be confusing and risky. We provide structured
            guidance and connect you with verified consultants so you avoid
            scams and misinformation.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-error/5 border border-error/20 rounded-2xl">
              <p className="text-error font-bold mb-3 text-sm">
                Without Guidance
              </p>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2 text-on-surface-variant">
                  <X size={15} className="text-error" /> Fake WhatsApp agents
                </li>
                <li className="flex items-center gap-2 text-on-surface-variant">
                  <X size={15} className="text-error" /> Lost deposits
                </li>
                <li className="flex items-center gap-2 text-on-surface-variant">
                  <X size={15} className="text-error" /> Misinformation
                </li>
              </ul>
            </div>
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl">
              <p className="text-primary font-bold mb-3 text-sm">
                With Corperland
              </p>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2 text-on-surface-variant">
                  <Check size={15} className="text-primary" /> Verified contacts
                </li>
                <li className="flex items-center gap-2 text-on-surface-variant">
                  <Check size={15} className="text-primary" /> Transparent
                  process
                </li>
                <li className="flex items-center gap-2 text-on-surface-variant">
                  <Check size={15} className="text-primary" /> Clear
                  expectations
                </li>
              </ul>
            </div>
          </div>
          <button className="bg-primary text-on-primary px-10 py-4 rounded-4xl font-bold hover:bg-primary/90 transition-all">
            Get Relocation Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default Relocation;
