import Header from "./components/header/header";
import Hero from "./components/hero/hero";

const App = () => {
  return (
    <div className="overflow-x-hidden flex flex-col gap-10">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
