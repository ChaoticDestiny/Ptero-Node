const req = require('../../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server
 */
function reinstallServer(ServerID) {
	const Req = new req(process.env.CLIENT_PTERO_HOST, process.env.CLIENT_PTERO_KEY);
	const data = { ServerID };
	return Req.postRequest('ReinstallServer', data, ServerID);
}

module.exports = reinstallServer;