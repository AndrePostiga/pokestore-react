import { combineReducers } from 'redux';

import cart from './cart/reducer';
import productList from './productList/reducer';
import theme from './theme/reducer';

const initialState = {
  cart: JSON.parse(sessionStorage.getItem('cart')) || [],
  productList: '',
  theme: {
    theme: 'grass',
    color: 'green',
  },
};

export default combineReducers(
  {
    cart,
    productList,
    theme,
  },
  initialState
);
