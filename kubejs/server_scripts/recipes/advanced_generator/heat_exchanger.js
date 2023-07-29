ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "advgenerators:exchanger_heating",
            "input": {
            "fluids": {
                "fluid": "hexerei:blood_fluid"
            },
            "amount": 1
            },
            "output": {
            "fluid": "evilcraft:blood",
            "amount": 1
            },
            "heat": 1
        }
    )

    event.custom(
        {
            "type": "advgenerators:exchanger_cooling",
            "input": {
              "fluids": {
                "fluid": 'emendatusenigmatica:natural_acid'
              },
              "amount": 1
            },
            "output": {
              "item": "minecraft:obsidian",
              "amount": 0
            },
            "heat": 1
          }
    )
})