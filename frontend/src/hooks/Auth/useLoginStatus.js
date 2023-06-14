import { useContext } from "react";
import { StoreContext } from "../../store";

export const useAuth = (role) => {
  const [state] = useContext(StoreContext);
  if (state.role !== role || !state.token) {
    return { isLogged: false, role: "" };
  }
  return { isLogged: true, role: role };
};
