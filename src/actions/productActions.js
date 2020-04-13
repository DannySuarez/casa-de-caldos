export const ADD_PRODUCT = 'ADD_PRODUCT';
export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
});

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const removeProduct = (i) => ({
  type: REMOVE_PRODUCT,
  payload: i
});

export const EMPTY_CART  = 'EMPTY_CART';
export const emptyCart = () => ({
  type: EMPTY_CART,
  payload: []
});
