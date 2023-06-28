

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

<recipetype:ilikewood:sawmilling>.addJsonRecipe("tetra_workbench",
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
        "result": "tetra:basic_workbench",
        "count":1
      }
    }
  ]});