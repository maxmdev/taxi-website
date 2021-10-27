const defaultProps = {
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
    ]}

export const Navigation = ({props = defaultProps}) => {
    return (
        <nav className="header-container__menu">
            {
                props.links.map(link => <li key={link.href.substr(1)}><a href={link.href}>{link.text}</a></li> )
            }
        </nav>
    )
}