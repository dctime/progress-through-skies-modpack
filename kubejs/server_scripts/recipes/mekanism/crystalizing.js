ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:crystallizing",
        "chemicalType": "gas",
        "input": {
          "amount": 10,
          "gas": "mekanism:brine"
        },
        "output": {
          "item": "mekanism:salt"
        }
      })
})

