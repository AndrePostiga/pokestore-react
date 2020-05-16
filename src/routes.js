import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux'
import Checkout from './pages/Checkout';

function Routes({dispatch, theme}) {
  dispatch({
    type: 'THEME',
    theme: theme
  })

  return (
    <Switch>
      <Route path="/" exact component={Checkout}/>
    </Switch>
  );
}

export default connect()(Routes)