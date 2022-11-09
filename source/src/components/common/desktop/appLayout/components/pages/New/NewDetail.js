import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../../../../assets/svg/logo-500.svg";
import { Form, Input, Checkbox, Row, Col, Button } from "antd";
const NewDetail = ({detail}) => {
    console.log(detail)
  return (
    <section className="new__detail section" id="new__detail">
      <div className="new__detail__container container">
            <div className="new_detail-content" dangerouslySetInnerHTML={{ __html: detail.content }}></div>
      </div>
    </section>
  );
};

export default NewDetail;
