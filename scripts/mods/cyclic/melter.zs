<recipetype:cyclic:melter>.removeAll();

<recipetype:cyclic:melter>.addJsonRecipe("melt_bedrock_gravel_to_lava",
{
	"type": "cyclic:melter",
	"ingredients": [
		{
			"item": "progressthroughskies:bedrock_gravel"
		}
	],
	"energy": {
		"rfpertick": 0,
		"ticks": 10
	},
	"result": {
		"fluid": "minecraft:lava",
		"count": 200
	}
});