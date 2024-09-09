import { Authentication } from "../../pages/registrationPage";
import { AccountServicesPage } from "../../pages/accountServicesPage";
import { OpenNewAccountPage } from "../../pages/openNewAccountPage";
import { AccountsOverviewPage } from "../../pages/accountsOverviewPage";

const baseUrl = 'https://parabank.parasoft.com/parabank'
const auth = new Authentication('bf', 'Azimjon')
const accounts_page = new AccountServicesPage()
const newAccount_page = new OpenNewAccountPage()
const accountsOverview_page = new AccountsOverviewPage()

var registered = false

describe('Test Funds Transfer', () => {
    before(() => {
        cy.visit(`${baseUrl}/register.htm`)
        auth.register()
        registered = true
    });

    beforeEach(() => {
        if (!registered) {
            cy.visit(`${baseUrl}/register.htm`)
            auth.login()    
        }
    });

    it('Make a correct transaction', () => {
        accounts_page.getAccountsOverviewLink().click()

        accountsOverview_page.getAccountNumberHeader()
        .should('be', 'number')
        .then((number) => {
            cy.log(number)
        })
        cy.log(accountsOverview_page.accountNumber)
        newAccount_page.getFromAccountIdButton().select('')
        newAccount_page.getOpenNewAccountButton().click()
    });
});