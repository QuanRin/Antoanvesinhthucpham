import React, { useContext } from "react";
import "./ProductRow.css";
import useDeleteProduct from "../../../hooks/Product/useDeleteProduct";
import { StoreContext } from "~store";

export const ProductRow = (props) => {
  const greenCircle = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#8AFF8A",
  };
  const redCircle = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#ff7b7b",
  };
  const [state] = useContext(StoreContext);
  const { index, product } = props;
  const { id, kindof, productName, companyName, certificates, userId, action } =
    product;

  const formTemp = {
    id: id,
    kindof: kindof,
    productName: productName,
    companyName: companyName,
    certificates: certificates,
    userId: userId,
    action: action,
    productType: props.product.product_type,
  };
  const handleShowDetailsProduct = () => {
    props.handleShowMoDalDetailsProduct(true);
    props.handleSetFormDataProduct(formTemp);
  };

  const handleShowMoDalUpdateProduct = () => {
    props.handleShowMoDalUpdateProduct(true);
    props.handleSetFormDataProduct(formTemp);
  };
  const {
    successDeleteProduct,
    messageDeleteProduct,
    errorDeleteProduct,
    executeDeleteProduct,
  } = useDeleteProduct();
  const handleDeleteProduct = async (e) => {
    e.preventDefault();
    await executeDeleteProduct(props.product.id, state.id, state.token);
    props.handleShowSuccesAction("Deleted Product");
    await props.fetchDataProduct();
  };
  const handleAddCertificateToProduct = async () => {
    await props.handleShowModalAddCertificateToProduct({ id: id, value: true });
  };
  // console.log(props.handleSetFormDataProduct());

  return (
    <>
      <tr className="product-table-row">
        <td>{index}</td>
        <td>{productName}</td>
        <td>{companyName}</td>
        <td>
          {action === 1 ? (
            <div style={greenCircle}></div>
          ) : (
            <div style={redCircle}></div>
          )}
        </td>
        <td>
          <button onClick={handleShowDetailsProduct}>Details</button>
          <button onClick={handleShowMoDalUpdateProduct}>Update</button>
          <button onClick={handleDeleteProduct}>Delete</button>
          <button onClick={handleAddCertificateToProduct}>
            Add Certificate
          </button>
        </td>
      </tr>
    </>
  );
};
