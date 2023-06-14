import { getAllMods } from "../../service/user.service";
import { useState, useEffect } from "react";
export const useGetAllMods = () => {
  const [dataGetAllMods, setDataGetAllMods] = useState([]);
  const [loadingGetAllMods, setLoadingGetAllMods] = useState(false);
  const [errorGetAllMods, setErrorGetAllMods] = useState(null);
  useEffect(() => {
    let res;
    (async () => {
      try {
        res = await getAllMods();
        setDataGetAllMods(res.data.result);
      } catch (error) {
        setErrorGetAllMods(error);
      } finally {
        if (res !== undefined) {
          setLoadingGetAllMods(false);
        }
      }
    })();
  }, []);
  return { dataGetAllMods, errorGetAllMods, loadingGetAllMods };
};
