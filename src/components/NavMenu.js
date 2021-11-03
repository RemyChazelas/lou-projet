import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import Aos from 'aos';
import 'aos/dist/aos.css';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--white);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      margin: 0 5px;
      border-radius: 8px;
      transition: .5s ease-in-out;
      box-shadow:  2px 2px 0 #0f0f0f,
             -2px -2px 0 #2d2d2d;
      &:hover {
        box-shadow: inset 2px 2px 1px #0f0f0f,
            inset -2px -2px 1px #2d2d2d;
      }
    }
    a {
      display: inline-block;
      font-family: 'Vanity Light';
      font-weight:600;
      padding: 1rem 2rem;
      width: 100%;
      font-size: 2rem;
      color: var(--black);
      outline: none;
    }
    .active {
      box-shadow: inset 1px 1px 1px #0f0f0f,
            inset -1px -1px 1px #2d2d2d;
      border-radius: 8px;
      font-weight: bold;

    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: .8s ease transform;
      background-color: var(--white);
      color:var(--black);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      box-shadow: inset 2px 2px 1px #1a1a1a,
      inset -2px -2px 1px #2d2d2d;
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: -5px 0 10px auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function NavMenu() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          data-aos="fade"
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
          // tabIndex={0}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            A propos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Projets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </NavStyles>
  );
}
