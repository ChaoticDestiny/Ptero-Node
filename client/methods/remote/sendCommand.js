const req = require('../../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server
 * @param {String} Command Command to send
 */
function sendCommand(ServerID, Command) {
	const Req = new req(process.env.CLIENT_PTERO_HOST, process.env.CLIENT_PTERO_KEY);
	const data = { 'command': Command };
	return Req.postRequest('SendCommand', data, ServerID);
}

module.exports = sendCommand;