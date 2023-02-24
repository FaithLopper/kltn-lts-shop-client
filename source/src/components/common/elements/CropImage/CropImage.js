import AntdImgCrop from 'antd-img-crop';
import React from 'react';
import styles from './index.module.scss';
function CropImageLink({ shape, url, onCompleted, onError, aspect, onModalCancel, show, name, uploadFileThumbnail }) {
    return (
        <AntdImgCrop shape={shape} aspect={aspect} onModalCancel={onModalCancel}>
            <Component
                uploadFileThumbnail={uploadFileThumbnail}
                show={show}
                url={url}
                onError={onError}
                onFinish={onCompleted}
                name={name}
            />
        </AntdImgCrop>
    );
}

const getFile = () => {
    document.getElementById('image-uploader').click();
};

function Component({ beforeUpload, onFinish, name, uploadFileThumbnail }) {
    return (
        <>
            <div className={styles.round} id="image-container" onClick={getFile}></div>
            <input
                type="file"
                accept="image/png, image/jpeg"
                id="image-uploader"
                name={name}
                className={styles.imageUploader}
                onChange={async (e) => {
                    const files = Array.from(e.target.files)[0];
                    const filePreview = await beforeUpload(files, []);
                    const imagePreview = document.getElementById('image-result');
                    const imageContainer = document.getElementById('image-container');
                    imagePreview.style.display = 'block';
                    imagePreview.src = URL.createObjectURL(filePreview);
                    uploadFileThumbnail(filePreview);
                    imageContainer.style.display = 'none';
                    onFinish?.(filePreview);
                }}
            />
            <img
                id="image-result"
                className={styles.imagePreview}
                src=""
                height="200"
                alt="Image preview"
                onClick={getFile}
            />
        </>
    );
}

export default CropImageLink;
