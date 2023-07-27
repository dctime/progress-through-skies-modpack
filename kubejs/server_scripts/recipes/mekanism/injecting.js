let EME = (id) => 'emendatusenigmatica:' + id;

ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:injecting",
        "itemInput": {
          "amount": 40,
          "ingredient": {
            "item": 'emendatusenigmatica:sodium_dust'
          }
        },
        "chemicalInput": {
          "amount": 1,
          "gas": EME('gaseous_liquid_oxygen')
        },
        "output": {
          "item": 'emendatusenigmatica:sodium_peroxide_dust',
          "count": 20
        }
      })
})

