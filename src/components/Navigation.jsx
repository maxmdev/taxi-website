import useWindowSize from "./useWindowSize/useWindowSize";
import {HamburgerNav} from "./HamburgerNav";

export const Navigation = (props) => {
    const {width} = useWindowSize();
    const mobileWidth = 500;
    const maxTabletWidth = 896;
    const tabletWidth = width > mobileWidth && width < maxTabletWidth;

    return (
        <nav className="header-container__menu">
            {
                !tabletWidth && (
                    props.links.map(link => <li key={link.href.substr(1)}>
                        <a href={link.href}>{link.text}</a>
                    </li>)
                )
            }

            {
                tabletWidth && (<HamburgerNav links = {props.links}/>)
            }
        </nav>
    )
}

Navigation.defaultProps = {
    links: [
        {
            href: "#partnership",
            text: "Partnership"
        },
        {
            href: "#partners",
            text: "Partners"
        },
        {
            href: "#reviews",
            text: "Feedback"
        },
        {
            href: "#workflow",
            text: "How to Start"
        },
        {
            href: "#contact",
            text: "Contacts"
        }
        ]
    }