const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const formattedDate = `${month}-${day}-${year}`;

const school = 'Canisius'

module.exports = {
  'Canisius - Add Matching Entry': function(browser) {
    matching(browser, 'canisius')
  },
};

function matching(browser, school) {
  browser
    // Landing page
    .url(`https://${school}-staging.callistocampus.org`)
    .waitForElementVisible('body')
    .assert.title('Callisto')
    .waitForElementVisible('#login-buttom')
    .saveScreenshot(`screenshots/${formattedDate}/${school}/1.landing.png`)
    .click('#login-buttom')
    // Login page
    .assert.title('Log In | Callisto')
    .waitForElementVisible('input[name=username]')
    .setValue('input[name=username]', process.env.USERNAME)
    .setValue('input[name=password]', process.env.PASSWORD)
    .saveScreenshot(`screenshots/${formattedDate}/${school}/2.login.png`)
    .click('button[type=submit]')
    // Dashboard
    .waitForElementVisible('#dash-cta-buttons')
    .assert.title('My Dashboard - Callisto')
    .saveScreenshot(`screenshots/${formattedDate}/${school}/3.dashboard.png`)
    .click('#dash-cta-buttons > a')
    // Matching
    .waitForElementVisible('#matchingButtons', 15000)
    .assert.title('Enter Into Matching - Callisto')
    .saveScreenshot(`screenshots/${formattedDate}/${school}/4.matching.png`)
    .click('#matchingButtons > a:nth-child(1) > button')
    // Verify
    .waitForElementVisible('#verifyComponent')
    .setValue('input[id=schoolEmailValidation]', process.env.EMAIL)
    .saveScreenshot(`screenshots/${formattedDate}/${school}/5.verify_email.png`)
    .click('#verifyComponent > div > a.btn.default-btn')
    // Sent
    .waitForElementVisible('#sentComponent')
    .saveScreenshot(`screenshots/${formattedDate}/${school}/6.email_sent.png`)
    //email
    .url('https://mail.google.com')
    .waitForElementVisible('input[type=email]')
    .setValue('input[type=email]', process.env.TMP_EMAIL)
    .click('#identifierNext')
    .setValue('input[name=password]', process.env.EMAIL_PASSWORD)
    .click('#passwordNext')
    .waitForElementVisible('#gb > div.gb_Nd.gb_4d.gb_Vd > div.gb_Uc.gb_Ka.gb_Tc.gb_2d > div > div.gb_Ea.gb_ed.gb_yg.gb_g.gb_Jf > div > a > span')
    .click('.UI')
    .saveScreenshot(`screenshots/${formattedDate}/${school}/7.email.png`)
    .click('blockquote > div:nth-child(8) > div > div > div:nth-child(3) > a:nth-child(2)')
    browser.windowHandles(function(result) {
       var handle = result.value[1];
       browser.switchWindow(handle);
     })
    .waitForElementVisible('#youComponent', 15000)
    .setValue('#match-q-0', 'QA Tester')
    .setValue('#match-q-1', process.env.EMAIL)
    .setValue('#match-q-2', '888 888 8888')
    .saveScreenshot(`screenshots/${formattedDate}/${school}/8.matching_you.png`)
    .click('#youComponent > div.matchingButtonWrapper > a.btn.default-btn')
    .waitForElementVisible('#whoComponent')
    .setValue('#add-email > div.mpInputWrapper.emailMPWrapper > input', 'perp@perp.com')
    .saveScreenshot(`screenshots/${formattedDate}/${school}/9.matching_who.png`)
    .click('#whoComponent > div > a.btn.default-btn')
    .waitForElementVisible('#submitComponent')
    .saveScreenshot(`screenshots/${formattedDate}/${school}/10.matching_submit.png`)
    .click('#submitComponent > label.checkboxContainer')
    .click('#enterIntoMatching')
    .waitForElementVisible('#dash-cta-buttons')
    .assert.title('My Dashboard - Callisto')
    .assert.containsText('#alertMessage', 'YOU HAVE SUCCESSFULLY CREATED A MATCHING ENTRY')
    .saveScreenshot(`screenshots/${formattedDate}/${school}/11.matching_success.png`)
    .end();
}
