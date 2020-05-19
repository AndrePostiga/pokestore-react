import produce from 'immer';

export default function cart(state = [], action = '') {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, (draft) => {
        const productIndex = state.findIndex((e) => e.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });

    case 'REMOVE_FROM_CART':
      return produce(state, (draft) => {
        const productIndex = state.findIndex((e) => e.id === action.id);

        if (draft[productIndex].amount === 1) {
          draft.splice(productIndex, 1);
        } else {
          draft[productIndex].amount -= 1;
        }
      });

    case 'FINISHED':
      return [];

    default:
      const cart = JSON.parse(sessionStorage.getItem('cart'));
      return cart || state;
  }
}
