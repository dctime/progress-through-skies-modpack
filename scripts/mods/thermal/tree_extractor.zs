<recipetype:thermal:tree_extractor>.removeAll();
<recipetype:thermal:tree_extractor_boost>.removeAll();

<recipetype:thermal:tree_extractor>.addJsonRecipe("oak_resin",
{
  "type": "thermal:tree_extractor",
  "trunk": "minecraft:oak_log",
  "leaves": "minecraft:oak_leaves",
  "result": {
    "fluid": "thermal:resin",
    "amount": 1000
  }
});