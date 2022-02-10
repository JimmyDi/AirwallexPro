import React, { Component } from 'react';
import MiddleContent from './MiddleContent/MiddleContent.jsx';
import './app.scss';

const App = () => {
    const appContainer = "app-container";

    return (
        <div className={appContainer}>
            <div className={appContainer + "-top-head"}>
                {"BROCCOLI & CO."}
            </div>
            <div className={appContainer + '-middle-content'}><MiddleContent/></div>
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
