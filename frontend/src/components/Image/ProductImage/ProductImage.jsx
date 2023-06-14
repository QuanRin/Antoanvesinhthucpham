import { ImageURI } from "~utils";
import "./ProductImage.css";
export const ProductImage = (props) => {
  const { image } = props;
  const { id, name, path, description } = image;

  return (
    <div className="img-container">
      <img
        src={ImageURI(path)}
        loading="lazy"
        alt={name}
        id={id}
        title={description}
      />
    </div>
  );
};
