import React, { useState } from "react";
import { loginHandler } from "../../../service/auth.service";
import { useContext } from "react";
import { StoreContext } from "../../../store";
import { SET_AUTH_STATE } from "../../../store/Constants";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Loading from "../../Loading/Loading";

const Login = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errMessage, setErrMessage] = useState();
  const [state, dispatch] = useContext(StoreContext);
  const navigate = useNavigate();
  const updateGlobalState = ({ id, token, role }) => {
    dispatch({
      type: SET_AUTH_STATE,
      payload: { id: id, token: token, role: role },
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoaded(true);
    try {
      const res = await loginHandler(email, password);
      if (res) {
        setIsLoaded(false);
      }
      if (res.meta.error) {
        setErrMessage(res.meta.error);
        return;
      }

      if (res.data) {
        setIsLoaded(false);
        updateGlobalState({
          id: res.data.id,
          token: res.data.ACCESS_TOKEN,
          role: res.data.role,
        });
        if (res.data.role === "Admin") {
          return navigate("/admin");
        }
        if (res.data.role === "Moderator") {
          return navigate("/moderator");
        }
        if (res.data.role === "Store") {
          return navigate("/company");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {isLoaded && <Loading />}
      <div className="LogIn-container">
        <div className="LogIn-glass">
          <div className="Login">
            <h1>Log In</h1>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errMessage && <div>{errMessage}</div>}

              <button type="submit" onClick={(e) => handleLogin(e)}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
