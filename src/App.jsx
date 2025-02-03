import Contact from "./components/Contact";
import Aayam from "./components/Aayam";
import Features from "./components/Features";
import Hero from "./components/Hero";
import About from "./components/About";

export default function GSPL25() {
  return (
    <div className="bg-black text-white font-poppins">
      <Hero />
      <About />
      <Features />
      <Aayam />
      <Contact />
    </div>
  );
}
