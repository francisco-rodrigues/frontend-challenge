import React from 'react';
import ReactDOM from 'react-dom';
import './app/styles/index.css';
import { Provider } from 'react-redux';
import App from './app/components/App';
import Store from './app/redux/redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
