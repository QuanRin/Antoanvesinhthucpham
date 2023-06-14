import { ConvertToQueryParams } from "~utils";
import { getAllCompanies } from "../../service/user.service";
import { useEffect, useState, useCallback } from "react";
export const getAllCompaniesCurrent = (url) => {
  const [paginationCompanies, setPaginationCompanies] = useState({});
  const [errorCompanies, setErrorCompanies] = useState(null);
  const [dataCompanies, setDataCompanies] = useState([]);
  const loadDataCompanies = useCallback(async (url) => {
    let res;
    try {
      res = await getAllCompanies(ConvertToQueryParams(url));
      if (res.meta.status_code == 200) {
        setDataCompanies(res.data.result);
        setPaginationCompanies(res.pagination);
      }
    } catch (error) {
      setErrorCompanies(error);
    }
  }, []);
  useEffect(() => {
    loadDataCompanies(url);
  }, [loadDataCompanies, url]);

  return {
    dataCompanies,
    errorCompanies,
    paginationCompanies,
    executeDataCompanies: loadDataCompanies,
  };
};
