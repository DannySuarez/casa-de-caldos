import reducer from './ordersReducer';
import { addProduct } from '../actions/productActions';
describe('order reducer', () => {

  let product;
  beforeEach(() => {
    product = {
      id: 1,
      name: 'Tostadas',
      price: 5.99
    }; 
  });

  it('handles a bad action gracefully', () => {
    const action = { type: 'BAD' }; 
    const newState = reducer([], action);

    expect(newState).toEqual([]);
  });

  it('handles the add product action', () => {    
    const initialState = [];
    const action = addProduct(product);

    const newState = reducer(initialState, action);
    
    expect(newState).toEqual([
      { id: 1, name: 'Tostadas', price: 5.99 }
    ]);
  });

  it('handles the add product action with existing product in state', () => {
    const initialState = [{ id: 1, name: 'Tostadas', price: 5.99 }];
    const action = addProduct(product);

    const newState = reducer(initialState, action);

    expect(newState).toEqual([
      { id: 1, name: 'Tostadas', price: 5.99 },
      { id: 1, name: 'Tostadas', price: 5.99 },
    ]);
  });

});
