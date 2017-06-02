//  OpenShift sample Node application
var express = require('express'),
    http = require('http'),
    request = require('request'),
    fs = require('fs'),
    app = express(),
    path = require("path");

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    secport = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8443;

// error handling
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something bad happened!');
});

app.use(express.static(path.join(__dirname, '/dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

http.createServer(app).listen(port);

console.log('HTTP Server running on http://%s:%s', ip, port);

module.exports = app;
