const req = require('../../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server
 */
function getDiskUsage(ServerID) {
	const Req = new req(process.env.CLIENT_PTERO_HOST, process.env.CLIENT_PTERO_KEY);
	return Req.getRequest('GetDiskUsage', ServerID);
}

module.exports = getDiskUsage;