import React, { useState } from 'react';
import { useFirebase } from '../firebase/FirebaseContext';
import { Card } from './CustomerInfo.styled';

export const CustomerInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(null);

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
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="Full Name"
            name="Full Name"
          />
        </section>
        <section>
          <label htmlFor="Email">Email Address:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text" 
            id="Email"
            name="Email"
          />
        </section>
        <section>
          <label htmlFor="Phone">Phone Number:</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
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
