const req = require('../../ApplicationRequest.js');

/**
 * @param {Integer} page Specify a page, leave blank if you dont want to paginate
 */

function getAllServers(page) {
	const Req = new req(process.env.APPLICATION_PTERO_HOST, process.env.APPLICATION_PTERO_KEY);
	if(page !== undefined) return Req.getRequest('GetAllServersPagination',page);
	return Req.getRequest('GetAllServers', null);
}

module.exports = getAllServers;