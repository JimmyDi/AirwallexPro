import React, { useState } from 'react';
import './middleContent.scss';

const MiddleContent = () => {
    const classPrefix = 'middle-content';

    const onRequestEvent = () => {
        console.log('Request an invite');
    }

    return (
        <div className={classPrefix}>
            <div className={classPrefix + '-title'}>
                {'A better way to enjoy every day'}
            </div>
            <div className={classPrefix + '-subTitle'}>
                {'Be the first to know when we launch'}
            </div>
            <div className={classPrefix + '-requestButton'}>
                <button onClick={onRequestEvent}>
                    {'Request an invite'}
                </button>
            </div>
        </div>
    );
}

export default MiddleContent;