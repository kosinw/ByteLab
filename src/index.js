import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'mobx-react';
import stores from './stores/root'

import './styles/syntax.css';

ReactDOM.render(
<Provider {...stores}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
