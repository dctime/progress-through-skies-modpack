ServerEvents.recipes(event => {
    event.custom({
        "type": "immersiveengineering:coke_oven",
        "creosote": 10,
        "input": {
          "item": "minecraft:charcoal"
        },
        "result": {
          "item": 'immersiveengineering:coal_coke'
        },
        "time": 100
      })
})

