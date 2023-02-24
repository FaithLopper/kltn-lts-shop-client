import React from 'react';
import styles from './Campaign.module.scss';
import avatar from '@assets/images/avatarCampaignNav.png';
import { setData } from '@utils/localStorage';
import { appType } from '@constants';
const CampaignChanger = () => {
    const changeCampainLayout = () => {
        setData(appType, 'campaign');
        window.location.href = '/';
    };
    return (
        <div className={styles.campaignChanger} onClick={changeCampainLayout}>
            <img src={avatar} alt="" />
            <div>Campaign Started</div>
        </div>
    );
};

export default CampaignChanger;