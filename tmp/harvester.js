/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvester'); // -> 'a thing'
 */

Game.Harvester = function() {}

Game.Harvester.prototype = Game.BaseCreep;

Game.Harvester.prototype.hello = function() { return "World" }


Game.harvester = function (creep) {

	if(creep.energy < creep.energyCapacity) {
		var sources = creep.room.find(Game.SOURCES);
		creep.moveTo(sources[0]);
		creep.harvest(sources[0]);
	}
	else {
// 	   	var exts = creep.room.find(Game.STRUCTURE_EXTENSION)
// 		for (var i in exts) {
// 		    var ext = exts[i];
// 		    creep.moveTo(ext);
// 		    creep.transferEnergy(ext)
// 		}
		creep.moveTo(Game.spawns.Spawn1);
		creep.transferEnergy(Game.spawns.Spawn1)
	}
}
