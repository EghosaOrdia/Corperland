import {
  Cta,
  Footer,
  Nav,
  Hero,
  Help,
  Relocation,
  LaunchPad,
  NyscCom,
  Testimonials,
  Steps,
} from "../components/index";

const Home = () => {
  return (
    <div className="bg-background text-on-surface font-inter selection:bg-primary/20">
      <Nav />
      <Hero />
      <Help />
      <Steps />
      <Relocation />
      <LaunchPad />
      <NyscCom />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
