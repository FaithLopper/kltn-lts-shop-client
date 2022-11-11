import React from "react";

const CategoryBanner = (props) => {
  const { img, name, note } = props;

  return (
    <div style={{backgroundImage: `url(${img})`}} className="cate-img cate-banner">
      {/* <img src={img} alt="cate-img" width={50} className="cate-img-size" /> */}
      <h2>
        {name}
        <h5>{note}</h5>
      </h2>
    </div>
  );
};

export default CategoryBanner;
