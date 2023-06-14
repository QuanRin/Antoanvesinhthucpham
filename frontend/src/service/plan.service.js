import Axios from "../config/axios.config";

export const getAllPlans = (url, clientId, token) => {
  return Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/private/plans" + url,
  });
};
export const addNewPlan = (Obj, clientId, token) => {
  let formData = new FormData();
  for (const key in Obj) {
    formData.append(key, Obj[key]);
  }
  return Axios({
    method: "POST",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/private/adm/plan",
    data: formData,
  });
};

export const editTimeOfPlan = async (time, planId, clientId, token) => {
  let formData = new FormData();
  formData.append("id", planId);
  formData.append("time", time);
  return await Axios({
    method: "PUT",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/private/adm/plan",
    data: formData,
  });
};

export const changeStatusPlan = async (planId) => {
  return await Axios({
    method: "PUT",
    headers: {
      ACCESS_TOKEN:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJyb2xlIjoiQURNIiwiaXNzIjoibWluaG5nb2MiLCJleHAiOjE2ODA0MDk1MDMsImlhdCI6MTY4MDQwOTIwMywidXNlcklkIjoiMTBSMmgteF8zS0NfOFJPNGRBWjNIMnEifQ.b21RKgAlaCEGIwP5pwdmD21n9GxQkLWt-pKXprZh1lDjaKMawypkGYWJg54w4HEx4M5Qlt_bXCk7kfEM3_5KTdqeiCLuwwQmborY8PWlzoAOLl96iwnODwULUwCkg2B_KRNiuhKVeoh8FtIQAM-W8tQJe4ywnYc6XdYRgFRWtUOtbjD6NnATr2N6zGkqBMUMfd-iT1Eng51cYS8jyhkT-RGVYpA7bjtjiUma-6MnIdm4MVAY_t3eJhgGlpAeBB4z3maUUzvMggqmU_Vr7rqAjgkcuORsIjsb_fEt8I_FlVhQd_bvkHVMveI9H6rsBlTi1vbpQfqkV3sLc5kOWij-AA",
    },
    url: "/private/admin/plan?id=" + planId,
  });
};

export const getSpecificPlan = async (id) => {
  return await Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJyb2xlIjoiQURNIiwiaXNzIjoibWluaG5nb2MiLCJleHAiOjE2ODA0MDk1MDMsImlhdCI6MTY4MDQwOTIwMywidXNlcklkIjoiMTBSMmgteF8zS0NfOFJPNGRBWjNIMnEifQ.b21RKgAlaCEGIwP5pwdmD21n9GxQkLWt-pKXprZh1lDjaKMawypkGYWJg54w4HEx4M5Qlt_bXCk7kfEM3_5KTdqeiCLuwwQmborY8PWlzoAOLl96iwnODwULUwCkg2B_KRNiuhKVeoh8FtIQAM-W8tQJe4ywnYc6XdYRgFRWtUOtbjD6NnATr2N6zGkqBMUMfd-iT1Eng51cYS8jyhkT-RGVYpA7bjtjiUma-6MnIdm4MVAY_t3eJhgGlpAeBB4z3maUUzvMggqmU_Vr7rqAjgkcuORsIjsb_fEt8I_FlVhQd_bvkHVMveI9H6rsBlTi1vbpQfqkV3sLc5kOWij-AA",
    },
    url: "/private/adm/plan?id=" + id,
  });
};
export const deletePlan = async (planId, clientId, token) => {
  return await Axios({
    method: "DELETE",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/private/adm/plan?id=" + planId,
  });
};
export const addInspectorToPlan = async (planId, userId, clientId, token) => {
  let formData = new FormData();
  formData.append("planId", planId);
  formData.append("userId", userId);
  return await Axios({
    method: "POST",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/private/adm/plan/inspectors",
    data: formData,
  });
};
export const getPlanDocx = async (id, clientId, token) => {
  return await Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/private/report?id=" + id,
  });
};

export const submitDocx = async (planId, filePath, clientId, token) => {
  let formData = new FormData();
  formData.append("file", filePath);
  formData.append("planId", planId);
  return await Axios({
    method: "POST",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "private/report",
    data: formData,
  });
};
