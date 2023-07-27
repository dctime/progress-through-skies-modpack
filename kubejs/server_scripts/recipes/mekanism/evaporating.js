ServerEvents.recipes(event => {
    event.custom({
    "type": "mekanism:evaporating",
    "output": {
      "fluid": 'mekanism:brine',
      "amount": 1
    },
    "input": {
      "fluid": 'exnihilosequentia:sea_water',
      "amount": 10
    }
  })
})

