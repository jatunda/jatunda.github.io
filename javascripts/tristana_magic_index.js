var d100_effects = {
	'prev_effect':null,
	'effects':
	[
		"Target vomits slugs for 1d4 hours",
		"Everyone in 30’: invis for 1 minute or till atk/cast",
		"A mature oak sprouts in an unoccupied space in 60’",
		"Target is cocooned in crystal until someone breaks it",
		"Everything within 20’ pulled 10’ toward caster",
		"Weapons in 60’ radius turn to food for 1 minute",
		"Third eye grows; adv. on Perception for 1 hour",
		"Create a 60' radius 30' tall mound, centered on self",
		"Teleport up to 60 feet away to unoccupied space",
		"Cast mirror image twice",
		"Can see invisible creatures",
		"Copy most expensive item on caster, target",
		"For 1 minute, flammable touch (palms/ finger pads)",
		"Caster’s fists become huge, deal 1d8 B dmg, 1 min.",
		"Cannot speak, emit pink bubbles instead",
		"Become invisible/silent for 1 minute or till atk/cast",
		"Caster's arms turn into wings. Can fly at 40' speed",
		"A confused bear appears within 60’ for 1 minute",
		"Age changes 1d10 years. odd: younger, even: older",
		"One of target’s eyes replaced by 500 GP sapphire",
		"Glow brightly for 1 minute. Blind others within 5’.",
		"Illusory butterflies/flowers flutter in 5’ radius 1 min.",
		"An alien appears within 5 feet for one minute",
		"All water in 60' radius turns into (blood, gold, ice, gravy, acid, solid steel)",
		"Caster and target flung 10’ in opposite directions",
		"Cast polymorph on self or target (coin toss). Fail save: Sheep form.",
		"Up to 3 random creatures in 30’:4d10 lightning dmg",
		"Casters clothes become uncomfortably tight",
		"Caster can see ghost of people who died in last 24 hours. (or strong wills)",
		"Water elemental appears, floods the area",
		"Caster explodes with plant growth",
		"Cast fireball at 3rd level centered on self",
		"Caster’s face blackened by small explosion",
		"30' radius, SaveDC 15wis. 2d6Cold, freeze 1 turn",
		"Hair falls out, grows back within 24 hours",
		"Others in 30’: 1d10 necro dmg. Gain HP equal to loss. 3 rounds. Lazer beams",
		"Gravity reverses in 30’ radius till start of next turn",
		"Summon a cloud of gnats. Distracted for a turn.",
		"Caster can only speak to animals for 24 hours",
		"All unlocked doors/windows in 60’ fly open",
		"Caster’s hands become covered in sticky goop",
		"When caster is hit, a bird with HP exits from wound. ",
		"1d6 flumphs appear for 1 minute in 60’; scared",
		"For 1 min, all caster movement is teleportation with range = speed + 20'",
		"Caster becomes frightened of a color for 1 hour",
		"Caster realizes they carry a small, but powerful magic item",
		"Grass instantly sprouts to 3’ tall within 20’",
		"Spell ricochets off target to random creature in 30’ (both get hit)",
		"All objects restored to perfection. 60' radius",
		"Grow long beard made of feathers until sneeze",
		"Large floating eye follows caster for 1 hour",
		"Next phrase spoken by caster becomes true",
		"Magic Mouth appears on Caster somewhere",
		"For 1 minute, can only shout when speaking",
		"Next person you touch gets shocked for 1d6 damage",
		"Cast confusion centered on self",
		"Cabbages sprout abundantly within a 30’ radius",
		"Cast fog cloud centered on self",
		"Target is transported to Ethereal Plane for 1 minute",
		"Caster gains 100 lbs, move speed halved, 1 minute",
		"Caster's voice is target’s voice for 24 hrs",
		"Caster Strength = 1d20 for 24 hours",
		"Roll on this table every round for 1 minute",
		"Smoke fumes from caster’s ears for 1 minute",
		"A flaming horse appears (real horse)",
		"Caster’s skin turns vibrant blue till remove curse",
		"Cast thunder wave centered on self",
		"Loud voice ridicules caster w/ init 20 for 1 min",
		"Size increases by 1 size category for 1 minute",
		"Next turn caster takes no action, vomits 1d100 SP",
		"Caster gains 3’ prehensile tail for 1 hour",
		"Caster grows antlers, sheds them in 24 hours",
		"Caster trapped in a giant glass ball",
		"Everyone in 30' immune to damage for 1 minute (randomly deflect spells)",
		"All light sources within 60’ radius extinguished",
		"Cast an explosion centered on target (3d6 force damage)",
		"Cat magic missile as 5th-level spell",
		"Change height by 1d10: Even: grow, Odd: shrink",
		"Transported to Astral Plane until end of next turn",
		"Unicorn appears within 5’ for next minute",
		"Nausea on all in 60' for 24 hours",
		"Become potted plant until start of next turn",
		"Creatures within 30’ are stuck in place vs Str DC 15",
		"Caster gets 2x actions for 3 rounds",
		"Caster breathes 30’ fire cone next time they speak",
		"All spells in 60’ radius double (level, range, dmg, or effect strength) for 1 minute",
		"Caster sees everyone as a decaying corpse for 24h",
		"Cast fly on random creature within 60’",
		"Caster's arm bent 90° between wrist and elbow",
		"Caster’s arms become tentacles for 1 minute",
		"Heal everyone in 30' to max health + 10 temp hp",
		"Cast grease centered on self",
		"Cast antigravity on a random creature in 60’",
		"If you die in next minute, reincarnate. Gain a Glow + holy aura for duration",
		"caster and target switch bodies for 2 rounds",
		"Caster smells like lavender for 1d6 days",
		"Surrounded by faint ethereal music for 1 minute",
		"Caster and target switch positions after spell",
		"Geyser lifts caster 50’ in air until start of next turn",
		"All within 60’ saves vs Wis 15 or drops whatever they are holding",

	]
	
}

var randomProperty = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

function get_d100_effects()
{
	var fxNum = d100_effects.effects.length * Math.random() << 0
	// << 0 basically does Math.floor()
	for(var i = 0; i < 100; i++)
	{
		if(fxNum == d100_effects.prev_effect)
		{
			fxNum = d100_effects.effects.length * Math.random() << 0
		}
		else
		{
			d100_effects.old_key = fxNum;
			break;
		}
	}
	var output = "Rolled a d" + d100_effects.effects.length + " and got a " +d100_effects.old_key;
	output += "</p><p>"
	output += "<em>" + d100_effects.effects[fxNum] + "</em>"

	return output;

}