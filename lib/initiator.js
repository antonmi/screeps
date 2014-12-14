Game.Initiator = {
  init_all: function() {
      this.init_room();
      this.init_sources();
      this.init_spawns();
      this.init_creeps();
      this.init_enemies();
  },

  init_room: function() {
      var room = Game.Room.init_from_obj(Game.getRoom('1-1'));
      Game.room = room;
  },

  init_spawns: function() {
     for(var i in Game.spawns) {
         Game.Spawn.init_from_obj(Game.spawns[i]);
     }
  },

  init_sources: function() {
      Game._.each(Game.room.obj.find(Game.SOURCES), function(s) {
          Game.Source.init_from_obj(s)
      })
  },

  init_creeps: function() {
     for(var i in Game.creeps) {
         Game.Creep.init_from_obj(Game.creeps[i]);
     }
  },

  init_enemies: function() {
       Game._.forEach(Game.room.find(Game.HOSTILE_CREEPS), function(enemy) {
           Game.EnemyCreep.init_from_obj(enemy)
       })
  }

};
