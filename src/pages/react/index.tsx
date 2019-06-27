import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '@/redux/reducers'
import Container from './react.js'
import './react.css';

const store = createStore(rootReducer)
let a:string="aaaa";
console.log(a);
ReactDOM.render(
    <Provider store={store}>
          <Container/>
    </Provider>,
    document.getElementById("app")
)