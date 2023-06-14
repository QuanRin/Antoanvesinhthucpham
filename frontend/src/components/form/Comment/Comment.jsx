import React, { useState } from "react";
import "./Comment.css";
import { useUserComment } from "../../../hooks/useUserComment";
function Comment(props) {
  const { error, executeUserComment } = useUserComment();

  const handleUserComment = async (e) => {
    e.preventDefault();
    await executeUserComment(formComment);
    if (error === "") {
      await props.handleShowActionPerform("Successful comment");
      setFormComment({ title: "", content: "" });
    }
  };
  const [formComment, setFormComment] = useState({
    typeId: "ggzbMjNlojYdZ-53gDweinl",
  });
  return (
    <div className="comment-form-container">
      <div className="comment-form-content">
        <h1>Đóng góp ý kiến </h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="Nhập tiêu đề :">Nhập tiêu đề : </label>
            <input
              type="text"
              placeholder="Nhập tiêu đề"
              onChange={(e) => {
                setFormComment({ ...formComment, title: e.target.value });
              }}
              value={formComment.title}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Nhập nội dung ">Nhập nội dung : </label>
            <input
              type="text"
              placeholder="Nhập tên cửa hàng"
              onChange={(e) => {
                setFormComment({ ...formComment, content: e.target.value });
              }}
              value={formComment.content}
            />
          </div>
        </form>
        <button onClick={handleUserComment}>Submit</button>
      </div>
    </div>
  );
}

export default Comment;
