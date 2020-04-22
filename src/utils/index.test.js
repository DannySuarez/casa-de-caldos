import { priceAdder, priceAdjust } from './index';
describe('util helpers', () => {
  it('should map thrugh an array of orders and return total price', () => {
    const orders = [
      {
        name: 'some dish',
        price: 15.99,
        protein: [],
        specialRequest: ''   
      },
      {
        name: 'some dish2',
        price: 2.50,
        protein: [],
        specialRequest: ''  
      },
      {
        name: 'some dish3',
        price: 7.99,
        protein: [],
        specialRequest: ''  
      },
      {
        name: 'some dish3',
        price: 3.00,
        protein: [],
        specialRequest: ''  
      }
    ];

    const total = priceAdder(orders);
    expect(total).toEqual(29.48);
  });

  it('should add correctly', () => {
    const orders = [
      {
        name: 'some dish',
        price: 15.99,
        protein: [],
        specialRequest: ''   
      },
      {
        name: 'some dish2',
        price: 2.99,
        protein: [],
        specialRequest: ''  
      },
      {
        name: 'some dish3',
        price: 7.99,
        protein: [],
        specialRequest: ''  
      },
      {
        name: 'some dish3',
        price: 3.99,
        protein: [],
        specialRequest: ''  
      }
    ];

    const total = priceAdder(orders);
    expect(total).toEqual(30.96);
  });

  it('should add an extra charge for protein in a Picadita', () => {
    const order = 
      {
        name: 'Picadita',
        price: 3.00,
        specialRequest: '',
        protein: ['Asada']
      };

    const adjustedOrder = priceAdjust(order);
    expect(adjustedOrder).toEqual(
      {
        name: 'Picadita',
        price: 4.00,
        specialRequest: '',
        protein: ['Asada']
      }
    );
  });
});
