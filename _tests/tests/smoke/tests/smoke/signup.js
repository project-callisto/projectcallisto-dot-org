module.exports = {
  'canisius - Sign Up': function(browser) {
    signup(browser, 'canisius');
  },
  'stanford - Sign Up': function(browser) {
    signup(browser, 'stanford');
  },
  'lmu - Sign Up': function(browser) {
    signup(browser, 'lmu');
  },
  'du - Sign Up': function(browser) {
    signup(browser, 'du');
  },
  'pomona - Sign Up': function(browser) {
    signup(browser, 'pomona');
  },
  'coe - Sign Up': function(browser) {
    signup(browser, 'coe');
  },
  'usfca - Sign Up': function(browser) {
    signup(browser, 'usfca');
  },
  'central - Sign Up': function(browser) {
    signup(browser, 'central');
  },
  'stjohns - Sign Up': function(browser) {
    signup(browser, 'stjohns');
  },
  'hws - Sign Up': function(browser) {
    signup(browser, 'hws');
  },
  'uoregon - Sign Up': function(browser) {
    signup(browser, 'uoregon');
  },
  'usc - Sign Up': function(browser) {
    signup(browser, 'usc');
  },
  'Sign Up': function(browser) {
    signup(browser, 'canisius');
  }
}

function signup(browser, school) {
  browser
    // Sign up
    .url(`https://${school}-staging.callistocampus.org/account/signup/`)
    .waitForElementVisible('#signup-form')
    .setValue('#signup-username', process.env.NEW_USERNAME)
    .setValue('#signup-password', process.env.NEW_PASSWORD)
    .setValue('#signup-confirm', process.env.NEW_PASSWORD)
    .pause(500)
    .click('#readBox')
    .pause(500)
    .click('#understandBox')
    .pause(500)
    .saveScreenshot('screenshots/signup/1.signup.png')
    .click('#create-account-button')
    // Login
    .waitForElementVisible('#help-id_username')
    .assert.title('Log In | Callisto')
    .assert.containsText('#alertMessage', 'SIGNUP SUCCESSFUL')
    .waitForElementVisible('input[name=username]')
    .setValue('input[name=username]', process.env.NEW_USERNAME)
    .setValue('input[name=password]', process.env.NEW_PASSWORD)
    .saveScreenshot(`screenshots/signup/2.login.png`)
    .click('button[type=submit]')
    // Success
    .waitForElementVisible('#dash-cta-buttons')
    .assert.title('My Dashboard - Callisto')
    .saveScreenshot('screenshots/signup/3.signup_success.png')
    .end();
}
