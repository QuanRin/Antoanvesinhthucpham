import Axios from "./../config/axios.config";

export const loginHandler = async (email, password) => {
  const formData = new FormData();
  formData.set("email", email);
  formData.set("password", password);
  return await Axios({
    method: "post",
    url: "/auth/login",
    data: formData,
  });
};

export const resetPassword = async (
  oldPassword,
  newPassword,
  clientId,
  token
) => {
  const formData = new FormData();
  formData.set("oldPassword", oldPassword);
  formData.set("newPassword", newPassword);
  return await Axios({
    method: "PUT",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "auth/reset",
    data: formData,
  });
};
