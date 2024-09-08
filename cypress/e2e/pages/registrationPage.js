import { RegistrationPageLocators as locators } from '../locators/registrationLocators.js'


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

    clickLoginButton() {
        return cy.get(locators.loginButton).click()
    }

    enterLoginUsername() {
        return cy.get(locators.login_form.username).type(this.username)
        .should('have.value', this.username)
    }

    enterLoginPassword() {
        return cy.get(locators.login_form.password).type(this.password)
        .should('have.value', this.password)
    }

    clickRegisterButton() {
        return cy.get(locators.registerButton)
        .should('be.visible')
        .and('have.value', 'Register')
        .click()
    }
    
    enterFirstName(firstname) {
        return cy.get(locators.registration_form.firstName).type(firstname)
            .should('have.value', firstname);
    }

    enterLastName(lastname) {
        return cy.get(locators.registration_form.lastName).type(lastname)
            .should('have.value', lastname);
    }

    enterAddress(address) {
        return cy.get(locators.registration_form.address).type(address)
            .should('have.value', address);
    }

    enterCity(city) {
        return cy.get(locators.registration_form.city).type(city)
            .should('have.value', city);
    }

    enterState(state) {
        return cy.get(locators.registration_form.state).type(state)
            .should('have.value', state);
    }

    enterZipCode(zipCode) {
        return cy.get(locators.registration_form.zipCode).type(zipCode)
            .should('have.value', zipCode);
    }

    enterPhone(phone) {
        return cy.get(locators.registration_form.phone).type(phone)
            .should('have.value', phone);
    }

    enterSSN(ssn) {
        return cy.get(locators.registration_form.ssn).type(ssn)
            .should('have.value', ssn);
    }

    enterUsername(username) {
        return cy.get(locators.registration_form.username).type(username)
            .should('have.value', username);
    }

    enterPassword(password) {
        return cy.get(locators.registration_form.password).type(password)
            .should('have.value', password);
    }

    enterConfirmPassword(confirmPassword) {
        return cy.get(locators.registration_form._confirm).type(confirmPassword)
            .should('have.value', confirmPassword);
    }
}


export class Authentication extends RegistrationPage {
    constructor(username, password) {
        super(username, password)
    }

    login() {
        this.enterLoginUsername()
        this.enterLoginPassword()
        this.clickLoginButton()
        // cy.get('#rightPanel')
        // .highlight()
        // cy.screenshot('Successfully Logged In')
    }

    register() {
        this.enterFirstName(this.firstName);
        this.enterLastName(this.lastName);
        this.enterAddress(this.address);
        this.enterCity(this.city);
        this.enterState(this.state);
        this.enterZipCode(this.zipCode);
        this.enterPhone(this.phone);
        this.enterSSN(this.ssn);
        this.enterUsername(this.username);
        this.enterPassword(this.password);
        this.enterConfirmPassword(this.password);
        this.clickRegisterButton()

        //cy.get('#rightPanel')
        //.highlight()
        //cy.screenshot('Successfully Registered')
    }
}