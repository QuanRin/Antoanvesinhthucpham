import React, { useContext, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./ResetPassword.css";
import { StoreContext } from "~store";
import { useResetPassword } from "../../../hooks/Auth/useResetPassword";
const ResetPassword = (props) => {
  const [state] = useContext(StoreContext);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [error, setError] = useState(false);
  const {
    statusCode,
    successResetPassword,
    errorResetPassword,
    executeResetPassord,
  } = useResetPassword();
  useEffect(() => {
    if (statusCode == 200) {
      props.handleShowModalResetPassword(false);
      props.handleShowSuccessAction("Changed Password Success");
    }
    if (statusCode == 401) {
      setError(true);
    }
  }, [statusCode, executeResetPassord]);
  const handleResetPassword = async (e) => {
    e.preventDefault();
    await executeResetPassord(oldPassword, newPassword, state.id, state.token);
  };
  return (
    <div className="reset-password-container">
      <div className="reset-password-content">
        <h1>Update Password</h1>

        <div className="x-icon">
          <FaTimes
            onClick={() => {
              props.handleShowModalResetPassword(false);
            }}
          />
        </div>

        <form action="">
          <div className="form-group">
            <label className="form-input-control" htmlFor="Nhập mật khẩu cũ">
              Nhập mật khẩu cũ
            </label>
            <input
              className="form-input-control"
              type="text"
              placeholder="Nhập mật khẩu cũ"
              onChange={(e) => {
                setOldPassword(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label className="form-input-control" htmlFor="Nhập mật khẩu mới">
              Nhập mật khẩu mới
            </label>
            <input
              className="form-input-control"
              type="text"
              placeholder="Nhập mật khẩu mới"
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
          </div>
          {error && <span>Mật khẩu cũ không đúng</span>}
        </form>

        <button onClick={handleResetPassword}>Submit</button>
      </div>
    </div>
  );
};

export default ResetPassword;
