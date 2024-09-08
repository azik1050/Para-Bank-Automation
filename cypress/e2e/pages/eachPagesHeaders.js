import { EachPagesHeadersLocators as locators } from "../locators/eachPagesHeadersLocators"

export class EachPagesHeader {
    getHeader() {
        return cy.get(locators.header)
    }
}