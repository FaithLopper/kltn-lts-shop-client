import { useEffect, useMemo, useState } from 'react';
import useQueryParams from './useQueryParams';
import { DEFAULT_TABLE_ITEM_SIZE } from '@constants';
import useFetch from './useFetch';
import useNotification from './useNotification';

const useListBase = ({
    apiConfig = {
        getList: null,
    },
    options = {
        objectName: '',
        pageSize: DEFAULT_TABLE_ITEM_SIZE,
    },
    override,
} = {}) => {
    const { params: queryParams, setQueryParams, deserializeParams } = useQueryParams();
    const [ data, setData ] = useState(0);
    const { execute: executeGetList, loading: loadingGetList } = useFetch(apiConfig.getList);
    const [ pagination, setPagination ] = useState({ pageSize: options.pageSize, total: 0, page: 1 });
    const notification = useNotification();

    const queryFilter = useMemo(() => deserializeParams(queryParams), [ queryParams ]);

    const mappingData = (response) => {
        return response;
    };

    const handleGetListError = (error) => {
        notification({ type: 'error', message: error.message });
    };

    const onCompletedGetList = (response) => {
        const { data, total } = mixinFuncs.mappingData(response);

        setData(data);
        setPagination((p) => ({ ...p, total }));
    };

    const handleFetchList = (params) => {
        if (!apiConfig.getList) throw new Error('apiConfig.getList is not defined');

        executeGetList({
            params,
            onCompleted: (response) => {
                mixinFuncs.onCompletedGetList(response);
            },
            onError: mixinFuncs.handleGetListError,
        });
    };

    const prepareGetListParams = (filter) => {
        const copyFilter = { ...filter };
        return copyFilter;
    };

    const getList = () => {
        const params = mixinFuncs.prepareGetListParams(queryFilter);

        mixinFuncs.handleFetchList({ ...params, limit: options.pageSize });
    };

    const changeFilter = (filter) => {
        setQueryParams(filter);
    };

    const changePagination = (pagination) => {
        queryParams.set('page', pagination.page);
        setQueryParams(queryParams);
    };

    const filterLanguage = (dataRow) => {
        let renderItem;
        dataRow.filter((item) => {
            if (item.languageId === '1') renderItem = item;
        });
        return renderItem;
    };

    const mixinFuncs = useMemo(() => {
        const centralizedHandler = {
            mappingData,
            handleGetListError,
            handleFetchList,
            prepareGetListParams,
            getList,
            changeFilter,
            changePagination,
            onCompletedGetList,
            filterLanguage,
        };

        override?.(centralizedHandler);

        return centralizedHandler;
    }, [ override, queryParams ]);

    useEffect(() => {
        mixinFuncs.getList();

        const page = parseInt(queryFilter.page);
        if (page > 0 && page !== pagination.page) {
            setPagination((p) => ({ ...p, page: page }));
        } else {
            setPagination((p) => ({ ...p, page: 1 }));
        }
    }, [ queryParams ]);

    useEffect(() => {}, [ data ]);

    return {
        loading: loadingGetList,
        data,
        setData,
        queryFilter,
        changeFilter,
        changePagination,
        pagination,
        setPagination,
        mixinFuncs,
        queryParams,
        setQueryParams,
    };
};

export default useListBase;
