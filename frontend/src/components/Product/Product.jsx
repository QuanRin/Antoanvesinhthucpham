import { ProductImage } from "./../Image/ProductImage/ProductImage";
import "./Product.css";
export const Product = (props) => {
  const { product } = props;
  const {
    id,
    kindof,
    productName,
    companyName,
    certificates,
    userId,
    action,
    product_type: { id: typeId, name: typeName },
  } = product;
  console.log(certificates);
  return (
    <div className="product-card-container">
      <div className="product-information">
        <h3>Tên công ty :</h3>
        <h3>{companyName}</h3>
      </div>
      <div className="product-information">
        <h3>Tên sản phẩm :</h3>
        <h3>{productName}</h3>
      </div>
      <div className="product-information">
        <h3>Ngành hàng :</h3>
        <h3>{typeName}</h3>
      </div>
      <div className="product-information">
        <h3>Chứng nhận :</h3>
        <div className="product-card-image">
          {certificates.length > 0 ? (
            certificates.map((image, index) => {
              return <ProductImage key={index} image={image} />;
            })
          ) : (
            <h1>No Certificates</h1>
          )}
        </div>
      </div>
    </div>
  );
};
