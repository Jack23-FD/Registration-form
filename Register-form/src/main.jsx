import react from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import Login from './login.jsx';
import './assets/index.css';
import Conform from './assets/conform.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Conform/>
  </StrictMode>
);
