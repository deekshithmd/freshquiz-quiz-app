import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "contexts";
import { ReactNode } from "react";

export const RequiresAuth = ({ children }:{children:ReactNode}) => {
  const { isLoggedin } = useAuth();
  const location = useLocation();
  return isLoggedin ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace></Navigate>
  );
};
