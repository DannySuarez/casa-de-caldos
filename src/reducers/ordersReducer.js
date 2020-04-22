import { ADD_PRODUCT, EMPTY_CART, REMOVE_PRODUCT, CLEAR_ORDER } from '../actions/productActions';

export default function(state, action) {
  switch(action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case REMOVE_PRODUCT:
      return state.filter((_order, i) => i !== action.payload);
    case EMPTY_CART:
      return action.payload;
    case CLEAR_ORDER:
      return [];
    default:
      return state;
  }
}
