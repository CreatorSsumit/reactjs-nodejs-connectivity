import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider}  from "react-redux"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor,store } from './store';
import NotFound from '@container/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <Routes>
      <Route path='*' Component={App} />
      <Route Component={NotFound} />
    </Routes>
    </BrowserRouter>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
