import { useDeletePost } from "../../../hooks/Post/useDeletePost";
import React, { useContext, useEffect } from "react";
import { StoreContext } from "~store";

const PostRowElement = (props) => {
  const [state] = useContext(StoreContext);
  console.log(props.handleSetShowSuccess);
  const { success, errorDeletePlan, executeDelete } = useDeletePost();

  const handleDeletePost = async (e) => {
    e.preventDefault();
    await executeDelete(props.item.id, state.id, state.token);
    if (success) {
      props.handleSetShowSuccess("Inactive Post Successfully");
    }
  };
  return (
    <>
      <tr>
        <td>{props.index}</td>
        <td>{props.item.title}</td>
        <td>{props.item.content}</td>
        <td>{props.item.postTypeModel.typeName}</td>
        <td>
          <button onClick={handleDeletePost}>Processed</button>
        </td>
      </tr>
    </>
  );
};

export default PostRowElement;
