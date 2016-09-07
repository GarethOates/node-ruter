var assert = require('assert');
var ruter = require('../index');

describe('api', function() {
  it('well played', function(done) {
    ruter.api("Heartbeat/Index", {}, function(result) {
      if (result && result !== undefined) {
        if (result.result !== undefined && result.error == 0) {
          done();
        }
      }
    });
  });
});

