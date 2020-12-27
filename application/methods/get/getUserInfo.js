const req = require('../../ApplicationRequest.js');

/**
 * @param {String} UserID The user ID to get the details of.
 */

function getUserInfo(UserID) {
	const Req = new req(process.env.APPLICATION_PTERO_HOST, process.env.APPLICATION_PTERO_KEY);
	return Req.getRequest('GetUserInfo', UserID);
}

module.exports = getUserInfo;