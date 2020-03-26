import React, { useReducer } from 'react';
import reducer, { initialState } from '../../reducers/menuReducer';
import { useFirebase } from '../firebase/FirebaseContext';
import { Card } from './CustomerInfo.styled';

export const CustomerInfo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, email, phone } = state;

  const firebase = useFirebase();
  
  const onSubmit = () => {
    const user = {
      name,
      email,
      phone,
      completed: false,
    };
    
    firebase.orders().push(user);
  };

  return (
    <>
      <Card>
        <h2>Your Information</h2>
        <p>
          <strong>
          No need to sign up for an account!
          Just fill out some basic info in case we need to contact you.
          </strong>
        </p>
        <section>
          <label htmlFor="Full Name">Full Name:</label>
          <input
            onChange={(e) => dispatch({
              type: 'FIELD',
              field: 'name',
              value: e.currentTarget.value
            })}
            type="text"
            id="Full Name"
            name="Full Name"
          />
        </section>
        <section>
          <label htmlFor="Email">Email Address:</label>
          <input
            onChange={(e) => dispatch({
              type: 'FIELD',
              field: 'email',
              value: e.currentTarget.value
            })}
            type="text" 
            id="Email"
            name="Email"
          />
        </section>
        <section>
          <label htmlFor="Phone">Phone Number:</label>
          <input
            onChange={(e) => dispatch({
              type: 'FIELD',
              field: 'phone',
              value: e.currentTarget.value
            })}
            type="tel"
            id="Phone"
            name="Phone"
            placeholder="Phone"
          />
        </section>
        <section>
          <button type="submit" onClick={onSubmit}>Submit</button>
        </section>
      </Card>
    </>
  );
};
