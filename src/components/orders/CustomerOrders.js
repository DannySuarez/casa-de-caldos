import React, { Fragment, useState, useEffect } from 'react';
import { CustomerContact } from './CustomerContact';
import { CustomerMeals } from './CustomerMeals';
import { useFirebase } from '../firebase/FirebaseContext';
import { Layout, Container, Table, HeaderCell, BodyRow } from './CustomerOrders.styled';

export const CustomerOrders = () => {
  const [onlineOrders, setOnlineOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const firebase = useFirebase();

  const updateAllOrders = (orders) => {
    orders.map(order => {
      const completedOrders = { ...order, complete: true };
      const updates = {};
      updates[order.id] = completedOrders;
      
      firebase.updateOrders(updates);
      firebase.getOrders().once('value', snapshot => {
        const data = snapshot.val();
        const formatedOrders = formatOrders(data);
        setOnlineOrders(formatedOrders);        
      });
    });
  };

  const formatOrders = (firebaseOrders) => {
    const orders = [];
    for(let key in firebaseOrders) {
      const val = firebaseOrders[key];
      val['id'] = key;
      orders.push(val);
    }
    return orders;
  };
    
  useEffect(() => {
    firebase.getOrders().once('value', snapshot => {
      const data = snapshot.val();
      const formatedOrders = formatOrders(data);
      setOnlineOrders(formatedOrders);
      setLoading(false);
    });
    return () => {
      firebase.getOrders().off();
    };

  }, []);

  const onComplete = (e) => {
    const checked = e.target.type === 'checkbox' ? e.target.checked : null;
    setIsCompleted({
      ...isCompleted,
      [e.target.name]: checked
    });    
  };

  const orders = onlineOrders.map((order, i) => {
    return (
      <Fragment key={i}>
        <Container>
          <CustomerContact
            key={order.id} 
            name={order.name}
            email={order.email}
            phone={order.phone}
          />
          <Table>
            <thead>
              <BodyRow>
                <HeaderCell scope="col">Menu Item</HeaderCell>
                <HeaderCell scope="col">Topping/Stuffing</HeaderCell>
                <HeaderCell scope="col">Special Request</HeaderCell>
                <HeaderCell scope="col">Price</HeaderCell>
              </BodyRow>
            </thead>
            <tbody>
              <CustomerMeals key={order.phone} orders={order.orders}/>
            </tbody>
          </Table>
          <input onChange={onComplete} id={order.id} name={order.id} type="checkbox" checked={isCompleted['value']} />
          <label htmlFor={order.id}>Done</label>
        </Container>
      </Fragment>
    );
  });

  return (
    <>
      {loading && <div>Loading</div>}
      {!loading && (
        <Layout>
          {orders}
          <button onClick={() => updateAllOrders(onlineOrders) }>Get More</button>
        </Layout>
      )}
    </>
  );
};
