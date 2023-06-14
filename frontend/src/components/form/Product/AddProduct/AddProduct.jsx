import React, { useContext, useState } from "react";
import "./AddProduct.css";
import ClearIcon from "@mui/icons-material/Clear";
import { useProductKind } from "../../../../hooks/Product/useProductKind";
import { getAllCompaniesCurrent } from "../../../../hooks/User/useGetAllCompanies";
import { useCreateProduct } from "../../../../hooks/Product/useCreateProduct";
import ActionSuccess from "../../../ActionSuccess/ActionSuccess";
import { StoreContext } from "~store";

function AddProduct(props) {
  const [state] = useContext(StoreContext);
  const handleHideModalAddProduct = () => {
    props.handleShowModalAddProduct(false);
  };
  const { message, success, data, loading, error } = useProductKind();
  const { dataCompanies, errorCompanies } = getAllCompaniesCurrent();
  const {
    successCreateProduct,
    messageCreateProduct,
    errorCreateProduct,
    executeCreateProduct,
  } = useCreateProduct();
  const [formAddProduct, setFormAddProduct] = useState({});

  if (successCreateProduct == true) {
    props.handleShowSuccesAction(messageCreateProduct);
    props.handleShowModalAddProduct(false);
    props.fetchDataProduct();
  }
  const handleAddNewProduct = async () => {
    await executeCreateProduct(formAddProduct, state.id, state.token);
  };
  return (
    <>
      {/* <ActionSuccess messageAction={messageAction}/> */}
      <div className="productAdd-container">
        <div className="productAdd-content">
          <h1>Add Product</h1>

          <div className="x-icon">
            <ClearIcon onClick={handleHideModalAddProduct} />
          </div>

          <form action="">
            <div className="form-group">
              <label htmlFor="Product Name" className="form-input-control">
                Product Name
              </label>
              <input
                className="form-input-control"
                type="text"
                placeholder="Product Name"
                value={formAddProduct.productName}
                onChange={(e) => {
                  setFormAddProduct({
                    ...formAddProduct,
                    productName: e.target.value,
                  });
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Company Name" className="form-input-control">
                Company Name
              </label>
              <select
                name=""
                id=""
                value={formAddProduct.userId}
                onChange={(e) => {
                  setFormAddProduct({
                    ...formAddProduct,
                    userId: e.target.value,
                  });
                }}
              >
                <option value="" disabled selected>
                  --None--
                </option>
                {dataCompanies.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>
                      {item.companyName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Product Kind" className="form-input-control">
                Product Kind
              </label>
              <select
                name=""
                id=""
                value={formAddProduct.kindof}
                onChange={(e) => {
                  setFormAddProduct({
                    ...formAddProduct,
                    kindof: e.target.value,
                  });
                }}
              >
                <option value="" disabled selected>
                  --None--
                </option>
                {data.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </form>

          <button onClick={handleAddNewProduct}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
