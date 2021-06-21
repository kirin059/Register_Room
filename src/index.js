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


// async function ajax( {item} ) {
//   const RoomItems = await axios
//     .get("./data.json")
//     .then((res) => {
//       return res.data;
//     })
//     .catch(() => {
//       console.log("fail");
//     });
// }
// ajax()

// console.log(item)

// const RoomItems = axios.get("./data.json")
//   .then((res) => { return res.data })
//   .catch(() => { console.log('fail') })
//   console.log(RoomItems)


let initState = itemData;


function reducer(state = initState, action) {
  if (action.type === 'upload') {
    let found = itemData.filter((a) => { return a.canceled == true });
    let setState = [...itemData]
    setState = [...found]
    return setState
  }
  else if (action.type === 'download') {
    let found = itemData.filter((a) => { return a.canceled == false });
    console.log(found)
    let setState = [...itemData]
    setState = [...found]
    return setState
  }
  else {
    return state;
  }
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
