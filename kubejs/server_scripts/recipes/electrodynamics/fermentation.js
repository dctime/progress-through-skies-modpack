ServerEvents.recipes(event => {
    event.custom({
        "type": "electrodynamics:fermentation_plant_recipe",
        "experience": 0.0,
        "fluidinputs": {
          "0": {
            "amount": 1000,
            "fluid": "minecraft:water"
          },
          "count": 1
        },
        "iteminputs": {
          "0": {
            "count": 1,
            "item": 'minecraft:rotten_flesh'
          },
          "count": 1
        },
        "output": {
          "amount": 1000,
          "fluid": "emendatusenigmatica:hydrogen_sulfide"
        },
        "ticks": 100,
        "usagepertick": 20.0
      })
})

