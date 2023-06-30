<recipetype:cyclic:solidifier>.removeAll();

<recipetype:cyclic:solidifier>.addJsonRecipe("solidify_lava_to_cobble",
{
	"type": "cyclic:solidifier",
	"ingredients": [
		{
			"item": "progressthroughskies:sand_dust"
		},
		{
			"item": "progressthroughskies:gravel_dust"
		},
		{
			"item": "progressthroughskies:gravel_dust"
		}
	],
	"energy": {
		"rfpertick": 0,
		"ticks": 200
	},
	"mix": {
		"fluid": "minecraft:lava",
		"count": 1000
	},
	"result": {
		"item": "minecraft:cobblestone",
		"count": 64
	}
});

<recipetype:cyclic:solidifier>.addJsonRecipe("solidify_wax_to_tallow",
{
	"type": "cyclic:solidifier",
	"ingredients": [
		{
			"item": "minecraft:string"
		},
		{
			"item": "minecraft:string"
		}
	],
	"energy": {
		"rfpertick": 0,
		"ticks": 30
	},
	"mix": {
		"fluid": "cyclic:wax",
		"count": 1000
	},
	"result": {
		"item": "occultism:candle_white",
		"count": 2
	}
});