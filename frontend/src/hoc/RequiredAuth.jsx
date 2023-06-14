import { useContext } from "react";
import { StoreContext } from "~store";
import { Navigate, Outlet } from "react-router-dom";

export const RequireAuth = (props) => {
  const { roles } = props;
  console.log(roles);
  const [state] = useContext(StoreContext);
  console.log(state.role);
  if (roles) {
    const content = roles.includes(state.role) ? (
      <Outlet />
    ) : (
      <Navigate to="/404" replace />
    );
    return content;
  }
};
