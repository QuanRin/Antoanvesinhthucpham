import { Axios } from "~config";

export const getAllProducts = async (query, clientId, token) => {
  return await Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/private/products" + query,
  });
};
export const companyGetAllProduct = async (query, clientId, token) => {
  return await Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/cpn/product" + query,
  });
};
export const getAllProductKind = async () => {
  return await Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJyb2xlIjoiQURNIiwiaXNzIjoibWluaG5nb2MiLCJleHAiOjE2ODA0MDk1MDMsImlhdCI6MTY4MDQwOTIwMywidXNlcklkIjoiMTBSMmgteF8zS0NfOFJPNGRBWjNIMnEifQ.b21RKgAlaCEGIwP5pwdmD21n9GxQkLWt-pKXprZh1lDjaKMawypkGYWJg54w4HEx4M5Qlt_bXCk7kfEM3_5KTdqeiCLuwwQmborY8PWlzoAOLl96iwnODwULUwCkg2B_KRNiuhKVeoh8FtIQAM-W8tQJe4ywnYc6XdYRgFRWtUOtbjD6NnATr2N6zGkqBMUMfd-iT1Eng51cYS8jyhkT-RGVYpA7bjtjiUma-6MnIdm4MVAY_t3eJhgGlpAeBB4z3maUUzvMggqmU_Vr7rqAjgkcuORsIjsb_fEt8I_FlVhQd_bvkHVMveI9H6rsBlTi1vbpQfqkV3sLc5kOWij-AA",
    },
    url: "private/productkind",
  });
};

export const createNewProduct = async (Obj, clientId, token) => {
  let formData = new FormData();
  for (const key in Obj) {
    formData.append(key, Obj[key]);
  }
  return await Axios({
    method: "POST",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "private/product",
    data: formData,
  });
};
export const deleteProduct = async (id, clientId, token) => {
  return await Axios({
    method: "DELETE",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "private/product?id=" + id,
  });
};
export const deleteCertificateFromProduct = async (
  productId,
  certificateId,
  clientId,
  token
) => {
  return await Axios({
    method: "DELETE",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url:
      "private/product/certificate?productId=" +
      productId +
      "&certificateId=" +
      certificateId,
  });
};

export const updateProduct = async (Obj, clientId, token) => {
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
    url: "/private/product",
    data: formData,
  });
};
export const getHomeProducts = async (query) => {
  return await Axios({
    method: "GET",
    url: "/products" + query,
  });
};
