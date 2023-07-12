ServerEvents.recipes(event => {
    event.custom({
        "type": "electrodynamics:mineral_washer_recipe",
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
            "item": "minecraft:cobblestone"
          },
          "count": 1
        },
        "output": {
          "amount": 1000,
          "fluid": "progressthroughskies:dusted_water_fluid"
        },
        "ticks": 100,
        "usagepertick": 400.0
      })
})
