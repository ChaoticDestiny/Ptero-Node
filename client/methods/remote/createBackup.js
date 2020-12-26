const req = require('../../ClientRequest')
/**
 * @param {String} Name This is the name of the backup
 * @param {Integer} Ignored_Files These are the ignored files
 * @param {Integer} ServerID Server ID
 */

function createBackup(ServerID, Name, Ignored_files) {
const data = { 'serverid': ServerID, 'name': Name, 'ignored_files': Ignored_files};
const Req = new req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
return Req.postRequest('CreateBackup',data,ServerID);
}
//IMPORTANT : IGNORED FILES DO NOT WORK FULLY | BETA

module.exports = createBackup; 