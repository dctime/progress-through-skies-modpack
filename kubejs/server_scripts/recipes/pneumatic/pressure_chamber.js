ServerEvents.recipes(event => {
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "type": "forge:nbt",
                "item": 'ceramicbucket:ceramic_bucket',
                "nbt": '{Fluid:{Amount:1000,FluidName:"emendatusenigmatica:nitrogen"}}'
            },
            {
                "type": "forge:nbt",
                "item": 'ceramicbucket:ceramic_bucket',
                "nbt": '{Fluid:{Amount:1000,FluidName:"emendatusenigmatica:liquid_hydrogen"}}'
            },
            {
                "type": "forge:nbt",
                "item": 'ceramicbucket:ceramic_bucket',
                "nbt": '{Fluid:{Amount:1000,FluidName:"emendatusenigmatica:liquid_hydrogen"}}'
            },
            {
                "type": "forge:nbt",
                "item": 'ceramicbucket:ceramic_bucket',
                "nbt": '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'
            }
        ],
        "pressure": 2.0,
        "results": [
          {
            "type": "forge:nbt",
            "item": 'ceramicbucket:ceramic_bucket',
            "nbt": '{Fluid:{Amount:1000,FluidName:"emendatusenigmatica:ammonia"}}'
          },
          {
            "type": "forge:nbt",
            "item": 'ceramicbucket:ceramic_bucket',
            "nbt": '{Fluid:{Amount:1000,FluidName:"emendatusenigmatica:ammonia"}}'
          }
        ]
      })
})

