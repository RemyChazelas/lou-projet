import React, { useEffect } from 'react';

import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ContactSectionStyle = styled.div`
min-height:95vh;
  padding: 10rem 0 0 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-around;
    position: relative;
    
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 1px;
    height: 50%;
    box-shadow:  1px 1px 0 #0f0f0f,
             -1px -1px 0 #2d2d2d;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  .left {
    margin-top: 10rem;
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
  }
  @media only screen and (max-width: 900px) {
    .contactSection__wrapper::after {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
  
    
    .contactSection__wrapper {
      flex-direction: column;
      margin-top: 2rem;

    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ContactSectionStyle>
      <div className="container">
        <div className="contactSection__wrapper">
          <div data-aos="fade" className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+336666666" />
            <ContactInfoItem icon={<MdEmail />} text="loujeammet@gmail.com" />
            <ContactInfoItem text="Limoges, France" />
          </div>
          <div data-aos="fade" className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
