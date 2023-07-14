let EME = (id) => 'emendatusenigmatica:' + id;

ServerEvents.recipes(event => {
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "exothermic": true,
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "amount": 100,
          "fluid": 'emendatusenigmatica:liquid_oxygen'
        },
        "fluid_output": {
          "amount": 100,
          "fluid": 'emendatusenigmatica:sulfur_dioxide'
        },
        "item_input": {
          "item": 'emendatusenigmatica:sulfur_dust'
        },
        "speed": 1,
        "temperature": {
          "min_temp": 505
        }
      })

      event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "exothermic": false,
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "amount": 10,
          "fluid": 'emendatusenigmatica:sulfuric_acid'
        },
        "fluid_output": {
          "amount": 10,
          "fluid": 'emendatusenigmatica:copper_ii_sulfate'
        },
        "item_input": {
          "item": 'emendatusenigmatica:copper_i_oxide_dust'
        },
        "item_output": {
          "item": 'emendatusenigmatica:copper_dust'
        },
        "speed": 1
      })

      event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "exothermic": false,
        "item_input": {
          "item": 'emendatusenigmatica:copper_dust'
        },
        "item_output": {
          "item": 'emendatusenigmatica:copper_ingot'
        },
        "speed": 1,
        "temperature": {
          "min_temp": 1358
        }
      })
})

