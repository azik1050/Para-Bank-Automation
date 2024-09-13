import { RegistrationPageLocators as locators } from '../locators/registrationLocators.js'


export class RegistrationPage {
    firstName = 'A'
    lastName = 'A'
    address = 'A'
    city = 'A'
    state = 'A'
    zipCode = 'A'
    phone = 'A'
    ssn = 'A'
    username = 'Azimjon'
    password = 'Azimjon'

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
    has_account = false

    constructor(baseUrl) {
        super()
        this.baseUrl = baseUrl
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

    authenticate() {
        cy.log(this.baseUrl)
        cy.visit(`${this.baseUrl}/register.htm`)
        if (!this.has_account) {
            this.register()
        }
        cy.get('.title').then(($element) => {
            const text = $element.text()
            cy.log(text)
            if (text == 'Signing up is easy!') {
                this.login()
                this.has_account = true
            }
        })
    }
}