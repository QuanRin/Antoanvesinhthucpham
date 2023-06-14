import { useState } from "react";
import { getOneUserById } from "../../service/user.service";
export const useGetOneUserById = () => {
  const [successGetOneUserById, setSuccessGetOneUserById] = useState(false);
  const [dataGetOneUserById, setDataGetOneUserById] = useState({});
  const [errorGetOneUserById, setErrorGetOneUserById] = useState(null);

  const loadGetOneUserById = async (id, clientId, token) => {
    let res;
    try {
      res = await getOneUserById(id, clientId, token);
      if (res.meta.status_code == 200) {
        setDataGetOneUserById(res.data.result);
        setSuccessGetOneUserById(true);
      }
    } catch (error) {
      setErrorGetOneUserById(error);
    }
  };
  return {
    dataGetOneUserById,
    successGetOneUserById,
    errorGetOneUserById,
    executeGetOneUserById: loadGetOneUserById,
  };
};
