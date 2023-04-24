import React from 'react';
import styles from './DropDownNav.module.scss';
import { Link } from 'react-router-dom';
import routes from '@routes';
const DropDownNav = ({ categories, onMouseEnter, onMouseLeave, onChangeCategory }) => {
    return (
        <div className={styles.dropdownNav} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className={styles.wrapper}>
                {categories.map((item, index) => (
                    <div key={index} className={styles.item} onClick={() => onChangeCategory(item.id)}>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropDownNav;
