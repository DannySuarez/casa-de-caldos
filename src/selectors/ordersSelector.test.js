import { getOrders } from './ordersSelector';
describe('orders selectors', () => {

  it('should return orders', () => {
    const state = [
      { id: 1, name: 'Tostadas', price: 5.99 },
      { id: 1, name: 'Tostadas', price: 5.99 }
    ];
    const orders = getOrders(state);

    expect(orders).toEqual([
      { id: 1, name: 'Tostadas', price: 5.99 },
      { id: 1, name: 'Tostadas', price: 5.99 }
    ]);
  });
});
