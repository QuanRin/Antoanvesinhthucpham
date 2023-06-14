import ClearIcon from "@mui/icons-material/Clear";
import { FaTimes } from "react-icons/fa";
import "./ProductUpdate.css";
import { useProductKind } from "../../../../hooks/Product/useProductKind";
import { useDeleteCertificateFromProduct } from "../../../../hooks/Product/useDeleteCertificateFromProduct";
import { useContext, useState } from "react";
import { useUpdateProduct } from "../../../../hooks/Product/useUpdateProduct";
import { StoreContext } from "~store";
function DetailsProduct(props) {
  const [state] = useContext(StoreContext);
  const [formTemp, setFormTemp] = useState({ id: props.formDataProduct.id });
  const [formDataProduct, setFormDataProduct] = useState({
    productName: props.formDataProduct.productName,
    kindof: props.formDataProduct.productType.id,
  });
  const [disableBtnStates, setDisableBtnStates] = useState(
    Array(props.formDataProduct.certificates.length).fill(false)
  );
  const {
    successDeleteCertificateFromProduct,
    errorDeleteCertificateFromProduct,
    executeDeleteCertificateFromProduct,
  } = useDeleteCertificateFromProduct();
  const {
    successUpdateProduct,
    messageUpdateProduct,
    errorUpdateProduct,
    executeUpdateProduct,
  } = useUpdateProduct();
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    await executeUpdateProduct(formTemp, state.id, state.token);
    await props.handleShowMoDalUpdateProduct(false);
    await props.fetchDataProduct();
    await props.handleShowSuccesAction("Updated Product");
  };
  const handleDeleteCertificateFromProduct = async (certificateId, index) => {
    await executeDeleteCertificateFromProduct(
      props.formDataProduct.id,
      certificateId,
      state.id,
      state.token
    );
    await props.fetchDataProduct();
    const updatedDisableBtnStates = [...disableBtnStates];
    updatedDisableBtnStates[index] = true;
    setDisableBtnStates(updatedDisableBtnStates);
  };

  const { message, success, data, loading, error } = useProductKind();
  //  console.log(props.formDataProduct);
  return (
    <div className="details-product-container">
      <div className="details-product-content">
        <div className="details-product-form">
          <h1>Update Product</h1>
          <div className="x-icon">
            <FaTimes
              onClick={() => {
                props.handleShowMoDalUpdateProduct(false);
              }}
            />
          </div>
          <form>
            <div className="details-product-infor">
              <div className="form-group">
                <div className="label">
                  <label className="form-control" htmlFor="Tên sản phẩm">
                    Tên sản phẩm
                  </label>
                </div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Tên sản phẩm"
                  value={formDataProduct.productName}
                  onChange={(e) => {
                    setFormDataProduct({
                      ...formDataProduct,
                      productName: e.target.value,
                    }),
                      setFormTemp({ ...formTemp, productName: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <div className="label">
                  <label htmlFor="Ngành hàng">Ngành hàng</label>
                </div>
                <select
                  value={formDataProduct.kindof}
                  onChange={(e) => {
                    setFormDataProduct({
                      ...formDataProduct,
                      kindof: e.target.value,
                    }),
                      setFormTemp({ ...formTemp, kindof: e.target.value });
                  }}
                >
                  {data.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="details-plan-infor">
              {props.formDataProduct.certificates.map((item, index) => {
                return (
                  <div className="form-group" key={index}>
                    <div className="label">
                      <label htmlFor="">Thông tin chứng chỉ {index + 1}</label>
                    </div>
                    <div className="product-certificate-status">
                      <input
                        disabled
                        className="form-control"
                        type="text"
                        placeholder="Tên chứng chỉ "
                        value={item.name}
                      />
                      <select disabled value={item.action}>
                        <option value={1}>Active</option>
                        <option value={0}>Inactive</option>
                      </select>
                      <input
                        disabled
                        type="text"
                        placeholder="Description"
                        value={item.description}
                      />
                      <button
                        disabled={disableBtnStates[index]}
                        key={index}
                        onClick={(e) => {
                          e.preventDefault(),
                            handleDeleteCertificateFromProduct(item.id, index);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </form>

          <button className="btn-submit" onClick={handleUpdateProduct}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;
