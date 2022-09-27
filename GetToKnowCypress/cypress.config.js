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
      else if (config.env.ENVIRONMENT == "session2"){
        return {
          baseUrl: "https://www.saucedemo.com/",
          specPattern: "cypress/e2e/session2/**/*.cy.js",
          chromeWebSecurity: false,
          screenshotsFolder: "cypress/screenshots",
          videosFolder: "cypress/videos"
        }
      }
      else if (config.env.ENVIRONMENT == "session3"){
        return {
          baseUrl: "https://www.saucedemo.com/",
          specPattern: "cypress/e2e/session3/**/*.cy.js",
          chromeWebSecurity: false,
          screenshotsFolder: "cypress/screenshots",
          videosFolder: "cypress/videos",
          env :{
            seconUser: 'locked_out_user',
            secondPass: 'secret_sauce'
          }
        }
      }

    },
  },
});
