import React from 'react';
import { AppConstants } from '@constants';
import LoadingSpin from 'react-loading-spin';
import dayjs from 'dayjs';
import './NewsTable.scss';
import Pagination from '@components/common/elements/Pagination/Pagination';

const NewsTableDesktop = (props) => {
    const { data, loading, currentPage, setCurrentPage, pageLimit, totalElements } = props;

    return (
        <section className="new section" id="new">
            <div className="container">
                <h1>TIN TỨC & BÀI VIẾT</h1>
            </div>
            {!loading ? (
                <>
                    <div className="new__container container grid">
                        {data?.length &&
                            data.map(({ banner, title, description, createdDate, id }) => {
                                let check = dayjs(createdDate);
                                let day = check.format('DD'); // => ('Monday' , 'Tuesday' ----)
                                let month = check.format('MMMM'); // => ('January','February.....)
                                let year = check.format('YYYY'); // => ('2012','2013' ...)
                                let date = `${month} ${day}, ${year}`;
                                return (
                                    <a href={`/news/${id}`} className="new__item" key={check + id}>
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
                    currentPage={currentPage}
                    total={totalElements}
                    limit={pageLimit}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </section>
    );
};

export default NewsTableDesktop;
