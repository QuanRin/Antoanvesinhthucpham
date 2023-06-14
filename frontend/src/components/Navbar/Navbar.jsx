/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import "./Navbar.css";
import Logo from "../../asset/logoDanang.jpg";
import { useNavigate } from "react-router-dom";
import Contact from "../Contact/Contact";
import { Banner } from "../Banner/Banner";
import Comment from "../form/Comment/Comment";
import ActionSuccess from "../ActionSuccess/ActionSuccess";
export const Navbar = () => {
  const [actionPerform, setActionPerform] = useState(false);
  const [messageAction, setMessageAction] = useState("");
  const handleShowActionPerform = (message) => {
    setMessageAction(message);
    setActionPerform(true);
    setTimeout(() => {
      setActionPerform(false);
    }, 3000);
  };

  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const menuOptions = [
    { title: "Trang Chủ" },
    { title: "Liên hệ" },
    { title: "Đóng góp ý kiến" },
  ];
  let tab;
  if (selected === 0) {
    tab = <Banner />;
  }
  if (selected === 1) {
    tab = <Contact />;
  }
  if (selected === 2) {
    tab = <Comment handleShowActionPerform={handleShowActionPerform} />;
  }

  return (
    <>
      {actionPerform && <ActionSuccess messageAction={messageAction} />}
      <div className="homePage-container">
        <div className="nav">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="homePage-options">
            {menuOptions.map((item, index) => {
              return (
                <li
                  className={selected === index ? "active" : ""}
                  key={index}
                  onClick={() => setSelected(index)}
                >
                  {item.title}
                </li>
              );
            })}
          </div>
          <div className="btn">
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Log In
            </button>
            <button
              onClick={() => {
                navigate("/register");
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
        {tab}
      </div>
    </>
  );
};
