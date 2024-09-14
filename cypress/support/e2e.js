// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
/// <reference types="cypress" />
import './commands'
import 'cypress-mochawesome-reporter/register';
import { Authentication } from '../e2e/pages/registrationPage';

const baseUrl = 'https://parabank.parasoft.com/parabank'
const auth = new Authentication(baseUrl)

beforeEach(() => {
    switch (Cypress.currentTest.title) {
        case 'Add a pet':
            return
        case 'Find a pet':
            return
        case 'Remove a pet':
            return
        default:
            auth.authenticate()
    }
});

after(() => {
    auth.has_account = false
});

// Alternatively you can use CommonJS syntax:
// require('./commands')