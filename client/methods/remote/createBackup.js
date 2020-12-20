const req = require('../../ClientRequest')
/**
 * @param {String} Name 
 * @param {Integer} Ignored_Files 
 * @param {Integer} ServerID 
 */

function createBackup(ServerID,Name,Ignored_files) {
const data = { 'serverid': ServerID, 'name': Name, 'ignored_files': Ignored_files};
const Req = new req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
return Req.postRequest('CreateBackup',data,ServerID);
}
//IMPORTANT : IGNORED FILES DO NOT WORK FULLY | BETA

module.exports = createBackup; 