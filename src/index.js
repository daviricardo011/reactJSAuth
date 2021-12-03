import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screens/app';
import SeletorRota from './routes'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SeletorRota />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
