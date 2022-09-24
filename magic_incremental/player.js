//import _ from "../js/lodash.js";



var consumableNames = ["Gold","Mana"]
var abilityNames = ["Strength", "Constitution", "Agility", "Dexterity", "Fortitude", "Intelligence", "Wisdom", "Spirit", "Charisma", "Luck"]
var skillNames = ["Melee", "Arcana"]
consumables = {}
abilities = {}
skills = {}


_.forEach(consumableNames, function(value) {
    consumables[value] = {curr: 0, max: 0, delta:0};
});
_.forEach(abilityNames, function(value) {
    abilities[value] = {curr: 10, max: 100, delta:0};
});
_.forEach(skillNames, function(value) {
    skills[value] = {curr: 0, max: Infinity, delta:0};
});


console.log(consumables);
console.log(abilities);
console.log(skills);
