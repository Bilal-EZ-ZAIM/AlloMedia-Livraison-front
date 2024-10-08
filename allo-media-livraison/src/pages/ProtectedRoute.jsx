import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { isLogin } = useSelector((state) => state.auth);
  console.log(isLogin);
  

  return isLogin ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
