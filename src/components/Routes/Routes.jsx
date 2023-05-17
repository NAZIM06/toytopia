import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";



const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default route;