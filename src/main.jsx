import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// ReactDOM.render(<AppRouter />, document.getElementById('root'));
ReactDOM.createRoot(document.getElementById('root')).render(
  <AppRouter />
)