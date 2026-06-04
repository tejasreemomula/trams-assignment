import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Features from "./components/features/features";

const App = () => {
  return (
    <div className="overflow-x-hidden flex flex-col gap-10">
      <Header />
      <Hero />
      <Features />
    </div>
  );
};

export default App;
