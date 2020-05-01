import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MenuItemModal } from '../modals/MenuItemModal';
import { Section } from './Menu.styled';

export const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
    
  return (
    <>
      <Section className="media cell--1-2" key={item.id}>
        <div className="menu-item">
          <div>
            <img className="product" src={item.img} alt={item.alt} />
          </div>
          <button onClick={() => setIsOpen(!isOpen)}>Add To Order</button>
          <p className="product-price">${item.price.toFixed(2)}</p>
          <h3>{item.name}</h3>
          <p className="product-description">{item.smallDescription}</p>
        </div>
      </Section>

      {isOpen && <MenuItemModal item={item} setIsOpen={setIsOpen}/>}

    </>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object.isRequired
};
