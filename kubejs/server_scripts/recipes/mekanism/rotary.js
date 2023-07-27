let EME = (id) => 'emendatusenigmatica:' + id;

ServerEvents.recipes(event => {
    function addRotaryRecipe(fluid_id)
    {
        event.custom({
            "type": "mekanism:rotary",
            "conditions": [
              {
                "modid": "mekanism",
                "type": "forge:mod_loaded"
              }
            ],
            "fluidInput": {
              "amount": 1,
              "fluid": EME(fluid_id)
            },
            "gasOutput": {
              "gas": EME('gaseous_'+fluid_id),
              "amount": 1
            },
            "gasInput": {
              "amount": 1,
              "gas": EME('gaseous_'+fluid_id)
            },
            "fluidOutput": {
              "amount": 1,
              "fluid": EME(fluid_id)
            }
        })
    }

    addRotaryRecipe('liquid_hydrogen')
    addRotaryRecipe('liquid_oxygen')
    addRotaryRecipe('sulfur_dioxide')
    addRotaryRecipe('sulfuric_acid')
    addRotaryRecipe('carbon_dioxide')
    addRotaryRecipe('ammonia')
    addRotaryRecipe('ammonium_bicarbonate')

    event.custom({
        "type": "mekanism:rotary",
        "conditions": [
          {
            "modid": "mekanism",
            "type": "forge:mod_loaded"
          }
        ],
        "fluidInput": {
          "amount": 1,
          "fluid": "minecraft:water"
        },
        "gasOutput": {
          "gas": "mekanism:water_vapor",
          "amount": 1
        },
        "gasInput": {
          "amount": 1,
          "gas": "mekanism:water_vapor"
        },
        "fluidOutput": {
          "amount": 1,
          "fluid": "minecraft:water"
        }
    })
    
})

