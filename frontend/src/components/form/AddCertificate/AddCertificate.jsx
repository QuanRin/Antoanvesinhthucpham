import React, { useContext, useState } from "react";
import "./AddCertificate.css";
import { FaTimes } from "react-icons/fa";
import { useCreateCertificate } from "../../../hooks/Certificate/useCreateCertificate";
import { StoreContext } from "~store";
function Addcertificate(props) {
  const [state] = useContext(StoreContext);
  const [formDataCertificate, setFormDataCertificate] = useState({
    name: "",
    description: "",
    image: "",
  });
  const { success, message, error, loading, execute } = useCreateCertificate();

  const actionSuccess = async () => {
    await props.handleShowModalAddCertificate(false);
    await props.handleSetShowSuccess(message);
    await props.getCertificates();
  };
  if (success == true) {
    actionSuccess();
  }
  const handleAddCertificate = async (e) => {
    console.log("check", formDataCertificate);
    e.preventDefault();
    await execute(formDataCertificate, state.id, state.token);
  };
  return (
    <>
      <div className="add-certificate-container">
        <div className="add-certificate-content">
          <h1>Add Certificate</h1>

          <div className="x-icon">
            <FaTimes
              onClick={() => {
                props.handleShowModalAddCertificate(false);
              }}
            />
          </div>

          <form action="">
            <div className="form-group">
              <label className="form-input-control">Tên chứng nhận</label>
              <input
                className="form-input-control"
                type="text"
                placeholder="Tên chứng nhận"
                onChange={(e) => {
                  setFormDataCertificate({
                    ...formDataCertificate,
                    name: e.target.value,
                  });
                }}
              />
            </div>

            <div className="form-group">
              <label className="form-input-control">Mô tả</label>
              <input
                className="form-input-control"
                type="text"
                placeholder="Nhập mô tả"
                onChange={(e) => {
                  setFormDataCertificate({
                    ...formDataCertificate,
                    description: e.target.value,
                  });
                }}
              />
            </div>
            <div className="form-group">
              <label className="form-input-control">Hình ảnh</label>
              <input
                className="form-input-control"
                type="file"
                onChange={(e) => {
                  setFormDataCertificate({
                    ...formDataCertificate,
                    image: e.target.files[0],
                  });
                }}
              />
            </div>
          </form>

          <button onClick={handleAddCertificate}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default Addcertificate;
