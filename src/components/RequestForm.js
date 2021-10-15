const defaultProps = {
    placeholder: {
        name: 'Your Name (ex. John Doe)',
        phone: 'Your Phone Number'
    },
    buttonText: 'Call me Back',
    disclaimer: 'By submitting this form, you confirm your consent to the processing of your personal data in' +
        ' accordance with the GDPR.'
}
export const RequestForm = ({props = defaultProps}) => {
    return (
        <>
            <form className='request-form'>
                <input type='text' className='request-form__name' placeholder={props.placeholder.name}/>
                <input type='text' className='request-form__phone' placeholder={props.placeholder.phone}/>
                <button type='submit'>{props.buttonText}</button>
            </form>
            <p className='request-disclaimer'>{props.disclaimer}</p>
        </>
    )
}