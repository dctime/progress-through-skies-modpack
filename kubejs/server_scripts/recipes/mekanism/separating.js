ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:separating",
        "leftGasOutput": {
          "gas": 'kubejs:gaseous_liquid_hydrogen',
          "amount": 2
        },
        "rightGasOutput": {
          "gas": 'kubejs:gaseous_liquid_oxygen',
          "amount": 1
        },
        "energyUsage": 400,
        "input": {
          "tag": "minecraft:water",
          "amount": 2
        }
      })
})

