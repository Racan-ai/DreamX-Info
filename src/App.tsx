import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Market } from "./components/Market";
import { Analytics } from "./components/Analytics";
import { Revenue } from "./components/Revenue";
import { Team } from "./components/Team";
import { Clients } from "./components/Clients";
import { Expansion } from "./components/Expansion";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Market />
      <Analytics />
      <Revenue />
      <Team />
      <Clients />
      <Expansion />
      <Footer />
    </div>
  );
}