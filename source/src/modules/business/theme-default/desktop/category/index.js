import React, { Fragment } from 'react';
import styles from './index.module.scss';
import notFoundProduct from '@assets/images/not_found_product.png';
import SingleProductsGridLayout from '../product/SingleProductsGridLayout';
import SingleProduct from '../product/SingleProduct';
const CategoryComponent = ({ products }) => {
    return (
        <Fragment>
            {products.length ? (
                <SingleProductsGridLayout>
                    {products.map((prod, index) => {
                        return (
                            <div className={styles.products} key={index}>
                                <SingleProduct key={index} data={prod || {}} />
                            </div>
                        );
                    })}
                </SingleProductsGridLayout>
            ) : (
                <div className={styles.notFound}>
                    <span>
                        <img alt="not-found-background" src={notFoundProduct} />
                    </span>
                    <h2>Không tìm thấy kết quả</h2>
                    <h3>Hãy thử với các từ khóa khác</h3>
                </div>
            )}
        </Fragment>
    );
};

export default CategoryComponent;
