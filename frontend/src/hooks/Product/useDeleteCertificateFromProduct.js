import { useState } from "react";
import { deleteCertificateFromProduct } from "~service";
export const useDeleteCertificateFromProduct = () => {
  const [
    successDeleteCertificateFromProduct,
    setSuccessDeleteCertificateFromProduct,
  ] = useState(false);
  // const [messageDeleteCertificateFromProduct, setMessageDeleteCertificateFromProduct] = useState('');
  const [
    errorDeleteCertificateFromProduct,
    setErrorDeleteCertificateFromProduct,
  ] = useState(null);
  const loadDeleteCertificateFromProduct = async (
    productId,
    certificateId,
    clientId,
    token
  ) => {
    let res;
    try {
      res = await deleteCertificateFromProduct(
        productId,
        certificateId,
        clientId,
        token
      );
      if (res.meta.status_code == 200) {
        setSuccessDeleteCertificateFromProduct(true);
      }
    } catch (error) {
      setErrorDeleteCertificateFromProduct(error);
    }
  };
  return {
    successDeleteCertificateFromProduct,
    errorDeleteCertificateFromProduct,
    executeDeleteCertificateFromProduct: loadDeleteCertificateFromProduct,
  };
};
