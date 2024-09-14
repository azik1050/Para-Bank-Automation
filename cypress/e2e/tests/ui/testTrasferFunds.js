import { AccountServicesPage } from "../../pages/accountServicesPage";
import { OpenNewAccountPage } from "../../pages/openNewAccountPage";
import { AccountsOverviewPage } from "../../pages/accountsOverviewPage";
import { TransferFundsPage } from "../../pages/transferFundsPage";
import { SuccessPanelPage } from "../../pages/successPanelPage";

const accounts_page = new AccountServicesPage()
const newAccount_page = new OpenNewAccountPage()
const accountsOverview_page = new AccountsOverviewPage()
const transferFunds_page = new TransferFundsPage()
const successPanel_page = new SuccessPanelPage()

var registered = false

const shouldRunTests = (tag) => {
    const envTag = Cypress.env('tag')
    return !envTag || envTag === tag
}


describe('Test Funds Transfer', () => {
    beforeEach(() => {
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
        registered = false
    });

    if (shouldRunTests('@positive')) {
        it('Choose a correct transaction', () => {
            transferFunds_page.extractAccounts().then(() => {
                transferFunds_page.getFromAccountDropdown().select(transferFunds_page.accounts[1])
            })
            transferFunds_page.getTransferButton().click()
            successPanel_page.getStatusHeader()
            .should('contain.text', 'Transfer Complete!')
        });
    }
    
    if (shouldRunTests('@negative')) {
        it('Choose an incorrect transaction', () => {
            transferFunds_page.extractAccounts().then(() => {
                transferFunds_page.getFromAccountDropdown().select(transferFunds_page.accounts[0])
            })
            transferFunds_page.getTransferButton().click()
            successPanel_page.getStatusHeader()
            .should('not.contain.text', 'Transfer Complete!')
        });
    }
    

    afterEach(() => {
        successPanel_page.getRightPanel().highlight()
        cy.screenshot(`Transaction`)
    })
});