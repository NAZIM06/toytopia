import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './components/Routes/Routes'
import AuthProvider from './Provider/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
   <AuthProvider> 
    <RouterProvider router={route} />
    </AuthProvider>
)