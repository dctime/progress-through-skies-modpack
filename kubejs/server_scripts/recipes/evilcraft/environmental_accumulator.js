ServerEvents.recipes(event => {
    event.custom({
        "type": "evilcraft:environmental_accumulator",
        "item": 'minecraft:bucket',
        "weather": "CLEAR",
        "result": {
          "item": 'emendatusenigmatica:liquid_air_bucket',
          "weather": "CLEAR"
        }
      })

      event.custom({
        "type": "evilcraft:environmental_accumulator",
        "item": 'minecraft:bucket',
        "weather": "RAIN",
        "result": {
          "item": 'emendatusenigmatica:liquid_air_bucket',
          "weather": "RAIN"
        }
      })

      event.custom({
        "type": "evilcraft:environmental_accumulator",
        "item": 'minecraft:bucket',
        "weather": "LIGHTNING",
        "result": {
          "item": 'emendatusenigmatica:liquid_air_bucket',
          "weather": "LIGHTNING"
        }
      })
})

