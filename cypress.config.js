const { defineConfig } = require("cypress");

module.exports = defineConfig({
  	e2e: {
  	  	setupNodeEvents(on, config) {
  	  	  	// implement node event listeners here
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
			'**/e2e/pages/**'
		]	  
  	},
});
