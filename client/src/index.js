import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './pages/login';

import Register from './pages/register';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
  </Router>
);


reportWebVitals();
