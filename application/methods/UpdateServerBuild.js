const req = require('../ApplicationRequest.js');

/**
 * @param {String} InternalID Internal ID of the server to update server build
 * @param {Integer} AllocationID Allocation ID of primary allocation
 * @param {Integer} RAM The amount of RAM the server has
 * @param {Integer} Swap The amount of Swap the server has
 * @param {Integer} IO Set this to 500 please. (Even if you know what it is leave it alone)
 * @param {Integer} CPU The amount of CPU Power the server can use (100 = 1 core);
 * @param {Integer} Disk The amount of Storage the server has
 * @param {Integer} Threads The amount of Threads the server has
 * @param {Integer} AmountOfDatabases The max amount of databases a server can use
 * @param {Integer} AmountOfBackups The max amount of Backups a server can use
 * @param {Integer} AmountOfAllocations The max amount of allocation(s) a server can use
 */
function UpdateServerBuild(InternalID, AllocationID, RAM, Swap, IO, CPU, Disk, Threads, AmountOfDatabases, AmountOfBackups, AmountOfAllocations) {
	const Req = new req(process.env.APPLICATION_NODEACTYL_HOST, process.env.APPLICATION_NODEACTYL_KEY);
	return Req.patchRequest('UpdateServerBuild', data, InternalID);
}

module.exports = UpdateServerBuild;
