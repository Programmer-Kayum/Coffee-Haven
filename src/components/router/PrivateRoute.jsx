import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (user) {
    return children;
  }

  if (loading) {
    return (
      <>
        <div className="fixed inset-0 flex items-start justify-center pt-4 bg-white bg-opacity-50 z-50">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="sr-only">Loading...</span>
        </div>
      </>
    );
  }

  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
