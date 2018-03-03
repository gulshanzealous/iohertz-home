import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';

import './index.css';
import { BrowserRouter } from 'react-router-dom'

import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
render(
<BrowserRouter>
    <App />
</BrowserRouter>
, 
document.getElementById('root'));
// registerServiceWorker();
