var _ = require('lodash');


Game.CreepBuilder = {

    data: Memory.CreepBuilder,

    create_harvester: function() {
         var name =  Game.spawns.Spawn1.createCreep(
            [Game.WORK, Game.WORK, Game.CARRY, Game.CARRY, Game.MOVE],
            'Harvester' + _.now()
        );
        if (typeof(name) == 'string') {
            var creep = Game.creeps[name];
            Memory.creeps[name].role = 'harvester';
        }
    }
};
