import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/Home/Index";
import SignUp from "../pages/Sign Up/Index";
import Login from "../pages/Login/Index";



export default function Routes(){
    const routes = createBrowserRouter([
        {
            path: "/home",
            element: <Home/>
        },
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/signup",
            element: <SignUp />
        },
        {
            path: "/login",
            element: <Login />
        }

        
    ]);

    return <RouterProvider router={routes}/>
}
