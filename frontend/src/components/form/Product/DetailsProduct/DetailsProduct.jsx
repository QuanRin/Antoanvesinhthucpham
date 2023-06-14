import React from "react";

import { FaTimes } from "react-icons/fa";
import "./DetailsProduct.css";
function DetailsProduct(props) {
  return (
    <div className="details-product-container">
      <div className="details-product-content">
        <div className="details-product-form">
          <h1>Details Product</h1>
          <div className="x-icon">
            <FaTimes
              onClick={() => {
                props.handleShowMoDalDetailsProduct(false);
              }}
            />
          </div>
          <form action="">
            <div className="details-product-infor">
              <div className="form-group">
                <div className="label">
                  <label htmlFor="Tên công ty">Tên công ty</label>
                </div>

                <input
                  disabled
                  className="form-control"
                  type="text"
                  placeholder="Tên công ty"
                  value={props.formDataProduct.companyName}
                />
              </div>

              <div className="form-group">
                <div className="label">
                  <label className="form-control" htmlFor="Tên sản phẩm">
                    Tên sản phẩm
                  </label>
                </div>
                <input
                  disabled
                  className="form-control"
                  type="text"
                  placeholder="Tên sản phẩm"
                  value={props.formDataProduct.productName}
                />
              </div>
              <div className="form-group">
                <div className="label">
                  <label htmlFor="Ngành hàng">Ngành hàng</label>
                </div>
                <input
                  disabled
                  className="form-control"
                  type="text"
                  placeholder="Ngành hàng"
                  value={props.formDataProduct.productType.name}
                />
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
                    </div>
                  </div>
                );
              })}
            </div>
          </form>

          <button className="btn-submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;
