import React, { useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import NavMenu from '../components/NavMenu';

export default function Contact() {

  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  return (
    <>
      <NavMenu />
      <ScrollToTopOnMount />
      <ContactSection />
      <Footer />

    </>
  );
}
