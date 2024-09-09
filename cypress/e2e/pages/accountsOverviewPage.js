import { AccountOverviewLocators as locators } from "../locators/accountsOverviewLocators";

export class AccountsOverviewPage {
    accountNumber = null

    getAccountNumberHeader() {
        return cy.get(locators.accountNumber)
    }
}