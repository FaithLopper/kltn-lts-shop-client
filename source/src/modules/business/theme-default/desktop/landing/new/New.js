import React from 'react';
import { AppConstants } from '@constants';
import LoadingSpin from 'react-loading-spin';
import dayjs from 'dayjs';
import './New.scss';
import Pagination from 'react-js-pagination';
const New = (props) => {
    const { dataNew, pagination, handleTableChange, loading } = props;
    console.log(dataNew);
    return (
        <section className="new section" id="new">
            <div className="container">
                <h1>TIN TỨC & BÀI VIẾT</h1>
            </div>
            {!loading ? (
                <>
                    <div className="new__container container grid">
                        {!!dataNew.data?.length &&
                            dataNew.data.map(({ banner, title, description, createdDate, id }) => {
                                let check = dayjs(createdDate);
                                let day = check.format('DD'); // => ('Monday' , 'Tuesday' ----)
                                let month = check.format('MMMM'); // => ('January','February.....)
                                let year = check.format('YYYY'); // => ('2012','2013' ...)
                                let date = `${month} ${day}, ${year}`;
                                return (
                                    <a href={`/news/${id}`} className="new__item" key={title}>
                                        <img
                                            alt="new"
                                            className="new__item-image"
                                            src={AppConstants.contentRootUrl + banner}
                                        ></img>
                                        <div className="new__item-description">{description}</div>
                                        <div className="new__item-title">{title}</div>
                                        <div className="new__item-createdDate">{date}</div>
                                    </a>
                                );
                            })}
                    </div>
                </>
            ) : (
                <div className="section__loading container">
                    <LoadingSpin size="large" />
                </div>
            )}
            <div className="new__pagination">
                <Pagination
                    activePage={2}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    // onChange={this.handlePageChange.bind(this)}
                />
            </div>
        </section>
    );
};

export default New;
