import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../../../../assets/images/LTS-black.png";
import { Form, Input, Checkbox, Row, Col, Button } from "antd";
import { useEffect } from "react";
const NewDetail = ({ dataConfig }) => {
  useEffect(() => {
    // const nav = document.querySelector(".menu");
    // nav.classList.add("disable-nav");
  }, []);
  return (
    <section className="new__detail section" id="new__detail">
      <div className="new__detail__container container grid">
        <div></div>
        <div
          className="new_detail-content"
          dangerouslySetInnerHTML={{ __html: dataConfig.content }}
        ></div>
      </div>
    </section>
  );
};

export default NewDetail;
