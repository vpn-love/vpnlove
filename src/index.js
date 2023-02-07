import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/index.scss';
import ScrollToTop from './components/scrollToTop';
import App from './components/App';
import { HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>
);
