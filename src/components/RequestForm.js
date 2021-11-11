import { useState } from "react";
import { Modal } from "./Modal/Modal";
import {ApiClient} from "./API/ApiClient";
import {Validate} from "./Validators/Validate";

export const RequestForm = (props) => {
    const [contact, setContact] = useState(() => {
        return {
            name: {
                value: '',
                valid: function() { return Validate.validateName(this.value) },
                toggleClass: function (event) { return Validate.toggleClass(event, this) }
            },
            phone: {
                value: '',
                valid: function () { return Validate.validatePhone(this.value) },
                toggleClass: function (event) { return Validate.toggleClass(event, this) }
            },
            valid: function () { return Validate.validateForm(this) }
        };
    });

    const [modal, setModal] = useState(() => {
        return {
            show: false,
            message: ''
        }
    });

    const submit = event => {
        event.preventDefault();

        if(contact.valid()) {
            ApiClient({url: '/request', method: 'POST', body: contact})
                .then(response => setModal({...modal, show: true, message: response}))
                .catch(error => {
                    setContact({
                        ...contact,
                        name: {
                            ...contact.name,
                            value: ''
                        },
                        phone: {
                            ...contact.phone,
                            value: ''
                        }
                    })
                    setModal({...modal, show: true, message: error.toString()})
                })
        }
    }

    return (
        <>
            <form className='request-form' onSubmit={submit}>
                <input type='text' className='request-form__name'
                       placeholder={props.placeholder.name}
                       value={contact.name.value}
                       onBlur={event => contact.name.toggleClass(event)}
                       onChange={event => setContact(
                           {...contact, name:
                                   {...contact.name,
                                       value: event.target.value}
                           })} required/>
                <input type='text' className='request-form__phone'
                       placeholder={props.placeholder.phone}
                       value={contact.phone.value}
                       onBlur={event => contact.phone.toggleClass(event)}
                       onChange={event => setContact(
                           {...contact, phone:
                                   {...contact.phone,
                                       value: event.target.value}
                           })} required/>
                <button type='submit'>{props.buttonText}</button>
            </form>
            <p className='request-disclaimer'>{props.disclaimer}</p>

            <Modal
                show={modal.show}
                header={'Request a Call'}
                onClose={() => setModal({...modal, show: false})}
                content={modal.message}
            />
        </>
    )
}

RequestForm.defaultProps = {
    placeholder: {
        name: 'Your Name (ex. John)',
        phone: 'Your Phone Number'
    },
    buttonText: 'Call me Back',
    disclaimer: 'By submitting this form, you confirm your consent to the processing of your personal data in' +
        ' accordance with the GDPR.'
}