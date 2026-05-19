const Cta = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-4">
          Ready to Simplify Your <span className="text-primary">NYSC</span>{" "}
          Journey?
        </h2>
        <p className="text-lg text-on-surface-variant mb-8 max-w-2xl mx-auto">
          Join thousands of corps members who trust Corperland for their NYSC
          needs. Your journey starts here!
        </p>
        <button className="bg-primary text-on-primary px-12 py-5 rounded-4xl font-extrabold text-xl mb-8 hover:scale-105 transition-transform">
          Get Started For Free
        </button>
      </div>
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div> */}
    </section>
  );
};

export default Cta;
