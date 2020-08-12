const axios = require('axios');

module.exports = function (req, res, next) {
  var urlLogData = {
    accepts: req.accepts(['html', 'json', 'text/html', 'text', 'application/json', 'image/png']),
    url: req.url,
    method: req.method,
    date: Date(),
    time: Date.now(),
    protocol: req.protocol,
    secure: req.secure,
    hostname: req.hostname,
    path: req.path,
    originalUrl: req.originalUrl,
    subdomain: req.subdomain,
    contentType: req.header('Content-Type'),
    requestHeader: req.header('user-agent'),
    cookies: req.cookies,
    signedCookies: req.signedCookies,
    baseUrl: req.baseUrl,
    fresh: req.fresh,
    ip: req.ip,
    params: req.params,
    query: req.query,
    route: req.route,
    xhr: req.xhr,
  };
  axios.post(process.env.API_HEALTH_API_KEY, urlLogData);
  next()
}
