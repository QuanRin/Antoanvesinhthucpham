import React, { useState } from "react";
import "./Banner.css";
import { useHomeProduct } from "~hooks";
import { Product } from "../Product/Product";
import { Pagination } from "@mui/material";
export const Banner = () => {
  const [filter, setFilter] = useState({ product: "", company: "", page: 1 });
  const [page, setPage] = useState(1);
  const { data, pagination, execute } = useHomeProduct();
  const onChange = (event, value) => {
    setPage(page);
    setFilter({ ...filter, page: value });
  };

  const [company, setCompany] = useState("");
  const [product, setProduct] = useState("");
  const onClick = (e) => {
    e.preventDefault();
    setFilter({ ...filter, company: company, product: product });
    execute({ ...filter, company: company, product: product });
    setProduct("");
    setCompany("");
  };
  return (
    <div>
      <div className="Home">
        <div className="Home-content">
          <h2>
            Chi cục vệ sinh an toàn thực phẩm <br /> Thành Phố Đà Nẵng
          </h2>
          <h3>Tra cứu kết quả tại đây </h3>
          <form onSubmit={onClick}>
            <input
              type="text"
              placeholder="Nhập Tên Công Ty"
              className="input-box"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nhập Tên Sản Phẩm / Thực Phẩm"
              className="input-box"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
            <button type="submit">Tra Cứu</button>
          </form>
        </div>
      </div>
      (
      <div>
        {data?.length &&
          data.map((product, index) => {
            return <Product key={index} product={product} />;
          })}
        <br />
        {pagination.totalPages && (
          <div className="pagination">
            <Pagination
              count={pagination.totalPages}
              page={pagination.currentpage}
              onChange={onChange}
            />
          </div>
        )}
      </div>
      )
    </div>
  );
};
