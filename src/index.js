import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers";
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import storySaga from "./sagas/storySaga";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(

    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    ),

);

sagaMiddleware.run(storySaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker();
