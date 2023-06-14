import { useEffect, useState } from "react";
import { getAllBusinessType } from "../service/business.service";

export const useFetchBusinessType = () => {
  const [dataBusinessType, setDataBusinessType] = useState([]);
  const [loadingBusinessType, setLoadingBusinessType] = useState(false);
  const [errorBusinessType, setErrorBusinessType] = useState(null);
  useEffect(() => {
    let res;
    (async () => {
      try {
        setLoadingBusinessType(true);
        res = await getAllBusinessType();
        setDataBusinessType(res.data.result);
      } catch (error) {
        setErrorBusinessType(error);
      } finally {
        if (res !== undefined) {
          setLoadingBusinessType(false);
        }
      }
    })();
  }, []);
  return { dataBusinessType, errorBusinessType, loadingBusinessType };
};
