import {Navigation} from "./Navigation";
import {Button} from "./Button";
import {Logo} from "./Logo";
import useWindowSize from "./useWindowSize/useWindowSize";
import copyToClipboard from "../functions/copyToClipboard";
import {Notification} from "./Notification/Notification";
import {useState} from "react";

import '../Header.css';
import {Modal} from "./Modal/Modal";
import {ContactForm} from "./ContactForm";
import {RequestForm} from "./RequestForm";

export const Header = (props) => {
    const {width} = useWindowSize();
    const mobileWidth = 500;
    const hideTaxiImage = 820;

    const [showNotification, setShowNotification] = useState(() => {
        return false
    });

    const [showContactForm, setShowContactForm] = useState(() => {
        return false
    });

    const [showRequestForm, setShowRequestForm] = useState(() => {
        return false;
    })

    function copyData(event) {
        if(!showNotification) {
            setTimeout(() => {
                setShowNotification(false);
            }, 5000)
        }

        return setShowNotification(copyToClipboard(event));
    }

    function displayContactForm() {
        if(!showContactForm) {
            return setShowContactForm(true);
        }
    }

    function displayRequestForm() {
        if(!showRequestForm) {
            return setShowRequestForm(true);
        }
    }

    return (
        <>
            <div className='header-nav'>
                <div className='header-container'>
                    <Logo/>
                    { width > mobileWidth && (<Navigation/>) }
                    <span className='header-container__phone'
                    onClick={event => copyData(event)}>{props.headerPhoneNumber}</span>
                </div>
                <Notification
                    show={showNotification}
                    hide={() => setShowNotification(false)}
                />
            </div>

            <header id='header' className='header'>
                <div className='header-content'>
                    { width > mobileWidth && (<div className='header-background'/>) }
                    <div className='header-content__heading'>
                        <div className='heading-content'>
                            <h1>{props.headerHeading}</h1>
                            <p>{props.headerDescription}</p>
                        </div>
                        <div className='heading-buttons'>
                            <Button text={props.applyButtonText}
                                    onClick={displayContactForm}/>
                            <Button text={props.requestButtonText}
                                    onClick={displayRequestForm}
                                    classname='heading-apply'/>
                        </div>
                    </div>
                    { width > hideTaxiImage && (<div className='header-content__right'/>) }
                </div>
            </header>

            <Modal content={<ContactForm/>}
                   show={showContactForm}
                   onClose={() => setShowContactForm(false)}
                   header={props.contactFormTitle}/>

            <Modal content={<RequestForm/>}
                   show={showRequestForm}
                   onClose={()=> setShowRequestForm(false)}
                   header={props.requestFormTitle}/>
        </>
    )
}

Header.defaultProps = {
    headerPhoneNumber: "(222) 511-200",
    headerHeading: "Start a Career in a Reliable Taxi Company of Your City",
    headerDescription: "Receive a car within a few hours and earn money from today",
    applyButtonText: "Contact us",
    requestButtonText: "Request a call",
    headerLogoText: "Top Taxi",
    contactFormTitle: "Contact us",
    requestFormTitle: "Request a Call"
}