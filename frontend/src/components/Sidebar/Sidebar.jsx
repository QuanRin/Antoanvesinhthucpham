/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./Sidebar.css";
import { useContext, useEffect, useState } from "react";

import { UilSignOutAlt } from "@iconscout/react-unicons";

import { useNavigate } from "react-router-dom";
import Logo from "../../asset/admin.png";
import ManageAccount from "../Admin/ManagerAccount/ManageAccount";
import { Admin } from "../../pages/admin/Admin";
import PlanInspect from "../Admin/PlanInspect/PlanInspect";
import Stores from "../Stores/Stores";
import Information from "../Admin/Information/Information";
import { ProductAdmin } from "~components";
import Certificate from "../Admin/Certificate/Certificate";

import { SET_AUTH_STATE } from "../../store/Constants";
import { StoreContext } from "~store";
import Post from "../../components/Admin/Post/Post";
const Sidebar = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const { data, role } = props;
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const [state, dispatch] = useContext(StoreContext);
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

  let tab;
  if (selected === 0) {
    tab = <Admin />;
  }
  if (selected === 1) {
    tab = <PlanInspect />;
  }
  if (selected === 2) {
    tab = <Stores />;
  }
  if (selected === 3) {
    tab = <ProductAdmin />;
  }
  if (selected === 4) {
    tab = <Certificate />;
  }
  if (selected === 5) {
    tab = <Information />;
  }
  if (selected === 6) {
    tab = <Post />;
  }

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
export default Sidebar;
