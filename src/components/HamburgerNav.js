import React, {useState} from "react";

export const HamburgerNav = (props) => {
    const [displayLinks, setDisplayLinks] = useState(() => {
        return false
    });

    function changeDisplaySetting() {
        setDisplayLinks(!displayLinks);
    }

    function addHiddenClass() {
        if (!displayLinks) {
            return ' hidden';
        }

        return ''
    }

    return (
        <>
            <span className='menu-hamburger' onClick={() => changeDisplaySetting()}/>
            <div className={'menu-links' + addHiddenClass()}>
                {
                    props.links.map(link => <li key={link.href.substr(1)}>
                        <a href={link.href}>{link.text}</a>
                    </li>)
                }
            </div>
        </>
    )
}