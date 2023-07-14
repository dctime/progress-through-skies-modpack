ServerEvents.recipes(event => {
    event.custom({
        "type": "electrodynamics:mineral_grinder_recipe",
        "experience": 1.0,
        "iteminputs": {
          "0": {
            "count": 1,
            "item": 'emendatusenigmatica:copper_cluster_shard'
          },
          "count": 1
        },
        "output": {
          "count": 1,
          "item": 'emendatusenigmatica:copper_dust'
        },
        "ticks": 20,
        "usagepertick": 350.0
      })
})