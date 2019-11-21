const https = require("https");

module.exports = {
  'Download Record Form': function(client) {
    https.request({
        host: "canisius-staging.callistocampus.org",
        port: 443,
        path: "/static/Record_Form.docx",
        method: "GET"
    }, function (response) {
      client
        .assert.equal(response.statusCode, 200, 'File is Accessible')
        .end();
    }).on("error", function (err) {
      console.log(err);
      client.end();
    }).end();
  }
}
