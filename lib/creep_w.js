//worker

Game.CreepW = function(creep) {
    Game.Creep.call(this, creep);

    this.perform = function() {
        // console.log('worker performs');
        if(this.energy === 0) {
			this.obj.moveTo(this.spawn().obj);
			this.spawn().obj.transferEnergy(this.obj);
			return;
	    }

        var targets = Game.room.obj.find(Game.CONSTRUCTION_SITES);
    	if (targets.length) {
    	    if(this.obj.build(targets[0]) === 0) { return true }
    		this.obj.moveTo(targets[0]);
    	}

    	var ext =  Game._.filter(Game.structures, function(el){ return el.structureType == 'extension' })[0]
    	if (ext) {
    	if (ext.energy < ext.energyCapacity) {
    	    this.obj.moveTo(ext);
			this.obj.transferEnergy(ext);
    	}
    	}

    };

};


Game.CreepW.type = 'w';
Game.CreepW.get_name = function() { return this.type + '_' + Game.Time.now };
Game.CreepW.body = [Game.WORK, Game.WORK, Game.CARRY, Game.CARRY, Game.MOVE];

Game.CreepW.all = function() { return Game._.filter(Game.Creep.all, function(cr) { return cr.type == 'w'}) };
Game.CreepW.count = function(){ return this.all().length };
