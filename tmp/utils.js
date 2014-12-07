/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('utils'); // -> 'a thing'
 */

 Game.hello = function() {console.log('hello Game')}

 module.exports = {
    hello: function() {console.log('hello world')},

    ext: function(creep) {
        creep.xy = function() {
            return [creep.pos.x, creep.pos.y];
        }
    }
 } 
