import { AccountServicesPage } from "../../pages/accountServicesPage";
import { CustomerCarePage } from "../../pages/customerCarePage";
import { EachPagesHeader } from "../../pages/eachPagesHeaders";

const accounts_page = new AccountServicesPage()
const headers = new EachPagesHeader()
const customerCare_page = new CustomerCarePage()


describe('Test letter sending', () => {
    beforeEach(() => {
        accounts_page.getContactLink().click()
    });

    it('Test email sending', () => {
        customerCare_page.getNameField().type('AAA')
        .should('have.value', 'AAA')

        customerCare_page.getEmailField().type('AAA')
        .should('have.value', 'AAA')

        customerCare_page.getPhoneField().type('AAA')
        .should('have.value', 'AAA')

        customerCare_page.getMessageField().type('AAA')
        .should('have.value', 'AAA')

        customerCare_page.getSendButton().click()

        headers.getHeader()
        .should('contain.text', 'Customer Care')
    });
});