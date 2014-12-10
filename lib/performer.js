Game.Performer = {
    perform_all: function() {
        this.perform_spawns();
        this.perform_creeps();
    },

    perform_spawns: function() {
        Game._(Game.Spawn.all).forEach(function(spawn){
            spawn.perform()
        })
    },

    perform_creeps: function() {
        Game._(Game.Creep.all).forEach(function(creep){
            creep.perform()
        })
    }
}
