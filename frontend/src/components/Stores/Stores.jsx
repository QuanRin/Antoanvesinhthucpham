// import React, { useEffect } from "react";
import "./Stores.css";
import { SearchOutlined } from "@mui/icons-material";
// import AddStore from "./AddStore/AddStore";
import { useFetchUser } from "../../hooks/User/useFetchUser";
import { RowUsers } from "../tables/user/users";
import { Pagination } from "@mui/material";
import { useContext, useState } from "react";
import DetailsStores from "./DetailsStores/DetailsStores";
import UpdateStore from "./UpdateStore/UpdateStore";
import AddAccount from "../form/AddAccount/AddAccount";
import DetailsUser from "./DetailsUser/DetailsUser";
import UpdateUser from "./UpdateUser/UpdateUser";
import AddCompany from "./AddCompany/AddCompany";
import ActionSuccess from "../ActionSuccess/ActionSuccess";
import { RequireAuth } from "~hoc";
import { StoreContext } from "~store";
import { getAllCompaniesCurrent } from "../../hooks/User/useGetAllCompanies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Stores() {
  const [state] = useContext(StoreContext);

  // Details
  const [showModalUsersDetails, setShowModalUsersDetails] = useState(false);
  const handleShowUsersDetails = (value) => {
    setShowModalUsersDetails(value);
  };
  const [formDataUser, setFormDataUser] = useState({
    action: "",
    email: "",
    fullName: "",
    id: "",
    nationalId: "",
    userNumber: "",
    roleId: "",
  });
  const handleSetFormDataUser = (newObj) => {
    setFormDataUser(newObj);
  };

  const [showModalUserDetailsStore, setShowModalUserDetailsStore] =
    useState(false);
  const handleShowUserStoreDetails = (value) => {
    setShowModalUserDetailsStore(value);
  };
  const [formDataUserStore, setFormDataUserStore] = useState({
    action: "",
    businessId: "",
    companyId: "",
    companyName: "",
    email: "",
    faxNumber: "",
    fullName: "",
    id: "",
    phoneNumber: "",
    nationalId: "",
    userNumber: "",
    roleId: "",
    taxIndentity: "",
  });
  const handleSetFormDataUserStore = (newObj) => {
    setFormDataUserStore(newObj);
  };

  //  Update
  const [showModalUsersUpdate, setShowModalUsersUpdate] = useState(false);
  const handleShowUserUpdate = (value) => {
    setShowModalUsersUpdate(value);
  };

  const [showModalUpdateUserStore, setShowModalUpdateUserStore] =
    useState(false);
  const handleShowUserUpdateStore = (value) => {
    setShowModalUpdateUserStore(value);
  };

  const [showModalAddUser, setShowModalAddUser] = useState(false);
  const handleShowModalAddUser = (value) => {
    setShowModalAddUser(value);
  };
  const [showModalAddCompany, setShowModalAddCompany] = useState(false);
  const handleShowModalAddCompany = (value) => {
    setShowModalAddCompany(value);
  };

  const [actionPerform, setActionPerform] = useState(false);
  const [messageAction, setMessageAction] = useState("");
  const handleShowActionPerform = (message) => {
    toast.success(message);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [filter, setFilter] = useState({ fullname, email, page: 1 });
  const { data, pagination, error, loading, executeDataUser } = useFetchUser(
    filter,
    state.id,
    state.token
  );

  const fetchDataUser = async () => {
    setFilter(
      { email: "", fullname: "", page: currentPage },
      state.id,
      state.token
    );
    await executeDataUser(filter);
  };

  const handleOnChange = (event, value) => {
    setCurrentPage(value);
    setFilter({ fullname: fullname, email: email, page: value });
  };

  const handleOnClick = () => {
    setFilter({ fullname: fullname, email: email, page: currentPage });
    executeDataUser(filter, state.id, state.token);
  };
  const handleKeyEnter = (event) => {
    if (event.key === "Enter")
      setFilter({ fullname: fullname, email: email, page: currentPage });
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
      {showModalUsersDetails && (
        <DetailsUser
          formDataUser={formDataUser}
          handleShowUsersDetails={handleShowUsersDetails}
        />
      )}

      {showModalUserDetailsStore && (
        <DetailsStores
          formDataUserStore={formDataUserStore}
          handleShowUserStoreDetails={handleShowUserStoreDetails}
        />
      )}

      {showModalUsersUpdate && (
        <UpdateUser
          handleShowUserUpdate={handleShowUserUpdate}
          formDataUser={formDataUser}
          fetchDataUser={fetchDataUser}
          handleShowActionPerform={handleShowActionPerform}
        />
      )}

      {showModalUpdateUserStore && (
        <UpdateStore
          formDataUserStore={formDataUserStore}
          handleShowUserUpdateStore={handleShowUserUpdateStore}
          fetchDataUser={fetchDataUser}
          handleShowActionPerform={handleShowActionPerform}
        />
      )}

      {showModalAddUser && (
        <AddAccount
          handleShowModalAddUser={handleShowModalAddUser}
          fetchDataUser={fetchDataUser}
          setShowModalAddUser={setShowModalAddUser}
          handleShowActionPerform={handleShowActionPerform}
        />
      )}
      {showModalAddCompany && (
        <AddCompany
          handleShowModalAddCompany={handleShowModalAddCompany}
          fetchDataUser={fetchDataUser}
          setShowModalAddCompany={setShowModalAddCompany}
          handleShowActionPerform={handleShowActionPerform}
        />
      )}
      <div className="header-users">
        <div className="searching">
          <span>
            <SearchOutlined />
          </span>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onKeyDown={handleKeyEnter}
            placeholder="Enter Email"
          ></input>
          <input
            onChange={(e) => setFullName(e.target.value)}
            onKeyDown={handleKeyEnter}
            placeholder="Enter FullName"
          ></input>
          <button onClick={handleOnClick}> Search </button>
        </div>
        <div className="btn-area">
          {state.role === "Admin" && (
            <button
              className="btn"
              onClick={() => {
                setShowModalAddUser(true);
              }}
            >
              Add User
            </button>
          )}
          {state.role === "Admin" && (
            <button
              className="btn"
              onClick={() => {
                setShowModalAddCompany(true);
              }}
            >
              Add Company
            </button>
          )}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>TAX</th>
            <th>Type of Business</th>
            <th>Email</th>
            <th>Status</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            Array.isArray(data) &&
            data.map((item, index) => {
              return (
                <RowUsers
                  key={index}
                  index={index + 1 + (currentPage - 1) * 8}
                  {...item}
                  handleShowUsersDetails={handleShowUsersDetails}
                  formDataUser={formDataUser}
                  handleSetFormDataUser={handleSetFormDataUser}
                  handleShowUserStoreDetails={handleShowUserStoreDetails}
                  formDataUserStore={formDataUserStore}
                  handleSetFormDataUserStore={handleSetFormDataUserStore}
                  handleShowUserUpdate={handleShowUserUpdate}
                  handleShowUserUpdateStore={handleShowUserUpdateStore}
                  handleShowActionPerform={handleShowActionPerform}
                  fetchDataUser={fetchDataUser}
                />
              );
            })}
        </tbody>
      </table>

      {pagination && (
        <div className="pagination">
          <Pagination
            count={pagination.totalPages}
            showFirstButton
            showLastButton
            page={currentPage}
            onChange={handleOnChange}
          />
        </div>
      )}
    </>
  );
}

export default Stores;
