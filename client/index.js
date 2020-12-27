const axios = require('axios');
const settings = require('./../settings.json')

// Get Data
const getallservers = require('./methods/getAllServers.js');
const getserverinfo = require('./methods/getServerInfo.js');
const getserverstatus = require('./methods/status/getServerStatus.js');
const isowner = require('./methods/isOwner.js');
const getcpulimit = require('./methods/status/getCPULimit.js');
const getramusage = require('./methods/status/getRAMUsage.js');
const getdiskusage = require('./methods/status/getDiskUsage.js');
const getcpuusage = require('./methods/status/getCPUUsage.js');
const getdisklimit = require('./methods/status/getDiskLimit.js');
const getramlimit = require('./methods/status/getRAMLimit.js');

// Post Data
const startserver = require('./methods/remote/startServer.js');
const stopserver = require('./methods/remote/stopServer.js');
const killserver = require('./methods/remote/killServer.js');
const restartserver = require('./methods/remote/restartServer.js');
const sendcommand = require('./methods/remote/sendCommand.js');
const reinstallserver = require('./methods/remote/reinstallServer.js');
const createbackup = require('./methods/remote/createBackup.js');

/**
 *
 * @param {String} HOST
 * @param {String} KEY
 */
function login(HOST, KEY, callback) {
	HOST = HOST.trim();
	if(HOST.endsWith('/')) HOST = HOST.slice(0, -1);

	process.env.CLIENT_PTERO_HOST = HOST;
	process.env.CLIENT_PTERO_KEY = KEY;
	axios.get(HOST + '/api/client', {
		responseEncoding: 'utf8',
		maxRedirects: settings.maxRedirects,
		headers: {
			'Authorization': 'Bearer ' + KEY,
			'Content-Type': 'application/json',
			'Accept': 'Application/vnd.pterodactyl.v1+json',
		},
	}).then(function(response) {
		if (response.status == 404) {
			callback(false, 'API Key is not valid! (Application)');
		}
		else {
			callback(true);
		}
	}).catch(error => {
		if (error.response.status == 403) {
			callback(false, 'API Key is not valid! (Application)');
		}
		else {
			throw error;
		}
	});
}

function fastLogin(HOST, KEY) {
	HOST = HOST.trim();
	if(HOST.endsWith('/')) HOST = HOST.slice(0, -1);
	process.env.CLIENT_PTERO_HOST = HOST;
	process.env.CLIENT_PTERO_KEY = KEY;
}


module.exports = {
	login: login,
	fastLogin: fastLogin,

	// Get Data
	getAllServers: getallservers,
	getServerInfo: getserverinfo,
	getServerStatus: getserverstatus,
	isOwner: isowner,
	getCPULimit: getcpulimit,
	getCPUUsage: getcpuusage,
	getRAMUsage: getramusage,
	getDiskUsage: getdiskusage,
	getDiskLimit: getdisklimit,
	getRAMLimit: getramlimit,

	// Post Data
	startServer: startserver,
	stopServer: stopserver,
	killServer: killserver,
	restartServer: restartserver,
	sendCommand: sendcommand,
	reinstallServer: reinstallserver,
	createBackup: createbackup,
};
