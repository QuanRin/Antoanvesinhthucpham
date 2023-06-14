import { SET_AUTH_STATE } from "./Constants";

export const setAuthState = (payload) => ({
  type: SET_AUTH_STATE,
  payload,
});
