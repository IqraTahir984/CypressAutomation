const { defineConfig } = require("cypress");
const path = require('path');
const fs = require('fs');

function setupNodeEvents(on, config) {
  const file = config.env.fileConfig || 'staging';
  const pathToConfigFile = path.resolve(__dirname, 'cypress', 'environment', `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    throw new Error(`Config file not found: ${pathToConfigFile}`);
  }

  const configFileContent = fs.readFileSync(pathToConfigFile, 'utf8');
  const configData = JSON.parse(configFileContent);

  return configData;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return setupNodeEvents(on, config)
    },
    specPattern: "cypress/e2e/*.js"
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    overwrite: false,
    html: true,
    json: true
  }
});

