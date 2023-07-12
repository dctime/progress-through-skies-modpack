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
        "speed": 0.25,
        "temperature": {
          "min_temp": 505
        }
      })

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
        "speed": 0.25,
        "temperature": {
          "min_temp": 505
        }
      })
})

