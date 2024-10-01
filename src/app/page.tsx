import HeroBlock from "./components/HeroBlock/HeroBlock";
import Popular from "./components/Popular/Popular";
import Best from './components/Best/Best';
import CryptoEvents from "./components/CryptoEvents/CryptoEvents";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import CryptoSlider from "./components/CryptoBlock/CryptoBlock";

export default function Home() {
  return (
    <>
      <HeroBlock />
      <Popular />
      <Best />
      <CryptoEvents />
      <CryptoSlider />
      <About />
      <FAQ /> 
    </>
  );
}
