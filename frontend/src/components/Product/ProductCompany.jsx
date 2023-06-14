import { StoreContext } from "~store";
import { useGetAllProductCompany } from "../../hooks/Company/useGetAllProductCompany";
import React, { useContext, useState } from "react";
import { ProductRow } from "../../components/tables/product/ProductRow";
import { Pagination } from "@mui/material";
const ProductCompany = () => {
  const [state] = useContext(StoreContext);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [filter, setFilter] = useState({ page: 1 });
  const { pagination, data, error, loading, execute } = useGetAllProductCompany(
    filter,
    state.id,
    state.token
  );
  const handleOnChange = () => {};
  return (
    <>
      <div className="product-header">
        <h1>Recent Product</h1>
        <button
          onClick={() => {
            // setShowModalAddProduct(true);
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
                  index={index + 1 + (pageCurrent - 1) * 8}
                  product={item}
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
    </>
  );
};

export default ProductCompany;
