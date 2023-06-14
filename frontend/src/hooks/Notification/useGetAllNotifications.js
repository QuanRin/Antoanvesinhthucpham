import { useState, useEffect, useCallback } from "react";
import { getAllNotifications } from "../../service/notification.service";
import { ConvertToQueryParams } from "~utils";
const useGetAllNotifications = (url, clientId, token) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});
  const [success, setSuccess] = useState(false);
  const loadData = useCallback(async (url, clientId, token) => {
    let res;
    try {
      setLoading(true);
      res = await getAllNotifications(
        ConvertToQueryParams(url),
        clientId,
        token
      );
      if (res.meta.status_code == 200) {
        setData(res.data.result);
        setPagination(res.pagination);
        setSuccess(true);
      }
    } catch (error) {
      setError(error);
    } finally {
      if (res !== undefined) {
        setLoading(false);
      }
    }
  }, []);
  useEffect(() => {
    loadData(url, clientId, token);
  }, [url, clientId, token]);

  return {
    pagination,
    data,
    success,
    error,
    loading,
    execute: loadData,
  };
};

export default useGetAllNotifications;
