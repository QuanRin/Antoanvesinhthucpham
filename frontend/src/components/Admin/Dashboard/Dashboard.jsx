import React, { useContext } from "react";
import CardsChart from "../../StatsBanner/StatsBanner";
import "./Dashboard.css";
import TableRecentStores from "../../TableRecentStores/TableRecentStores";
import { StoreContext } from "~store";
const Dashboard = () => {
  const [state] = useContext(StoreContext);
  console.log("state", state);
  return (
    <div className="Maindash">
      <h1>Dashboard</h1>
      {/* {state.role === "Admin" && <CardsChart />} */}
      <CardsChart />
      {/* <TableRecentStores /> */}
    </div>
  );
};
export default Dashboard;
