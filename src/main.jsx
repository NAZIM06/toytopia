import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './components/Routes/Routes'
// import AuthProvider from './components/Provider/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <AuthProvider> </AuthProvider>
    <RouterProvider router={route} />
 
)