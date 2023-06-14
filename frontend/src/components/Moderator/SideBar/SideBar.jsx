import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "~store";

import { SET_AUTH_STATE } from "../../../store/Constants";
import Logo from "../../../asset/admin.png";
import { useNavigate } from "react-router-dom";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { Admin } from "../../../pages/admin/Admin";
import { ProductAdmin } from "../../../components/Product/ProductAdmin";
import Information from "../../../components/Admin/Information/Information";
import ProductCompany from "../../../components/Product/ProductCompany";

// import updateGlobalState
const SideBarCompany = (props) => {
  const { data, role } = props;
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [state, dispatch] = useContext(StoreContext);
  let tab;
  if (selected === 0) {
    tab = <Admin />;
  }
  if (selected === 1) {
    tab = <ProductCompany />;
  }
  if (selected == 2) {
    tab = <Information />;
  }
  useEffect(() => {
    if (state.id !== "" && state.role !== "" && state.token !== "") {
      setIsLogin(true);
    }
  }, [isLogin]);
  const updateGlobalState = ({ id, token, role }) => {
    dispatch({
      type: SET_AUTH_STATE,
      payload: { id: id, token: token, role: role },
    });
  };
  const logoutHandler = (e) => {
    e.preventDefault();
    updateGlobalState({ id: "", token: "", role: "" });
    return navigate("/landingPage");
  };
  return (
    <>
      {isLogin && (
        <div className="Sidebar-container">
          <div className="Sidebar-glass">
            <div>
              <div className="Sidebar">
                <div className="logo">
                  <img src={Logo} alt="" />
                  <span>{role}</span>
                </div>
              </div>

              {/* Menu */}

              <div className="menu">
                {data.map((item, index) => {
                  return (
                    <div
                      className={
                        selected === index ? "menuItem active" : "menuItem"
                      }
                      key={index}
                      onClick={() => {
                        setSelected(index);
                      }}
                    >
                      <item.icon />
                      <span>{item.heading}</span>
                    </div>
                  );
                })}

                <div className="menuItem" onClick={logoutHandler}>
                  <UilSignOutAlt />
                  <span>Log out</span>
                </div>
              </div>
            </div>

            <div className="content">{tab}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBarCompany;
