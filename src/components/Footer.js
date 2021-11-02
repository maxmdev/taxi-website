import {Logo} from "./Logo";
import {Navigation} from "./Navigation";
import '../Footer.css';
import useWindowSize from "./useWindowSize/useWindowSize";
import copyToClipboard from "../functions/copyToClipboard";

export const Footer = (props) => {
    const width = useWindowSize();
    const maxTabletWidth = 810;
    const showNavi = width.width > maxTabletWidth;
    return (
        <footer className='footer' id='footer'>
            <div className='footer-content container'>
                <Logo/>
                { showNavi && (<Navigation/>) }
                <div className='footer-content__contacts'>
                    <div className='footer-content__phone' onClick={copyToClipboard}>{props.phone}</div>
                    <div className='footer-content__about'>
                        &#169; Top Taxi S.R.L.
                    </div>
                </div>
            </div>
        </footer>
    )
}

Footer.defaultProps = {
    phone: '(222) 511-200'
}