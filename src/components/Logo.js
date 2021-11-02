export const Logo = (props) => {
    return (
        <div className='header-container__logo'>
            <div className='logo-text'>
                <a href="#header">{props.text}</a>
            </div>
        </div>
    )
}

Logo.defaultProps = {
    text: 'Top Taxi'
}