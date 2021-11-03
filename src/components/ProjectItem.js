import React from 'react';
import styled from 'styled-components';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    position: relative;
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    justify-content:center;
    border: 2px solid var(--black);
    
    img {
      width: 20%;
      height: 100%;
      transition: all 0.5s ease-in-out;
    }
    img:hover {
      width: 100%; 
    }
   
  }
  .projectItem__info {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: inset 2px 2px 0px #0f0f0f,
            inset -2px -2px 0px #2d2d2d;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'Valkyrie Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img,
  img2,
  img3,
  img4,
  img5,
  title,
  desc,
}) {
  return (
    <ProjectItemStyles>
      <div className="projectItem__img">
        <img src={img} alt="project img" />
        <img src={img2} alt="project img" />
        <img src={img3} alt="project img" />
        <img src={img4} alt="project img" />
        <img src={img5} alt="project img" />
      </div>
      <div className="projectItem__info">
        <h3 className="projectItem__title">{title}</h3>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
