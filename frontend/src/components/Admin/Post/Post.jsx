import { StoreContext } from "~store";
import { useGetAllPosts } from "../../../hooks/Post/useGetAllPosts";
import { Pagination } from "@mui/material";
import React, { useContext, useState } from "react";
import PostRowElement from "../../../components/tables/Post/PostRowElement";
import { ToastContainer, toast } from "react-toastify";
const Post = () => {
  const [state] = useContext(StoreContext);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [filter, setFilter] = useState({ page: 1 });

  const { pagination, data, success, error, loading, execute } = useGetAllPosts(
    filter,
    state.id,
    state.token
  );
  const handleSetShowSuccess = (message) => {
    toast.success(message);
  };
  const handleOnChange = (event, value) => {
    console.log("event", event, value);
    setPageCurrent(value);
    setFilter({ page: value });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="post-container">
        <div className="post-header">
          <h1>Post</h1>
        </div>

        <div className="post-content">
          <table className="post-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Content</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) &&
                data.map((item, index) => {
                  console.log(item);
                  return (
                    <PostRowElement
                      key={index}
                      index={index + 1 + (pageCurrent - 1) * 8}
                      item={item}
                      handleSetShowSuccess={handleSetShowSuccess}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
        {
          <div className="pagination">
            <Pagination
              count={pagination.totalPages}
              showFirstButton
              showLastButton
              onChange={handleOnChange}
            />
          </div>
        }
      </div>
    </>
  );
};

export default Post;
