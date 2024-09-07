import { RegistrationPageLocators } from '../locators/registrationLocators.js'


export class RegistrationPage {
    constructor(username, password) {
        this.firstName = 'A'
        this.lastName = 'A'
        this.address = 'A'
        this.city = 'A'
        this.state = 'A'
        this.zipCode = 'A'
        this.phone = 'A'
        this.ssn = 'A'
        this.username = username
        this.password = password
    }

    login() {
        this.#enterLoginUsername()
        this.#enterLoginPassword()
        this.#clickLoginButton()
        cy.get('#rightPanel')
        .highlight()
        cy.screenshot('Successfully Logged In')
    }

    #clickLoginButton() {
        return cy.get(RegistrationPageLocators.loginButton).click()
    }

    #enterLoginUsername() {
        return cy.get(RegistrationPageLocators.login_form.username).type(this.username)
        .should('have.value', this.username)
    }

    #enterLoginPassword() {
        return cy.get(RegistrationPageLocators.login_form.password).type(this.password)
        .should('have.value', this.password)
    }

    register() {
        this.#enterFirstName(this.firstName);
        this.#enterLastName(this.lastName);
        this.#enterAddress(this.address);
        this.#enterCity(this.city);
        this.#enterState(this.state);
        this.#enterZipCode(this.zipCode);
        this.#enterPhone(this.phone);
        this.#enterSSN(this.ssn);
        this.#enterUsername(this.username);
        this.#enterPassword(this.password);
        this.#enterConfirmPassword(this.password);
        this.#clickRegisterButton()

        cy.get('#rightPanel')
        .highlight()
        cy.screenshot('Successfully Registered')
    }

    #clickRegisterButton() {
        return cy.get(RegistrationPageLocators.registerButton)
        .should('be.visible')
        .and('have.value', 'Register')
        .click()
    }
    
    #enterFirstName(firstname) {
        return cy.get(RegistrationPageLocators.registration_form.firstName).type(firstname)
            .should('have.value', firstname);
    }

    #enterLastName(lastname) {
        return cy.get(RegistrationPageLocators.registration_form.lastName).type(lastname)
            .should('have.value', lastname);
    }

    #enterAddress(address) {
        return cy.get(RegistrationPageLocators.registration_form.address).type(address)
            .should('have.value', address);
    }

    #enterCity(city) {
        return cy.get(RegistrationPageLocators.registration_form.city).type(city)
            .should('have.value', city);
    }

    #enterState(state) {
        return cy.get(RegistrationPageLocators.registration_form.state).type(state)
            .should('have.value', state);
    }

    #enterZipCode(zipCode) {
        return cy.get(RegistrationPageLocators.registration_form.zipCode).type(zipCode)
            .should('have.value', zipCode);
    }

    #enterPhone(phone) {
        return cy.get(RegistrationPageLocators.registration_form.phone).type(phone)
            .should('have.value', phone);
    }

    #enterSSN(ssn) {
        return cy.get(RegistrationPageLocators.registration_form.ssn).type(ssn)
            .should('have.value', ssn);
    }

    #enterUsername(username) {
        return cy.get(RegistrationPageLocators.registration_form.username).type(username)
            .should('have.value', username);
    }

    #enterPassword(password) {
        return cy.get(RegistrationPageLocators.registration_form.password).type(password)
            .should('have.value', password);
    }

    #enterConfirmPassword(confirmPassword) {
        return cy.get(RegistrationPageLocators.registration_form._confirm).type(confirmPassword)
            .should('have.value', confirmPassword);
    }
}