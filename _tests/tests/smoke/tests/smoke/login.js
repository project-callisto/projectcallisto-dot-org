module.exports = {
  'canisius - Log In': function(browser) {
    login(browser, 'canisius');
  },
  'stanford - Log In': function(browser) {
    login(browser, 'stanford');
  },
  'lmu - Log In': function(browser) {
    login(browser, 'lmu');
  },
  'du - Log In': function(browser) {
    login(browser, 'du');
  },
  'pomona - Log In': function(browser) {
    login(browser, 'pomona');
  },
  'coe - Log In': function(browser) {
    login(browser, 'coe');
  },
  'usfca - Log In': function(browser) {
    login(browser, 'usfca');
  },
  'central - Log In': function(browser) {
    login(browser, 'central');
  },
  'stjohns - Log In': function(browser) {
    login(browser, 'stjohns');
  },
  'hws - Log In': function(browser) {
    login(browser, 'hws');
  },
  'uoregon - Log In': function(browser) {
    login(browser, 'uoregon');
  },
  'usc - Log In': function(browser) {
    login(browser, 'usc');
  },
};

function login(browser, school) {
  browser
    .url(`https:/\/${school}-staging.callistocampus.org`)
    .waitForElementVisible('body')
    .assert.title('Callisto')
    .waitForElementVisible('#login-buttom')
    .click('#login-buttom')
    // Login page
    .assert.title('Log In | Callisto')
    .waitForElementVisible('input[name=username]')
    .setValue('input[name=username]', process.env.USERNAME)
    .setValue('input[name=password]', process.env.PASSWORD)
    .click('button[type=submit]')
    // Dashboard
    .waitForElementVisible('#dash-cta-buttons')
    .assert.title('My Dashboard - Callisto')
    .end();
}
