let EME = (id) => 'emendatusenigmatica:' + id;

ServerEvents.recipes(event => {
    event.custom({
    "type": "mekanism:purifying",
    "itemInput": {
        "ingredient": {
          "item": 'occultism:datura_seeds'
        }
      },
      "chemicalInput": {
      "amount": 1,
      "gas": 'emendatusenigmatica:gaseous_sodium_hydroxide'
    },
    "output": {
      "item": 'immersiveengineering:seed'
    }
  })
})


