import React, { useEffect } from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Footer from '../components/Footer';
import NavMenu from '../components/NavMenu';
import lou from '../assets/images/louNB.jpg';
import Aos from 'aos';

import 'aos/dist/aos.css';

const AboutPageStyles = styled.div`
min-height:95vh;
  padding: 10rem 0 0 0;

  .cv {
    font-size: 2.2rem;
    background-color: ${(props) =>
    props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      padding: 0.5rem;
      border-radius: 8px;
      box-shadow:  2px 2px 0 #0f0f0f,
             -2px -2px 0 #2d2d2d;
    }
    
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0 0 0;
    .cv {
      font-size: 1.8rem;
    }
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  return (
    <>
      <NavMenu />
      <ScrollToTopOnMount />
      <AboutPageStyles>
        <div className="container" data-aos="fade">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Bonjour, je suis <span >Lou Jeammet</span>
              </p>
              <h2 className="about__heading">brodeuse</h2>
              <div className="about__info">
                <PText>
                  Diplômée d’un Brevet des métiers d’art et d’un Diplôme des métiers d’art de broderie, j’ai souhaité créer ma micro-entreprise en 2021. <br />
                  J’utilise mon savoir-faire de brodeuse Lunéville, or et aiguille pour réaliser des tableaux textiles brodés. <br />
                  Ma volonté est de re-questionner la broderie traditionnelle et de la repenser tant au niveau des fournitures utilisées qu’au niveau des formats. <br />
                  Je m’inscris dans une démarche artistique tout en conservant une attention toute particulière aux gestes et aux technicités de la broderie.
                </PText>
              </div>
            </div>
            <div data-aos="fade" className="right">
              <img src={lou} alt="photo de toi" />
            </div>
          </div>
        </div>

      </AboutPageStyles>
      <Footer />

    </>
  );
}
