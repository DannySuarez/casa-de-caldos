import { ADD_PRODUCT, addProduct } from './productActions';

describe('product actions', () => {
  it('should create an add product action', () => {
    const action = addProduct();

    expect(action).toEqual({ type: ADD_PRODUCT });
  });

});
