export const ContactForm = (props) => {
    return (
        <form className='contact-form'>
            <input name='name' type='text' placeholder={props.namePlaceholder} required/>
            <input name='email' type='email' placeholder={props.emailPlaceholder} required/>
            <input name='topic' type='select'>
                <option hidden>{props.topicPlaceholder}</option>
                {
                    props.topics.map(
                        (optionText, index) =>
                        <option value={index} key={'opt' + index}>{optionText}</option>
                    )
                }
            </input>
            <textarea name='text' placeholder={props.textPlaceholder}/>
            <input type='reset' value={props.resetPlaceholder}/>
            <input type='submit' value={props.submitPlaceholder}/>
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