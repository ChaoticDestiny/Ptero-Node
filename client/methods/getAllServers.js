const req = require('../ClientRequest.js');

/**
 * @yields A Array of servers a key has access to
 */
function getAllServers() {
	const Req = new req(process.env.CLIENT_PTERO_HOST, process.env.CLIENT_PTERO_KEY);
	return Req.getRequest('GetAllServers', null);
}


module.exports = getAllServers;
