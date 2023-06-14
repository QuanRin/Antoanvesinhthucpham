import { deleteProduct } from "~service";
import { useState } from "react";

export const useDeleteProduct = () => {
  const [successDeleteProduct, setSuccessDeleteProduct] = useState(false);
  const [messageDeleteProduct, setMessageDeleteProduct] = useState("");
  const [errorDeleteProduct, setErrorDeleteProduct] = useState(null);
  const loadDataDeleteProduct = async (id, clientId, token) => {
    let res;
    try {
      res = await deleteProduct(id, clientId, token);
      if (res.meta.status_code == 200) {
        setSuccessDeleteProduct(true);
        setMessageDeleteProduct("Deleted Product");
      }
    } catch (error) {
      setErrorDeleteProduct(error);
    }
  };
  return {
    successDeleteProduct,
    messageDeleteProduct,
    errorDeleteProduct,
    executeDeleteProduct: loadDataDeleteProduct,
  };
};

export default useDeleteProduct;
