var d100_effects = {
	'old_key':null
	'1':"yes",
	'2':"no",
	'3':"maybe",
	'4':"poop",
	'5':"sundae"
}

var randomProperty = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

function get_d100_effects()
{
	var keys = Object.keys(d100_effects)
	return d100_effects[keys[keys.length * Math.random() << 0]]
	// << 0 basically does Math.floor()
}