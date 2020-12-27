const req = require('../../ClientRequest')
/**
 * @param {String} Name This is the name of the backup
 * @param {Integer} Ignored_Files These are the ignored files
 * @param {Integer} ServerID ID of the server
 */

function createBackup(ServerID, Name, Ignored_files) {
const data = { 'serverid': ServerID, 'name': Name, 'ignored_files': Ignored_files};
const Req = new req(process.env.CLIENT_PTERO_HOST, process.env.CLIENT_PTERO_KEY);
return Req.postRequest('CreateBackup', data, ServerID);
}


module.exports = createBackup; 