import {Navigation} from "./Navigation";
import Logo from "./src/images/Logo.png";

export const Header = (props) => {
    return (
        <header id='header'>
            <div className='logo'/>
            <Navigation/>
        </header>
    )
}