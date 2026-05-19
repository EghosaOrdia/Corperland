import "animate.css";
import { jobs } from "../constants/data";
import { useEffect, useState } from "react";

const LaunchPad = () => {
  const [items, setItems] = useState(jobs);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const updated = [...prev];

        const first = updated.shift();
        updated.push(first);

        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-surface-container-highest">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-32 items-center">
          <div>
            <span className="bg-tertiary/10 text-tertiary px-4 py-1.5 rounded-full font-inter mb-4 inline-block">
              Career Launchpad
            </span>
            <h2 className="font-bold text-3xl mb-4">
              Secure a Trusted PPA or Graduate Job.
            </h2>
            <p className="text-lg text-on-surface-variant mb-8">
              Fake job postings and "audio" PPAs waste your time and money. We
              curate verified listings from real employers — paying PPAs and
              entry-level graduate roles you can actually count on.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-primary font-semibold">500+</p>
                <p className="text-sm text-on-surface-variant">
                  Verified Listings
                </p>
              </div>
              <div className="border-l border-outline-variant pl-8">
                <p className="text-primary font-semibold">Weekly</p>
                <p className="text-sm text-on-surface-variant">New Postings</p>
              </div>
            </div>
            <button className="mt-8 bg-primary text-on-primary px-10 py-4 rounded-4xl font-bold hover:shadow-lg">
              Browse Opportunities
            </button>
          </div>
          <div className="space-y-4">
            {items.map((job, index) => (
              <div
                key={job.id}
                className={`${index === jobs.length - 1 ? "animate__bounceIn" : ""}
                  animate__animated bg-surface p-6 rounded-2xl flex justify-between items-center group hover:shadow-md transition-all border border-transparent hover:border-primary/20`}
              >
                <div>
                  <h4 className="font-bold text-lg">{job.title}</h4>
                  <p className="text-sm text-on-surface-variant flex items-center gap-1">
                    {job.location} • {job.pay}
                  </p>
                </div>
                <span className="bg-secondary-container/50 text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold">
                  {job.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchPad;
