import { OpenNewAccountLocators as locators } from "../locators/openNewAccountLocators"

export class OpenNewAccountPage {
    new_account = null

    getAccountTypeButton() {
        return cy.get(locators.accountTypeButton)
    }

    getFromAccountIdButton() {
        return cy.get(locators.fromAccountIdButton)
    }

    getOpenNewAccountButton() {
        return cy.get(locators.openNewAccountButton)
    }
}