/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('builder'); // -> 'a thing'
 */
 module.exports = function (creep) {
    // creep.moveTo(33,24);
    // creep.suicide();
    if(creep.energy == 0) {
			creep.moveTo(Game.spawns.Spawn1);
			Game.spawns.Spawn1.transferEnergy(creep);
			return;
	}

    var targets = creep.room.find(Game.CONSTRUCTION_SITES);
	if (targets.length) {
		creep.moveTo(targets[0]);
		creep.build(targets[0]);
	}

	for (var i in Game.structures) {
        var struct = Game.structures[i]
        if (struct.hits < struct.hitsMax) {
            // creep.moveTo(struct);
	   // 	creep.repair(struct);
        }
    }

 }
