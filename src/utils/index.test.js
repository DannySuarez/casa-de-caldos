import { PriceAdder } from './index';
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

    const Total = PriceAdder(orders);
    expect(Total).toEqual(29.48);
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

    const Total = PriceAdder(orders);
    expect(Total).toEqual(30.96);
  });

  it('should add an extra charge for protein in a Picadita', () => {
    const order = [
      {
        name: 'Picadita',
        price: 3.00,
        specialRequest: '',
        protein: ['Asada']
      },
      {
        name: 'Picadita',
        price: 3.00,
        specialRequest: '',
        protein: ['Lengua']
      },
      {
        name: 'Picadita',
        price: 3.00,
        specialRequest: '',
        protein: []
      },
      {
        name: 'Mole',
        price: 3.99,
        specialRequest: '',  
        protein: [],
      },
    ];

    const Total = PriceAdder(order);
    expect(Total).toEqual(14.99);
  });
});
