const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
module.exports = defineConfig({
 e2e: {
 async setupNodeEvents(on, config) {
 const bundler = createBundler({
 plugins: [createEsbuildPlugin.default(config)],
 });
 on('file:preprocessor', bundler);
 await addCucumberPreprocessorPlugin(on, config);
 return config;
 },
    //baseUrl: "https://lacoste.com",
    failOnStatusCode: false,
    specPattern: "cypress/e2e/features/**/*.feature",
    chromeWebSecurity : false,
    redirectionLimit: 5000,
    experimentalRunAllSpecs: false,
    //testIsolation: true,
    screenshotsFolder: "cypress/e2e/screenshots",
    screenshotOnRunFailure : true,
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36"
 },
});