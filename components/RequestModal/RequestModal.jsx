import React, { useState } from 'react';
import './requestModal.scss';


const RequestModal = (props) => {
    const classPrefix = 'requestModal';
    const registService = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth';

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [confirmEmailValid, setConfirmEmailValid] = useState(true);
    const [sending, setSending] = useState(false);

    const sendRequest = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: fullName, email: email })
        };

        setSending(true);
        fetch(registService, requestOptions)
            .then(response => {
                if(response.ok) {
                    console.log(response);
                    props.toggleSuccess(true);
                    props.toggleRequest(false);
                    return;
                }
            })
            .catch((err) => {
                // Do sth.
            })
            .finally(() => {
                setSending(false);
            });
        
        // props.toggleRequest(false);
    }

    const resetTextBox = () => {
        setNameValid(true);
        setEmailValid(true);
        setConfirmEmailValid(true);
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const onSendClick = () => {
        // setNameValid(false);
        // setEmailValid(false);
        // setConfirmEmailValid(false);
        resetTextBox();
        let flag = true;

        if(fullName.length < 3) {
            setNameValid(false);
            flag = false;
        }

        if(!validateEmail(email)) {
            setEmailValid(false);
            flag = false;
        }

        if(email !== confirmEmail) {
            setConfirmEmailValid(false);
            flag = false;
        }

        if(flag === false) {
            return;
        }

        sendRequest();
    }

    return (
        <div className={classPrefix}>
            <div className={classPrefix + "-modal_content"}>
                <div className={classPrefix + "-modal_content-title"}>{'Request an invite'}</div>
                <input className={classPrefix + "-modal_content-full-name" + `${nameValid ? "" : " text-input-invalid"}`} value={fullName} onInput={e => setFullName(e.target.value)} placeholder='Full name'/>
                <div className={classPrefix + "-modal_content-full-name-error" + `${nameValid ? "" : " show-invalid-error-message"}`}>
                    {"Full name needs to be at least 3 characters long"}
                </div>
                <input className={classPrefix + "-modal_content-email" + `${emailValid ? "" : " text-input-invalid"}`} value={email} onInput={e => setEmail(e.target.value)} placeholder='Email'/>
                <div className={classPrefix + "-modal_content-email-error" + `${emailValid ? "" : " show-invalid-error-message"}`}>
                    {"Invalid Email"}
                </div>
                <input className={classPrefix + "-modal_content-confirm-email" + `${confirmEmailValid ? "" : " text-input-invalid"}`} value={confirmEmail} onInput={e => setConfirmEmail(e.target.value)} placeholder='Confirm email'/>
                <div className={classPrefix + "-modal_content-confirm-email-error" + `${confirmEmailValid ? "" : " show-invalid-error-message"}`}>
                    {"Confirm Email needs to match Email"}
                </div>
                <button className={classPrefix + "-modal_content-send-button"} onClick={onSendClick} disabled={sending}>
                    {sending ? "Sending, please wait...." : "Send"}
                </button>
            </div>
        </div>
    );
}

export default RequestModal;