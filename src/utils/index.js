export const PriceAdder = (orders) => {
  const ordersAdjusted = orders.map(order => {
    if(order.name === 'Picadita' && order.protein.length >= 1) {
      order.price += 1;
      return order;
    }
    else {
      return order;
    }
  });
  
  const total = ordersAdjusted.map(order => order.price).reduce((a, b) => a + b, 0);
  return Number(total.toFixed(2));
};
