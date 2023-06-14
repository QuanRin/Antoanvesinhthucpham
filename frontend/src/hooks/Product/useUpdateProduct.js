import { useState } from "react";
import { updateProduct } from "~service";

export const useUpdateProduct = () => {
  const [successUpdateProduct, setSuccessUpdateProduct] = useState(false);
  const [messageUpdateProduct, setMessageUpdateProduct] = useState("");
  const [errorUpdateProduct, setErrorUpdateProduct] = useState(null);
  const loadUpdateProduct = async (Obj, clientId, token) => {
    let res;
    try {
      res = await updateProduct(Obj, clientId, token);
      if (res.meta.status_code == 204) {
        setSuccessUpdateProduct(true);
        setMessageUpdateProduct("Updated Product");
      }
    } catch (error) {
      setErrorUpdateProduct(error);
    }
  };
  return {
    successUpdateProduct,
    messageUpdateProduct,
    errorUpdateProduct,
    executeUpdateProduct: loadUpdateProduct,
  };
};
