Game.Creep = function(creep) {
    this.obj = creep;
    this.memory = creep.memory;
    this.name = creep.name;
    this.energy = creep.energy;
    this.energyCapacity = creep.energyCapacity;
    this.hits = creep.hits;
    this.hitsMax = creep.hitsMax;
    this.x = creep.pos.x
    this.y = creep.pos.y
    this.type = creep.memory.type;

    this.spawn = function() {
        var self = this;
        return Game._.find(Game.Spawn.all, function(sp) { return sp.name == self.memory.spawn_name })
    };

    this.perform = function() {
        console.log(this.name + ' performing');
    };

    this.need_heal = function() { return this.hits < this.hitsMax }
};

Game.Creep.all = [];
Game.Creep.count = function() { return this.all.length };

Game.Creep.damaged = function() {
    return Game._.filter(Game.Creep.all, function(cr){ return cr.need_heal() })
}

Game.Creep.init_from_obj = function(creep) {
    var klass = this.get_class(creep.memory.type)
    var c = new klass(creep);
    this.all.push(c);
    return c;
};

Game.Creep.get_class = function(label) {
    var types = {
        'h' : Game.CreepH,
        'w' : Game.CreepW,
        's' : Game.CreepS,
        'm' : Game.CreepM
    };
    return types[label];
};
