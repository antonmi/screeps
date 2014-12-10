//http://javascript.info/tutorial/all-one-constructor-pattern

//harvester
Game.CreepH = function(creep) {
    Game.Creep.call(this, creep)

      this.perform = function() {
        console.log(this.name + ' H performing')
    }
}


Game.CreepH.get_name = function() { return 'h_' + (Game.Creep.all.length + 1) }
Game.CreepH.body = [Game.WORK, Game.WORK, Game.CARRY, Game.CARRY, Game.MOVE]
