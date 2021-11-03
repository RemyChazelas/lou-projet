import { useEffect } from "react";
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import NavMenu from '../components/NavMenu';

export default function Home() {

  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  return (
    <div>
      <NavMenu />
      <ScrollToTopOnMount />
      <HeroSection />
      <Footer />
    </div>
  );
}
