//medic
Game.CreepM = function(creep) {
    Game.Creep.call(this, creep);

    this.perform = function() {
        this.creeps = this.creeps_to_heal()
    	if (this.creeps.length > 0) {
    	  this.closest_creep = Game.Utils.find_closest(this, this.creeps)
          if (this.should_heal()) {
              this.perform_heal()
          } else {

          }
       } else {
            this.perform_rest();
       }
    };

    this.perform_rest = function() {
        var flag = Game.flags.Flag1;
        if (flag) { this.obj.moveTo(flag) }
    };

    this.should_heal = function() {
        return true;
    };

    this.perform_heal = function(creeps) {
        var creep = this.closest_creep
        var res = this.obj.heal(creep.obj)
        if (res !== 0) {
            if (res === Game.ERR_NOT_IN_RANGE) { this.obj.moveTo(creep.obj); return }
            if (res === Game.ERR_NO_BODYPART) { this.perform_rest(); return }
        }
    }

    this.creeps_to_heal = function() {
        var self = this
        return Game._.filter(Game.Creep.damaged(), function(cr) { return cr !== self })
    }
};


Game.CreepM.type = 'm';
Game.CreepM.get_name = function() { return this.type + '_' + Game.Time.now };
Game.CreepM.body = [Game.HEAL, Game.HEAL, Game.MOVE, Game.MOVE, Game.MOVE];

Game.CreepM.all = function() { return Game._.filter(Game.Creep.all, function(cr) { return cr.type == 'm'}) };
Game.CreepM.count = function(){ return this.all().length };
