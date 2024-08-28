import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping, FaCalculator } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { FaAd, FaAddressBook, FaDAndD, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser,  } from "react-icons/fa";
import useAdmin from "../hocks/useAdmin";

const Deshboard = () => {
   
    // Too get isAdmin value from the database

    const [isAdmin] =  useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
               {
                isAdmin? <>
                 

                  <li><NavLink to='/deshboard/adminHome'>
                     <FaHome></FaHome>
                       Admin Home
                    </NavLink></li>
                    <li><NavLink to='/deshboard/addItems'>
                       <FaShoppingCart></FaShoppingCart>
                       Add Items
                    </NavLink></li>
                    <li><NavLink to='/deshboard/ManageItems'>
                      <FaList></FaList>
                      Mange Items
                    </NavLink></li>
                    <li><NavLink to='/deshboard/Manage'>
                    <FaAd></FaAd>
                    manage Bookies
                    </NavLink></li>
                    <li><NavLink to='/deshboard/users'>
                       <FaUser></FaUser>
                       All Users
                    </NavLink></li> 
                </>
                :
                <>
                 <li><NavLink to='/deshboard/userHome'>
                        <IoHomeOutline />
                        User Home
                    </NavLink></li>
                    <li><NavLink to='/deshboard/reservation'>
                        <FaCalculator />
                        Reservation
                    </NavLink></li>
                    <li><NavLink to='/deshboard/cart'>
                        <FaCartShopping />
                        my Cart
                    </NavLink></li>
                    <li><NavLink to='/deshboard/review'>
                        <FaDAndD></FaDAndD>
                        Add a Review
                    </NavLink></li>
                    <li><NavLink to='/deshboard/FaDad'>
                        <FaAddressBook />
                        My Bookings
                    </NavLink></li>
                </> 
               }
                 
                    <div className="divider lg:divider-horizontal">   </div>
                    <li><NavLink to='/'>
                        <IoHomeOutline />
                        HOME
                    </NavLink></li>
                    <li><NavLink to='/order/salad'>
                        <FaSearch></FaSearch>
                        Menu
                    </NavLink></li>
                    <li><NavLink to='/order/contact'>
                        <FaEnvelope></FaEnvelope>
                        contact
                    </NavLink></li>
                </ul>

            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Deshboard;

