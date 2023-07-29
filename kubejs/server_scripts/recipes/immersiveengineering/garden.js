ServerEvents.recipes(event => {
  function duplicate(plant_id, render_block)
  {
    event.custom({
      "type": "immersiveengineering:cloche",
      "input": {
        "item": plant_id
      },
      "render": {
        "type": "generic",
        "block": render_block
      },
      "results": [
        {
          "item": plant_id
        }
      ],
      "soil": {
        "item": "minecraft:dirt"
      },
      "time": 30
    })
  }
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

    event.custom({
      "type": "immersiveengineering:cloche",
      "input": {
        "item": 'minecraft:wheat_seeds'
      },
      "render": {
        "type": "crop",
        "block": "minecraft:wheat"
      },
      "results": [
        {
          "item": 'minecraft:wheat'
        }
      ],
      "soil": {
        "item": "minecraft:dirt"
      },
      "time": 30
    })

    var plants = 
    [
      'ferdinandsflowers:hawthorne',
      'ferdinandsflowers:iris',
      'ferdinandsflowers:larkspur',
      'ferdinandsflowers:parrot_flower',
      'ferdinandsflowers:pitcher_plant',
      'ferdinandsflowers:lewisia',
      'ferdinandsflowers:purple_calla_lily',
      'ferdinandsflowers:lantana'
    ];

    for (const plant of plants)
    {
      duplicate(plant, plant)
    }
})

