import axios from "axios";
import Axios from "../config/axios.config";

export const getAllCertificate = async (query, clientId, token) => {
  return await Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/private/certificate" + query,
  });
};
export const createCertificate = async (Obj, clientId, token) => {
  let formDataCertificate = new FormData();
  formDataCertificate.append("image", Obj.image);
  formDataCertificate.append("name", Obj.name);
  formDataCertificate.append("description", Obj.description);

  return await Axios({
    method: "POST",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/private/certificate",
    data: formDataCertificate,
  });
};
export const deleteCertificate = async (id, clientId, token) => {
  return await Axios({
    method: "DELETE",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/private/certificate/" + id,
  });
};
export const updateCertificate = async (Obj, clientId, token) => {
  let formData = new FormData();
  for (const key in Obj) {
    formData.append(key, Obj[key]);
  }
  return await Axios({
    method: "PUT",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/private/certificate",
    data: formData,
  });
};

export const addCertificateToProduct = async (Obj) => {
  let formData = new FormData();
  for (const key in Obj) {
    formData.append(key, Obj[key]);
  }
  return await Axios({
    method: "POST",
    headers: {
      ACCESS_TOKEN:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJyb2xlIjoiQURNIiwiaXNzIjoibWluaG5nb2MiLCJleHAiOjE2ODA0MDk1MDMsImlhdCI6MTY4MDQwOTIwMywidXNlcklkIjoiMTBSMmgteF8zS0NfOFJPNGRBWjNIMnEifQ.b21RKgAlaCEGIwP5pwdmD21n9GxQkLWt-pKXprZh1lDjaKMawypkGYWJg54w4HEx4M5Qlt_bXCk7kfEM3_5KTdqeiCLuwwQmborY8PWlzoAOLl96iwnODwULUwCkg2B_KRNiuhKVeoh8FtIQAM-W8tQJe4ywnYc6XdYRgFRWtUOtbjD6NnATr2N6zGkqBMUMfd-iT1Eng51cYS8jyhkT-RGVYpA7bjtjiUma-6MnIdm4MVAY_t3eJhgGlpAeBB4z3maUUzvMggqmU_Vr7rqAjgkcuORsIjsb_fEt8I_FlVhQd_bvkHVMveI9H6rsBlTi1vbpQfqkV3sLc5kOWij-AA",
    },
    url: "/private/product/certificate",
    data: formData,
  });
};
