import React from "react";
import "./Contact.css";
import {
  UilPhone,
  UilHome,
  UilEnvelope,
  UilUser,
} from "@iconscout/react-unicons";
function Contact() {
  return (
    <div className="Contact-container">
      <div className="Contact-content">
        <h2>
          Đơn vị quản lí: chi cục vệ sinh an toàn thực phẩm thành phố đà nẵng
        </h2>
        <div className="Contact-content-row">
          <div className="Contact-icon">
            <UilPhone />
          </div>
          <span>Điện thoại</span>
          <p>0234567891</p>
        </div>
        <div className="Contact-content-row">
          <div className="Contact-icon">
            <UilEnvelope />
          </div>
          <span>Email</span>
          <p>minhduyle081003@gmail.com</p>
        </div>
        <div className="Contact-content-row">
          <div className="Contact-icon">
            <UilUser />
          </div>
          <span>Cơ Quan Chủ Quản</span>
          <p>Chi cục vệ sinh an toàn thực phẩm Đà Nẵng</p>
        </div>
        <div className="Contact-content-row">
          <div className="Contact-icon">
            <UilHome />
          </div>
          <span>Địa chỉ</span>
          <p>49 Hoàng Diệu,Hải Châu Đà Nẵng</p>
        </div>
      </div>

      <div className="Contact-hotline">
        <div className="hotline">
          <div className="hotline-icon">
            <UilPhone />
          </div>
          <div className="hotline-content">
            <p>Bộ phận 1 cửa</p>
            <h5>098787283</h5>
          </div>
        </div>
        <div className="hotline">
          <div className="hotline-icon">
            <UilPhone />
          </div>
          <div className="hotline-content">
            <p>Bộ phận kỹ thuật</p>
            <h5>098787283</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
