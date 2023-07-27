let EME = (id) => 'emendatusenigmatica:' + id;

ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": {
          "amount": 20,
          "infuse_type": EME('carbon')
        },
        "itemInput": {
          "ingredient": {
            "item": 'emendatusenigmatica:sodium_carbonate_dust'
          }
        },
        "output": {
          "item": 'emendatusenigmatica:sodium_dust' 
        }
      })
})

