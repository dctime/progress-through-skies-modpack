let EME = (id) => 'emendatusenigmatica:' + id;

ServerEvents.recipes(event => {
    event.custom({ // 2Cu2S(Dusted Water) + 3O2 => 2Cu2O + 2SO2 + 8Cu2O (in the bucket, assume Cu2O : Cu2S = 4:1)
        "type": "pneumaticcraft:fluid_mixer",
        "input1": {
          "type": "pneumaticcraft:fluid",
          "fluid": "progressthroughskies:dusted_water_fluid",
          "amount": 20
        },
        "input2": {
          "type": "pneumaticcraft:fluid",
          "fluid": "emendatusenigmatica:liquid_oxygen",
          "amount": 30
        },
        "fluid_output": {
          "fluid": 'emendatusenigmatica:sulfur_dioxide',
          "amount": 20
        },
        "item_output": {
          "item": 'emendatusenigmatica:copper_i_oxide_dust'
        },
        "pressure": 0.0,
        "time": 30
      })

    event.custom({ // SO2 + H2S => 3S + H2O
        "type": "pneumaticcraft:fluid_mixer",
        "input1": {
          "type": "pneumaticcraft:fluid",
          "fluid": 'emendatusenigmatica:sulfur_dioxide',
          "amount": 10
        },
        "input2": {
          "type": "pneumaticcraft:fluid",
          "fluid": 'emendatusenigmatica:hydrogen_sulfide',
          "amount": 10
        },
        "fluid_output": {
          "fluid": 'minecraft:water',
          "amount": 10
        },
        "item_output": {
          "item": 'emendatusenigmatica:sulfur_dust',
          'count': 3
        },
        "pressure": 0.0,
        "time": 10
    })

    
})

