// TODO: (in progress) abilities display show progress bars. 
// TODO: hiding consumables, skills, abilities based on whether they've ever been activated
// TODO: figure out how to display delta (gold/s etc.). (generate & update)
/**
 * TODO: (idea) make a split between slow consumables (gold, potions) & 'fast' consumables? (mana).
 * reasoning: fast consumables will fill up and down over and over, and a bar is a better representation,
 * because you mostly care to know roughly how much you have.
 * 
 * */
// TODO: ability card padding kinda big? idk

import { updateDisplay, setDirty } from './display.js';
import { applyDeltas } from './player.js';

let ticksPerSecond = 1;
let msUntilNextTick = Math.floor(1000 / ticksPerSecond);
let fps = 120;
let gameSpeed = 1;

let previousDeltaTickTime = Date.now();
function deltaTick() {
  let newDate = Date.now();
  let seconds = (newDate - previousDeltaTickTime) / 1000;
  previousDeltaTickTime = newDate;
  applyDeltas(seconds * gameSpeed);
  window.setTimeout(deltaTick, msUntilNextTick);
  setDirty();
}


// TODO: move the entire updateDisplay logic/loop into display.js
function tick() {
  updateDisplay();
  window.setTimeout(tick, 1000 / fps);
}

// actual start of everything
$(function () {
  console.log('starting game...');
  let start = Date.now();

  console.log('finished generating in ' + (Date.now() - start) + 'ms');
  updateDisplay();
  tick();
  deltaTick();
});
