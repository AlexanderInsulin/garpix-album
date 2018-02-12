import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import galeryApp from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import actions from './actions/'
import { loadState, saveState } from './utils/loadState';
import thunk from 'redux-thunk';

const persistedState = loadState();
const store = createStore(
  galeryApp,
  persistedState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

store.subscribe(() => {
  saveState(store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
