import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';

// If the browser drops a WebGL context (low-memory phones, GPU resets), hide that canvas
// instead of letting Chrome draw its broken "sad face" icon. The section behind still shows.
document.addEventListener(
  'webglcontextlost',
  (e) => {
    if (e.target instanceof HTMLCanvasElement) e.target.style.visibility = 'hidden';
  },
  true
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
