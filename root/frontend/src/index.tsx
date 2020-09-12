import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureI18n from './config/i18n.config';
import * as serviceWorker from './serviceWorker';

configureI18n();

Promise.all([
  // hydrate persisted stores here
]).then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
