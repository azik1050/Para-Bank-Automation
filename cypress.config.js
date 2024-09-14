const { defineConfig } = require("cypress");

module.exports = defineConfig({
  	e2e: {
  	  	setupNodeEvents(on, config) {
			require('cypress-mochawesome-reporter/plugin')(on);
  	  	},
		testIsolation: true,
		video: true,
		screenshotOnRunFailure: true,
		retries: {
			runMode: 0,
			openMode: 0
		},
		specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
		excludeSpecPattern: [
			'**/e2e/locators/**',
			'**/e2e/pages/**',
			'**/e2e/helpers/**',
		]	  
  	},
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		reportDir: 'cypress/reports',
		overwrite: false,
		html: true,
		json: true,
		charts: true,
		embeddedScreenshots: true,
		inlineAssets: true
	}
});
