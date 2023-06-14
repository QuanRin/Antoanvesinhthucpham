/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import "./AccountUpdate.css";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function AccountUpdate({ statusModalUpdateHide }) {
  const handleHideUpdateModal = () => {
    statusModalUpdateHide(false);
  };

  return (
    <div className="AccountUpdate-container">
      <div className="AccountUpdate-content">
        <h1>Update Account</h1>

        <div className="x-icon">
          <FaTimes />
        </div>

        <form action="">
          <div className="form-group">
            <label className="form-input-control">Tên đầy đủ</label>
            <input
              className="form-input-control"
              type="text"
              placeholder="Tên đầy đủ"
            />
          </div>
          <div className="form-group">
            <label className="form-input-control">Email</label>
            <input
              className="form-input-control"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label className="form-input-control">Số điện thoại</label>
            <input
              className="form-input-control"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group">
            <label className="form-input-control">Địa chỉ</label>
            <input
              className="form-input-control"
              type="text"
              placeholder="Address"
            />
          </div>
          <div className="form-group">
            <label className="form-input-control">Số CMND/CCCD</label>
            <input
              className="form-input-control"
              type="text"
              placeholder="Số CMND/CCCD"
            />
          </div>
          <div className="form-group">
            <label className="form-input-control">Mật khẩu</label>
            <input
              className="form-input-control"
              type="password"
              placeholder="Mật khẩu"
            />
          </div>
          <div className="form-group">
            <label className="form-input-control">Nhập lại mật khẩu</label>
            <input
              className="form-input-control"
              type="password"
              placeholder="Nhập lại mật khẩu"
            />
          </div>
          <div className="form-group">
            <label className="form-input-control">Tình trạng</label>
            <select className="form-input-control">
              <option value="">Active</option>
              <option value="">Inactive</option>
              <option value="" disabled selected>
                ---Select---
              </option>
            </select>
          </div>
        </form>

        <button>Submit</button>
      </div>
    </div>
  );
}

export default AccountUpdate;
