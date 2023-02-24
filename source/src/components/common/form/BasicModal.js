import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import styles from './Modal.module.scss';
import close from '@assets/icons/close.png';

const BasicModal = (props) => {
    const { top, width, children, afterOpenModal, title, onCloseModal, style, isOpen, onOkModal, onCancelModal } =
        props;
    const setting = {
        content: {
            top: top || '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: width || '500px',
            // maxHeight:'80vh',
        },
    };
    return (
        <Modal
            isOpen={isOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={onCloseModal}
            style={setting}
            contentLabel={title}
            setting={style || setting}
            className={styles.basicModal}
            overlayClassName={styles.overlay}
        >
            <div className={styles.modalHeader}>
                <div>{title}</div>
                <button onClick={onCloseModal}>
                    <img src={close} alt="close-icon" />
                </button>
            </div>
            <div className={styles.modalContent}>{children}</div>
            <div className={styles.modalFooter}>
                <button className={styles.cancelButton} onClick={() => {
                    onCancelModal();
                    onCloseModal();
                }}>
                    Cancel
                </button>
                <button className={styles.okButton} onClick={onOkModal}>
                    Ok
                </button>
            </div>
        </Modal>
    );
};

export default BasicModal;
