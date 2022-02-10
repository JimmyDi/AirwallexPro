import React, { useState } from 'react';
import './requestWindow.scss';


const RequestWindow = (props) => {
    const classPrefix = 'modal';
    const registService = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth';

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');

    const sendRequest = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: fullName, email: email })
        };

        fetch(registService, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        props.toggleRequest(false);
    }

    return (
        <div className={classPrefix}>
            <div className={classPrefix + "-modal_content"}>
                <div className={classPrefix + "-modal_content-title"}>{'Request an invite'}</div>
                <input className={classPrefix + "-modal_content-full-name"} value={fullName} onInput={e => setFullName(e.target.value)}/>
                <input className={classPrefix + "-modal_content-email"} value={email} onInput={e => setEmail(e.target.value)}/>
                <input className={classPrefix + "-modal_content-confirm-email"} value={confirmEmail} onInput={e => setConfirmEmail(e.target.value)}/>
                <button className={classPrefix + "-modal_content-send-button"} onClick={sendRequest}>{"Send"}</button>
            </div>
        </div>
    );
}

export default RequestWindow;