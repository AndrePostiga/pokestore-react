import { combineReducers } from 'redux';

import cart from './cart/reducer';
import productList from './productList/reducer';
import theme from './theme/reducer'

export default combineReducers({
  cart,
  productList,
  theme
});
