import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './Services/authprovider'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </BrowserRouter>
)
