import RenderContext from '@components/common/elements/RenderContext';
import apiConfig from '@constants/apiConfig';
import useFetch from '@hooks/useFetch';
import React, { useEffect, useState } from 'react';
import { NewsTableDesktop } from '@modules/business/theme-default/desktop/landing/news/NewsTable';

const NewsContainer = () => {
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ newsData, setNewsData ] = useState({});
    const pageSize = 6;
    let params = {
        size: pageSize,
        page: currentPage - 1,
    };
    const { execute: getNewsData, loading } = useFetch(apiConfig.news.getList);

    useEffect(() => {
        getNewsData({
            params,
            onCompleted: (response) => {
                if (response && response.result) setNewsData(JSON.parse(JSON.stringify(response?.data)));
            },
            onError: (err) => console.log(err),
        });
    }, [ currentPage ]);

    return (
        <RenderContext
            layout={{
                defaultTheme: ({ children }) => <>{children}</>,
            }}
            components={{
                desktop: {
                    defaultTheme: NewsTableDesktop,
                },
                mobile: {
                    defaultTheme: NewsTableDesktop,
                },
            }}
            loading={loading}
            data={newsData?.data || {}}
            pageLimit={pageSize}
            totalElements={newsData?.totalElements || pageSize}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
    );
};

export default NewsContainer;
