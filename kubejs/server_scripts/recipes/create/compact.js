ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "create:compacting",
            "ingredients": [
              {
                "item": 'minecraft:oak_leaves',
              },
              {
                "item": 'minecraft:oak_leaves',
              },
              {
                "item": 'minecraft:oak_leaves',
              },
              {
                "item": 'minecraft:oak_leaves',
              }
            ],
            "results": [
              {
                "item": 'botania:cell_block'
              }
            ]
          })
})
