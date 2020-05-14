import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Checkout} />
    </Switch>
  );
}
