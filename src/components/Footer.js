import React, { useEffect } from 'react';
import styled from 'styled-components';
import PText from './PText';
import Aos from 'aos';
import 'aos/dist/aos.css';

const FooterStyle = styled.div`
bottom: 0;
  margin: 0 5%;
  border-radius: 2rem;
    .copyright {
    background-color: var(--white);
    padding: 1rem 0;
    margin-top: 1rem;
    .container{
      div{
        font-size:1.2rem;
      }
    }    
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    padding-top: 1rem;
    .copyright {
      .container {
        div {
          font-size:1.2rem;
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <FooterStyle>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Remy Chazelas
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
