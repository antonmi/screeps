 module.exports = function (creep) {
    // creep.moveTo(32,25);
    creep.moveTo(Game.flags.Flag1);
    for (var name in Game.creeps) {
        var my_creep = Game.creeps[name];
        if (my_creep.hits < my_creep.hitsMax) {
            creep.moveTo(my_creep);
	        creep.heal(my_creep);
        }
    }

 }
