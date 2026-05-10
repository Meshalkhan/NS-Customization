import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/app-shell.css';
import App from './App';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

