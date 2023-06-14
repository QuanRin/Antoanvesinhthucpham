import React, { useContext, useEffect, useState } from "react";
// import { FaTimes } from 'react-icons/fa';
import { useCreateUser } from "../../../hooks/User/useCreateUser";
import ClearIcon from "@mui/icons-material/Clear";
import "./AddAccount.css";
import { StoreContext } from "~store";
// import Loading from "../../Loading/Loading";
function AddAccount(props) {
  const [state] = useContext(StoreContext);

  const { fetchDataUser, setShowModalAddUser } = props;
  const [formAdduser, setFormAddUser] = useState({
    email: "",
    fullName: "",
    nationalId: "",
    userNumber: "",
    password: "",
    roleId: "",
  });
  const { statusCode, message, error, execute } = useCreateUser();
  const [errorUserRegistered, setErrorUserRegistered] = useState(false);
  const actionSuccess = async () => {
    await props.handleShowModalAddUser(false);
    await props.handleShowActionPerform(message);
    await props.fetchDataUser();
  };

  useEffect(() => {
    // console.log("state code", statusCode);
    // console.log(error);
    console.log("message", message);
    if (statusCode == 201) {
      actionSuccess();
    }
    if (statusCode == 409) {
      setErrorUserRegistered(true);
      // console.log("loi");
    }
  }, [execute, statusCode]);
  const handleAdduser = async (e) => {
    e.preventDefault();
    await execute(formAdduser, state.id, state.token);
  };

  return (
    <>
      {/* {success==false? <Loading/>: null} */}
      <div className="AddAccount-container">
        <div className="AddAccount-content">
          <h1>Add User</h1>

          <div className="x-icon">
            <ClearIcon
              onClick={() => {
                props.handleShowModalAddUser();
              }}
            />
          </div>

          <form action="">
            <div className="form-group">
              <label htmlFor="Tên người dùng" className="form-input-control">
                Tên người dùng
              </label>
              <input
                className="form-input-control"
                type="text"
                placeholder="Tên người dùng "
                onChange={(e) => {
                  setFormAddUser({ ...formAdduser, fullName: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email" className="form-input-control">
                Email
              </label>
              <input
                className="form-input-control"
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setFormAddUser({ ...formAdduser, email: e.target.value });
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Số CCCD/CMND" className="form-input-control">
                Số CCCD/CMND
              </label>
              <input
                className="form-input-control"
                type="text"
                placeholder="Số CCCD/CMND"
                onChange={(e) => {
                  setFormAddUser({
                    ...formAdduser,
                    nationalId: e.target.value,
                  });
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Số điện thoại" className="form-input-control">
                Số điện thoại
              </label>
              <input
                className="form-input-control"
                type="text"
                placeholder="Số điện thoại"
                onChange={(e) => {
                  setFormAddUser({
                    ...formAdduser,
                    userNumber: e.target.value,
                  });
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Chức vụ" className="form-input-control">
                Chức vụ
              </label>
              <select
                name=""
                id=""
                onChange={(e) => {
                  setFormAddUser({ ...formAdduser, roleId: e.target.value });
                }}
              >
                <option value="" disabled selected>
                  --Chức vụ--
                </option>

                <option value={2}>Thanh tra</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="Mật khẩu" className="form-input-control">
                Mật khẩu
              </label>
              <input
                className="form-input-control"
                type="text"
                placeholder="Mật khẩu"
                onChange={(e) => {
                  setFormAddUser({ ...formAdduser, password: e.target.value });
                }}
              />
            </div>
          </form>
          {errorUserRegistered && <span>{message}</span>}
          <button onClick={handleAdduser}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default AddAccount;
