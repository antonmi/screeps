//http://javascript.info/tutorial/all-one-constructor-pattern

//harvester

Game.CreepH = function(creep) {
    Game.Creep.call(this, creep);

    this.perform = function() {
        if(this.energy < this.energyCapacity) {
            var source = this.harvested_source();
	        if (source) {
		        this.obj.moveTo(source.obj);
		        this.obj.harvest(source.obj);
	        }
	    } else {
		    this.obj.moveTo(this.spawn().obj);
		    this.obj.transferEnergy(this.spawn().obj)
	    }
    };

    this.harvested_source = function() {
        var id = this.source_id()
        return Game._.find(Game.room.sources(), function(s){ return s.id === id })
    }

    this.source_id = function() {
        if(!this.memory.source_id){
            var s = this.spawn().source_to_harvest();
            if (s) { this.memory.source_id = s.id }
        }
        return this.memory.source_id
    }


}


Game.CreepH.type = 'h';
Game.CreepH.get_name = function() { return 'h_' + Game.Time.now }
Game.CreepH.body = [Game.WORK, Game.WORK, Game.CARRY, Game.CARRY, Game.MOVE]

Game.CreepH.all = function() { return Game._.filter(Game.Creep.all, function(cr) { return cr.type == 'h'}) }
Game.CreepH.count = function(){ return this.all().length }
