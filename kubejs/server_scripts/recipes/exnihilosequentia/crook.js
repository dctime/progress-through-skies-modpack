ServerEvents.recipes(event => {
    event.custom({
    "type": "exnihilosequentia:crook",
    "input": {
      "item": "exnihilosequentia:infested_leaves"
    },
    "results": [
      {
        "chance": 1,
        "count": 1,
        "item": "minecraft:string"
      }
    ]
  })

  event.custom({
    "type": "exnihilosequentia:crook",
    "input": {
      "item": "minecraft:grass_block"
    },
    "results": [
      {
        "chance": 0.5,
        "count": 1,
        "item": "exnihilosequentia:silkworm"
      },
      {
        "chance": 0.5,
        "count": 1,
        "item": "occultism:datura_seeds"
      },
      {
        "chance": 0.5,
        "count": 1,
        "item": "minecraft:oak_sapling"
      }
    ]
  })
})

