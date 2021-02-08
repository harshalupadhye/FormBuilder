import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from  'react-redux';
import rootReducer from './store/reducer/form'
import createSagaMiddleware from 'redux-saga';
import {createStore,applyMiddleware,compose} from 'redux';

const composeEnhancers = process.env.NODE_ENV==='development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose;
const sagaMiddleware=createSagaMiddleware()

const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk,sagaMiddleware)))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}><App /></Provider>
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
