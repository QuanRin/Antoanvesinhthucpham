import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";
import "./ManageAccount.css";
import AccountUpdate from "../../form/AccountUpdate/AccountUpdate";
import AddAccount from "../../form/AddAccount/AddAccount";
const ManageAccount = () => {
  const [data, setData] = useState([]);
  const [getDataSuccess, setGetDataSucceess] = useState(true);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const handleUpdateAccount = (value) => {
    setShowModalUpdate(value);
  };
  const [showModalAddAccount, setShowModalAddAccount] = useState(false);
  const handleAddAccount = (value) => {
    setShowModalAddAccount(value);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setGetDataSucceess(true);
      });
  }, []);
  const columns = [
    {
      Header: "Username",
      accessor: "username",
    },
    {
      Header: "Fullname",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Phone Number",
      accessor: "phone",
    },
    {
      Header: "Address",
      accessor: "address.city",
    },
    {
      Header: "Action",
      Cell: (row) => (
        <button onClick={() => handleUpdateAccount(true)}>Update</button>
      ),
    },
  ];
  const pageSizeOptions = [5, 10];
  if (getDataSuccess === false) {
    return <Loading />;
  } else {
    return (
      <div className="ManageAccount">
        {/* {showModalUpdate&&<AccountUpdate      statusModalUpdateHide={handleUpdateAccount}/>}
        {showModalAddAccount&&<AddAccount      statusModalAddAccountHide={handleAddAccount}/>}

        <div className="ManageAccount-header">
          <h1>Account Management</h1>
          <button
            onClick={() => {
             handleAddAccount(true)
            }}
          >
            Add Account
          </button>
        </div>
        <ReactTable
          columns={columns}
          data={data}
          defaultPageSize={9}
          pageSizeOptions={pageSizeOptions}
        /> */}
      </div>
    );
  }
};

export default ManageAccount;
