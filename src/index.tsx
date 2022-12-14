import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './boardApp/App';
// import App from './fileBoardApp/App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import App from './ImageShopApp/App';
import { checkMyInfo, setAccessToken } from './ImageShopApp/modules/auth';
import Cookies from 'js-cookie';
import client from './ImageShopApp/lib/client';
import rootReducer, { rootSaga } from './ImageShopApp/modules';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

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

function loadUser() {
  try {
    const savedToken = Cookies.get('accessToken');

    if (!savedToken) return;

    store.dispatch(setAccessToken(savedToken));

    client.defaults.headers.common.Authorization = `Bearer ${savedToken}`;

    store.dispatch(checkMyInfo());
  } catch (e) {
    console.log(e);
  }
}

loadUser();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
