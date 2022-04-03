import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let initState = {
  isReady: false,
  data: "",
  func: "",
  result: "",
};

function reducer(state = initState, action) {
  let newState;
  switch (action.type) {
    case 'data':
      state.data = action.content;
      state.result = ""
      break;
    case 'func':
      state.func = action.content;
      state.result = ""
      break;
    case 'result':
      state.result = action.content;
      break;
  }

  if (state.data != "" && state.func != "") {
    state.isReady = true
  }
  else {
    state.isReady = false
    state.result = ""
  }
  newState = Object.assign({}, state, state)
  return newState
}

let store = createStore(reducer)

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
