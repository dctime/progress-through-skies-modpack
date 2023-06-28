<recipetype:cyclic:melter>.removeAll();

<recipetype:cyclic:melter>.addJsonRecipe("melt_bedrock_dust_to_lava",
{
	"type": "cyclic:melter",
	"ingredients": [
		{
			"item": "progressthroughskies:bedrock_dust"
		}
	],
	"energy": {
		"rfpertick": 0,
		"ticks": 200
	},
	"result": {
		"fluid": "minecraft:lava",
		"count": 100
	}
});