import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // função App de App.jsx
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) // aqui foi criado a 'raiz' HTML dentro de 'root' que está em index.html
