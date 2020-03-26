import React from 'react';
import PropTypes from 'prop-types';
import { Section } from './Menu.styled';

export const MenuItem = ({ item }) => {
  return (
    <Section className="section media cell--1-2" key={item.id}>
      <div className="menu_item">
        <div className="menu_image">
          <img className="product" src={item.img} alt="Tostada" />
        </div>
        <button type="submit">Add To Order</button>
        <p className="product_price">${item.price}</p>
        <h3>{item.name}</h3>
        <p className="product_description">{item.description}</p>
      </div>
    </Section>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object.isRequired
};

