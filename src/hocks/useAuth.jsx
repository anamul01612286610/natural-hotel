import { useContext } from "react";
import { AuthContext } from "../Pages/providers/AuthProvider";

 
 export const useAuth = () => {

     const auth = useContext(AuthContext)
     return auth;
  
};

export default useAuth;