
let ticksPerSecond = 1;
let msUntilNextTick = Math.floor(1000 / ticksPerSecond);
let fps = 120;


function generateDisplays() {

  $("#consumablesDisplay").append($('<p></p>').html("Consumables").addClass("fs-4"));
  $("#consumablesDisplay").append($('<ul></ul>'));
  _.forEach(consumables, function (consumableObj, consumableName) {
    $("#consumablesDisplay > ul").append($('<div></div>').html(consumableName).attr("id", consumableName));
  });


  $("#abilitiesDisplay").append($('<p></p>').html("Abilities").addClass("fs-4"));
  $("#abilitiesDisplay").append($('<ul></ul>'));
  _.forEach(abilities, function (abilityObj, abilityName) {
    $("#abilitiesDisplay > ul").append($('<div></div>').html(abilityName).attr("id", abilityName));
  });


  $("#skillsDisplay").append($('<p></p>').html("Skills").addClass("fs-4"));
  $("#skillsDisplay").append($('<ul></ul>'));
  _.forEach(skills, function (skillObj, skillName) {
    $("#skillsDisplay > ul").append($('<div></div>').html(skillName).attr("id", skillName));
  });

};





let dirty = false;
/**
 * updates entire screen
 * 
 * fetches an update from each consumable/ability/skill
 * 
 */
// 
// 
function updateDisplay() {
  if(!dirty) {return;}
  dirty = false;


  _.forEach(consumables, function(consumableObj, consumableName) {
    // get by id
    // set innerHTML or whatever
    $("#"+consumableName).html(consumableName + ": " + consumableObj.curr + "/" + consumableObj.max)
  });

  _.forEach(abilities, function(abilityObj, abilityName) {
    // get by id
    // set innerHTML or whatever
    $("#"+abilityName).html(abilityName + ": " + abilityObj.curr)
  });

  _.forEach(skills, function(skillObj, skillName) {
    // get by id
    // set innerHTML or whatever
    $("#"+skillName).html(skillName + ": " + skillObj.curr)
  });
}


//TODO: grey out actions based on some canDoAction() function
//TODO: hiding consumables, skills, abilities based on whether they've ever been activated
//TODO: make display.js
//TODO: deltaTick upgrades: 
//    make deltatick cheatproof & accurate. use Date.now() to calculate elapsed time and calc delta based on that
//    deltaTick calculations affected by "gamespeed" variable
//TODO: figure out how to display delta (gold/s etc.). (generate & update)



/** 
 * TODO: (idea) make a split between slow consumables (gold, potions) & 'fast' consumables? (mana). 
 * reasoning: fast consumables will fill up and down over and over, and a bar is a better representation, 
 * because you mostly care to know roughly how much you have. 
 * 
 * */

function deltaTick() {
  applyDeltas();
  window.setTimeout(deltaTick, msUntilNextTick)
  dirty = true;
}

function tick() {
  updateDisplay();
  window.setTimeout(tick, 1000/fps)
}

// actual start of everything
$(function(){
  console.log("starting...");
  start = Date.now();
  
  generateDisplays();
  console.log("finished generating in " + (Date.now() - start)+ "ms");
  updateDisplay();
  tick();
  deltaTick();
});






