import { v4 as uuidv4 } from 'uuid';
import velourRB1 from '../images/velours-rouge-bleu-1.jpg';
import velourRB2 from '../images/velours-rouge-bleu-2.jpg';
import velourRB3 from '../images/velours-rouge-bleu-3.jpg';
import velourRB4 from '../images/velours-rouge-bleu-4.jpg';
import velourRB5 from '../images/velours-rouge-bleu-5.jpg';
import velourRB6 from '../images/velours-rouge-bleu-6.jpg';
import velourBG1 from '../images/velours-blanc-gris-1.jpg';
import velourBG2 from '../images/velours-blanc-gris-2.jpg';
import velourBG3 from '../images/velours-blanc-gris-3.jpg';
import velourBG4 from '../images/velours-blanc-gris-4.jpg';
import velourBG5 from '../images/velours-blanc-gris-5.jpg';
import velourBG6 from '../images/velours-blanc-gris-6.jpg';



const projects = [
  {
    id: uuidv4(),
    name: 'Blue velvet',
    desc:
      "Matière : Fond : velours bleu, fournitures : cannetille bleue Format : 35x24 cm Prix : 487 € (avec caisse américaine)",
    img: velourRB1,
    img2: velourRB2,
    img3: velourRB3,
    img4: velourRB4,
    img5: velourRB5,
    img6: velourRB6,
    link: "#",

  },
  {
    id: uuidv4(),
    name: 'White velvet',
    desc:
      "Matière : Fond : Natté de coton blanc Fournitures : cannetille grise. Format : 35x24 cm Prix :?",
    img: velourBG1,
    img2: velourBG2,
    img3: velourBG3,
    img4: velourBG4,
    img5: velourBG5,
    img6: velourBG6,
    link: "#",

  },
];

export default projects;
