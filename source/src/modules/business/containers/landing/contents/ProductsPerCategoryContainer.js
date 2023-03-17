import RenderContext from '@components/common/elements/RenderContext';
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { categoriesActions, landingActions } from '@store/actions';
import LandingProducts from '@modules/business/theme-default/desktop/landing/LandingProducts';

const { getAllProductCategoriesAction } = categoriesActions;
const { getProdsPerCategoriesAction } = landingActions;

const ProductsPerCategoryContainer = (props) => {
    const { prodsPerCategoriesData, prodsPerCategoriesLoading, prodCategoriesLoading } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            getAllProductCategoriesAction({
                onCompleted: (response) => {
                    if (response.data) {
                        const childrenCategories = response.data.filter((cate) => cate.parentId);
                        childrenCategories.map((cCate) => {
                            dispatch(
                                getProdsPerCategoriesAction({
                                    params: { categoryIds: cCate.id },
                                    customReducerData: { category: cCate },
                                }),
                            );
                        });
                    }
                },
            }),
        );
    }, []);
    return prodsPerCategoriesLoading || prodCategoriesLoading ? (
        <>loading</>
    ) : (
        <>
            {prodsPerCategoriesData.map((cateAndProds, index) => {
                return (
                    <RenderContext
                        layout={{
                            defaultTheme: ({ children }) => <div>{children}</div>,
                        }}
                        components={{
                            desktop: {
                                defaultTheme: LandingProducts,
                            },
                            mobile: {
                                defaultTheme: LandingProducts,
                            },
                        }}
                        data={cateAndProds}
                        key={`${index}-${cateAndProds.category.id}`}
                    />
                );
            })}
        </>
    );
};
const mapStateToProps = (state) => ({
    prodsPerCategoriesLoading: state.landing.getProdsPerCategoriesLoading,
    prodCategoriesLoading: state.categories.getProdCategoriesLoading,
    prodsPerCategoriesData: state.landing.prodsPerCategories || [],
});

export default connect(mapStateToProps)(ProductsPerCategoryContainer);
