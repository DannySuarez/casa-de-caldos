import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutWrapper } from './Checkout.styled';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { CustomerInfo } from '../customerForms/CustomerInfo';
import { CartItem } from '../modals/fullCart/CartItem';

// import { useFirebase } from '../firebase/FirebaseContext';
import { useStore } from '../../store';
import { priceAdder } from '../../utils';

export const Checkout = () => {
  const [isActive, setIsActive] = useState(true);
  const [{ customerInformation, orders }, dispatch] = useStore();
  const { name, email, phone } = customerInformation;
  // const firebase = useFirebase();
  
  const onPlaceOrder = () => {
    const foodOrder = {
      name,
      email,
      phone,
      orders,
      complete: false
    };
    
    console.log(foodOrder);
    
    // firebase.orders().push(foodOrder);
  };
  
  
  const cartItems = orders.map((order, i) => (
    <div className="cart-item" key={i}>
      <CartItem order={order} dispatch={dispatch} index={i}  />
    </div>
  ));

  return (
    <LayoutWrapper>
      <Header />
      <section className="content">
        <div className="checkout-page_overview">
          <section>
            <div>
              <img />
            </div>
          </section>
          <div className="cart-overview-content">
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
              <div className="cart-item overview overview-item">
                <h5>Total</h5>
                <div>${priceAdder(orders)}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-page-details">
          <CustomerInfo setIsActive={setIsActive} />
          <div className="checkout-actions">
            <span className="checkout-actions-order-button">
              <Link to="/thanks" >
                <button 
                  onClick={onPlaceOrder} 
                  className="place-order-button button button-active" 
                  disabled={isActive}>
                  Place Order
                </button>
              </Link>
            </span>
          </div>  
        </div>
      </section>
      <Footer />
    </LayoutWrapper>
  );
};
