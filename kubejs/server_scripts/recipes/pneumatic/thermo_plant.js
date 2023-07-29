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
          "item": 'emendatusenigmatica:copper_dust',
        },
        "item_output": {
          "item": 'emendatusenigmatica:copper_nugget'
        },
        "speed": 1,
        "temperature": {
          "min_temp": 1358
        }
      })

      event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "exothermic": false,
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "amount": 1000,
          "fluid": 'emendatusenigmatica:wet_slurries_of_algae'
        },
        "fluid_output": {
          "amount": 1000,
          "fluid": 'emendatusenigmatica:crude_oil'
        },
        "speed": 1,
        "pressure": 2.0,
        "temperature": {
          "min_temp": 622
        }
      })

      event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "exothermic": false,
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "amount": 10,
          "fluid": 'emendatusenigmatica:ammonium_bicarbonate'
        },
        "fluid_output": {
          "amount": 10,
          "fluid": 'emendatusenigmatica:ammonium_chloride'
        },
        "item_input": {
          "item": 'mekanism:salt'
        },
        "item_output": {
          "item": 'emendatusenigmatica:sodium_bicarbonate_dust'
        },
        "speed": 1
      })

      event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "exothermic": false,
        "fluid_output": {
          "amount": 10,
          "fluid": 'emendatusenigmatica:carbon_dioxide'
        },
        "item_input": {
          "item": 'emendatusenigmatica:sodium_bicarbonate_dust'
        },
        "item_output": {
          "item": 'emendatusenigmatica:sodium_carbonate_dust'
        },
        "speed": 1,
        "temperature": {
          "min_temp": 401
        }
      })

      event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "exothermic": false,
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "amount": 10,
          "fluid": 'emendatusenigmatica:ammonium_chloride'
        },
        "fluid_output": {
          "amount": 10,
          "fluid": 'emendatusenigmatica:ammonia'
        },
        "item_input": {
          "item": 'emendatusenigmatica:calcium_oxide_dust'
        },
        "item_output": {
          "item": 'emendatusenigmatica:calcium_chloride_dust'
        },
        "speed": 1
      })
})

