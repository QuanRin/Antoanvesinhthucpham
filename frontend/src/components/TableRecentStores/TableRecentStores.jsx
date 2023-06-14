import NotificationRowElement from "../../components/tables/Notification/NotificationRowElement";
import useGetAllNotifications from "../../hooks/Notification/useGetAllNotifications";
import React, { useContext, useState } from "react";
import { StoreContext } from "~store";
import { Pagination } from "@mui/material";
const TableRecentStores = () => {
  const [state] = useContext(StoreContext);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [filter, setFilter] = useState({ page: 1 });
  const { pagination, data, success, error, loading, execute } =
    useGetAllNotifications(filter, state.id, state.token);
  const handleOnChange = (event, value) => {
    setPageCurrent(value);
    setFilter({ page: value });
  };
  return (
    <>
      <div className="notification-header">
        <h1>Notifications</h1>
      </div>
      <div className="notifications-content">
        {Array.isArray(data) &&
          data.length > 0 &&
          data.map((item, index) => {
            return (
              <NotificationRowElement
                key={index}
                index={index + 1 + (pageCurrent - 1) * 8}
                item={item}
              />
            );
          })}
      </div>
      {
        <div className="pagination">
          <Pagination
            count={pagination.totalPages}
            showFirstButton
            showLastButton
            onChange={handleOnChange}
          />
        </div>
      }
    </>
  );
};

export default TableRecentStores;
