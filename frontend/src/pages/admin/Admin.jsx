import { useContext } from "react";
import TableRecentStores from "../../components/TableRecentStores/TableRecentStores";
import StatsBanner from "./../../components/StatsBanner/StatsBanner";
import "./Admin.css";
import { StoreContext } from "~store";
export const Admin = () => {
  const [state] = useContext(StoreContext);
  return (
    <div className="Maindash">
      {state.role === "Moderator" ||
        (state.role === "Admin" && (
          <>
            <h1>Dashboard</h1> <StatsBanner />
          </>
        ))}
      <TableRecentStores />
    </div>
  );
};
