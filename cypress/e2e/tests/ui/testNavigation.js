/// <reference types="cypress" />
import { RegistrationPage } from "../../pages/registrationPage";

const baseUrl = 'https://parabank.parasoft.com/parabank'
const registration_page = new RegistrationPage()

describe('Test navigation', () => {
    before(() => {
        cy.visit(`${baseUrl}/register.htm`)
        registration_page.login()
    });

    it('Go to Open New Account page', () => {
        // cy.visit('')
    });
});