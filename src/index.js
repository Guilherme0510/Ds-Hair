import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app1.jsx';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'; // Importa las funciones de métricas individuales


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </>
);

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);