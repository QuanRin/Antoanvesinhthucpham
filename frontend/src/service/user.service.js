import { Axios } from "../config";
export const getAllUser = async (query, clientId, token) => {
  return await Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    // withCredentials: true,
    url: "/private/users" + query,
  });
};

export const createCompanyUser = async (Obj, clientId, access_token) => {
  console.log("clientId", clientId);
  console.log("token", access_token);
  let formData = new FormData();
  formData.append("businessId", Obj.businessId);
  formData.append("companyName", Obj.companyName);
  formData.append("description", Obj.description);
  formData.append("email", Obj.email);
  formData.append("faxNumber", Obj.faxNumber);
  formData.append("fullName", Obj.fullName);
  formData.append("nationalId", Obj.nationalId);
  formData.append("password", Obj.password);
  formData.append("phoneNumber", Obj.phoneNumber);
  formData.append("roleId", 3);
  formData.append("taxIndentity", Obj.taxIndentity);
  formData.append("userNumber", Obj.userNumber);

  return await Axios({
    method: "POST",
    headers: {
      ACCESS_TOKEN: access_token,
      client_id: clientId,
    },
    url: "/private/adm/user",
    data: formData,
  });
};
export const createUser = async (Obj, clientId, token) => {
  let formData = new FormData();
  formData.append("email", Obj.email);
  formData.append("fullName", Obj.fullName);
  formData.append("nationalId", Obj.nationalId);
  formData.append("password", Obj.password);
  formData.append("userNumber", Obj.userNumber);
  formData.append("roleId", Obj.roleId);
  return await Axios({
    method: "POST",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/private/adm/user",
    data: formData,
  });
};
export const deleteUser = async (storeId, clientId, token) => {
  return await Axios({
    method: "DELETE",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/user/" + storeId,
  });
};
export const updateUser = async (Obj, id, clientId, token) => {
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
    url: "/user/" + id,
    data: formData,
  });
};

export const getAllCompanies = async (query) => {
  return await Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJyb2xlIjoiQURNIiwiaXNzIjoibWluaG5nb2MiLCJleHAiOjE2ODA0MDk1MDMsImlhdCI6MTY4MDQwOTIwMywidXNlcklkIjoiMTBSMmgteF8zS0NfOFJPNGRBWjNIMnEifQ.b21RKgAlaCEGIwP5pwdmD21n9GxQkLWt-pKXprZh1lDjaKMawypkGYWJg54w4HEx4M5Qlt_bXCk7kfEM3_5KTdqeiCLuwwQmborY8PWlzoAOLl96iwnODwULUwCkg2B_KRNiuhKVeoh8FtIQAM-W8tQJe4ywnYc6XdYRgFRWtUOtbjD6NnATr2N6zGkqBMUMfd-iT1Eng51cYS8jyhkT-RGVYpA7bjtjiUma-6MnIdm4MVAY_t3eJhgGlpAeBB4z3maUUzvMggqmU_Vr7rqAjgkcuORsIjsb_fEt8I_FlVhQd_bvkHVMveI9H6rsBlTi1vbpQfqkV3sLc5kOWij-AA",
    },
    url: "/private/companies" + query,
  });
};
export const userComment = async (Obj) => {
  let formData = new FormData();
  for (const key in Obj) {
    formData.append(key, Obj[key]);
  }
  return await Axios({
    method: "POST",
    url: "/post",
    data: formData,
  });
};
export const companyRegister = async (Obj) => {
  let formData = new FormData();
  for (const key in Obj) {
    formData.append(key, Obj[key]);
  }
  return await Axios({
    method: "POST",
    url: "/auth/register",
    data: formData,
  });
};
export const getAllMods = async () => {
  return await Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJyb2xlIjoiQURNIiwiaXNzIjoibWluaG5nb2MiLCJleHAiOjE2ODA0MDk1MDMsImlhdCI6MTY4MDQwOTIwMywidXNlcklkIjoiMTBSMmgteF8zS0NfOFJPNGRBWjNIMnEifQ.b21RKgAlaCEGIwP5pwdmD21n9GxQkLWt-pKXprZh1lDjaKMawypkGYWJg54w4HEx4M5Qlt_bXCk7kfEM3_5KTdqeiCLuwwQmborY8PWlzoAOLl96iwnODwULUwCkg2B_KRNiuhKVeoh8FtIQAM-W8tQJe4ywnYc6XdYRgFRWtUOtbjD6NnATr2N6zGkqBMUMfd-iT1Eng51cYS8jyhkT-RGVYpA7bjtjiUma-6MnIdm4MVAY_t3eJhgGlpAeBB4z3maUUzvMggqmU_Vr7rqAjgkcuORsIjsb_fEt8I_FlVhQd_bvkHVMveI9H6rsBlTi1vbpQfqkV3sLc5kOWij-AA",
    },
    url: "/private/p/users",
  });
};
export const getOneUserById = async (id, clientId, token) => {
  return await Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/user/" + id,
  });
};
