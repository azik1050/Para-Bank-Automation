import { SuccessPanelLocators as locators } from "../locators/successPanelLocators.js"


export class SuccessPanelPage {
    getRightPanel() {
        return cy.get(locators.rightPanel)
    }

    getStatusHeader() {
        return cy.get(locators.statusHeader)
    }
}