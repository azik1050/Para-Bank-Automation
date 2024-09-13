import { before } from "mocha";
import { AccountServicesPage } from "../../pages/accountServicesPage";
import { Authentication } from "../../pages/registrationPage";

const accountServices_page = new AccountServicesPage()
const auth = new Authentication('Azik', 'Azimjon')

describe('Test letter sending', () => {
    before(() => {
        
    });
});