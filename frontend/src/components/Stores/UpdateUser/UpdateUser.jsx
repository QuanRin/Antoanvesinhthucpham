import React, { useContext } from "react";
import { useState } from "react";
import "./UpdateUser.css";
import { FaTimes } from "react-icons/fa";
import { useUpdateUser } from "../../../hooks/User/useUpdateUser";
import { StoreContext } from "~store";
// import Loading from '../../Loading/Loading'
const UpdateUser = (props) => {
  const [state] = useContext(StoreContext);
  const [formTemp, setFormTemp] = useState({ id: props.formDataUser.id });
  const [formUpdateUser, setFormUpdateUser] = useState(props.formDataUser);
  const { message, success, loading, error, execute } = useUpdateUser();
  const actionSuccess = async () => {
    await props.handleShowUserUpdate(false);
    await props.handleShowActionPerform(message);
    await props.fetchDataUser();
  };
  if (success == true) {
    actionSuccess();
  }

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    await execute(formTemp, formTemp.id, state.id, state.token);
  };
  return (
    <>
      <div className="update-user-container">
        <div className="update-user-content">
          <h1>Update User</h1>

          <div className="x-icon">
            <FaTimes
              onClick={() => {
                props.handleShowUserUpdate(false);
              }}
            />
          </div>

          <form action="">
            <div className="form-group">
              <label htmlFor="Name Store" className="form-input-control">
                FullName
              </label>
              <input
                onChange={(e) => {
                  setFormUpdateUser(
                    { ...formUpdateUser, fullName: e.target.value },
                    setFormTemp({ ...formTemp, fullName: e.target.value })
                  );
                }}
                value={formUpdateUser.fullName}
                className="form-input-control"
                type="text"
                placeholder="Name Store"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Số điện thoại" className="form-input-control">
                Số điện thoại
              </label>
              <input
                onChange={(e) => {
                  setFormUpdateUser(
                    { ...formUpdateUser, userNumber: e.target.value },
                    setFormTemp({ ...formTemp, userNumber: e.target.value })
                  );
                }}
                value={formUpdateUser.userNumber}
                className="form-input-control"
                type="text"
                placeholder="Name Store"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email" className="form-input-control">
                Email
              </label>
              <input
                onChange={(e) => {
                  setFormUpdateUser(
                    { ...formUpdateUser, email: e.target.value },
                    setFormTemp({ ...formTemp, email: e.target.value })
                  );
                }}
                value={formUpdateUser.email}
                className="form-input-control"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Số CCCD/CMND" className="form-input-control">
                Số CCCD/CMND
              </label>
              <input
                onChange={(e) => {
                  setFormUpdateUser(
                    { ...formUpdateUser, nationalId: e.target.value },
                    setFormTemp({ ...formTemp, nationalId: e.target.value })
                  );
                }}
                value={formUpdateUser.nationalId}
                className="form-input-control"
                type="text"
                placeholder="Name Store"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Chức vụ" className="form-input-control">
                Chức vụ
              </label>
              <select
                name=""
                id=""
                value={formUpdateUser.roleId}
                onChange={(e) => {
                  setFormUpdateUser(
                    { ...formUpdateUser, roleId: e.target.value },
                    setFormTemp({ ...formTemp, roleId: e.target.value })
                  );
                }}
              >
                <option value={0}>Admin</option>
                <option value={2}>Moderator</option>
                <option value={1}>User</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Status" className="form-input-control">
                Status
              </label>
              <select
                name=""
                id=""
                value={formUpdateUser.action}
                onChange={(e) => {
                  setFormUpdateUser(
                    { ...formUpdateUser, action: e.target.value },
                    setFormTemp({ ...formTemp, action: e.target.value })
                  );
                }}
              >
                <option value="" selected disabled>
                  --Status--
                </option>
                <option value={1}>Active</option>
                <option value={0}>Inactive</option>
              </select>
            </div>
          </form>

          <button onClick={handleUpdateUser}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
