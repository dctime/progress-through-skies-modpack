ServerEvents.recipes(event => {
    event.custom({
        "type": "immersiveengineering:cloche",
        "input": {
          "item": "immersiveengineering:seed"
        },
        "render": {
          "type": "hemp",
          "block": "immersiveengineering:hemp"
        },
        "results": [
          {
            "item": "immersiveengineering:hemp_fiber"
          }
        ],
        "soil": {
          "item": "minecraft:dirt"
        },
        "time": 30
      })
})

