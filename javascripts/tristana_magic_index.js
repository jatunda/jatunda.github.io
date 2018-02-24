var d100_effects = {
	'old_key':null,
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
	var k = keys[keys.length * Math.random() << 0]
	// << 0 basically does Math.floor()
	for(var i = 0; i < 100; i++)
	{
		if(k == d100_effects.old_key)
		{
			k = keys[keys.length * Math.random() << 0]
		}
		else
		{
			break;
		}
	}
	return d100_effects[k]
}