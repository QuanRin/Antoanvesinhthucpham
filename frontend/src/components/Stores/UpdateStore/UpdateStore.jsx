/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from "react";

import { FaTimes } from "react-icons/fa";
import "./UpdateStore.css";
import { useFetchBusinessType } from "../../../hooks/useFetchBusinessType";

import { useUpdateUser } from "../../../hooks/User/useUpdateUser";
import { StoreContext } from "~store";

function UpdateStore(props) {
  const [state] = useContext(StoreContext);
  const { dataBusinessType, loadingBusinessType, errorBusinessType } =
    useFetchBusinessType();
  const { message, success, loading, error, execute } = useUpdateUser();
  const [formUpdateUser, setFormUpdateUser] = useState(props.formDataUserStore);
  const [formTemp, setFormTemp] = useState();
  const actionSuccess = async () => {
    await props.handleShowUserUpdateStore(false);
    await props.handleShowActionPerform(message);
    if (state.role === "Moderator") {
      await props.fetchCompanies();
    }
    if (state.role === "Admin") {
      await props.fetchDataUser();
    }
  };
  if (success == true) {
    actionSuccess();
  }

  const handleUpdateCompany = async (e) => {
    e.preventDefault();
    await execute(formTemp, formUpdateUser.id, state.id, state.token);
  };

  return (
    <>
      {/* {success==false?<Loading/>:null} */}
      <div className="company-update-container">
        <div className="company-update-content">
          <div className="company-update-form">
            <div
              className="x-icon"
              onClick={() => {
                props.handleShowUserUpdateStore(false);
              }}
            >
              <FaTimes />
            </div>
            <h1>Update Company</h1>
            <form action="">
              <div className="company-information">
                <div className="form-group">
                  <div className="label">
                    <label htmlFor="">Tên công ty</label>
                  </div>

                  <input
                    onChange={(e) => {
                      setFormUpdateUser(
                        { ...formUpdateUser, companyName: e.target.value },
                        setFormTemp({
                          ...formTemp,
                          companyName: e.target.value,
                        })
                      );
                    }}
                    className="form-control"
                    type="text"
                    placeholder="Tên công ty"
                    value={formUpdateUser.companyName}
                  />
                </div>

                <div className="form-group">
                  <div className="label">
                    <label htmlFor="">FAX Number</label>
                  </div>
                  <input
                    onChange={(e) => {
                      setFormUpdateUser(
                        { ...formUpdateUser, faxNumber: e.target.value },
                        setFormTemp({ ...formTemp, faxNumber: e.target.value })
                      );
                    }}
                    className="form-control"
                    type="text"
                    placeholder="FAX Number"
                    value={formUpdateUser.faxNumber}
                  />
                </div>

                <div className="form-group">
                  <div className="label">
                    <label className="form-control" htmlFor="">
                      Email
                    </label>
                  </div>
                  <input
                    onChange={(e) => {
                      setFormUpdateUser(
                        { ...formUpdateUser, email: e.target.value },
                        setFormTemp({ ...formTemp, email: e.target.value })
                      );
                    }}
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    value={formUpdateUser.email}
                  />
                </div>

                <div className="form-group">
                  <div className="label">
                    <label htmlFor="">Mã số thuế</label>
                  </div>
                  <input
                    onChange={(e) => {
                      setFormUpdateUser(
                        { ...formUpdateUser, taxIndentity: e.target.value },
                        setFormTemp({
                          ...formTemp,
                          taxIndentity: e.target.value,
                        })
                      );
                    }}
                    className="form-control"
                    type="text"
                    placeholder="Mã số thuế"
                    value={formUpdateUser.taxIndentity}
                  />
                </div>

                <div className="form-group">
                  <div className="label">
                    <label htmlFor="">Status</label>
                  </div>
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
                    <option value={1}>Active</option>
                    <option value={0}>Inactive</option>
                  </select>
                </div>
              </div>

              <div className="company-information">
                <div className="form-group">
                  <div className="label">
                    <label htmlFor="">
                      Họ và tên người đại diện công ty(chi nhánh)
                    </label>
                  </div>
                  <input
                    onChange={(e) => {
                      setFormUpdateUser(
                        { ...formUpdateUser, fullName: e.target.value },
                        setFormTemp({ ...formTemp, fullName: e.target.value })
                      );
                    }}
                    className="form-control"
                    type="text"
                    placeholder="Họ và tên"
                    value={formUpdateUser.fullName}
                  />
                </div>

                <div className="form-group">
                  <div className="label">
                    <label htmlFor="">Số điện thoại người đại diện</label>
                  </div>
                  <input
                    onChange={(e) => {
                      setFormUpdateUser(
                        { ...formUpdateUser, phoneNumber: e.target.value },
                        setFormTemp({
                          ...formTemp,
                          phoneNumber: e.target.value,
                        })
                      );
                    }}
                    className="form-control"
                    type="text"
                    placeholder="Số diện thoại"
                    value={formUpdateUser.phoneNumber}
                  />
                </div>

                <div className="form-group">
                  <div className="label">
                    <label htmlFor="">Số CMND/CCCD người đại diện</label>
                  </div>
                  <input
                    onChange={(e) => {
                      setFormUpdateUser(
                        { ...formUpdateUser, nationalId: e.target.value },
                        setFormTemp({ ...formTemp, nationalId: e.target.value })
                      );
                    }}
                    className="form-control"
                    type="text"
                    placeholder="Số CMND/CCCD"
                    value={formUpdateUser.nationalId}
                  />
                </div>

                <div className="form-group">
                  <div className="label">
                    <label htmlFor="">Loại hình kinh doanh</label>
                  </div>

                  <select
                    name=""
                    id=""
                    onChange={(e) => {
                      setFormUpdateUser(
                        { ...formUpdateUser, businessId: e.target.value },
                        setFormTemp({ ...formTemp, businessId: e.target.value })
                      );
                    }}
                    value={formUpdateUser.businessId}
                  >
                    <option value="">--None--</option>
                    {dataBusinessType.map((item, index) => {
                      return (
                        <option key={index} value={item.businessId}>
                          {item.typeName}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="form-group">
                  <div className="label">
                    <label htmlFor="">Chức vụ</label>
                  </div>
                  <select name="" id="">
                    <option value={3} disabled selected>
                      Store
                    </option>
                  </select>
                </div>
              </div>
            </form>

            <button onClick={handleUpdateCompany}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateStore;
