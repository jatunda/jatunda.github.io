import {consumables, abilities, skills} from './player.js';

window.beg = beg; // for debugging
window.steal = steal;
window.invest = invest; 

function beg() {
  consumables["Gold"]["curr"] += 1;
}
function steal() {
  consumables.Gold.curr += 5;
}
function invest() {
  consumables.Gold.delta += 0.01;
}

export var actionsData = {
  Beg: {
    func: beg,
    subtitle: null,
    desc: "It ain't the prettiest of jobs, but money is money.",
  },
  "Petty Theft": {
    func: steal,
    subtitle: "shhh",
    desc: "Sinful, risky, and fast.",
  },
  Invest: {
    func: invest,
    subtitle: null,
    desc: "A penny saved is a penny earned.... eventually.",
  },
  Channel: {
    func: function(){
      consumables.Mana.curr += 0.01;
    },
    subtitle: null,
    desc: "Feel the mana around you.",
  },
  Train: {
    func: function() {
      abilities.Strength.curr += 1;
    },
    desc: "Feel the BURN",
  },
};




