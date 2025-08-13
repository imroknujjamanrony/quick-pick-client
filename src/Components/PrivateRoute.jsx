
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProviders";

const PrivateRoute = ({ children}) => {

  const { user , loading } = useContext(AuthContext)
if(loading) {
  <span className="loading loading-spinner loading-lg"></span>
}

 if(user) {
  return children
 }
 return (
  <div>
    <Navigate to = '/login'></Navigate>
  </div>
 )
};

export default PrivateRoute;