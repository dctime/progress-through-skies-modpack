ServerEvents.recipes(event => {
    event.custom({
        "type": "pneumaticcraft:refinery",
        "input": {
          "type": "pneumaticcraft:fluid",
          "fluid": 'emendatusenigmatica:crude_oil',
          "amount": 10
        },
        "temperature": {
          "min_temp": 632
        },
        "results": [
          {
            "fluid": 'emendatusenigmatica:heavy_unprocessed_oil',
            "amount": 3
          },
          {
            "fluid": 'emendatusenigmatica:lubricant',
            "amount": 3
          },
          {
            "fluid": 'emendatusenigmatica:light_unprocessed_oil',
            "amount": 4
          }
        ]
      })
})

