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