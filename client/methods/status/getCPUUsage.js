const req = require('../../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server
 */
function getCPUUsage(ServerID) {
	const Req = new req(process.env.CLIENT_PTERO_HOST, process.env.CLIENT_PTERO_KEY);
	return Req.getRequest('GetCPUUsage', ServerID);
}

module.exports = getCPUUsage;