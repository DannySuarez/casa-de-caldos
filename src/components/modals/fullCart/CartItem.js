import React from 'react';
import PropTypes from 'prop-types';
import { CartLineItem } from './CartItem.styled';

export const CartItem = ({ order }) => {
  const showProtein = (order) => {
    if(order) {
      const protein = order.protein;
      return protein; 
    }
    else {
      return; 
    }
  };

  const protein = showProtein(order);

  return (
    <CartLineItem>
      <div>1</div>
      <div>
        <div>
          {order && <h5>{order.name}</h5>}
          <h5>Name</h5>
          <ul>
            <li>{protein}</li>
          </ul>
          <div>
            <a href="#">Edit</a>
            <button>
            Remove
            </button>
          </div>
        </div>
        ${order && order.price.toFixed(2)}
      </div>
    </CartLineItem>
  );
};

CartItem.propTypes = {
  order: PropTypes.object
};
