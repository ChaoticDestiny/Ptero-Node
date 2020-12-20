const req = require('../../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server cores of
 */
function getCPULimit(ServerID) {
	const Req = new req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
	return Req.getRequest('GetCPULimit', ServerID);
}

module.exports = getCPULimit;