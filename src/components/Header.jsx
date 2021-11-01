import {Navigation} from "./Navigation";
import {Button} from "./Button";
import useWindowSize from "./useWindowSize/useWindowSize";

import '../Header.css';

const defaultProps = {
    headerPhoneNumber: "(222) 511-200",
    headerHeading: "Start a Career in a Reliable Taxi Company of Your City",
    headerDescription: "Receive a car within a few hours and earn money from today",
    applyButtonText: "Contact us",
    requestButtonText: "Request a call",
    headerLogoText: "Top Taxi"
}

export const Header = ({props = defaultProps}) => {
    const {width} = useWindowSize();
    const mobileWidth = 500;

    return (
        <>
            <div className='header-nav'>
                <div className='header-container'>
                    <div className='header-container__logo'>
                        <div className='logo-text'>
                            <a href="#header">{props.headerLogoText}</a>
                        </div>
                    </div>
                    { width > mobileWidth && (<Navigation/>) }
                    <span className='header-container__phone'>{props.headerPhoneNumber}</span>
                </div>
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
                            <Button text={props.applyButtonText}/>
                            <Button text={props.requestButtonText} classname='heading-apply'/>
                        </div>
                    </div>
                    { width > mobileWidth && (<div className='header-content__right'/>) }
                </div>
            </header>
        </>
    )
}