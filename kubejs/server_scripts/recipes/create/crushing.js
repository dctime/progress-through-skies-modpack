ServerEvents.recipes(event => {
    event.custom({
        "type": "create:crushing",
        "ingredients": [
          {
            "item": 'minecraft:wheat'
          }
        ],
        "results": [
            {
                "item": 'create:wheat_flour'
            },
          {
            "item": 'create:wheat_flour',
            "chance": 0.75
          }
        ],
        "processingTime": 30,
      })
})

