import { TransferFundsLocators as locators } from "../locators/transferFundsLocators";


export class TransferFundsPage {
    accounts = []

    getTransferButton() {
        return cy.get(locators.transferButton)
    }
    getAmountField() {
        return cy.get(locators.amountField)
    }
    getFromAccountDropdown() {
        return cy.get(locators.fromAccountDropdown)
    }

    extractAccounts() {
        this.getFromAccountDropdown().find('option').each(($option) => {
            this.accounts.push($option.text());
        }).then(() => {
            cy.log('Accounts:', this.accounts.join(', '));
        });
    }
}