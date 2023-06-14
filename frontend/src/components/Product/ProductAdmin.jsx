import { Pagination } from "@mui/material";
import "./Product.css";
import { useState } from "react";
import DetailsProduct from "../form/Product/DetailsProduct/DetailsProduct";
import ProductUpdate from "../form/Product/ProductUpdate/ProductUpdate";
import { ProductRow } from "~components";
import { useAdminProduct } from "~hooks";
import AddProduct from "../form/Product/AddProduct/AddProduct";
import ActionSuccess from "../ActionSuccess/ActionSuccess";
import AddCertificateToProduct from "../form/Product/AddCertificateToProduct/AddCertificateToProduct";
import { useContext } from "react";
import { StoreContext } from "~store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductAdmin = () => {
  const [state] = useContext(StoreContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({ page: 1 });
  const handleOnChange = (event, value) => {
    setCurrentPage(value);
    setFilter({ page: value });
  };
  const { pagination, data, error, loading, executeDataProduct } =
    useAdminProduct(filter, state.id, state.token);
  const fetchDataProduct = async () => {
    await executeDataProduct(filter, state.id, state.token);
  };

  const [showModalDetailsProduct, setShowModalDetailsProduct] = useState(false);
  const handleShowMoDalDetailsProduct = (value) => {
    setShowModalDetailsProduct(value);
  };
  const [showModalUpdateProduct, setShowModalUpdateProduct] = useState(false);
  const handleShowMoDalUpdateProduct = (value) => {
    setShowModalUpdateProduct(value);
  };
  const [showModalAddProduct, setShowModalAddProduct] = useState(false);
  const handleShowModalAddProduct = (value) => {
    setShowModalAddProduct(value);
  };
  const [
    showModalAddCertificateToProduct,
    setShowModalAddCertificateToProduct,
  ] = useState(false);
  const [idProduct, setIdProduct] = useState("");
  const handleShowModalAddCertificateToProduct = (Obj) => {
    setShowModalAddCertificateToProduct(Obj.value);
    Obj.id && setIdProduct(Obj.id);
  };
  const [formDataProduct, setFormDataProduct] = useState({
    action: "",
    certificate: [],
    companyName: "",
    id: "",
    kindof: "",
    productName: "",
    product_type: {},
    userId: "",
  });
  const handleSetFormDataProduct = (Obj) => {
    setFormDataProduct(Obj);
  };
  const [messageAction, setMessageAction] = useState("");
  const [showSuccessAction, setShowSuccessAction] = useState(false);
  const handleShowSuccesAction = (message) => {
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
      {showModalAddCertificateToProduct && (
        <AddCertificateToProduct
          idProduct={idProduct}
          handleShowModalAddCertificateToProduct={
            handleShowModalAddCertificateToProduct
          }
          handleShowSuccesAction={handleShowSuccesAction}
          fetchDataProduct={fetchDataProduct}
        />
      )}

      {showModalDetailsProduct && (
        <DetailsProduct
          handleShowMoDalDetailsProduct={handleShowMoDalDetailsProduct}
          formDataProduct={formDataProduct}
          handleSetFormDataProduct={handleSetFormDataProduct}
        />
      )}
      {showModalUpdateProduct && (
        <ProductUpdate
          handleShowMoDalUpdateProduct={handleShowMoDalUpdateProduct}
          formDataProduct={formDataProduct}
          fetchDataProduct={fetchDataProduct}
          handleSetFormDataProduct={handleSetFormDataProduct}
          handleShowSuccesAction={handleShowSuccesAction}
        />
      )}
      {showModalAddProduct && (
        <AddProduct
          handleShowModalAddProduct={handleShowModalAddProduct}
          handleShowSuccesAction={handleShowSuccesAction}
          fetchDataProduct={fetchDataProduct}
        />
      )}
      <div>
        <div className="product-header">
          <h1>Recent Product</h1>
          <button
            onClick={() => {
              setShowModalAddProduct(true);
            }}
          >
            Add Product
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Company name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data.map((item, index) => {
                return (
                  <ProductRow
                    key={index}
                    index={index + 1 + (currentPage - 1) * 8}
                    product={item}
                    handleShowMoDalDetailsProduct={
                      handleShowMoDalDetailsProduct
                    }
                    handleShowMoDalUpdateProduct={handleShowMoDalUpdateProduct}
                    handleSetFormDataProduct={handleSetFormDataProduct}
                    formDataProduct={formDataProduct}
                    fetchDataProduct={fetchDataProduct}
                    handleShowSuccesAction={handleShowSuccesAction}
                    handleShowModalAddCertificateToProduct={
                      handleShowModalAddCertificateToProduct
                    }
                  />
                );
              })}
          </tbody>
        </table>

        {pagination && (
          <>
            <br />
            <div className="pagination">
              <Pagination
                count={pagination.totalPages}
                showFirstButton
                showLastButton
                onChange={handleOnChange}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};
