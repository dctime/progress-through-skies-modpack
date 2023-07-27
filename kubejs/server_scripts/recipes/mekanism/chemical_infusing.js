let EME = (id) => 'emendatusenigmatica:' + id;

ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:chemical_infusing",
        "leftInput": {
          "amount": 1,
          "gas": EME('gaseous_sulfur_dioxide')
        },
        "rightInput": {
          "amount": 1,
          "gas": "mekanism:water_vapor"
        },
        "output": {
          "gas": EME('gaseous_sulfurous_acid'),
          "amount": 1
        }
      })

      event.custom({
        "type": "mekanism:chemical_infusing",
        "leftInput": {
          "amount": 1,
          "gas": EME('gaseous_sulfurous_acid')
        },
        "rightInput": {
          "amount": 1,
          "gas": EME('gaseous_liquid_oxygen')
        },
        "output": {
          "gas": EME('gaseous_sulfuric_acid'),
          "amount": 1
        }
      })

      event.custom({
        "type": "mekanism:chemical_infusing",
        "leftInput": {
          "amount": 1,
          "gas": EME('gaseous_carbon_dioxide')
        },
        "rightInput": {
          "amount": 1,
          "gas": EME('gaseous_ammonia')
        },
        "output": {
          "gas": EME('gaseous_ammonium_bicarbonate'),
          "amount": 1
        }
      })

})

