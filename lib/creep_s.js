//soldier

Game.CreepS = function(creep) {
    Game.Creep.call(this, creep);

    this.perform = function() {
        this.enemies = Game.EnemyCreep.all
        if (this.enemies.length > 0) {
            this.closest_enemy = Game.Utils.find_closest(this, this.enemies)
            if (this.should_attack()) {
              this.perform_attack()
            } else {

            }
        } else {
            this.perform_rest();
        }
    };

    this.should_attack = function() {
        var dist = Game.Utils.distance(this, this.closest_enemy)
        return dist < 10
    }

    this.perform_attack = function() {
        var enemy = this.closest_enemy;
        var res = this.obj.attack(enemy.obj)
        if (res !== 0) {
            if (res === Game.ERR_NO_BODYPART) { this.perform_heal(); return }
            if (res === Game.ERR_NOT_IN_RANGE) { this.obj.moveTo(enemy.obj); return }
        }
    }

    this.perform_rest = function() {
        var flag = Game.flags.Flag1;
        if (flag) { console.log(this.obj.moveTo(flag)) }
    }

    this.perform_heal = function() {
        this.perform_rest();
    }

};


Game.CreepS.type = 's';
Game.CreepS.get_name = function() { return this.type + '_' + Game.Time.now };
Game.CreepS.body = [Game.ATTACK, Game.ATTACK, Game.ATTACK, Game.MOVE, Game.MOVE];

Game.CreepS.all = function() { return Game._.filter(Game.Creep.all, function(cr) { return cr.type == 's'}) };
Game.CreepS.count = function(){ return this.all().length };
