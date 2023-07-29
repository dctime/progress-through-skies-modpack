ServerEvents.recipes(event => {
    event.custom({
        "type": "alchemistry:liquifier",
        "group": "alchemistry:liquifier",
        "input": {
          "ingredient": {
            "item": 'emendatusenigmatica:sulfur_dust'
          },
          "count": 1
        },
        "result": {
          "fluid": 'emendatusenigmatica:sulfur',
          "amount": "10"
        }
      })

      event.custom({
        "type": "alchemistry:liquifier",
        "group": "alchemistry:liquifier",
        "input": {
          "ingredient": {
            "item": 'emendatusenigmatica:boron_dust'
          },
          "count": 1
        },
        "result": {
          "fluid": 'emendatusenigmatica:boron',
          "amount": "10"
        }
      })

      event.custom({
        "type": "alchemistry:liquifier",
        "group": "alchemistry:liquifier",
        "input": {
          "ingredient": {
            "item": 'emendatusenigmatica:phosphorus_dust'
          },
          "count": 1
        },
        "result": {
          "fluid": 'emendatusenigmatica:phosphorus',
          "amount": "10"
        }
      })
})

