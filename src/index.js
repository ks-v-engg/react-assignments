import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Onandoff from './Components/Assignmentone';
import Header from './Components/Header';
import Oddoreven from './Components/Oddoreven';
import Weekday from './Components/Weekday';
import Login from './Components/Login';
import Cltofh from './Components/Cltofh';
import Studentform from './Components/Studentform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Header />
  <Onandoff />
  <Oddoreven />
  <Weekday />
  <Login />
  <Cltofh />
  <Studentform />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
