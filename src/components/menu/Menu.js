import React from 'react';
import { ContentWrapper, Section } from './Menu.styled';
import { menuItems } from '../../menu';

export const Menu = () => {
  const menu = menuItems.map(item  => {
    return (
      <Section className="section media cell--1-2" key={item.name}>
        <div className="menu_item">
          <div className="menu_image">
            <img className="product" src={item.img} alt="Tostada" />
          </div>
          <button type="submit">Add To Order</button>
          <p className="product_price">{item.price}</p>
          <h3>{item.name}</h3>
          <p className="product_description">{item.description}</p>
        </div>
      </Section>

    );
  });

  return (
    <ContentWrapper className="content_wrapper">
      {menu}
    </ContentWrapper>
  );
};


