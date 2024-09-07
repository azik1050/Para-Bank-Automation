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
			runMode: 2,
			openMode: 2
		},
		specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
  	},
});
