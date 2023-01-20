import {createBrowserRouter} from "react-router-dom";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import EditUser from "../pages/EditUser";
import ForgotPassword from "../pages/ForgotPassword";
import ErrorPage from "../pages/ErrorPage";


const routers = createBrowserRouter([
    {
        path:"/",
        element:<Registration/>,
        errorElement:<ErrorPage />
    },
    {
        path:"/Login",
        element:<Login/>
    },
    {
        path:"/Dashboard",
        element:<Dashboard/>
    },
    {
        path:"/EditUser/:userId",
        element:<EditUser/>
    },
    {
        path:"/ForgotPassword",
        element:<ForgotPassword/>
    }
])

export {routers}