import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

/* Import of main css file compiled from SCSS main.scss */
import './scss/main.css';

/* <App/> is the root parent component for this application */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

