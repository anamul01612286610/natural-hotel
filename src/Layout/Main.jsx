import { Outlet, useLocation } from "react-router-dom";
import Navber from "../Pages/Shared/Navber/Navber";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    const location = useLocation();
    console.log(location)
    const noHeaderFooter = location.pathname.includes("signUp") ||
    location.pathname.includes("login");
  
    return (
        <div>
           {noHeaderFooter || <Navber></Navber>}
            <Outlet></Outlet>
    {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;