const defaultProps = {
    links: [
        {
            href: "#offer",
            text: "Partnership"
        },
        {
            href: "#partners",
            text: "Partners"
        },
        {
            href: "#feedback",
            text: "Feedback"
        },
        {
            href: "#start",
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