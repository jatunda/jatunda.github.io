

var consumableNames = ["Gold","Mana"]
var abilityNames = ["Strength", "Constitution", "Agility", "Dexterity", "Fortitude", "Intelligence", "Wisdom", "Spirit", "Charisma", "Luck"]
var skillNames = ["Melee", "Arcana"]
export var consumables = {}
export var abilities = {}
export var skills = {}


_.forEach(consumableNames, function(value) {
    consumables[value] = {curr: 0, max: 0, delta:0};
});
_.forEach(abilityNames, function(value) {
    abilities[value] = {curr: 10, max: 100, delta:0};
});
_.forEach(skillNames, function(value) {
    skills[value] = {curr: 0, max: Infinity, delta:0};
});

export function applyDeltas(seconds) {
    _.forEach(consumableNames, function(value) {
        consumables[value].curr += consumables[value].delta * seconds;
    });
    _.forEach(abilityNames, function(value) {
        abilities[value].curr += abilities[value].delta * seconds;
    });
    _.forEach(skillNames, function(value) {
        skills[value].curr += skills[value].delta * seconds;
    });
}



