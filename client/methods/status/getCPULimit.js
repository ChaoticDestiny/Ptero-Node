const req = require('../../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server
 */
function getCPULimit(ServerID) {
	const Req = new req(process.env.CLIENT_PTERO_HOST, process.env.CLIENT_PTERO_KEY);
	return Req.getRequest('GetCPULimit', ServerID);
}

module.exports = getCPULimit;