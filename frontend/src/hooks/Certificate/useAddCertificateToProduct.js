import { useState } from "react";
import { addCertificateToProduct } from "../../service/certificate.service";
export const useAddCertificateToProduct = () => {
  const [successAddCertificateToProduct, setSuccessAddCertificateToProduct] =
    useState(false);
  const [messageAddCertificateToProduct, setMessageAddCertificateToProduct] =
    useState("");
  const [errorAddCertificateToProduct, setErrorAddCertificateToProduct] =
    useState(null);
  const loadAddCertificateToProduct = async (Obj) => {
    let res;
    try {
      res = await addCertificateToProduct(Obj);
      if (res.meta.status_code == 201) {
        setSuccessAddCertificateToProduct(true);
        setMessageAddCertificateToProduct("Added Certificate to product");
      }
    } catch (error) {
      setErrorAddCertificateToProduct(error);
      setSuccessAddCertificateToProduct(false);
    }
  };
  return {
    successAddCertificateToProduct,
    messageAddCertificateToProduct,
    errorAddCertificateToProduct,
    executeAddCertificateToProduct: loadAddCertificateToProduct,
  };
};
