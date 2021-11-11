export const Validate = {
    validateName: function (value) { return /^[a-zA-Z ]+$/.test(value) && value.length >= 2 },
    validateEmail: function (value) { return /\S+@\S+\.\S+/.test(value) },
    validateTextarea: function (value) { return value.length > 10 },
    validatePhone: function (value) { return /^(?:[+\d].*\d|\d)$/.test(value) && value.length >= 11 },
    validateForm: function (form) {
        let isValid = true;

        Object.entries(form).forEach(field => {
            const [, value] = field;

            if(value.hasOwnProperty('valid')) {
                if(!value.valid()) {
                    isValid = false;
                }
            }
        })

        return isValid
    },
    toggleClass: function(event, field) {
        if (!field.valid()) {
            event.target.classList.add('invalid');
        }

        if (field.valid() || !field.value) {
            event.target.classList.remove('invalid')
        }
    }
}