import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import galeryApp from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux'


const store = createStore(galeryApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
