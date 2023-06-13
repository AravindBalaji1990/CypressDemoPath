const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotOnRunFailure : true,
    pageLoadTimeout: 60000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    screenshotsFolder: 'cypress/screenshots',
    video: true,
    videoCompression: 32,
    videoUploadOnPasses: true,
    videosFolder: 'cypress/videos' ,
    waitForAnimations: true,
    watchForFileChanges: true,
    embeddedScreenshots: true
  },
  retries: {
    // npx cypress run
    "runMode": 2,
    // npx cypress open
    "openMode": 2
  }
});
