import RenderContext from '@components/common/elements/RenderContext';
import apiConfig from '@constants/apiConfig';
import useFetch from '@hooks/useFetch';
import CollectionProduct from '@modules/business/theme-default/desktop/product/CollectionProduct';
import React, { useEffect, useState } from 'react';

const CollectionProductContainer = (props) => {
    const { data } = props;

    const { execute: getCollectionProduct } = useFetch(apiConfig.product.getAll);
    const [ collectionProductData, setCollectionProductData ] = useState([]);

    let params = {
        parentProduct: data.id || 0,
        size: 10,
        page: 0,
    };

    useEffect(() => {
        const controller = new AbortController();
        let flag = true;
        if (data.id) {
            getCollectionProduct(
                {
                    params,
                    onCompleted: (response) => {
                        if (response && response.result)
                            flag && setCollectionProductData(JSON.parse(JSON.stringify(response?.data)));
                    },
                    onError: (err) => console.log(err),
                },
                { signal: controller.signal },
            );
        }

        return () => {
            controller.abort();
            flag = false;
        };
    }, []);

    return (
        <CollectionProduct
            layout={{
                defaultTheme: ({ children }) => <>{children}</>,
            }}
            components={{
                desktop: {
                    defaultTheme: CollectionProduct,
                },
                mobile: {
                    defaultTheme: CollectionProduct,
                },
            }}
            collection={data || {}}
            products={collectionProductData || []}
        />
    );
};

export default CollectionProductContainer;
