import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import Providers from './providers'

 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Providers>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Providers>
  </BrowserRouter>
)
