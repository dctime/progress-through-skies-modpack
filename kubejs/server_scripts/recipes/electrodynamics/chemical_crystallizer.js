ServerEvents.recipes(event => {
    event.custom({
        "type": "electrodynamics:chemical_crystallizer_recipe",
        "experience": 0.0,
        "fluidinputs": {
          "0": {
            "amount": 10,
            "fluid": 'emendatusenigmatica:copper'
          },
          "count": 1
        },
        "output": {
          "count": 1,
          "item": 'emendatusenigmatica:copper_cluster_shard'
        },
        "ticks": 20,
        "usagepertick": 200.0
      })
})


