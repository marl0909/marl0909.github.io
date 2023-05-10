import React from "react";
import './Contacts.css'
import emailPhoto from './../../assets/img/logo-email.png'
import phonePhoto from './../../assets/img/phone.png'

export const Contacts = () => {
    return (
        <div id='contacts' className={'contacts'}>
            <h1>Contacts</h1>
            <div className={'contacts__section'}>
                <img className={'icon'} src={phonePhoto}/>
                <span>+38 063 746 0940</span>
            </div>
            <div className={'contacts__section'}>
                <img className={'icon'} src={emailPhoto}/>
                <span>taraskolesnyk0909@gmail.com</span>
            </div>
        </div>
    )
}