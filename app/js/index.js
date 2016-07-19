import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app.js';
import reducers from './reducers';

import style from '../styles/index.scss';

let store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
  </Provider>, document.getElementById('react-app'));