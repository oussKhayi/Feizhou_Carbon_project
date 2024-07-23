import "./App.css";
import Card from "./components/Card";
import HeroSection from "./components/HeroSection";
import feizhouCom from "./assets/feizhouCom.png";
import AboutSection from "./components/AboutSection";
import FeizouComConsists from "./components/FeizouComConsists";
import CardsGroup from "./components/CardsGroup";

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeizouComConsists />
      <CardsGroup />
      <div className="h-screen"></div>
    </>
  );
}

export default App;
