import React from "react";
import logo from "../../../../../../assets/images/LTS-black.png";
import moment from "moment";
const NewHeader = (props) => {
  const { dataConfig } = props;
  let check = moment(dataConfig.createdDate);
  let day = check.format("DD"); // => ('Monday' , 'Tuesday' ----)
  let month = check.format("MMMM"); // => ('January','February.....)
  let year = check.format("YYYY"); // => ('2012','2013' ...)
  let date = `${month} ${day}, ${year}`;
  return (
    <header className="header new-page">
      <div className="new__header__container wrapper">
          <div className="new__header-top">
            <img src={logo} alt="" className="new__header-logo" />
          </div>
          <div className="new__header-content grid">
            <div className="news__header-description">{date}</div>
            <div className="news__header-title">{dataConfig.title}</div>
          </div>
      </div>
    </header>
  );
};

export default NewHeader;
