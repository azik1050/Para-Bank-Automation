import { RequestLoanLocators as locators } from "../locators/requestLoanLocators"

export class RequestLoanPage {
    getLoanAmountField() {
        return cy.get(locators.loanAmountField)
    }

    getDownPaymentField() {
        return cy.get(locators.downPaymentField)
    }

    getFromAccountField() {
        return cy.get(locators.fromAccountField)
    }

    getApplyNowButton() {
        return cy.get(locators.loanAmountField)
    }
}