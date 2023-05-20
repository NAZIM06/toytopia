import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllToys from "../Pages/AllToys";
import MyToys from "../Pages/MyToys";
import AddToy from "../Pages/AddToy";



const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'all-toys',
                element:<AllToys/>
            }
            ,
            {
                path: 'my-toys',
                element:<MyToys/>
            }
            ,
            {
                path: 'add-toy',
                element:<AddToy/>
            }
        ]
    }
])

export default route;