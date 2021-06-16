import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import itemData from './itemData';

// let initState = {
//   total: RoomItens,
//   upload: RoomItens.filter
// }
// axios로 받아온 데이터를 변수 안에 객체로 담아준 뒤, total state와 filter된걸 두개로 분리해서
// action을 받아올 때, return에다가 새로 filter안하고 upload state 쓰기



// const RoomItems = axios.get("./data.json")
//   .then((res) => { return res.data })
//   .catch(() => { console.log('fail') })
//   console.log(RoomItems)

// let initState = RoomItems;
// console.log(initState)

let initState = itemData;

function reducer(state = initState, action) {
    return state;

}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
