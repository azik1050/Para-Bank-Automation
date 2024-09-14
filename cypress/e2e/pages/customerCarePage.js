import { CustomerCareLocators as locators } from "../locators/customerCareLocators";


export class CustomerCarePage {
    getNameField() {
        return cy.get(locators.nameField);
    }

    getEmailField() {
        return cy.get(locators.emailField);
    }

    getPhoneField() {
        return cy.get(locators.phoneField);
    }

    getMessageField() {
        return cy.get(locators.messageField);
    }

    getSendButton() {
        return cy.get(locators.sendButton)
    }
}