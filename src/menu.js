import tostada from './assets/tostada.jpg';
import torta from './assets/torta.jpg';
import { enchilada, huarache, tamale, molePollo }  from './assets/index.js';

export const menuItems = [
  {
    id: 1,
    name: 'Mole Enchiladas',
    price: 15.99,
    img: enchilada,
    alt: 'enchiladas topped with mole',
    description: `Carnes: Asada, Al Pastor, Pollo, Y Lengua.
          Meats: Beef, Al Pastor, Chicken, & Tongue.`
  },
  {
    id: 2,
    name: 'Mole Con Pollo',
    price: 15.99,
    img: molePollo, 
    alt: 'plate of rice, chicken, and beans topped with mole',
    description: 'Incluyen bebida/Comes with a soft drink' 
  },
  {
    id: 3,
    name: 'Taco',
    price: 3.00,
    img: tostada,
    alt: 'tacos on a plate',
    description: `Carnes: Asada, Al Pastor, Pollo, Y Lengua.
    
          Meats: Beef, Al Pastor, Chicken, & Tongue.`  },
  {
    id: 4,
    name: 'Picadita',
    price: 3.00,
    img: torta,
    alt: 'picadita on a plate',
    description: `Carnes: Asada, Al Pastor, Pollo, Y Lengua.
          Meats: Beef, Al Pastor, Chicken, & Tongue.`  },
  {
    id: 5,
    name: 'Tamale',
    price: 2.50,
    img: tamale,
    alt: 'Tamales on a plate',
    description: 'Stuffed with beans, rice and lettuce' 
  },
  {
    id: 6,
    name: 'Quesadilla',
    price: 7.99,
    img: enchilada,
    alt: 'Cheese Quesadilla',
    description: 'Stuffed with beans, rice and lettuce' 
  },
  {
    id: 7,
    name: 'Huarache',
    price: 8.99,
    img: huarache,
    alt: 'huarache on a plate',
    description: 'Stuffed with beans, rice and lettuce' 
  },
  {
    id: 8,
    name: 'Burrito',
    price: 8.99,
    img: enchilada,
    alt: 'Burrito on a plate',
    description: `Carnes: Asada, Al Pastor, Pollo, Y Lengua.
          Meats: Beef, Al Pastor, Chicken, & Tongue.`  },

  
];
