import React from 'react';
import PropTypes from 'prop-types';
import { CartItem } from './CartItem';
import styled from 'styled-components';
import { useStore } from '../../../store';
import { priceAdder } from '../../../utils';

export const FullCart = ({ onClick }) => {
  const [{ orders }] = useStore();
  const total = priceAdder(orders);

  const cartItems = orders.map((order, i) => (
    <CartItem order={order} key={i} />
  ));

  const item = orders.length <= 1 ? 'item' : 'items';
  
  return (
    <CheckoutContainer>
      <Header>
        <h3>{orders.length} {item}</h3>
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
        <button>Checkout</button>
        <button>Clear Cart</button>
      </Footer>
    </CheckoutContainer>
  );
};

FullCart.propTypes = {
  onClick: PropTypes.func.isRequired
};

const CheckoutContainer = styled.div`
 position:absolute;
 border:none;
 border-radius:0 0 4px 4px;
 box-shadow:0 2px 4px rgba(45,60,72,.2);
 display:block;
 width:410px;
 padding:0;
 display:flex;
 flex-direction:column;
 z-index:1040;
 background-color:#fff;
 opacity:1;
 transform:translateZ(0);
 transition:transform .3s cubic-bezier(0,.36,.42,1);
 max-height:100vh;

 @media screen and (max-width:479px) {
   bottom:0;
 }

 @media screen and (max-width:479px),
 screen and (min-width:480px) and (max-width:599px),
 screen and (min-width:600px) and (max-width:767px) {
  position:fixed;
  top: 0;
  left: 0;
  margin: 0;
  border-radius: 0;
  width: 100vw;
  }
`;

const Header = styled.header`
  display:flex;
  position:relative;
  box-shadow:0 1px 0 #ccd1d5;
  padding:0 32px;
  min-height:70px;
  justify-content:space-between;
  align-items:center;
`;

const CloseCartButton = styled.button`
  display: flex;
  background: none;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;

`;

const Section = styled.section`
  overflow:auto;
  overscroll-behavior:contain;
  padding:0 32px;
  text-align:left;
  margin-bottom:auto;

  @media screen and (max-width:479px),screen and (min-width:480px) and (max-width:599px),screen and (min-width:600px) and (max-width:767px) {
    overflow: auto;
  }

  > div:first-child {
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding:24px 0;
 border-bottom:1px solid #ccd1d5;
  }
`;

export const SubtotalSection = styled.section`
  margin: 0 0 20px;
  padding-top: 20px;
  border-radius: 2px;
  color: var(--rust);

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  h6:first-child {
    flex: 1 1;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 24px 32px;
  box-shadow: 0 -1px 0 #ccd1d5;
  z-index: 1;

  button {
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    max-width: 100%;
    min-width: 200px;
    width: 100%;
    outline: none;
    height: 40px;
    padding: 0 15px;
    background-color: var(--rust);
    margin-bottom: 8px;
  }

  button:nth-child(2) {
    background: none;
    color: var(--rust);
    height: auto;
    padding: 0;
    line-height: inherit;
    margin: 0;
  }
`;
