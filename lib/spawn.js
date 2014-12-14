Game.Spawn = function(spawn) {
    this.obj = spawn;
    this.memory = spawn.memory;
    this.name = spawn.name;
    this.x = spawn.pos.x;
    this.y = spawn.pos.y;

    this.balanced_count_conf = { 'h' : 5, 's' : 10, 'm': 3, 'w' : 1,};
    this.default_harvesters_per_source = 5;

    this.perform = function() {
        if (this.obj.spawning) { return false }
        var self = this;
        Game._.forEach(['h', 's', 'm', 'w'], function(type) {
            if (self.screeps(type).length < self.balanced_count(type)) {
                self.create_creep(type);
                return false;
            }
        });
    };

    this.screeps = function(type) {
        var name = this.name;
        var res;
        if (type === undefined) {
            res = Game._.filter(Game.Creep.all, function(cr) { return cr.memory.spawn_name == name});
        } else {
            res = Game._.filter(Game.Creep.all, function(cr) { return (cr.memory.spawn_name == name && cr.type == type)});
        }
        return res;
    };

    this.balanced_count = function(type) {
        return this.balanced_count_conf[type]
    };

    this.create_creep = function(type) {
        var klass = Game.Creep.get_class(type);
        var size = Game.Creep.all.length;
        var creep_name = klass.get_name();
        var result = this.obj.createCreep(klass.body, creep_name);
        if (typeof(result) == 'string') {
            var creep = Game.creeps[result];
            Memory.creeps[result].type = type;
            Memory.creeps[result].spawn_name = this.name;
            return true;
        } else {
            if (result === Game.ERR_NOT_ENOUGH_ENERGY) { return }
            console.log("Creep '"+ creep_name + "' creation error: " + result);
            return false;
        }
    };

    this.source_to_harvest = function() {
        var s = this.closest(Game.room.sources());
        if (!s) { return null }
        if (s.harvesters().length <= this.default_harvesters_per_source) { return s }
        var without_closest = Game._.filter(Game.room.sources(), function(so) { return so !== s });
        return this.closest(without_closest);
    };

    this.closest = function(sources) {
       return Game.Utils.find_closest(this, sources)
    };
};

Game.Spawn.all = [];

Game.Spawn.init_from_obj = function(spawn) {
    var s = new Game.Spawn(spawn);
    this.all.push(s);
    return s;
};


Game.SpawnQueue = {
    elements: []
};
