import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Features from "./components/features/features";
import Services from "./components/services/services";
import Testimonials from "./components/testimonials/testimonials";
import FooterCTA from "./components/footerCTA/footerCTA";

const App = () => {
  return (
    <div className="overflow-x-hidden flex flex-col gap-4 md:gap-6">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <FooterCTA />
    </div>
  );
};

export default App;
