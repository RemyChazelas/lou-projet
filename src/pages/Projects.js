import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { MdSearch } from 'react-icons/md';
// import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import ProjectItem from '../components/ProjectItem';
import Footer from '../components/Footer';
import NavMenu from '../components/NavMenu';

import Aos from 'aos';
import 'aos/dist/aos.css';

const ProjectStyle = styled.div`
min-height:95vh;
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 250px;
    margin-top: 5rem;
  }

  .github-link{
    position: absolute;
    font-size: 2rem;
    top: 235px;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px 10px;
    border-radius: 8px;
    transition: .5s ease-in-out;
    box-shadow:  2px 2px 0 #0f0f0f,
               -2px -2px 0 #2d2d2d;
  }
  .github-link:hover {
    background-color: var(--deep-dark);
    box-shadow: inset 2px 2px 1px #0f0f0f,
              inset -2px -2px 1px #2d2d2d;
  }

  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--gray-1);
    border-radius: 6px;
    outline: none;
    border: 1px solid var(--deep-dark);
    box-shadow:  2px 2px 0 #0f0f0f,
             -2px -2px 0 #2d2d2d;
  }

  .projects__searchBar input:focus{
    box-shadow: inset 2px 2px 1px #0f0f0f,
            inset -2px -2px 1px #2d2d2d;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--gray-1);
  }
  @media only screen and (max-width: 768px) {

  padding: 10rem 0 0 0;
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    } 
    .projects__allItems {
      display: flex;
      flex-direction:column;  }   
  }
`;

export default function Projects() {

  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  useEffect(() => {
    Aos.init({ duration: 10000 });
  }, []);


  return (
    <>
      <NavMenu />
      <ScrollToTopOnMount />
      <ProjectStyle>
        <div className="container">

          <div data-aos="fade" className="projects__allItems">
            {ProjectsInfo.map((item) => (
              // <a
              //   href={item.link}
              //   rel="noopener noreferrer"
              //   target="_blank"
              //   style={item.link === "" ? { cursor: "not-allowed" } : { cursor: "pointer" }}
              // >
              <ProjectItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
                img2={item.img2}
                img3={item.img3}
                img4={item.img4}
                img5={item.img5}
              />
              // </a>
            ))}
          </div>
        </div>
      </ProjectStyle>
      <Footer />
    </>
  );
}
