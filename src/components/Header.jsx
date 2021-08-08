import {Navigation} from "./Navigation";
import {Button} from "./Button";
import {PhoneButton} from "./PhoneButton";

export const Header = (props) => {
    return (
        <header id='header'>
            <div className='header-nav'>
                <div className='header-container'>
                    <div className='header-logo'>
                        <div className='logo-text'>
                            Top Taxi
                        </div>
                    </div>
                    <Navigation/>
                    <span className='phone'>(022) 511-200</span>
                </div>
            </div>

            <div className='header-content'>
                <div className='header-content__heading'>
                    <h1>Начните работу в такси всего за несколько часов</h1>
                    <p>Станьте водителем одного из надежных таксопарков Кишинева</p>
                </div>
                <div className='header-content__contact'>
                    <Button text='Оставить заявку' />
                    <PhoneButton href='#' text='Заказать звонок' />
                </div>
            </div>
        </header>
    )
}