export const RegistrationPageLocators = {
    registration_form: {
        firstName: '[name="customer.firstName"]',
        lastName: '[name="customer.lastName"]',
        address: '[name="customer.address.street"]',
        city: '[name="customer.address.city"]',
        state: '[name="customer.address.state"]',
        zipCode: '[name="customer.address.zipCode"]',
        phone: '[name="customer.phoneNumber"]',
        ssn: '[name="customer.ssn"]',
        username: '[name="customer.username"]', 
        password: '[name="customer.password"]',
        _confirm: '[name="repeatedPassword"]'
    },

    login_form: {
        username: '[name="username"]',
        password: '[name="password"]'
    },

    loginButton: '[value="Log In"]',
    
    registerButton: '[colspan="2"] > .button'
}