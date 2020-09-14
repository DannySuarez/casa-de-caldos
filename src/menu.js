import {
  enchilada,
  huarache,
  tamale,
  molePollo,
  burrito,
  picadita,
  quesadilla,
  taco,
} from './assets/index.js';

export const menuItems = [
  {
    id: 1,
    name: 'Mole Enchiladas',
    price: 15.99,
    img: enchilada,
    alt: 'enchiladas topped with mole',
    smallDescription: 'Incluyen bebida. Comes with a soft drink',
    mainDescription: `Tortillas rolled around your choice of meat, topped
                      with our house made mole sauce and cheese.`,
  },
  {
    id: 2,
    name: 'Mole Con Pollo',
    price: 15.99,
    img: molePollo,
    alt: 'plate of rice, chicken, and beans topped with mole',
    smallDescription: 'Incluyen bebida. Comes with a soft drink',
    mainDescription: `A plate of our delicous rice, beans, and chicken toped
                      with our house made mole sauce.`,
  },
  {
    id: 3,
    name: 'Taco',
    price: 3.0,
    img: taco,
    alt: 'tacos on a plate',
    smallDescription: 'Add to order to customize',
    mainDescription: `Handmade tortilla with your choice of meat.
                      Fillings include: cilantro and onion.`,
  },
  {
    id: 4,
    name: 'Picadita',
    price: 3.0,
    img: picadita,
    alt: 'picadita on a plate',
    smallDescription: 'Add to order to customize',
    mainDescription: `Fried masa topped with refried beans, crumbled cheese
                      lettuce, onion, and salsa.
                      Protein choice cost extra.`,
  },
  {
    id: 5,
    name: 'Tamale',
    price: 2.5,
    img: tamale,
    alt: 'Tamales on a plate',
    smallDescription: 'Add to order to customize',
    mainDescription: 'Made fresh every day.',
  },
  {
    id: 6,
    name: 'Quesadilla',
    price: 7.99,
    img: quesadilla,
    alt: 'Cheese Quesadilla',
    smallDescription: 'Add to order to customize',
    mainDescription:
      'Handmade tortilla filled with cheese and your choice of meat.',
  },
  {
    id: 7,
    name: 'Huarache',
    price: 8.99,
    img: huarache,
    alt: 'huarache on a plate',
    smallDescription: 'Add to order to customize',
    mainDescription: `Fried masa shaped oblong and topped with refried beans,
                      choice of meat, lettuce, tomatoes, and cheese.`,
  },
  {
    id: 8,
    name: 'Burrito',
    price: 8.99,
    img: burrito,
    alt: 'Burrito on a plate',
    smallDescription: 'Add to order to customize',
  },
];
