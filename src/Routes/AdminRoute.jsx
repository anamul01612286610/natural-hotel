import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hocks/useAdmin";
import useAuth from "../hocks/useAuth";


  export const AdminRoute = (children) => {
    const{user,loading} = useAuth()
const [isAdmin,isAdminLoading] = useAdmin();
const location = useLocation();
if (loading || isAdminLoading) {
    return <span className="loading loading-spinner"></span>
}
if (user && isAdmin) {
    return children
}
return <Navigate to="/login" state={location} replace ></Navigate>
};

export default AdminRoute;