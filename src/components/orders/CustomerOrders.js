import React, { useState, useEffect } from 'react';
import { useFirebase } from '../firebase/FirebaseContext';

export const CustomerOrders = () => {
  const [onlineOrders, setOnlineOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const firebase = useFirebase();
  
  useEffect(() => {
    firebase.orders().on('value', snapshot => {
      const data = snapshot.val();
      const formatedOrders = formatOrders(data);
      setOnlineOrders(formatedOrders);
      setLoading(false);
    });

  }, []);

  const formatOrders = (firebaseOrders) => {
    const orders = [];

    for(let key in firebaseOrders) {
      const val = firebaseOrders[key];
      val['id'] = key;
      orders.push(val);
    }
    return orders;
  };

  const allOrders = onlineOrders.map(order => {
    return (
      <div key={order.id}>
        <p>{order.name}</p>
        <p>{order.phone}</p>
        <p>{order.email}</p>
      </div>
    );
  });

  return (
    <>
      {loading && <div>Loading</div>}
      {!loading && (
        <section>
          {allOrders}
        </section>
      )}
    </>
  );
};
