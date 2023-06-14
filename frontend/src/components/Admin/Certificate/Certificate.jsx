import { useFetchCertificate } from "../../../hooks/Certificate/useFetchCertificate";
import React, { useContext, useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import CertificateRow from "../../tables/CertificateRow/CertificateRow";
import "./Certificate.css";
import AddCertificate from "../../form/AddCertificate/AddCertificate";
import UpdateCertificate from "../../form/UpdateCertificate/UpdateCertificate";
import ActionSuccess from "../../ActionSuccess/ActionSuccess";
import { StoreContext } from "~store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Certificate = () => {
  const [state] = useContext(StoreContext);

  const [showModalAddCertificate, setShowModalAddCertificate] = useState(false);
  const handleShowModalAddCertificate = (value) => {
    setShowModalAddCertificate(value);
  };
  const [showModalUpdateCertificate, setShowModalUpdateCertificate] =
    useState(false);
  const handleShowModalUpdateCertificate = (value) => {
    setShowModalUpdateCertificate(value);
  };

  const [formDataCertificate, setFormDataCertificate] = useState({
    action: "",
    description: "",
    id: "",
    name: "",
    path: "",
  });
  const handleSetFormDataCertificate = (Obj) => {
    setFormDataCertificate(Obj);
  };
  const [pageCurrent, setPageCurrent] = useState(1);
  const [filter, setFilter] = useState({ page: 1 });
  const { pagination, data, success, error, loading, execute } =
    useFetchCertificate(filter, state.id, state.token);
  const [listCertificates, setListCertificate] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [messageAction, setMessageAction] = useState("");
  const getCertificates = () => {
    setFilter({ page: pageCurrent });
  };

  const handleOnChange = (event, value) => {
    setPageCurrent(value);
    setFilter({ page: value });
  };
  const [showSuccess, setShowSuccess] = useState(false);
  const handleSetShowSuccess = (message) => {
    toast.success(message);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* {showSuccess && <ActionSuccess messageAction={messageAction} />} */}
      {showModalAddCertificate && (
        <AddCertificate
          handleShowModalAddCertificate={handleShowModalAddCertificate}
          getCertificates={getCertificates}
          handleSetShowSuccess={handleSetShowSuccess}
        />
      )}
      {showModalUpdateCertificate && (
        <UpdateCertificate
          handleShowModalUpdateCertificate={handleShowModalUpdateCertificate}
          formDataCertificate={formDataCertificate}
          getCertificates={getCertificates}
          handleSetShowSuccess={handleSetShowSuccess}
        />
      )}
      <div className="certificate-container">
        <div className="certificate-header">
          <h1>Certificates Management</h1>
          <button onClick={() => setShowModalAddCertificate(true)}>
            Add Certificate
          </button>
        </div>

        <table className="certificate-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Tên chứng chỉ</th>
              <th>Mô tả</th>
              <th className="certificate-img">Hình ảnh</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data.map((item, index) => {
                return (
                  <CertificateRow
                    key={index}
                    index={index + 1 + (pageCurrent - 1) * 8}
                    certificate={item}
                    handleShowModalUpdateCertificate={
                      handleShowModalUpdateCertificate
                    }
                    formDataCertificate={formDataCertificate}
                    handleSetFormDataCertificate={handleSetFormDataCertificate}
                    getCertificates={getCertificates}
                    handleSetShowSuccess={handleSetShowSuccess}
                  />
                );
              })}
          </tbody>
        </table>
        {
          <div className="pagination">
            <Pagination
              count={pagination.totalPages}
              showFirstButton
              showLastButton
              onChange={handleOnChange}
            />
          </div>
        }
      </div>
    </>
  );
};

export default Certificate;
