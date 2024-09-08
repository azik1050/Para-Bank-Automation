import { AccountServicesPageLocators as locators } from '../locators/accountServicesLocators'

export class AccountServicesPage {
    getOpenNewAccountLink() {
        return cy.get(locators.links.openNewAccount)
    }

    getAccountsOverviewLink() {
        return cy.get(locators.links.accountsOverview);
    }

    getTransferFundsLink() {
        return cy.get(locators.links.transferFunds);
    }

    getBillsPayLink() {
        return cy.get(locators.links.billsPay);
    }

    getFindTransactionsLink() {
        return cy.get(locators.links.findTransactions);
    }

    getUpdateContactInfoLink() {
        return cy.get(locators.links.updateContactInfo);
    }

    getRequestLoanLink() {
        return cy.get(locators.links.requestLoan);
    }
}