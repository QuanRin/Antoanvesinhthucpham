import React, { useContext, useState } from "react";
import "./UpdateCertificate.css";
import { FaTimes } from "react-icons/fa";
import { useUpdateCertificate } from "../../../hooks/Certificate/useUpdateCertificate";
import { StoreContext } from "~store";
function UpdateCertificate(props) {
  const [state] = useContext(StoreContext);
  const { message, loading, success, error, executeUpdateCerti } =
    useUpdateCertificate();
  const [formCertificateInfor, setFormCertificateInfor] = useState(
    props.formDataCertificate
  );

  const [formTemp, setFormTemp] = useState({
    id: props.formDataCertificate.id,
  });
  const actionSuccess = async () => {
    await props.getCertificates();
    await props.handleSetShowSuccess(message);
    await props.handleShowModalUpdateCertificate(false);
  };
  if (success == true) {
    actionSuccess();
  }
  const handleUpdateCertificate = async (e) => {
    e.preventDefault();
    await executeUpdateCerti(formTemp, state.id, state.token);
    await props.getCertificates();
  };

  return (
    <div className="update-certificate-container">
      <div className="update-certificate-content">
        <h1>Update Certificate</h1>

        <div className="x-icon">
          <FaTimes
            onClick={() => {
              props.handleShowModalUpdateCertificate(false);
            }}
          />
        </div>

        <form action="">
          <div className="form-group">
            <label htmlFor="Tên chứng nhận" className="form-input-control">
              Tên chứng nhận
            </label>
            <input
              onChange={(e) => {
                setFormCertificateInfor({
                  ...props.formCertificateInfor,
                  name: e.target.value,
                }),
                  setFormTemp({ ...formTemp, name: e.target.value });
              }}
              className="form-input-control"
              type="text"
              placeholder="Tên chứng nhận"
              value={formCertificateInfor.name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Mô tả" className="form-input-control">
              Mô tả
            </label>
            <input
              onChange={(e) => {
                setFormCertificateInfor({
                  ...props.formCertificateInfor,
                  description: e.target.value,
                }),
                  setFormTemp({ ...formTemp, description: e.target.value });
              }}
              className="form-input-control"
              type="text"
              placeholder="Nhập mô tả"
              value={formCertificateInfor.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Hình ảnh" className="form-input-control">
              Hình ảnh
            </label>
            <input
              onChange={(e) => {
                setFormCertificateInfor({
                  ...props.formCertificateInfor,
                  path: e.target.value,
                }),
                  setFormTemp({ ...formTemp, path: e.target.files[0] });
              }}
              value={formCertificateInfor.path}
              className="form-input-control"
              type="file"
            />
          </div>
        </form>

        <button onClick={handleUpdateCertificate}>Submit</button>
      </div>
    </div>
  );
}

export default UpdateCertificate;
