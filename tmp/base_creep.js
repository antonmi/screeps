Game.BaseCreep = function(creep) {
    this.creep = creep;
    this.name = function() { return creep.name }
}

Game.Creeps = []

Game.BaseCreep.init_creeps = function() {
    for (var i in Game.creeps) {
	    var creep = Game.creeps[i];
	    if (creep.memory.role == 'harvester') {
	        Game.Creeps.push(new Game.Harvester(creep));
	    }
    }
}
