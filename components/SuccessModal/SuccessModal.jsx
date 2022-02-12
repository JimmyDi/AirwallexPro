import React, { useState } from 'react';
import './successModal.scss';

const SuccessModal = (props) => {
    const classPrefix = 'successModal';

    const onOkButtonClick = () => {
        props.toggleSuccess(false);
    }

    return (
        <div className={classPrefix}>
            <div className={classPrefix + "-modal_content"}>
                <div className={classPrefix + "-modal_content-title"}>{'All done!'}</div>
                <div className={classPrefix + "-modal_content-text"}>{'You will be one of the first to experience Broccoli & Co. when we launch.'}</div>
                <button className={classPrefix + "-modal_content-send-button"} onClick={onOkButtonClick}>{"OK"}</button>
            </div>
        </div>
    );
}

export default SuccessModal;