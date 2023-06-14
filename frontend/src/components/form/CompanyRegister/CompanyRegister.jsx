import React, { useState } from "react";
import { UilStar, UilAsterisk } from "@iconscout/react-unicons";
import "./CompanyRegister.css";
import { useCompanyRegister } from "../../../hooks/Auth/useCompanyRegister";
import { useFetchBusinessType } from "../../../hooks/useFetchBusinessType";
import ActionSuccess from "../../ActionSuccess/ActionSuccess";
function CompanyRegister() {
  const { dataBusinessType, errorBusinessType, loadingBusinessType } =
    useFetchBusinessType();
  const { errorRegister, executeCompanyRegister } = useCompanyRegister();
  const [formRegisterCompany, setFormRegisterCompany] = useState({});
  const handleRegister = async (e) => {
    e.preventDefault();
    await executeCompanyRegister(formRegisterCompany);
    if (errorRegister === "") {
      handleShowActionPerform("Register successfully");
      setFormRegisterCompany({
        companyName: "",
        faxNumber: "",
        email: "",
        taxIndentity: "",
        businessId: "",
        fullname: "",
        userNumber: "",
        nationalId: "",
        password: "",
      });
    }
  };
  const [actionPerform, setActionPerform] = useState(false);
  const [messageAction, setMessageAction] = useState("");
  const handleShowActionPerform = (message) => {
    setMessageAction(message);
    setActionPerform(true);
    setTimeout(() => {
      setActionPerform(false);
    }, 3000);
  };
  return (
    <>
      {actionPerform && <ActionSuccess messageAction={messageAction} />}
      <div className="CompanyRegister-container">
        <div className="CompanyRegister-content">
          <div className="CompanyRegister-form">
            <h1>Register Company</h1>
            <form action="">
              <div className="Company-infor">
                <div className="form-group">
                  <div className="label">
                    <label htmlFor="Tên công ty">Tên công ty</label>
                    <span>(*)</span>
                  </div>

                  <input
                    className="form-control"
                    type="text"
                    placeholder="Tên công ty"
                    onChange={(e) => {
                      setFormRegisterCompany({
                        ...formRegisterCompany,
                        companyName: e.target.value,
                      });
                    }}
                    value={formRegisterCompany.companyName}
                  />
                </div>

                <div className="form-group">
                  <div className="label">
                    <label htmlFor="FAX">FAX</label>
                    <span>(*)</span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="FAX"
                    onChange={(e) => {
                      setFormRegisterCompany({
                        ...formRegisterCompany,
                        faxNumber: e.target.value,
                      });
                    }}
                    value={formRegisterCompany.faxNumber}
                  />
                </div>

                <div className="form-group">
                  <div className="label">
                    <label className="form-control" htmlFor="Email">
                      Email
                    </label>
                    <span>(*)</span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => {
                      setFormRegisterCompany({
                        ...formRegisterCompany,
                        email: e.target.value,
                      });
                    }}
                    value={formRegisterCompany.email}
                  />
                </div>

                <div className="form-group">
                  <div className="label">
                    <label htmlFor="Tax Identity">Tax Identity </label>
                    <span>(*)</span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Tax Identity"
                    onChange={(e) => {
                      setFormRegisterCompany({
                        ...formRegisterCompany,
                        taxIndentity: e.target.value,
                      });
                    }}
                    value={formRegisterCompany.taxIndentity}
                  />
                </div>

                <div className="form-group">
                  <div className="label">
                    <label htmlFor="Loại hình kinh doanh">
                      Loại hình kinh doanh
                    </label>
                    <span>(*)</span>
                  </div>
                  <select
                    name=""
                    id=""
                    onChange={(e) => {
                      setFormRegisterCompany({
                        ...formRegisterCompany,
                        businessId: e.target.value,
                      });
                    }}
                    value={formRegisterCompany.businessId}
                  >
                    <option value="" selected disabled>
                      --Loại hình kinh doanh--
                    </option>
                    {dataBusinessType.map((item, index) => {
                      return (
                        <option value={item.id} key={index}>
                          {item.businessName}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="Company-infor">
                <div className="form-group">
                  <div className="label">
                    <label htmlFor="Họ và tên người đại diện công ty(chi nhánh)">
                      Họ và tên người đại diện công ty(chi nhánh)
                    </label>
                    <span>(*)</span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Họ và tên"
                    onChange={(e) => {
                      setFormRegisterCompany({
                        ...formRegisterCompany,
                        fullname: e.target.value,
                      });
                    }}
                    value={formRegisterCompany.fullname}
                  />
                </div>

                <div className="form-group">
                  <div className="label">
                    <label htmlFor="Số điện thoại người đại diện">
                      Số điện thoại người đại diện
                    </label>
                    <span>(*)</span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Số diện thoại"
                    onChange={(e) => {
                      setFormRegisterCompany({
                        ...formRegisterCompany,
                        userNumber: e.target.value,
                      });
                    }}
                    value={formRegisterCompany.userNumber}
                  />
                </div>

                <div className="form-group">
                  <div className="label">
                    <label htmlFor="Số CMND/CCCD">Số CMND/CCCD</label>
                    <span>(*)</span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Số CMND/CCCD"
                    onChange={(e) => {
                      setFormRegisterCompany({
                        ...formRegisterCompany,
                        nationalId: e.target.value,
                      });
                    }}
                    value={formRegisterCompany.nationalId}
                  />
                </div>

                <div className="form-group">
                  <div className="label">
                    <label htmlFor="Mật khẩu">Mật khẩu</label>
                    <span>(*)</span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Mật khẩu"
                    onChange={(e) => {
                      setFormRegisterCompany({
                        ...formRegisterCompany,
                        password: e.target.value,
                      });
                    }}
                    value={formRegisterCompany.password}
                  />
                </div>

                {/* <div className="form-group"> 
                    <div className="label">   
                    <label  htmlFor="">Nhập lại mật khẩu</label>
                    <span>(*)</span>
                    </div>
                    <input className='form-control' type="text" placeholder='Nhập lại mật khẩu' />
                    </div> */}
              </div>
            </form>

            <button onClick={handleRegister}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyRegister;
