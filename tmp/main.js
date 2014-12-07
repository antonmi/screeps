console.log('---tick---');
var _ = require('lodash');
require('base_creep');
require('harvester');
require('creep_builder');
var builder = require('builder');
var guard = require('guard');
var medic = require('medic');
var utils = require('utils');

var harvesters_count = 0;
var guards_count = 0;
var builder_count = 0;
var medics_count = 0;

Game.BaseCreep.init_creeps()

console.log(Game.Creeps.length)

for (var name in Game.creeps) {
	var creep = Game.creeps[name];
	var base_creep = new Game.Harvester(creep)


	if (creep.memory.role == 'harvester') {
	    Game.harvester(creep);
	    harvesters_count += 1;
	}
	if (creep.memory.role == 'guard') {
	    guard(creep);
	    guards_count += 1;
	}
	if(creep.memory.role == 'builder') {
	    builder(creep);
	    builder_count += 1;
	}
	if(creep.memory.role == 'medic') {
	    medic(creep);
	    medics_count += 1;
	}
}




if (harvesters_count < 0) {

    var name =  Game.spawns.Spawn1.createCreep(
        [Game.WORK, Game.WORK, Game.CARRY, Game.CARRY, Game.MOVE],
        'Worker' + _.now()
        );
    if (typeof(name) == 'string') {
        var creep = Game.creeps[name];
        Memory.creeps[name].role = 'harvester';
        return;
    };

};

if (medics_count < 0) {
    var name =  Game.spawns.Spawn1.createCreep(
        [Game.TOUGH, Game.HEAL, Game.HEAL, Game.MOVE, Game.MOVE],
        // [Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.HEAL, Game.HEAL, Game.MOVE, Game.MOVE, Game.MOVE],
        'Medic' + _.now()
        );
    if (typeof(name) == 'string' && Memory.creeps[name]) {
        Memory.creeps[name].role = 'medic';
        return;
    };

};

if (guards_count < 9) {
    var name =  Game.spawns.Spawn1.createCreep(
        [Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.MOVE],
        // [Game.ATTACK, Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.MOVE],
        'Guard' + _.now()
        );
    console.log(name);
    if (typeof(name) == 'string' && Memory.creeps[name]) {
        Memory.creeps[name].role = 'guard';
        return;
    };

};


if (builder_count < 0) {
    var name =  Game.spawns.Spawn1.createCreep(
        [Game.CARRY, Game.MOVE, Game.WORK, Game.CARRY, Game.MOVE],
        'Builder' + _.now()
        );
    if (typeof(name) == 'string' && Memory.creeps[name]) {
        Memory.creeps[name].role = 'builder';
        return;
    };

};
