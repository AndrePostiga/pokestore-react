import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import store from './store';

function App({theme}) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes theme={theme}/>
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default (App);
