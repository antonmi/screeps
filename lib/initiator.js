
Game.Initiator = {
  init_all: function() {
      this.init_spawns();
      this.init_creeps();

  },

  init_spawns: function() {
     for(var i in Game.spawns) {
         Game.Spawn.init_from_obj(Game.spawns[i])
     }
  },

  init_creeps: function() {
     for(var i in Game.creeps) {
         Game.Creep.init_from_obj(Game.creeps[i])
     }
  }
}
