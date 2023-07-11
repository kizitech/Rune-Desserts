import React from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import Sass from './sass/mainStyles/main.scss'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)