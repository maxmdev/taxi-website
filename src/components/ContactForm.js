import '../ContactForm.css';
import {useState} from "react";
import {ApiClient} from "./API/ApiClient";
import {Validate} from "./Validators/Validate";

export const ContactForm = (props) => {

    const [input, setInput] = useState(() => {
        return {
            name: {
                value: '',
                valid: function() { return Validate.validateName(this.value) },
                toggleClass: function (event) { return Validate.toggleClass(event, this) }
            },
            email: {
                value: '',
                valid: function () { return Validate.validateEmail(this.value) },
                toggleClass: function (event) { return Validate.toggleClass(event, this) }
            },
            topic: {
                value: ''
            },
            text: {
                value: '',
                valid: function () { return Validate.validateTextarea(this.value) },
                toggleClass: function (event) { return Validate.toggleClass(event, this) }
            },
            valid: function () { return Validate.validateForm(this) },
            state: {
                value: '_INIT_',
                message: ''
            }
        }
    })

    function submitForm(event) {
        event.preventDefault();

        if(input.valid()) {
            setInput({...input, state: {...input.state, value: '_SENT_'}});

            ApiClient({url: '/contact', method: 'POST', body: input})
                .then(json => setInput({...input, state:
                        {...input.state, message: json, value: '_RESPONSE_'}}))
                .catch(error => setInput({...input, state:
                        {...input.state, message: error.toString(), value: '_ERROR_'}}))
        }
    }

    if(input.state.value !== '_RESPONSE_') {
        return (
            <>
            {
                input.state.value === '_ERROR_' && (
                    <div className='form-message'>
                        <div className='form-message__error'>
                            {input.state.message}
                        </div>
                    </div>
                )
            }
                <form className='contact-form' onSubmit={submitForm}>
                    <input className='contact-form__name' name='name' type='text'
                           defaultValue={input.name.value}
                           onBlur={event => input.name.toggleClass(event)}
                           onChange={event => {
                               setInput(
                                   {
                                       ...input, name: {
                                           ...input.name, value: event.target.value
                                       }
                                   }
                               )
                           }}
                           placeholder={props.placeholder.name} required/>
                    <input className='contact-form__email' name='email' type='email'
                           defaultValue={input.email.value}
                           onBlur={event => input.email.toggleClass(event)}
                           onChange={event => {
                               setInput(
                                   {
                                       ...input, email: {
                                           ...input.email, value: event.target.value
                                       }
                                   }
                               )
                           }}
                           placeholder={props.placeholder.email} required/>
                    <select className='contact-form__topic' name='topic'
                            onChange={event => {
                                setInput(
                                    {
                                        ...input, topic: {
                                            ...input.topic, value: event.target.value
                                        }
                                    }
                                )
                            }}
                            defaultValue={input.topic.value}>
                        <option hidden>{props.placeholder.topic}</option>
                        {
                            props.topics.map(
                                (optionText, index) =>
                                    <option value={index} key={'opt' + index}>{optionText}</option>
                            )
                        }
                    </select>
                    <textarea className='contact-form__textarea' name='text'
                              defaultValue={input.text.value}
                              onBlur={event => input.text.toggleClass(event)}
                              onChange={event => {
                                  setInput(
                                      {
                                          ...input, text: {
                                              ...input.text, value: event.target.value
                                          }
                                      }
                                  )
                              }}
                              placeholder={props.placeholder.text} rows='5' required/>
                    <div className='contact-form__buttons'>
                        <input className='contact-form__button-reset' type='reset'
                               value={props.placeholder.reset}/>
                        <input className='contact-form__button-submit' type='submit'
                               onClick={submitForm}
                               value={props.placeholder.submit}/>
                    </div>
                </form>
            </>
        )
    }

    if(input.state.value === '_RESPONSE_') {
        return (
            <div className='form-message'>
                <div className='form-message__response'>
                    {input.state.message}
                </div>
            </div>
        )
    }
}

ContactForm.defaultProps = {
    placeholder: {
        name: 'Your Name',
        email: 'Email Address',
        topic: 'Select Request Topic',
        text: 'Describe your inquiry...',
        reset: 'Clear',
        submit: 'Send Request'
    },
    topics: [
        "Cars Availability",
        "Registration Documents",
        "Technical Questions",
        "Other"
    ]
}