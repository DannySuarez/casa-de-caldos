export const initialState = {
  name: '',
  email: '',
  phone: ''
};

export default function(state, action) {
  switch(action.type) {
    case 'FIELD' :
      return {
        ...state,
        [action.field]: action.value
      };
     
    default:
      return state;
  }
}
