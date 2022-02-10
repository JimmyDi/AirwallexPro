import React, { Component, useState } from 'react';
import MiddleContent from './MiddleContent/MiddleContent.jsx';
import './app.scss';
import RequestModal from './RequestModal/RequestModal.jsx';
import SuccessModal from './SuccessModal/SuccessModal.jsx'

const App = () => {
    const appContainer = "app-container";
    const [showRequest, setShowRequest] = useState(true);
    const [showSuccess, setShowSuccess] = useState(true);

    return (
        <div className={appContainer}>
            <div className={appContainer + "-top-head"}>
                {"BROCCOLI & CO."}
            </div>
            <div className={appContainer + '-middle-content'}><MiddleContent/></div>
            {/* {showRequest ? <div className={appContainer + '-request-window'}><RequestModal toggleRequest={setShowRequest}/></div> : null} */}
            {showSuccess ? <div className={appContainer + '-request-window'}><SuccessModal toggleSuccess={setShowSuccess}/></div> : null}

            <div className={appContainer + "-bottom-footer"}>
                <div>
                    {"Made with ♥️ in Melbourne."}
                </div>
                <div>
                    {"© 2016 Brocoli & Co. All rights reserved."}
                </div>
            </div>
        </div>
    )
}

export default App;
