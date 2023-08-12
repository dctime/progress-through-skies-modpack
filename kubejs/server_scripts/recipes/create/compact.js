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

  event.custom(
    {
        "type": "create:compacting",
        "ingredients": [
          {
            "item": 'pneumaticcraft:printed_circuit_board',
          },
          {
            "item": 'minecraft:polished_deepslate',
          }
        ],
        "results": [
          {
            "item": 'mekanism:upgrade_energy'
          }
        ]
      })
})
