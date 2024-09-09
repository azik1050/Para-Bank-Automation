/// <reference types="cypress" />
import { Authentication } from "../../pages/registrationPage";
import { AccountServicesPage } from "../../pages/accountServicesPage";
import { EachPagesHeader } from "../../pages/eachPagesHeaders";

const baseUrl = 'https://parabank.parasoft.com/parabank'
const auth = new Authentication('Azimjon690', 'Azimjon')
const accounts_page = new AccountServicesPage()
const headers = new EachPagesHeader()

var count = 0

describe('Test navigation', () => {
    before(() => {
        cy.visit(`${baseUrl}/register.htm`)
        auth.register()
    });

    beforeEach(() => {
        if (count) {
            cy.visit(`${baseUrl}/register.htm`)
            auth.login()
        }
    });

    it('Go to "Open New Account" page', () => {
        cy.visit(`${baseUrl}/openaccount.htm`)
        accounts_page.getOpenNewAccountLink()
            .should('contain.text', 'Open New Account')
            .click();
        headers.getHeader()
        .should('contain.text', 'Open New Account')
    });

    it('Go to "Accounts Overview" page', () => {
        accounts_page.getAccountsOverviewLink()
            .should('contain.text', 'Accounts Overview')
            .click();
        headers.getHeader()
        .should('contain.text', 'Accounts Overview')    
    });

    it('Go to "Transfer Funds" page', () => {
        accounts_page.getTransferFundsLink()
            .should('contain.text', 'Transfer Funds')
            .click();
        headers.getHeader()
        .should('contain.text', 'Transfer Funds')        
    });

    it('Go to "Bills Pay" page', () => {
        accounts_page.getBillsPayLink()
            .should('contain.text', 'Bill Pay')
            .click();
        headers.getHeader()
        .should('contain.text', 'Bill Payment Service')        
    });

    it('Go to "Find Transactions" page', () => {
        accounts_page.getFindTransactionsLink()
            .should('contain.text', 'Find Transactions')
            .click();
        headers.getHeader()
        .should('contain.text', 'Find Transactions')        
    });

    it('Go to "Update Contact Info" page', () => {
        accounts_page.getUpdateContactInfoLink()
            .should('contain.text', 'Update Contact Info')
            .click();
        headers.getHeader()
        .should('contain.text', 'Update Profile')            
    });

    it('Go to "Request Loan" page', () => {
        accounts_page.getRequestLoanLink()
            .should('contain.text', 'Request Loan')
            .click();
        headers.getHeader()
        .should('contain.text', 'Apply for a Loan')            
    });

    afterEach(() => {
        cy.wait(2000)   
        cy.get('#rightPanel').highlight()
        cy.screenshot(`Navigation Page ${count}`)
        count += 1
    });
});