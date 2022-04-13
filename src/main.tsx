import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/reset.scss';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
