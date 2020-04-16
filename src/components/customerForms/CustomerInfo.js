import React from 'react';
import { useStore } from '../../store';
// import { useFirebase } from '../firebase/FirebaseContext';
import { Card, Section } from './CustomerInfo.styled';

export const CustomerInfo = () => {
  const [{ customerInfo: { name, email, phone } }, dispatch] = useStore();  
  // const firebase = useFirebase();

  const onEnter = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      phone,
      completed: false,
    };
    console.log(user);
    
  };
  
  // const onSubmit = () => {
  //   const user = {
  //     name,
  //     email,
  //     phone,
  //     completed: false,
  //   };

  //   firebase.orders().push(user);
  // };

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
        <form onSubmit={onEnter}>
          <Section>
            <label htmlFor="Full Name"><i>*</i>Full Name:</label>
            <input
              onChange={(e) => dispatch({
                type: 'FIELD',
                field: 'name',
                value: e.currentTarget.value
              })}
              type="text"
              id="Full Name"
              name="Full Name"
              required
            />
          </Section>
          <Section>
            <label htmlFor="Email"><i>*</i>Email Address:</label>
            <input
              onChange={(e) => dispatch({
                type: 'FIELD',
                field: 'email',
                value: e.currentTarget.value
              })}
              type="text" 
              id="Email"
              name="Email"
              required
            />
          </Section>
          <Section>
            <label htmlFor="Phone"><i>*</i>Phone Number:</label>
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
              required
            />
          </Section>
          <button>Submit</button>
        </form>

      </Card>
    </>
  );
};
