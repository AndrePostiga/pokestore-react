import { combineReducers } from 'redux';

import cart from './cart/reducer';
import productList from './productList/reducer';

export default combineReducers({
  cart,
  productList,
});
