const req = require('../../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server
 */
function restartServer(ServerID) {
	const Req = new req(process.env.CLIENT_PTERO_HOST, process.env.CLIENT_PTERO_KEY);
	const data = { 'signal': 'restart' };
	return Req.postRequest('RestartServer', data, ServerID);
}

module.exports = restartServer;