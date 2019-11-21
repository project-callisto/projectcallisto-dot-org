module.exports = {
  'Join Our Waitlist': function(browser) {
    browser
      .url('https://projectcallisto.org/waitlist')
      .waitForElementVisible('iframe[id=wufooFormz1buafwx10gzww0]')
      .frame(0)
      .setValue('input[id=Field1]', 'Callisto Test')
      .setValue('input[type=email]', 'tech@projectcallisto.org')
      .pause(500)
      .click('#saveForm')
      .waitForElementVisible('#container > form > h2')
      .assert.containsText('#container > form > h2', 'Waitlist joined!')
      .end();
  }
}
