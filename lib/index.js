var Runner = require("cgi-run").Runner;

module.exports = function(options) {
  var runner = new Runner(options);
  
  return function(req, res, next) {
    runner.run(req, function(e, resp) {
      if(e) {
        return next(e);
      }
      if(resp) {
        res.writeHead(resp.status, resp.headers);
        //assuming it's string or buffer
        res.end(resp.body);
      } else {
        next();
      }
    });
  };
};