import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  CheckoutContainer,
  Header,
  CloseCartButton,
  Section,
  SubtotalSection,
  Footer } from './FullCart.styled';
import { CartItem } from './CartItem';
import { priceAdder } from '../../../utils';
import { emptyCart } from '../../../actions/productActions';
import { useStore } from '../../../store';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';

export const FullCart = ({ onClick }) => {
  const [orders, dispatch] = useStore();
  const total = priceAdder(orders);
  useLockBodyScroll();

  const cartItems = orders.map((order, i) => (
    <CartItem order={order} dispatch={dispatch} index={i} key={i} />
  ));

  const itemOrItems = orders.length <= 1 ? 'item' : 'items';
  
  return (
    <CheckoutContainer>
      <Header>
        <h3>{orders.length} {itemOrItems}</h3>
        <CloseCartButton onClick={onClick}>
          <svg 
            width="26"
            height="26"
            viewBox="0 0 22 22"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.707 3.293a1 1 0 0 0-1.414 1.414L10.586 12l-7.293 7.293a1 
              1 0 1 0 1.414 1.414L12 13.414l7.293 7.293a1 1 0 0 0 1.414-1.414L13.414 
              12l7.293-7.293a1 1 0 0 0-1.414-1.414L12 10.586 4.707 3.293z"
            >
            </path>
          </svg>
        </CloseCartButton>
      </Header>
      <Section>
        <div>
          <h5>Casa De Caldos</h5>
        </div>
        <div>
          {cartItems}
          <SubtotalSection>
            <div>
              <h6>Subtotal</h6>
              <h6>${total.toFixed(2)}</h6>
            </div>
          </SubtotalSection>
        </div>
      </Section>
      <Footer>
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
        <button onClick={() => dispatch(emptyCart())}>Clear Cart</button>
      </Footer>
    </CheckoutContainer>
  );
};

FullCart.propTypes = {
  onClick: PropTypes.func.isRequired
};
