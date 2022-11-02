import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './boardApp/App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todos, { restore } from './todoApp/modules/todos';
import { BrowserRouter } from 'react-router-dom';

// const store = createStore(todos, composeWithDevTools());

// function loadData() {
//   try {
//     const data = localStorage.getItem('todo-app-data');
//     console.log('loadData data : ' + data);

//     if (!data) return;

//     store.dispatch(restore(JSON.parse(data)));
//   } catch (e) {
//     console.log('localStorage is not working');
//   }
// }

// loadData();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
