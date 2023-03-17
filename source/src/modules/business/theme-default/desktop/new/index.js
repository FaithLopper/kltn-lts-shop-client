import { Spin } from 'antd';
import React from 'react';
import './newDetail.scss';
const NewDetailComponent = ({ loading, dataConfig }) => {
    return (
        <section className="new__detail section" id="new__detail">
            <div className="new__detail__container container grid">
                <div></div>
                <div className="new_detail-content" dangerouslySetInnerHTML={{ __html: dataConfig.content }}></div>
            </div>
        </section>
    );
};

export default NewDetailComponent;
