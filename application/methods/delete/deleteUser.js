const req = require('../../ApplicationRequest.js');

/**
 * @param {String} UserID The user ID to delete
 */
function deleteUser(UserID) {
	const Req = new req(process.env.APPLICATION_PTERO_HOST, process.env.APPLICATION_PTERO_KEY);
	return Req.deleteRequest('DeleteUser', UserID);
}

module.exports = deleteUser;