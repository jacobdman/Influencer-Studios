import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import StudioProvider from './context/StudioProvider';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <StudioProvider>
      <App />
    </StudioProvider>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
