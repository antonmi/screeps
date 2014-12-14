Game.Source = function(source) {
    this.obj = source;
    this.id = source.id
    this.x = source.pos.x
    this.y = source.pos.y

    this.harvesters = function() {
        var id = this.id
        return Game._.filter(Game.CreepH.all(), function(cr) { return cr.memory.source_id == id })
    }
}

Game.Source.all = []

Game.Source.init_from_obj = function(source) {
    var s = new Game.Source(source);
    this.all.push(s);
    return s;
}
