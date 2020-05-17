import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App theme={process.env.REACT_APP_THEME}/>
  </React.StrictMode>,
  document.getElementById('root')
);
