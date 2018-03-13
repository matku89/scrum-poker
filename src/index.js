import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux";
import scrumPoker from "./reducers";
import { Provider } from 'react-redux'

let store = createStore(
    scrumPoker,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
