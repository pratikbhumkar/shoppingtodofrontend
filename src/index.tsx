import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import Reducer from "./store/Reducer";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchTodos } from './store/ToDoReducer/ToDoReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  Reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
store.dispatch(fetchTodos)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
