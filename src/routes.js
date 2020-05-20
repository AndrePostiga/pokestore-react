import React from 'react';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Checkout from './pages/Checkout';
import * as ThemeActions from './store/modules/theme/actions';

function Routes({ defineTheme, theme }) {
  defineTheme(theme);

  return (
    <Switch>
      <Route path="/" component={Checkout} />
    </Switch>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ThemeActions, dispatch);

export default connect(null, mapDispatchToProps)(Routes);
