import { CheckCircle } from "lucide-react";

const Steps = () => {
  return (
    <section className="py-32 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-32 items-center">
        <div>
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-inter mb-4 inline-block">
            Recommended for Otondos
          </span>
          <h2 className=" text-3xl font-bold mb-4">
            One Registration Mistake Can Delay Your Service Year.
          </h2>
          <p className="text-lg mb-8 text-on-surface-variant">
            One wrong passport size, a misspelled name, or a missed deadline —
            and you're writing letters to Abuja while your mates are already in
            camp. Don't leave your registration to a cyber café.
          </p>
          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary text-on-primary rounded-full flex items-center justify-center shrink-0 font-bold">
                1
              </div>
              <div>
                <h4 className="font-bold">Secure Your Slot</h4>
                <p className="text-on-surface-variant text-sm">
                  Takes less than 2 minutes to start your journey.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary text-on-primary rounded-full flex items-center justify-center shrink-0 font-bold">
                2
              </div>
              <div>
                <h4 className="font-bold">Submit Your Details</h4>
                <p className="text-on-surface-variant text-sm">
                  Our error-proof form handles the complexity for you.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary text-on-primary rounded-full flex items-center justify-center shrink-0 font-bold">
                3
              </div>
              <div>
                <h4 className="font-bold">Get Your Slip</h4>
                <p className="text-on-surface-variant text-sm">
                  Delivered straight to your dashboard, perfectly processed.
                </p>
              </div>
            </div>
          </div>
          <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-4xl font-bold w-full md:w-auto hover:brightness-110">
            Fast-Track Now
          </button>
          <p className="text-xs text-on-surface-variant mt-4">
            Trusted by 2,000+ prospective corps members
          </p>
        </div>
        <div className="relative">
          <div className="glass-card bg-white/70 rounded-4xl p-6 shadow-2xl relative z-10">
            <div className="flex items-center justify-between mb-8 beorder-b border-outline-variant pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-on-secondary-container text-white rounded-full flex items-center justify-center">
                  <CheckCircle />
                </div>
                <div>
                  <p className="font-bold text-sm">
                    NERD Registration Successful
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    Sent to WhatsApp • Just now
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4 font-inter text-sm">
              <div className="flex justify-between border-b border-outline-variant/30 pb-2">
                <span className="text-on-surface-variant">Name</span>
                <span className="font-semibold">Adewale Tunde O.</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant/30 pb-2">
                <span className="text-on-surface-variant">State Code</span>
                <span className="font-semibold">LA/25A/1847</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-on-surface-variant">Batch</span>
                <span className="font-semibold">2025 Batch A</span>
              </div>
            </div>
            <div className="mt-8 bg-surface-container-highest p-4 rounded-4xl text-center">
              <p className="text-primary font-bold">Slip Generated</p>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
