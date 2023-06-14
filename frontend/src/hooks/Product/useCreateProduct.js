import { useState } from "react";
import { createNewProduct } from "~service";

export const useCreateProduct = () => {
  const [successCreateProduct, setSuccessCreateProduct] = useState(false);
  const [messageCreateProduct, setMessageCreateProduct] = useState("");
  const [errorCreateProduct, setErrorCreateProduct] = useState(null);

  const loadDataCreateProduct = async (Obj, clientId, token) => {
    let res;
    try {
      res = await createNewProduct(Obj, clientId, token);
      if (res.meta.status_code == 201) {
        setSuccessCreateProduct(true);
        setMessageCreateProduct("Add New Product Success");
      }
    } catch (error) {
      setErrorCreateProduct(error);
    }
  };
  return {
    successCreateProduct,
    messageCreateProduct,
    errorCreateProduct,
    executeCreateProduct: loadDataCreateProduct,
  };
};
