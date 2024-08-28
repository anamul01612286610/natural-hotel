import { useContext } from "react";
import { AuthContext } from "../Pages/providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PriveteRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-spinner"></span>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={location} replace ></Navigate>
};

export default PriveteRoute;