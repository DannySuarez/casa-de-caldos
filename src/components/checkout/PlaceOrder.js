import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useFirebase } from '../firebase/FirebaseContext';
import { useStore } from '../../store';
import { useCustomerStateContext } from '../context/CustomerInfoContext';
import { clearOrder } from '../../actions/productActions';

export const PlaceOrder = ({ isActive }) => {
  const history = useHistory();
  const firebase = useFirebase();
  const [{ orders }, dispatch] = useStore();
  const { name, email, phone } = useCustomerStateContext();

  const onPlaceOrder = () => {
    const foodOrder = {
      name,
      email,
      phone,
      orders,
      complete: false,
    };

    firebase.orders().push(foodOrder);
    dispatch(clearOrder());
    history.push('/thanks');
  };

  return (
    <button
      onClick={onPlaceOrder}
      className="button button-active"
      disabled={isActive}
    >
      Place Order
    </button>
  );
};

PlaceOrder.propTypes = {
  isActive: PropTypes.bool,
};
