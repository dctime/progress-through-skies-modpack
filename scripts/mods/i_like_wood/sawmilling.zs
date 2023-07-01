

<recipetype:ilikewood:sawmilling>.removeByModid("ilikewood");



<recipetype:ilikewood:sawmilling>.addJsonRecipe("oak_sieve",
{"type": "forge:conditional",
  "recipes": [
    {
      "conditions": [
        {
            "type": "forge:mod_loaded",
            "modid": "ilikewood"
        },
        {
            "type": "forge:mod_loaded",
            "modid": "exnihilosequentia"
        }
      ],
      "recipe": {
        "type": "ilikewood:sawmilling",
        "ingredient": {
          "item": "minecraft:oak_log"
        },
        "result": "exnihilosequentia:oak_sieve",
        "count":1
      }
    }
  ]});

<recipetype:ilikewood:sawmilling>.addJsonRecipe("oak_log_pile",
{"type": "forge:conditional",
  "recipes": [
    {
      "conditions": [
        {
            "type": "forge:mod_loaded",
            "modid": "ilikewood"
        }
      ],
      "recipe": {
        "type": "ilikewood:sawmilling",
        "ingredient": {
          "item": "minecraft:oak_log"
        },
        "result": "ilikewood:oak_log_pile",
        "count":1
      }
    }
  ]});

<recipetype:ilikewood:sawmilling>.addJsonRecipe("wooden_bucket",
{"type": "forge:conditional",
  "recipes": [
    {
      "conditions": [
        {
            "type": "forge:mod_loaded",
            "modid": "ilikewood"
        }
      ],
      "recipe": {
        "type": "ilikewood:sawmilling",
        "ingredient": {
          "item": "minecraft:oak_log"
        },
        "result": "woodenbucket:wooden_bucket",
        "count":1
      }
    }
  ]});

<recipetype:ilikewood:sawmilling>.addJsonRecipe("oak_post",
{"type": "forge:conditional",
  "recipes": [
    {
      "conditions": [
        {
            "type": "forge:mod_loaded",
            "modid": "ilikewood"
        }
      ],
      "recipe": {
        "type": "ilikewood:sawmilling",
        "ingredient": {
          "item": "minecraft:oak_log"
        },
        "result": "ilikewood:oak_post",
        "count":1
      }
    }
  ]});

<recipetype:ilikewood:sawmilling>.addJsonRecipe("crafting_table",
{"type": "forge:conditional",
  "recipes": [
    {
      "conditions": [
        {
            "type": "forge:mod_loaded",
            "modid": "ilikewood"
        }
      ],
      "recipe": {
        "type": "ilikewood:sawmilling",
        "ingredient": {
          "item": "minecraft:oak_log"
        },
        "result": "minecraft:crafting_table",
        "count":1
      }
    }
  ]});

  <recipetype:ilikewood:sawmilling>.addJsonRecipe("wooden_hopper",
{"type": "forge:conditional",
  "recipes": [
    {
      "conditions": [
        {
            "type": "forge:mod_loaded",
            "modid": "ilikewood"
        }
      ],
      "recipe": {
        "type": "ilikewood:sawmilling",
        "ingredient": {
          "item": "minecraft:oak_log"
        },
        "result": "cyclic:hopper",
        "count":1
      }
    }
  ]});

    <recipetype:ilikewood:sawmilling>.addJsonRecipe("oak_slab",
{"type": "forge:conditional",
  "recipes": [
    {
      "conditions": [
        {
            "type": "forge:mod_loaded",
            "modid": "ilikewood"
        }
      ],
      "recipe": {
        "type": "ilikewood:sawmilling",
        "ingredient": {
          "item": "minecraft:oak_log"
        },
        "result": "minecraft:oak_slab",
        "count":2
      }
    }
  ]});

  <recipetype:ilikewood:sawmilling>.addJsonRecipe("tree_extractor",
{"type": "forge:conditional",
  "recipes": [
    {
      "conditions": [
        {
            "type": "forge:mod_loaded",
            "modid": "ilikewood"
        }
      ],
      "recipe": {
        "type": "ilikewood:sawmilling",
        "ingredient": {
          "item": "minecraft:oak_log"
        },
        "result": "thermal:device_tree_extractor",
        "count":1
      }
    }
  ]});

<recipetype:ilikewood:sawmilling>.addJsonRecipe("chest",
{"type": "forge:conditional",
  "recipes": [
    {
      "conditions": [
        {
            "type": "forge:mod_loaded",
            "modid": "ilikewood"
        }
      ],
      "recipe": {
        "type": "ilikewood:sawmilling",
        "ingredient": {
          "item": "minecraft:oak_log"
        },
        "result": "minecraft:chest",
        "count":1
      }
    }
  ]});