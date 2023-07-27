ServerEvents.recipes(event => {
    event.custom({
        "type": "electrodynamics:mineral_crusher_recipe",
        "experience": 0.2,
        "iteminputs": {
          "0": {
            "count": 1,
            "item": 'immersiveengineering:coal_coke'
          },
          "count": 1
        },
        "output": {
          "count": 1,
          "item": 'immersiveengineering:dust_coke'
        },
        "ticks": 10,
        "usagepertick": 450.0
      })
})

