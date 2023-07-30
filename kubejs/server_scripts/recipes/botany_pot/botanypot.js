ServerEvents.recipes(event => {
    event.custom({
    "type": "botanypots:crop",
    "seed": {
      "item": "minecraft:oak_sapling"
    },
    "categories": [
      "dirt"
    ],
    "growthTicks": 30,
    "display": {
      "block": "minecraft:oak_sapling"
    },
    "drops": [
      {
        "chance": 1.00,
        "output": {
          "item": "minecraft:oak_log"
        },
        "minRolls": 2,
        "maxRolls": 4
      },
      {
        "chance": 0.10,
        "output": {
          "item": "minecraft:stick"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 0.05,
        "output": {
          "item": "minecraft:apple"
        }
      },
      {
        "chance": 0.15,
        "output": {
          "item": 'exnihilosequentia:silkworm'
        }
      }
    ]
  })
})

