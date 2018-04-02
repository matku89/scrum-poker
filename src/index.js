import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from "redux";
import scrumPoker from "./reducers";
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import storySaga from "./sagas/storySaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(

    scrumPoker,
    applyMiddleware(sagaMiddleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

sagaMiddleware.run(storySaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker();
