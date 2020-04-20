import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { CustomerInfo } from '../customerForms/CustomerInfo';
import { CartItem } from '../modals/fullCart/CartItem';
import { useStore } from '../../store';
import { priceAdder } from '../../utils';

export const Layout = () => {
  const [{ orders }, dispatch] = useStore();
  
  const cartItems = orders.map((order, i) => (
    <div className="cart-item" key={i}>
      <CartItem order={order} dispatch={dispatch} index={i}  />
    </div>
  ));

  return (
    <LayoutWrapper>
      <Header />
      <CustomerInfo />
      <section className="content">
        <div className="checkout-page_overview">
          <section>
            <div>
              <img />
            </div>
          </section>
          <div>
            <div className="cart-item merchant">
              <h5>Casa De Caldos</h5>
              <div>
                <Link to="/">
                  Menu
                </Link>
              </div>
            </div>
            <div className="cart-items">
              {cartItems}
            </div>
            <div>
              <div className="cart-item overview">
                <h5>Total</h5>
                <div>${priceAdder(orders)}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-page-details">
          <div className="checkout-actions">
            <span className="checkout-actions-order-button">
              <button disabled className="place-order-button button button-active">Place Order</button>
            </span>
          </div>
          
        </div>
      </section>
      <Footer />
    </LayoutWrapper>

  );
};

export const LayoutWrapper = styled.section`
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 479px),
  screen and (min-width: 480px) and (max-width: 599px),
  screen and (min-width: 600px) and (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (max-width:479px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  a {
    color: var(--rust);
  }

  .content {
    @media screen and (max-width: 479px),
    screen and (min-width: 480px) and (max-width: 599px),
    screen and (min-width: 600px) and (max-width: 767px) {
    margin-left: 0;
    margin-right: 0;
    }

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .checkout-page_overview {
    flex: 1 1 auto;
    width: 100%;
  }

  .cart-item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .merchant {
    margin-bottom: 24px;
  }

  .cart-item > :first-child {
    flex: 1 1;
  }

  .cart-items:before {
    content: "";
    border-bottom: 1px solid var(--rust);
    display: block;
    margin: 16px 0;
  }

  .overview:before {
    border-top: 1px solid var(--rust);
    content: "";
    display: block;
    position: relative;
    margin: 15px 0;
    width: 100%;
  }

  .checkout-page-details {
    @media screen and (max-width: 479px) {
    flex: 1 1;
    width: 100%;
    }
  }

  .checkout-actions {
    display: flex;
    margin-top: 40px;
    align-items: center;
    border-top: 1px solid var(--rust);

    @media screen and (max-width:479px),
    screen and (min-width:768px) and (max-width:1023px) {
      flex-wrap: wrap;
      justify-content: center;
    }

    @media screen and (max-width:479px),
    screen and (min-width:480px) and (max-width:599px),
    screen and (min-width:600px) and (max-width:767px) {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: var(--lightborange);
      z-index: 4;
      padding: 20px;
    }
  }

  .checkout-actions-order-button {
    @media screen and (max-width: 479px) {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
    }

    @media screen and (max-width:479px),
    screen and (min-width:768px) and (max-width:1023px) {
      flex: 1 1 100%;
      margin-bottom: 10px;
      order: -1;
    }
  }

  .button {
    border: none;
    color: #fff;
    height: 40px;
    text-align: center;
    outline: none;
    border-radius: 4px;
    min-width: 200px;
    width: 100%;
    cursor: pointer;
  }

  .button-active {
    background-color: var(--rust);
  }

`;
