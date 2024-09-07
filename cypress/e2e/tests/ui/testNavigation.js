/// <reference types="cypress" />
import { RegistrationPage } from "../../pages/registrationPage";

const baseUrl = 'https://parabank.parasoft.com/parabank'
const registration_page = new RegistrationPage('a2', 'A')

describe('Test navigation', () => {
    before(() => {
        cy.visit(`${baseUrl}/register.htm`)
        registration_page.register()
    });

    beforeEach(() => {
        cy.visit(`${baseUrl}/register.htm`)
    });

    it('Go to Open New Account page', () => {
        // cy.visit('')
    });
});