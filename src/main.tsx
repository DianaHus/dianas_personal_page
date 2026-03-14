import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// `document.getElementById('root')!` — il `!` è TypeScript per dire
// "so con certezza che questo elemento esiste" (non-null assertion operator)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
