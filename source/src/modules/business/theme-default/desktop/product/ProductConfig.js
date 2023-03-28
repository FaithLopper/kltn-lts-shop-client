import { AppConstants, ProductConfigKinds } from '@constants';
import React, { memo, useCallback } from 'react';

import './ProductConfig.scss';
const { contentRootUrl } = AppConstants;

const ProductConfig = ({
    type = 'checkbox',
    name = '',
    title = '',
    className = 'form-check-input',
    configId = 0,
    selectedConfigs = [],
    options = [],
    choiceKind = 2,
    onChangeFunc = () => {},
    onValidateFunc = () => {},
    setConfigImages = () => {},
    isReq = false,
    error = {
        isError: false,
        errorMsg: '',
    },
}) => {
    const checkedOptionExist = useCallback(
        (selectedConfigs, configId, variantId) => {
            var theConfig = selectedConfigs.find((config) => config.id === configId);
            if (theConfig?.variants) {
                return theConfig.variants.some((variant) => variant.id === variantId);
            }

            return false;
        },
        [selectedConfigs],
    );

    const changeHandler = useCallback(
        (e) => {
            e.preventDefault();
            let { id, checked } = e.target;
            let newSelectedData = JSON.parse(JSON.stringify(selectedConfigs));

            if (configId) {
                const configIndex = newSelectedData.findIndex((config) => config.id === configId);
                if (checked) {
                    const selectedVariant = options.find((opt) => opt.id === parseInt(id));
                    if (choiceKind === ProductConfigKinds.MULTI_CHOICE) {
                        newSelectedData[configIndex].variants.push(selectedVariant);
                    } else {
                        newSelectedData[configIndex].variants = [{ ...selectedVariant }];
                    }
                } else {
                    newSelectedData[configIndex].variants = [
                        ...selectedConfigs[configIndex].variants.filter((variant) => variant.id !== parseInt(id)),
                    ];
                }
                onChangeFunc(newSelectedData);
                setConfigImages(e);
                // validate error
                if (isReq) {
                    let isError = false;
                    if (!newSelectedData[configIndex].variants.length) {
                        isError = true;
                    }
                    onValidateFunc(configId, isError);
                } else return;
            }
        },
        [configId, selectedConfigs],
    );
    return (
        <fieldset className="checkbox-group">
            <legend className="checkbox-group-legend">
                {title} {isReq && <span className='required-field'>*</span>}
            </legend>
            <div className="checkbox">
                {options.map((opt) => {
                    const exist = checkedOptionExist(selectedConfigs, configId, opt.id);
                    return (
                        <label key={`${configId}-${opt.id}`} className="checkbox-wrapper">
                            <input
                                key={`${configId}-${opt.id}-${exist}`}
                                type={type}
                                name={name}
                                className={`${className} checkbox-input`}
                                id={opt.id}
                                checked={exist}
                                onChange={(e) => changeHandler(e)}
                            />
                            <span className="checkbox-tile">
                                {!opt.image && <span className="checkbox-label">{opt.name}</span>}
                                <img className="config-image" id={opt.id} alt="" src={contentRootUrl + opt.image} />
                            </span>
                        </label>
                    );
                })}
            </div>
            {error?.isError && <span className="error-msg">{error.errorMsg}</span>}
        </fieldset>
    );
};

export default memo(ProductConfig);
