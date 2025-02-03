import "./App.css";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App font-bs-font w-screen flex flex-col items-center">
      <Navbar />
      <HeroSection />
      {/* <HeroSection2/> */}
    </div>
  );
}

export default App;
