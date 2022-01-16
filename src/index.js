import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
=======
>>>>>>> parent of bb7e2b3 (220113)
=======
>>>>>>> parent of bb7e2b3 (220113)

let store = createStore(()=>{
  return [
    { id : 0, name : 'White and Black', quan : 10},
    { id : 1, name : 'Red Knit', quan : 2},
    { id : 2, name : 'Grey Yordan', quan : 4},
    { id : 3, name : 'Flowey', quan : 6},
    { id : 4, name : 'Baby shoes', quan : 7},
    { id : 5, name : 'Red Herring', quan : 9}
  ]
});

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
<<<<<<< HEAD
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> parent of bb7e2b3 (220113)
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> parent of bb7e2b3 (220113)
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
