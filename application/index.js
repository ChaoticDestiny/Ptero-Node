const axios = require('axios');

// POST
const createuser = require('./methods/create/createUser.js');
const createserver = require('./methods/create/createServer.js');
const createnode = require('./methods/create/createNode.js');
const suspendserver = require('./methods/update/suspendServer.js');
const unsuspendserver = require('./methods/update/unSuspendServer.js');
const createdatabase = require('./methods/create/createDatabase');

// GET
const getallservers = require('./methods/get/getAllServers.js');
const getallusers = require('./methods/get/getAllUsers.js');
const getuserinfo = require('./methods/get/getUserInfo.js');
const getnode = require('./methods/get/getNodeInfo.js');
const getallnodes = require('./methods/get/getAllNodes.js');

// PATCH
const updateuser = require('./methods/update/updateUser.js');



// DELETE
const deleteuser = require('./methods/delete/deleteUser.js');
const deletenode = require('./methods/delete/deleteNode.js');
const deleteserver = require('./methods/delete/deleteServer.js');

/**
 *
 * @param {String} HOST Host to connect to
 * @param {String} KEY Key to use
 * @param {Boolean, String} callback Returns true when login is successful
 */
function login(HOST, KEY, callback) {
	HOST = HOST.trim();
	if(HOST.endsWith('/')) HOST = HOST.slice(0, -1);

	process.env.APPLICATION_NODEACTYL_HOST = HOST;
	process.env.APPLICATION_NODEACTYL_KEY = KEY;
	axios.get(HOST + '/api/application/users', {
		responseEncoding: 'utf8',
		maxRedirects: 5,
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

/**
 *
 * @param {String} HOST The host to use
 * @param {String} KEY The application key to use
 * @Warning USE THIS ONLY IF YOU KNOW YOUR CREDENTIALS ARE 100% CORRECT, OR THEY NEVER CHANGE
 */
function fastLogin(HOST, KEY) {
	HOST = HOST.trim();
	if(HOST.endsWith('/')) HOST = HOST.slice(0, -1);

	process.env.APPLICATION_NODEACTYL_HOST = HOST;
	process.env.APPLICATION_NODEACTYL_KEY = KEY;
}



module.exports = {
	login: login,
	fastLogin: fastLogin,

	// POST
	createUser: createuser,
	createServer: createserver,
	createNode: createnode,
	suspendServer: suspendserver,
	unSuspendServer: unsuspendserver,
    createDatabase: createdatabase,

	// GET
	getAllServers: getallservers,
	getAllUsers: getallusers,
	getUserInfo: getuserinfo,
	getNodeInfo: getnode,
	getAllNodes: getallnodes,
	// PATCH
	updateUser: updateuser,

	// DELETE
	deleteUser: deleteuser,
	deleteNode: deletenode,
	deleteServer: deleteserver,
};