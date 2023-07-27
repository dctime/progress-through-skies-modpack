ServerEvents.recipes(event => {
    event.custom({
        "type": "immersiveengineering:alloy",
        "input0": {
          'item': 'minecraft:oak_log'
        },
        "input1": {
            'item': 'minecraft:oak_log'
        },
        "result": {
          "base_ingredient": {
            "item": 'minecraft:charcoal'
          },
          "count": 1
        },
        "time": 10
      })
})

