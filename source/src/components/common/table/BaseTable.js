import React from 'react';
import { Table } from 'antd';

import styles from './BaseTable.module.scss';

const BaseTable = ({ dataSource, columns, loading, pagination, rowKey = (record) => record.id, ...props }) => (
    <Table
        className={styles.baseTable}
        scroll={{ x: true }}
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={rowKey}
        // scroll={{ x: 'max-content' }}
        {...props}
        pagination={pagination ? { ...pagination, showSizeChanger: false, hideOnSinglePage: true } : false}
    />
);

export default BaseTable;
