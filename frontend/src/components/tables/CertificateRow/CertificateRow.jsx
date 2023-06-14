import { ProductImage } from "../../Image/ProductImage/ProductImage";
import React, { useContext } from "react";
import "./CertificateRow.css";
import { useDeleteCertificate } from "../../../hooks/Certificate/useDeleteCetificate";
import { StoreContext } from "~store";

function CertificateRow(props) {
  const [state] = useContext(StoreContext);
  const { success, message, error, execute } = useDeleteCertificate();
  const { index, certificate } = props;
  const handleDeleteCertificate = async (e) => {
    e.preventDefault();
    await execute(id, state.id, state.token);
    await props.handleSetShowSuccess("Delete Certificate Success");
    await props.getCertificates();
  };
  const { id, action, name, description, path } = certificate;
  const newObject = {
    ...props.formDataCertificate,
    id: id,
    action: action,
    name: name,
    description: description,
    path: path,
  };

  const handleShowModalUpdateCertificate = () => {
    props.handleShowModalUpdateCertificate(true);
    props.handleSetFormDataCertificate(newObject);
  };
  return (
    <>
      <tr>
        <td>{index}</td>
        <td>{name}</td>
        <td>{description}</td>
        <td>{<ProductImage image={certificate} />}</td>
        <td className="btn-certificates">
          <button onClick={handleShowModalUpdateCertificate}>Update</button>

          <button onClick={handleDeleteCertificate}>Delete</button>
        </td>
      </tr>
    </>
  );
}

export default CertificateRow;
