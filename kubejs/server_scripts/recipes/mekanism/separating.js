let EME = (id) => 'emendatusenigmatica:' + id;

ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:separating",
        "leftGasOutput": {
          "gas": EME('gaseous_liquid_hydrogen'),
          "amount": 2
        },
        "rightGasOutput": {
          "gas": EME('gaseous_liquid_oxygen'),
          "amount": 1
        },
        "energyUsage": 400,
        "input": {
          "fluid": "minecraft:water",
          "amount": 2
        }
      })
})

