const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server
 */
function getServerInfo(ServerID) {
	const Req = new req(process.env.CLIENT_PTERO_HOST, process.env.CLIENT_NODEACTYL_KEY);
	return Req.getRequest('GetServerInfo', ServerID);
}

module.exports = getServerInfo;