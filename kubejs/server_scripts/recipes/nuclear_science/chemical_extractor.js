ServerEvents.recipes(event => {
    event.custom({
    "type": "nuclearscience:chemical_extractor_recipe",
    "experience": 0.0,
    "fluidinputs": {
      "0": {
        "amount": 100,
        "fluid": "thermal:resin"
      },
      "count": 1
    },
    "iteminputs": {
      "0": {
        "count": 1,
        "item": 'emendatusenigmatica:sulfur_dust'
      },
      "count": 1
    },
    "output": {
      "count": 1,
      "item": 'thermal:cured_rubber'
    },
    "ticks": 30,
    "usagepertick": 750.0
  })
})

