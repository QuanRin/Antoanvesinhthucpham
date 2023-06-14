import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { StoreContext } from "~store";

export const RedirectAccess = () => {
  const [state] = useContext(StoreContext);
  const location = useLocation();
  if (state.role === "") {
    return <Outlet />;
  }
  const content =
    state.role === "" ? (
      <Outlet />
    ) : (
      <Navigate to="/home" state={{ from: location }} replace />
    );
  return content;
};
