export const Logo = (props) => {
    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});

        return true
    }

    return (
        <div className='header-container__logo' onClick={scrollTop}>
            <div className='logo-text'>
                {props.text}
            </div>
        </div>
    )
}

Logo.defaultProps = {
    text: 'Top Taxi'
}