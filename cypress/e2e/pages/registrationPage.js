import { RegistrationPageLocators } from '../locators/registrationLocators.js'

export class RegistrationPage {
    constructor() {
        this.firstName = 'A'
        this.lastName = 'A'
        this.address = 'A'
        this.city = 'A'
        this.state = 'A'
        this.zipCode = 'A'
        this.phone = 'A'
        this.ssn = 'A'
        this.username = 'A'
        this.password = 'A'
    }

    login() {
        this.#register()
    }

    #register() {
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
    }

    #clickRegisterButton() {
        this.fillForm()
        return cy.get(RegistrationPageLocators.registerButton)
        .should('be.visible')
        .and('contain', 'register')
        .click()
    }
    
    #enterFirstName(firstname) {
        return cy.get(RegistrationPageLocators.form.firstName).type(firstname)
            .should('have.value', firstname);
    }

    #enterLastName(lastname) {
        return cy.get(RegistrationPageLocators.form.lastName).type(lastname)
            .should('have.value', lastname);
    }

    #enterAddress(address) {
        return cy.get(RegistrationPageLocators.form.address).type(address)
            .should('have.value', address);
    }

    #enterCity(city) {
        return cy.get(RegistrationPageLocators.form.city).type(city)
            .should('have.value', city);
    }

    #enterState(state) {
        return cy.get(RegistrationPageLocators.form.state).type(state)
            .should('have.value', state);
    }

    #enterZipCode(zipCode) {
        return cy.get(RegistrationPageLocators.form.zipCode).type(zipCode)
            .should('have.value', zipCode);
    }

    #enterPhone(phone) {
        return cy.get(RegistrationPageLocators.form.phone).type(phone)
            .should('have.value', phone);
    }

    #enterSSN(ssn) {
        return cy.get(RegistrationPageLocators.form.ssn).type(ssn)
            .should('have.value', ssn);
    }

    #enterUsername(username) {
        return cy.get(RegistrationPageLocators.form.username).type(username)
            .should('have.value', username);
    }

    #enterPassword(password) {
        return cy.get(RegistrationPageLocators.form.password).type(password)
            .should('have.value', password);
    }

    #enterConfirmPassword(confirmPassword) {
        return cy.get(RegistrationPageLocators.form._confirm).type(confirmPassword)
            .should('have.value', confirmPassword);
    }
}