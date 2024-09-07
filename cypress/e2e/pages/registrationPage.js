import { RegistrationPageLocators } from '../locators/registrationLocators.js'

export class RegistrationPage {
    fillForm() {
        cy.get(RegistrationPageLocators.form.firstName).type('A')
        .should('contain', 'A')
        cy.get(RegistrationPageLocators.form.lastName).type('A')
        .should('contain', 'A')
        cy.get(RegistrationPageLocators.form.address).type('A')
        .should('contain', 'A')
        cy.get(RegistrationPageLocators.form.city).type('A')
        .should('contain', 'A')
        cy.get(RegistrationPageLocators.form.state).type('A')
        .should('contain', 'A')
        cy.get(RegistrationPageLocators.form.zipCode).type('A')
        .should('contain', 'A')
        cy.get(RegistrationPageLocators.form.ssn).type('A')
        .should('contain', 'A')
        cy.get(RegistrationPageLocators.form.password).type('A')
        .should('contain', 'A')
        cy.get(RegistrationPageLocators.form._confirm).type('A')
        .should('contain', 'A')
    }

    clickRegisterButton() {
        this.fillForm()
        return cy.get(RegistrationPageLocators.registerButton)
        .should('be.visible')
        .and('contain', 'register')
        .click()
    }
    
    enterFirstname(firstname) {
        return cy.get(RegistrationPageLocators.form.firstName).type(firstname)
    }






    
}