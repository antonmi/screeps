Game.Utils = {
    find_closest: function(base_obj, collection){

         var res = Game._.reduce(collection, function(acc, s) {

            var obj = acc[0];
            var dist2 = (s.x - base_obj.x)*(s.x - base_obj.x) + (s.y - base_obj.y)*(s.y - base_obj.y);

            if (obj === null) { return [s, dist2] }
            var prev_dist = acc[1];
            if (dist2 < prev_dist) {
                return [s, dist2];
            } else {
                return acc;
            }
        }, [null, 0]);
        return res[0];
    },

    distance: function(o1, o2) {
        var dist2 = (o1.x - o2.x)*(o1.x - o2.x) + (o1.y - o2.y)*(o1.y - o2.y);
        return Math.sqrt(dist2);
    }
}
