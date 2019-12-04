const fs = require('fs');
const path = require('path');
const request = require('request');
var http = require("http");


module.exports = {
  'welcome page - Suvivors Guide Links': function(browser) {
    linkCheck(browser, 'sg-1-welcome.html');
  },
  'understanding-the-language page - Suvivors Guide Links': function(browser) {
    linkCheck(browser, 'sg-2-understanding.html');
  },
  'practicing-self-care page - Suvivors Guide Links': function(browser) {
    linkCheck(browser, 'sg-3-practicing.html');
  },
  'getting-emotional-help page - Suvivors Guide Links': function(browser) {
    linkCheck(browser, 'sg-4-getting-help.html');
  },
  'reporting-the-incident page - Suvivors Guide Links': function(browser) {
    linkCheck(browser, 'sg-5-reporting.html');
  },
  'professional-sexual-coercion page - Suvivors Guide Links': function(browser) {
    linkCheck(browser, 'sg-6-coercion.html');
  },
  'how-callisto-can-help page - Suvivors Guide Links': function(browser) {
    linkCheck(browser, 'sg-7-how-can-we-help.html');
  },
}

async function linkCheck(browser, file) {
  const links = await fs.readFileSync(path.join(__dirname + `../../../../${file}`), "utf8",).match(/href="(.*?)"/g);
  // const links = ['https://www.betterbrave.org/asdf'];
  for (let link of links) {
    let prettyLink = link.slice(6, link.length - 1)
    prettyLink.charAt(0) === '/' ? prettyLink = `http://localhost:4000${prettyLink}` : null;
    // browser.url(prettyLink)

    // setTimeout(() => {
    //   request(prettyLink, (error, response, body) => {
    //     if (response.statusCode !== 200) {
    //       console.log(response.statusCode + ' - ' + prettyLink);
    //     }
    //     browser.assert.notEqual(response.statusCode, 404);
    //   });
    // })

    // browser.waitForElementVisible('body', 10000)

    var pathname = new URL(prettyLink).pathname;
    console.log(pathname);
    await http.request({
            host: "www.google.com",
            port: 80,
            path: "/images/srpr/logo11w.png",
            method: "HEAD"
          }, await function (response) {
            browser
            .assert.equal(response.statusCode, 200, 'Check status');
            browser.end();
          }).on("error", await function (err) {
            console.log(err);
            browser.end();
          }).end();
  }
  // browser.end();
}
