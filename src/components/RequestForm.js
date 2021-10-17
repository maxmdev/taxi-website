import {useRef, useState} from "react";

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
    const minNameLength = 2;
    const minPhoneLength = 11;

    const [contact, setContact] = useState(() => {
        return {
            name: {
              value: '',
              valid: function () {
                  return /^[a-zA-Z ]+$/.test(this.value) && this.value.length >= minNameLength;
              },
              toggleClass: function (event) {
                  if(!this.valid()) {
                          event.target.classList.add('invalid');
                  }

                  if(this.valid() || !this.value) {
                      event.target.classList.remove('invalid')
                  }
              }
            },
            phone: {
              value: '',
              valid: function () {
                  return /^(?:[+\d].*\d|\d)$/.test(this.value) && this.value.length >= minPhoneLength;
              },
              toggleClass: function (event) {
                  if(!this.valid()) {
                      event.target.classList.add('invalid');
                  }

                  if(this.valid() || !this.value) {
                      event.target.classList.remove('invalid')
                  }
              }
            },
            valid: function () {
                return this.name.valid() && this.phone.valid()
            }
        };
    });

    const submit = event => {
        event.preventDefault();

        if(contact.valid()) {

            fetch('/request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({contact})
            })
                .then(response => response) //.json
                .then(() => setContact({
                    ...contact,
                    name: {
                        ...contact.name,
                        value: ''
                    },
                    phone: {
                        ...contact.phone,
                        value: ''
                    }
                }))
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
        </>
    )
}