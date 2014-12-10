Game.Creep = function(creep) {
    this.obj = creep;
    this.name = creep.name


    this.perform = function() {
        console.log(this.name + ' performing')
    }
};

Game.Creep.all = [];

Game.Creep.init_from_obj = function(creep) {
    var c = new Game.CreepH(creep);
    Game.Creep.all.push(c)
    return true;
}

Game.Creep.get_class = function(label) {
    var types = {
        'h' : Game.CreepH
    }
    return types[label]
}
