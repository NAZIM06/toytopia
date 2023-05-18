import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog";



const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main> ,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'blog',
                element: <Blog/>
            }
        ]
    }
])

export default route;