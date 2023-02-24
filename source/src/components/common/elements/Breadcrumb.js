import styles from './Breadcrumb.module.scss';

import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb({ routes = [], className, style, itemRender, separator = '/' }) {
    function defaultItemRender(route) {
        if (!route.path) {
            return <span>{route.name}</span>;
        }
        return <Link to={route.path}>{route.name}</Link>;
    } 

    return (
        <nav style={style} className={classNames(className, styles.breadcrumb)}>
            <ol>
                {routes.map((route, index) => {
                    return (
                        <li key={route.path}>
                            <span className={styles.link}>{itemRender?.(route) ?? defaultItemRender(route)}</span>
                            {index < routes.length - 1 && <span className={styles.separator}>{separator}</span>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumb;
