Game.Spawn = function(spawn) {
    this.obj = spawn;
    this.name = spawn.name

    Game.Spawn.all.push(this)

    this.perform = function() {
        // console.log(this.name + ' performing')
    };

    this.create_creep = function() {
        var size = Game.Creep.all.length
        var result =  Game.spawns.Spawn1.createCreep(Game.CreepH.body, Game.CreepH.get_name());
        if (typeof(result) == 'string') {
            var creep = Game.creeps[result];
            Memory.creeps[result].role = 'h';
            return;
        } else {
            console.log("Creep creation error: " + result)
        }
    }

};

Game.Spawn.all = [];

Game.Spawn.init_from_obj = function(spawn) {
    new Game.Spawn(spawn);
    return true;
}

Game.Spawn.start_queue = ['h', 'h', 'h', 'h'];

Game.SpawnQueue = {
    elements: []
}
