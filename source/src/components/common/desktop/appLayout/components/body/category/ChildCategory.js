// import React, { useEffect, useState } from "react";
// import { getProduct } from "../../../../../../../actions/product";
// import { useDispatch } from "react-redux";
// import Product from "../product/Product";
// import CategoryBanner from "./CategoryBanner";
// import { AppConstants } from "../../../../../../../constants";

// const ChildCategory = (props) => {
//   const { data } = props;
//   const dispatch = useDispatch();
//   const [categoryChildId, setCategoryChildId] = useState(0);
//   const [categoryChildName, setCategoryChildName] = useState("");
//   const [categoryChildImage, setCategoryChildImage] = useState("");
//   const [productList, setProductList] = useState([]);

//   useEffect(() => {
//     setCategoryChildId(data?.id);
//     setCategoryChildName(data?.name);
//     setCategoryChildImage(`${AppConstants.contentRootUrl}/` + data?.icon);
//     // eslint-disable-next-line react-hooks/exhaustive-deps

//     if (categoryChildId !== 0) {
//       getProductList();
//     }

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [categoryChildId]);

//   const getProductList = () => {
//     const params = {
//       categoryId: categoryChildId,
//     };
//     dispatch(
//       getProduct({
//         params,
//         onCompleted: (data) => {
//           setProductList(data);
//         },
//         onError: (data) => {
//           console.log(data);
//           // dispatch(hideFullScreenLoading())
//         },
//       })
//     );
//   };

//   return (
//     <section className="product section" id="product">
//       <CategoryBanner img={categoryChildImage} name={categoryChildName} />
//       {productList.length !== 0 && (
//         <div className="product__container container product-section">
//           <Product data={productList} />
//         </div>
//       )}
//     </section>
//   );
// };

// export default ChildCategory;
