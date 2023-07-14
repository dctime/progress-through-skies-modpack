ServerEvents.recipes(event => {
    event.custom({
      "type": "electrodynamics:electrolytic_separator_recipe",
      "experience": 0.0,
      "fluidbi": {
        "0": {
          "amount": 10,
          "chance": 1.0,
          "fluid": 'emendatusenigmatica:copper'
        },
        "count": 1
      },
      "fluidinputs": {
        "0": {
          "amount": 10,
          "fluid": 'emendatusenigmatica:copper_ii_sulfate'
        },
        "count": 1
      },
      "output": {
        "amount": 10,
        "fluid": 'emendatusenigmatica:dense_sulfuric_acid'
      },
      "ticks": 20,
      "usagepertick": 250.0
    })
})


