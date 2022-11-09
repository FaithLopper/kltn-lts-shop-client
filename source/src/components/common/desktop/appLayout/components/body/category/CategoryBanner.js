import React from "react";

const CategoryBanner = (props) => {
  const { img, name } = props;

  return (
    <div className="cate-banner">
      <img src={img} alt="cate-img" width={50} className="cate-img-size" />
      <h2>
        {name}
        <h5>best clothes in town for all</h5>
      </h2>
    </div>
  );
};

export default CategoryBanner;
