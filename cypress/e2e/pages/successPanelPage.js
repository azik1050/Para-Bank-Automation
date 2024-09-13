import { SuccessPanelLocators as locators } from '../locators/'


export class SuccessPanelPage {
    getRightPanel() {
        return cy.get(locators.rightPanel)
    }
}