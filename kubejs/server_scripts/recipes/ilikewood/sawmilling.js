ServerEvents.recipes(event => {
    event.custom({"type": "forge:conditional",
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
    ]})

    event.custom({"type": "forge:conditional",
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
    ]})

    event.custom({"type": "forge:conditional",
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
    ]})

    event.custom({"type": "forge:conditional",
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
    ]})

    event.custom({"type": "forge:conditional",
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
    ]})

    event.custom({"type": "forge:conditional",
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
    ]})

    event.custom({"type": "forge:conditional",
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
          "count":8
        }
      }
    ]})

    event.custom({"type": "forge:conditional",
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
    ]})

    event.custom({"type": "forge:conditional",
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
          "result": "create:piston_extension_pole",
          "count":1
        }
      }
    ]})

    event.custom({"type": "forge:conditional",
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
          "result": 'naturesaura:wood_stand',
          "count":1
        }
      }
    ]})
})