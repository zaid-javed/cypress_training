const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      if (config.env.ENVIRONMENT == "session1"){
        return {
          baseUrl: "https://studio.stage.edx.org",
          specPattern: "cypress/e2e/session1/**/*.cy.js"
        }
      }

    },
  },
});
