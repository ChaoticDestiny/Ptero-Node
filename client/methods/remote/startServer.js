const req = require('../../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server
 */
function startServer(ServerID) {
	const Req = new req(process.env.CLIENT_PTERO_HOST, process.env.CLIENT_PTERO_KEY);
	const data = { 'signal': 'start' };
	return Req.postRequest('StartServer', data, ServerID);
}

module.exports = startServer;