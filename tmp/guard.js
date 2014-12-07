/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('guard'); // -> 'a thing'
 */

module.exports = function (creep) {
    var enemies = creep.room.find(Game.HOSTILE_CREEPS);

    creep.moveTo(Game.flags.Flag1);
    for (var i in enemies) {
        var enemy = enemies[i];
        // creep.moveTo(enemy);
        creep.rangedAttack(enemy);
	    creep.attack(enemy);
    }
}
