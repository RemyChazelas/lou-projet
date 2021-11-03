import { createGlobalStyle } from 'styled-components';
import VanityLight from '../assets/fonts/Vanity-Light.ttf';
import ValkyrieRegular from '../assets/fonts/Valkyrie-Regular.ttf';
import BreakRegular from '../assets/fonts/Break-Regular.ttf';

const Typography = createGlobalStyle`
 
  
  @font-face {
    font-family: 'Vanity Light';
    src: url(${VanityLight});
    font-style: normal;
  }
  @font-face {
    font-family: 'Valkyrie Regular';
    src: url(${ValkyrieRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Break Regular';
    src: url(${BreakRegular});
    font-style: normal;
  }
  html{
    font-family: 'Vanity Light';
    color: var(--gray-1);
  }
  *{
    font-family: 'Valkyrie Regular';
    color: var(--deep-dark);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Valkyrie Regular'
  }

`;

export default Typography;
