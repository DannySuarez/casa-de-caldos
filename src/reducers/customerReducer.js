export default function(state, action) {
  switch(action.type) {
    case 'FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'CLEAR_ORDER':
      return {
        name: '',
        email: '',
        phone: ''
      };
    default:
      return state;
  }
}
