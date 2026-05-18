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
        <div className="flex justify-center gap-4">
          <img
            alt="App Store"
            className="h-12 hover:scale-95 transition-transform"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8ZLmF2ljUSN9FopygFMBnSi37heUYLMhwhYNMsnTDCtaVYNZsRFishBN0r0L-LV49hIEGn_NTW-q_raRAa7x8luZ4gnfdV0e7i6YfKOQXszEuydSwmBjNFHtIqGIMsxmiqwRXj-aydaO8oMeECbVOyuErvifvUEZoOkIKdtm2pHcRhmJxNN5tHh9I6s1RyENjrU9nFk3aY_lCMZrv_PPaO8hgbf2OV9HS6e6J48eIFDfjJRxOnWaYS272EOOb4wbOskidm4VHpfU"
          />
          <img
            alt="Play Store"
            className="h-12 hover:scale-95 transition-transform"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-INGWcDhWPLrK6cVaI9cCC6JeUh7jlM4IN4mxuGeznceET3jLptoS1BTBHG5UgdL1wAwKDcP6FnaJH7ZqArB1NqxFTP43hwCYJLZBNpmhHg87S8cLvvDONK8zLBJ_lzCM2_EcYSAhg_vc7UUAP0oU5KF1k_owt4zMWY4fkma5fjBecmIq_Goy6wGPthviXmInKuRORB6WFvADK2aZx5i9EwhWMwZ1FsbESZ0FgcXbOZLirQlHXLmLT5HEFw2QMf3E-EamazBQHAI"
          />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Cta;
