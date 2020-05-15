export default function cart(state = '', action) {
  switch (action.type) {
    case 'SEARCH':
      return action.inputValue;

    default:
      return state;
  }
}
