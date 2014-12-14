Game.EnemyCreep = function(creep) {

    this.obj = creep;
    this.hits = creep.hits;
    this.hitsMax = creep.hitsMax;
    this.x = creep.pos.x;
    this.y = creep.pos.y;


};

Game.EnemyCreep.all = [];
Game.EnemyCreep.count = function() { return this.all.length };

Game.EnemyCreep.init_from_obj = function(creep) {
    var c = new Game.EnemyCreep(creep);
    this.all.push(c);
    return c;
};
