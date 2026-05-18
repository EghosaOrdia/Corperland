const NYSCCom = () => {
  return (
    <section className="py-32 max-w-7xl mx-auto px-8 md:px-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl mb-4 font-bold">
          You’re Not Doing NYSC Alone.
        </h2>
        <p className="text-on-surface-variant">
          Connect with corps members across Nigeria. Ask questions, get updates,
          and find your community in our vibrant social hub.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-3xl border-primary/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold">
              A
            </div>
            <div>
              <p className="font-bold text-sm">
                Adaeze{" "}
                <span className="font-normal text-on-surface-variant opacity-60">
                  @adaeze_c
                </span>
              </p>
              <p className="text-xs text-on-surface-variant">2h ago</p>
            </div>
          </div>
          <p className="text-sm mb-4">
            Just got posted to Borno 🥵 Has anyone been redeployed from there
            before? What are my options?
          </p>
          <div className="flex gap-4 text-xs font-bold text-on-surface-variant mb-4">
            <span>24 likes</span>
            <span>18 replies</span>
          </div>
          <div className="bg-surface-container p-3 rounded-xl flex gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">
              K
            </div>
            <div>
              <p className="text-xs">
                <span className="font-bold">Kunle</span>{" "}
                <span className="bg-primary/10 text-primary px-1.5 rounded text-[10px]">
                  Ex-Corper
                </span>
              </p>
              <p className="text-[11px]">
                I was posted there in 2024 and got redeployed within 2 weeks. DM
                me, I can walk you through the process.
              </p>
            </div>
          </div>
        </div>
        <div className="glass-card p-6 rounded-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold">
              T
            </div>
            <div>
              <p className="font-bold text-sm">
                Tochukwu{" "}
                <span className="font-normal text-on-surface-variant opacity-60">
                  @tochi_nysc
                </span>
              </p>
              <p className="text-xs text-on-surface-variant">5h ago</p>
            </div>
          </div>
          <p className="text-sm mb-4">
            Quick question — for NERD registration, do I upload my O'level
            result or the statement of result? My school hasn't released the
            original yet.
          </p>
          <div className="flex gap-4 text-xs font-bold text-on-surface-variant mb-4">
            <span>12 likes</span>
            <span>9 replies</span>
          </div>
          <div className="bg-surface-container p-3 rounded-xl flex gap-3">
            <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold text-xs shrink-0">
              F
            </div>
            <div>
              <p className="text-xs">
                <span className="font-bold">Fatima</span>{" "}
                <span className="bg-secondary/10 text-secondary px-1.5 rounded text-[10px]">
                  Serving
                </span>
              </p>
              <p className="text-[11px]">
                Statement of results works fine. I used mine for Batch A and it
                went through without issues.
              </p>
            </div>
          </div>
        </div>
        <div className="glass-card p-6 rounded-3xl hidden lg:block">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold">
              B
            </div>
            <div>
              <p className="font-bold text-sm">
                Blessing{" "}
                <span className="font-normal text-on-surface-variant opacity-60">
                  @blessingg
                </span>
              </p>
              <p className="text-xs text-on-surface-variant">1d ago</p>
            </div>
          </div>
          <p className="text-sm mb-6">
            Finally got my relocation letter! Lagos here I come 🎉 Thank you
            Corperland community for all the guidance.
          </p>
          <div className="flex gap-4 text-xs font-bold text-on-surface-variant">
            <span>67 likes</span>
            <span>31 replies</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="border border-outline px-8 py-3 rounded-full font-bold hover:bg-surface-container transition-all">
          Join The Community
        </button>
      </div>
    </section>
  );
};

export default NYSCCom;
