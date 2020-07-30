import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutWrapper } from './Checkout.styled';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { CustomerInfo } from '../customerForms/CustomerInfo';
import { CartItem } from '../modals/fullCart/CartItem';
import { useFirebase } from '../firebase/FirebaseContext';
import { useStore } from '../../store';
import { priceAdder } from '../../utils';
import { clearOrder } from '../../actions/productActions';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

export const Checkout = () => {
  const [isActive, setIsActive] = useState(true);
  const [{ customerInformation, orders }, dispatch] = useStore();
  const { name, email, phone } = customerInformation;
  const firebase = useFirebase();

  const handlePayment = async({ orders }) => {
    const price = priceAdder([...orders]);
    const amount = price * 100;
    const data = {
      quantity: orders.length,
      amount: amount.toFixed()
    };

    const reponse = await fetch('/.netlify/functions/create-checkout', {
      method: 'POST',
      mode: 'no-cors',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(res => res.json());

    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId: reponse.sessionId
    });

    if(error) {
      console.log(error);
    }

  };

  const onPlaceOrder = () => {
    const foodOrder = {
      name,
      email,
      phone,
      orders,
      complete: false
    };
    
    firebase.orders().push(foodOrder);
    handlePayment(foodOrder);
    dispatch(clearOrder());
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
        <div className="checkout-page-overview">
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
              <button
                onClick={onPlaceOrder} 
                className="button button-active" 
                disabled={isActive}>
                  Place Order
              </button>
            </span>
          </div>  
        </div>
      </section>
      <Footer />
    </LayoutWrapper>
  );
};
