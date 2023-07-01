<recipetype:occultism:spirit_fire>.removeAll();

<recipetype:occultism:spirit_fire>.addJsonRecipe("impure_white_chalk",
{
  "type": "occultism:spirit_fire",
  "ingredient": {
    "item": "create:limestone"
  },
  "result": {
    "item": "occultism:chalk_white_impure"
  }
});

<recipetype:occultism:spirit_fire>.addJsonRecipe("white_chalk",
{
  "type": "occultism:spirit_fire",
  "ingredient": {
    "item": "occultism:chalk_white_impure"
  },
  "result": {
    "item": "occultism:chalk_white"
  }
});

<recipetype:occultism:spirit_fire>.addJsonRecipe("sacrifice_bowl_from_pressure_plate",
{
  "type": "occultism:spirit_fire",
  "ingredient": {
    "item": "minecraft:stone_pressure_plate"
  },
  "result": {
    "item": "occultism:sacrificial_bowl"
  }
});

<recipetype:occultism:spirit_fire>.addJsonRecipe("golden_sacrifice_bowl_from_sacrifice_bowl",
{
  "type": "occultism:spirit_fire",
  "ingredient": {
    "item": "occultism:sacrificial_bowl"
  },
  "result": {
    "item": "occultism:golden_sacrificial_bowl"
  }
});

<recipetype:occultism:spirit_fire>.addJsonRecipe("sacrifice_bowl_from_golden_sacrifice_bowl",
{
  "type": "occultism:spirit_fire",
  "ingredient": {
    "item": "occultism:golden_sacrificial_bowl"
  },
  "result": {
    "item": "occultism:sacrificial_bowl"
  }
});



function resin_to_wax(wood_bucket_damage as int) as void
{
    <recipetype:occultism:spirit_fire>.addJsonRecipe("resin_to_wax_"+wood_bucket_damage,
    {
        "type": "occultism:spirit_fire",
        "ingredient": 
        [
            {
                "type": "forge:nbt",
                "item": "woodenbucket:wooden_bucket",
                "nbt": {"Damage":wood_bucket_damage, "Fluid":{"FluidName": "thermal:resin","Amount": 1000}}
            }
        ],
        "result":
        {
            "type": "forge:nbt",
            "item": "woodenbucket:wooden_bucket",
            "nbt": {"Damage":wood_bucket_damage, "Fluid":{"Damage":0, "FluidName": "cyclic:wax","Amount": 1000}}
        }
    });
}

for damage in 0 .. 24
{
    resin_to_wax(damage);
}

<recipetype:occultism:spirit_fire>.addJsonRecipe("crafting_table_to_packager",
{
  "type": "occultism:spirit_fire",
  "ingredient": {
    "item": "minecraft:crafting_table"
  },
  "result": {
    "item": "cyclic:packager"
  }
});

<recipetype:occultism:spirit_fire>.addJsonRecipe("stick_to_morphingtool",
{
  "type": "occultism:spirit_fire",
  "ingredient": {
    "item": "minecraft:stick"
  },
  "result": {
    "item": "morphtool:tool"
  }
});

<recipetype:occultism:spirit_fire>.addJsonRecipe("bedrock_dust_to_redstone",
{
  "type": "occultism:spirit_fire",
  "ingredient": {
    "item": "progressthroughskies:bedrock_dust"
  },
  "result": {
    "item": "minecraft:redstone"
  }
});

<recipetype:occultism:spirit_fire>.addJsonRecipe("stone_to_andesite",
{
  "type": "occultism:spirit_fire",
  "ingredient": {
    "item": "minecraft:stone"
  },
  "result": {
    "item": "minecraft:andesite"
  }
});