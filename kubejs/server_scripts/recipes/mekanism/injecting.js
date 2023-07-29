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

      event.custom({
        "type": "mekanism:injecting",
        "itemInput": {
          "amount": 1,
          "ingredient": {
            "item": 'emendatusenigmatica:silicon_ingot'
          }
        },
        "chemicalInput": {
          "amount": 1,
          "gas": EME('gaseous_phosphorus')
        },
        "output": {
          "item": 'emendatusenigmatica:n_type_silicon_ingot',
          "count": 1
        }
      })

      event.custom({
        "type": "mekanism:injecting",
        "itemInput": {
          "amount": 1,
          "ingredient": {
            "item": 'emendatusenigmatica:silicon_ingot'
          }
        },
        "chemicalInput": {
          "amount": 1,
          "gas": EME('gaseous_boron')
        },
        "output": {
          "item": 'emendatusenigmatica:p_type_silicon_ingot',
          "count": 1
        }
      })
})

