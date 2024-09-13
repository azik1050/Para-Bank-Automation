import { Authentication } from "../../pages/registrationPage";
import { AccountServicesPage } from "../../pages/accountServicesPage";
import { OpenNewAccountPage } from "../../pages/openNewAccountPage";
import { AccountsOverviewPage } from "../../pages/accountsOverviewPage";
import { TransferFundsPage } from "../../pages/transferFundsPage";

const baseUrl = 'https://parabank.parasoft.com/parabank'
const auth = new Authentication('1hytht212', 'Azimjon')
const accounts_page = new AccountServicesPage()
const newAccount_page = new OpenNewAccountPage()
const accountsOverview_page = new AccountsOverviewPage()
const transferFunds_page = new TransferFundsPage()

var registered = false

describe('Test Funds Transfer', () => {
    // before(() => {
    //     cy.visit(`${baseUrl}/register.htm`)
    //     auth.register()
    //     registered = true
    // });

    beforeEach(() => {
        if (!registered) {
            cy.visit(`${baseUrl}/register.htm`)
            auth.login()    
        }

        // Navidation process
        accounts_page.getAccountsOverviewLink().click()

        accountsOverview_page.getAccountNumberHeader() // get current account number
        .then((element) => {
            accountsOverview_page.accountNumber = element.text()
        })

        accounts_page.getOpenNewAccountLink().click()

        newAccount_page.new_account = newAccount_page.getFromAccountIdButton().find('option') // create a new account
        newAccount_page.getOpenNewAccountButton().click()

        accounts_page.getTransferFundsLink().click()

        transferFunds_page.getAmountField().type('0') // make a transfer from new to current
    });

    it('Choose a correct transaction', () => {
        transferFunds_page.extractAccounts().then(() => {
            transferFunds_page.getFromAccountDropdown().select(transferFunds_page.accounts[1])
        })
    });

    it('Choose an incorrect transaction', () => {
        transferFunds_page.extractAccounts().then(() => {
            transferFunds_page.getFromAccountDropdown().select(transferFunds_page.accounts[0])
        })
    });

    afterEach(() => {
        transferFunds_page.getTransferButton().click()
        cy.wait(2000)
        cy.get('').highlight()
        cy.screenshot(`Transaction`)
    })
});