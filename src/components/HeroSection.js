import React, { useEffect } from 'react';
import styled from 'styled-components';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import broderie from '../assets/images/broderie.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HeroStyles = styled.div`
    min-height:95vh;
  padding: 10rem 0;


  .hero {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-top: 12rem;
    position: absolute;
    left: 50%;
    transform:translateX(-50%);
    
    z-index: 1000;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Vanity Light';
      font-size: 7rem;
      color: var(--black);
    }
  }
  .hero__img {
    position: relative;
    max-width: 700px;
    width: 100%;
    height: 500px;
    margin: 10rem auto 5rem auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: 1rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    width: 50px;
  }
  .hero__social {
    top: 302px;
    left: 50px;
  }
  .hero__scrollDown {
    bottom: 120px;
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      margin-bottom: 2rem;
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
      margin-bottom: 5px;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        margin-left: -3px;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 1px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem  0 0 0;
    min-height:91vh;


    
    .hero__heading {
      font-size: 1.2rem;
      margin-bottom: -3.2rem;
      .hero__name {
        font-size: 3rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      top: 245px;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      bottom: 300px;

      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);



  return (
    <HeroStyles>

      <div className="hero">
        <div className="container">
          <h1 className="hero__heading" >
            <span className="hero__name" data-aos="fade">Lou JEAMMET</span>
            <span data-aos="fade-right">brodeuse</span>
          </h1>
          <div className="hero__img" data-aos="fade">
            <img src={broderie} alt="broderie" />
          </div>

          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Réseaux</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div data-aos="fade-down" className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Insta
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </HeroStyles>
  );
}
