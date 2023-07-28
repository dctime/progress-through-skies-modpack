ServerEvents.recipes(event => {
    event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": 'minecraft:polished_deepslate'
    },
    "transitionalItem": {
      "item": 'kubejs:unprocessed_copper_casing'
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:unprocessed_copper_casing"
          },
          {
            "item": 'emendatusenigmatica:copper_plate'
          }
        ],
        "results": [
          {
            "item": "kubejs:unprocessed_copper_casing"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:unprocessed_copper_casing"
          },
          {
            "fluid": "thermal:resin",
            "nbt": {},
            "amount": 100
          }
        ],
        "results": [
          {
            "item": "kubejs:unprocessed_copper_casing"
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "kubejs:unprocessed_copper_casing"
          }
        ],
        "results": [
          {
            "item": "kubejs:unprocessed_copper_casing"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:unprocessed_copper_casing"
          },
          {
            "fluid": "minecraft:water",
            "nbt": {},
            "amount": 1000
          }
        ],
        "results": [
          {
            "item": "kubejs:unprocessed_copper_casing"
          }
        ]
      },
      {
        "type": "create:cutting",
        "ingredients": [
          {
            "item": "kubejs:unprocessed_copper_casing"
          }
        ], 
      "results": [
        {
          "item": "kubejs:unprocessed_copper_casing",
          "count": 1
        }
      ],
      "processingTime": 50
    }
    ],
    "results": [
      {
        "item": 'create:copper_casing'
      }
    ],
    "loops": 6
  })
})

