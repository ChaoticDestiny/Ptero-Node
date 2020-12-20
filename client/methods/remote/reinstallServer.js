const req = require('../../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to kill
 */
function reinstallServer(ServerID) {
	const Req = new req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
	const data = { ServerID };
	return Req.postRequest('ReinstallServer', data, ServerID);
}

module.exports = reinstallServer;