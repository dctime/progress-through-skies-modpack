ServerEvents.recipes(event => {
    event.custom({
        "type": "immersiveengineering:coke_oven",
        "creosote": 1000,
        "input": {
          "item": "minecraft:charcoal"
        },
        "result": {
          "item": 'immersiveengineering:coal_coke'
        },
        "time": 100
      })
})

