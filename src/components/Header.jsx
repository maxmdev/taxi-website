import {Navigation} from "./Navigation";
import {Button} from "./Button";
import {PhoneButton} from "./PhoneButton";

const defaultProps = {
    headerPhoneNumber: "(222) 511-200",
    headerHeading: "Get started in just a few hours",
    headerDescription: "Become a driver of the reliable taxi company in your city and earn money today",
    applyButtonText: "Contact us",
    requestButtonText: "Request a call",
    headerLogoText: "Top Taxi"
}

export const Header = ({props = defaultProps}) => {
    return (
        <header id='header' className='city_background'>
            <div className='header-nav'>
                <div className='header-container'>
                    <div className='header-container__logo'>
                        <div className='logo-text'>
                            <a href="#header">{props.headerLogoText}</a>
                        </div>
                    </div>
                    <Navigation/>
                    <span className='header-container__phone'>{props.headerPhoneNumber}</span>
                </div>
            </div>

            <div className='header-content'>
                <div className='header-content__right'>
                    <div className='header-content__heading'>
                        <h1>{props.headerHeading}</h1>
                        <p>{props.headerDescription}</p>
                    </div>
                    <div className='header-content__contact'>
                        <Button text={props.applyButtonText} />
                        <PhoneButton href='#' text={props.requestButtonText} />
                    </div>
                </div>
            </div>
            <div className='header-wave'>
                <div className='header-taxi'/>
            </div>
        </header>
    )
}