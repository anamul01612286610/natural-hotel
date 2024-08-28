import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PriveteRoute from "./PriveteRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Deshboard from "../Layout/Deshboard";
import Cart from "../Pages/Deshboard/cart/Cart";
import AllUsers from "../Pages/Deshboard/AllUsers/AllUsers";
import AddItems from "../Pages/Deshboard/AddItems/AddItems";
import Payments from "../Pages/Deshboard/Payment/Payments";
import UserHome from "../Pages/Deshboard/UserHome/UserHome";
import AdminHome from "../Pages/Deshboard/AdminHome/AdminHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order/:category',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/secret',
        element: <PriveteRoute><Secret></Secret></PriveteRoute>
      }
    ]
  },
  {
    path: 'deshboard',
    element: <PriveteRoute><Deshboard></Deshboard></PriveteRoute>,
    children: [
      {
        path:'userhome',
        element:<UserHome></UserHome>
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
       path:'payment',
       element:<Payments></Payments>
      },

      // Admin Routes 
      {
        path: 'adminHome',
        element:<AdminHome></AdminHome>
      },
      {
         path:'addItems',
         element:<AddItems></AddItems>
   
      },
        {
        path: 'users',
        element: <AllUsers></AllUsers>
      }
    ]
  }

]);