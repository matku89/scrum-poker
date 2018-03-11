import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux";
import scrumPoker from "./reducers";

let store = createStore(scrumPoker);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
