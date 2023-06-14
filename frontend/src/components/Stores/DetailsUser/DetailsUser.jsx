import React from "react";
import { FaTimes } from "react-icons/fa";
import "./DetailsUser.css";
const DetailsUser = (props) => {
  return (
    <div className="details-user-container">
      <div className="details-user-content">
        <h1>User Details</h1>

        <div
          className="x-icon"
          onClick={() => {
            props.handleShowUsersDetails(false);
          }}
        >
          <FaTimes />
        </div>

        <form action="">
          <div className="form-group">
            <label className="form-input-control">Tên người dùng</label>
            <input
              disabled
              className="form-input-control"
              type="text"
              placeholder="Tên người dùng"
              value={props.formDataUser.fullName}
            />
          </div>

          <div className="form-group">
            <label className="form-input-control">Phone Number</label>
            <input
              disabled
              className="form-input-control"
              type="text"
              placeholder="Phone Number"
              value={props.formDataUser.userNumber}
            />
          </div>

          <div className="form-group">
            <label className="form-input-control">Số CCCD/CMND</label>
            <input
              disabled
              className="form-input-control"
              type="text"
              placeholder="Số CCCD/CMND"
              value={props.formDataUser.nationalId}
            />
          </div>
          <div className="form-group">
            <label className="form-input-control">Email</label>
            <input
              disabled
              className="form-input-control"
              type="text"
              placeholder="Email"
              value={props.formDataUser.email}
            />
          </div>

          <div className="form-group">
            <label className="form-input-control">Chức vụ</label>
            <select name="" id="" disabled value={props.formDataUser.roleId}>
              <option value="" selected disabled>
                --Role--
              </option>
              <option value={1}>Admin</option>
              <option value={2}>Moderator</option>
              <option value="">User</option>
              <option value="">Store</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-input-control">Tình trạng</label>
            <select name="" id="" disabled value={props.formDataUser.action}>
              <option value="" selected disabled>
                --Status--
              </option>
              <option value={1}>Active</option>
              <option value="">Inactive</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsUser;
