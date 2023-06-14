import "./users.css";
import { useFetchBusinessType } from "../../../hooks/useFetchBusinessType";
import { useDeleteUser } from "../../../hooks/User/useDeleteUser";
import { useContext } from "react";
import { StoreContext } from "~store";
export const RowUsers = (props) => {
  const [state] = useContext(StoreContext);
  const { dataBusinessType, errorBusinessType, loadingBusinessType } =
    useFetchBusinessType();

  let nameBusinessType = "";
  for (let i = 0; i < dataBusinessType.length; i++) {
    if (
      props.businessId &&
      props.businessId === dataBusinessType[i].businessId
    ) {
      nameBusinessType = dataBusinessType[i].typeName;
    }
  }

  let Object;
  if (
    props.role.roleCode === "MOD" ||
    props.role.roleCode === "USR" ||
    props.role.roleCode === "ADM"
  ) {
    Object = {
      ...props.formDataUser,
      fullName: props.fullName,
      id: props.id,
      email: props.email,
      action: props.action,
      nationalId: props.nationalId,
      userNumber: props.userNumber,
      roleId: props.role.roleId,
    };
  }

  if (props.role.roleCode === "STR") {
    Object = {
      ...props.formDataUserStore,
      action: props.action,
      businessId: props.businessId,
      companyId: props.companyId,
      companyName: props.companyName,
      email: props.email,
      faxNumber: props.faxNumber,
      fullName: props.fullName,
      id: props.id,
      phoneNumber: props.phoneNumber,
      nationalId: props.nationalId,
      userNumber: props.userNumber,
      roleId: props.role.roleId,
      taxIndentity: props.taxIndentity,
    };
  }
  const { message, success, loading, error, execute } = useDeleteUser();
  const handleDeleteUser = async (e) => {
    e.preventDefault();
    await execute(props.id, state.id, state.token);
    await props.fetchDataUser();
    await props.handleShowActionPerform(
      props.action === 1 ? "Inactived Success" : "Actived Success"
    );
  };
  const handleShowUsersDetail = () => {
    if (
      props.role.roleCode === "MOD" ||
      props.role.roleCode === "USR" ||
      props.role.roleCode === "ADM"
    ) {
      props.handleShowUsersDetails(true);
      props.handleSetFormDataUser(Object);
    }

    if (props.role.roleCode === "STR") {
      props.handleShowUserStoreDetails(true);
      props.handleSetFormDataUserStore(Object);
    }
  };

  const handleShowUserUpdate = () => {
    if (
      props.role.roleCode === "MOD" ||
      props.role.roleCode === "USR" ||
      props.role.roleCode === "ADM"
    ) {
      props.handleShowUserUpdate(true);
      props.handleSetFormDataUser(Object);
    }
    if (props.role.roleCode === "STR") {
      props.handleShowUserUpdateStore(true);

      props.handleSetFormDataUserStore(Object);
    }
  };

  const greenCircle = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#8AFF8A",
  };
  const redCircle = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#ff7b7b",
  };
  console.log(props);
  return (
    <tr className="user-table-row">
      <td>{props.index}</td>
      <td>{props.companyName ?? "null"}</td>
      <td>{props.taxIndentity ?? "null"}</td>
      <td>{props.businessType ?? ""}</td>
      <td>{props.email}</td>
      <td>
        {props.action === 1 ? (
          <>
            <div style={greenCircle}></div>
          </>
        ) : (
          <div style={redCircle}></div>
        )}
      </td>
      <td>{props.role.roleName ?? ""}</td>
      <td>
        <button onClick={handleShowUsersDetail} className="btn">
          Details
        </button>
        <button onClick={handleShowUserUpdate} className="btn">
          Update
        </button>
        <button onClick={handleDeleteUser} className="btn">
          {props.action === 1 ? "Inactive" : "Active"}
        </button>
      </td>
    </tr>
  );
};
