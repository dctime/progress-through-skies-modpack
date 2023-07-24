ServerEvents.recipes(event => {
    event.custom({
        "type": "electrodynamics:lathe_recipe",
        "experience": 0.10000000149011612,
        "itembi": {
          "0": {
            "chance": 1.0,
            "count": 2,
            "item": 'emendatusenigmatica:iron_nugget'
          },
          "count": 1
        },
        "iteminputs": {
          "0": {
            "count": 1,
            "item": 'emendatusenigmatica:iron_block'
          },
          "count": 1
        },
        "output": {
          "count": 1,
          "item": 'minecraft:bucket'
        },
        "ticks": 10,
        "usagepertick": 350.0
      })
})


