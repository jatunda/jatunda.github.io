let ticksPerSecond = 1;
let msUntilNextTick = Math.floor(1000 / ticksPerSecond);
let fps = 120;


//TODO: grey out actions based on some canDoAction() function
//TODO: hiding consumables, skills, abilities based on whether they've ever been activated
//TODO: deltaTick upgrades:
//    make deltatick cheatproof & accurate. use Date.now() to calculate elapsed time and calc delta based on that
//    deltaTick calculations affected by "gamespeed" variable
//TODO: figure out how to display delta (gold/s etc.). (generate & update)
//TODO: edit createAction to be more programmatic

/**
 * TODO: (idea) make a split between slow consumables (gold, potions) & 'fast' consumables? (mana).
 * reasoning: fast consumables will fill up and down over and over, and a bar is a better representation,
 * because you mostly care to know roughly how much you have.
 *
 * */

function deltaTick() {
  applyDeltas();
  window.setTimeout(deltaTick, msUntilNextTick);
  dirty = true;
}

function tick() {
  updateDisplay();
  window.setTimeout(tick, 1000 / fps);
}

// actual start of everything
$(function () {
  console.log("starting...");
  start = Date.now();

  generateDisplays();
  console.log("finished generating in " + (Date.now() - start) + "ms");
  updateDisplay();
  tick();
  deltaTick();
});
