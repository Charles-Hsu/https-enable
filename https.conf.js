var fs = require("fs");

module.exports = {
	cert: fs.readFileSync(__dirname + "/certificate.crt"),
	key: fs.readFileSync(__dirname + "/private.key"),
	passphrase: "12345"
};
