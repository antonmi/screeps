Game.Room = function(room) {
    this.obj = room;
    this.name = room.name;

    this.sources = function() {
        return Game.Source.all;
    };

    this.find = function(smth) { return this.obj.find(smth) }
};

Game.Room.init_from_obj = function(room) { return new Game.Room(room) };
