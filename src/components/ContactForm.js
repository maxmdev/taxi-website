import '../ContactForm.css';

export const ContactForm = (props) => {
    return (
        <form className='contact-form'>
            <input className='contact-form__name' name='name' type='text'
                   placeholder={props.namePlaceholder} required/>
            <input className='contact-form__email' name='email' type='email'
                   placeholder={props.emailPlaceholder} required/>
            <select className='contact-form__topic' name='topic'>
                <option hidden>{props.topicPlaceholder}</option>
                {
                    props.topics.map(
                        (optionText, index) =>
                            <option value={index} key={'opt' + index}>{optionText}</option>
                    )
                }
            </select>
            <textarea className='contact-form__textarea' name='text' placeholder={props.textPlaceholder} rows='5'/>
            <div className='contact-form__buttons'>
                <input className='contact-form__button-reset' type='reset' value={props.resetPlaceholder}/>
                <input className='contact-form__button-submit' type='submit' value={props.submitPlaceholder}/>
            </div>
        </form>
    )
}

ContactForm.defaultProps = {
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Email Address',
    topicPlaceholder: 'Select Request Topic',
    textPlaceholder: 'Describe your inquiry...',
    resetPlaceholder: 'Clear',
    submitPlaceholder: 'Send Request',
    topics: [
        "Cars Availability",
        "Registration Documents",
        "Technical Questions",
        "Other"
    ]
}