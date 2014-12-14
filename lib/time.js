if (Memory.tick !== undefined) {
    Memory.tick += 1;
} else {
    Memory.tick = 0;
}

Game.Time = {
   now: Memory.tick
};
