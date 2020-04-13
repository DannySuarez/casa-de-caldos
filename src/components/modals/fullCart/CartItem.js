import React from 'react';
import PropTypes from 'prop-types';
import { CartLineItem } from './CartItem.styled';
import { removeProduct } from '../../../actions/productActions';

export const CartItem = ({ order, index, dispatch }) => {
  const protein = order ? order.protein : null;

  return (
    <CartLineItem>
      <div>1</div>
      <div>
        <div>
          <h5>{order.name}</h5>
          <ul>
            <li>{protein}</li>
          </ul>
          <div>
            <button onClick={() => dispatch(removeProduct(index))}>
            Remove
            </button>
          </div>
        </div>
        ${order.price.toFixed(2)}
      </div>
    </CartLineItem>
  );
};

CartItem.propTypes = {
  order: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};
