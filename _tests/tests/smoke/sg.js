const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname + '../../../../login.html'), "utf8", function read(err, data) {
    if (err) {
      throw err;
    }
    console.log(data);
});

module.exports = {
  'Suvivors Guide Links': function(browser) {
    browser
      .url('http://localhost:4000')
      .pause(500)
      .end();
      // .waitForElementVisible('iframe[id=wufooFormz1buafwx10gzww0]')
      // .frame(0)
      // .setValue('input[id=Field1]', 'Callisto Test')
      // .setValue('input[type=email]', 'tech@projectcallisto.org')
      // .pause(500)
      // .click('#saveForm')
      // .waitForElementVisible('#container > form > h2')
      // .assert.containsText('#container > form > h2', 'Waitlist joined!')
      // .end();
  }
}
