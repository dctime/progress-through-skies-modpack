ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "advgenerators:exchanger_heating",
            "input": {
            "fluids": {
                "fluid": "minecraft:water"
            },
            "amount": 5
            },
            "output": {
            "fluid": "advgenerators:steam",
            "amount": 15
            },
            "heat": 3
        }
    )

    event.custom(
        {
            "type": "advgenerators:exchanger_cooling",
            "input": {
              "fluids": {
                "fluid": "minecraft:lava"
              },
              "amount": 1
            },
            "output": {
              "item": "minecraft:obsidian",
              "amount": 0.001
            },
            "heat": 30
          }
    )
})