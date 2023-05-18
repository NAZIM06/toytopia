import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Home from "../Pages/Home/Home";



const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main> ,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])

export default route;