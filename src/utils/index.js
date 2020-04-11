export const priceAdder = (orders) => {
  const total = orders.map(order => order.price).reduce((a, b) => a + b, 0);
  return Number(total.toFixed(2));
};

export const priceAdjust = order => {
  if(order.name === 'Picadita' && order.protein.length >= 1) {
    order.price += 1;  
    return order;
  }
  else {
    return order;
  }
};
