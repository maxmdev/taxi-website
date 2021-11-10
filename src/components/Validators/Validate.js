export const Validate = {
    validateName: function (value) { return /^[a-zA-Z ]+$/.test(value) && value.length >= 2 },
    validateEmail: function (value) { return /\S+@\S+\.\S+/.test(value) },
    validateTextarea: function (value) { return value.length > 10 },
    validateForm: function (form) {
        let isValid = true;

        Object.entries(form).forEach(field => {
            const [key, value] = field;

            if(value.hasOwnProperty('valid')) {
                if(!value.valid()) {
                    isValid = false;
                }
            }
        })

        return isValid
    }
}