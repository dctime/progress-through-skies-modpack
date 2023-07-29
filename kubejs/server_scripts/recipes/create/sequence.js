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

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": 'progressthroughskies:bedrock_dust'
    },
    "transitionalItem": {
      "item": 'kubejs:incomplete_volatile_scrap'
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": 'kubejs:incomplete_volatile_scrap'
          },
          {
            "item": 'minecraft:charcoal'
          }
        ],
        "results": [
          {
            "item": 'kubejs:incomplete_volatile_scrap'
          }
        ]
      },
      {
        "type": "create:cutting",
        "ingredients": [
          {
            "item": 'kubejs:incomplete_volatile_scrap'
          }
        ],
        "results": [
            {
                "item": 'kubejs:incomplete_volatile_scrap',
                'count': 1
            }
        ],
        "processingTime": 30,
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": 'kubejs:incomplete_volatile_scrap'
          },
          {
            "fluid": 'emendatusenigmatica:sulfur',
            "nbt": {},
            "amount": 10
          }
        ],
        "results": [
          {
            "item": 'kubejs:incomplete_volatile_scrap'
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": 'kubejs:incomplete_volatile_scrap'
          }
        ],
        "results": [
          {
            "item": 'kubejs:incomplete_volatile_scrap',
            "count": 1
          }
        ]
      }
    ],
    "results": [
      {
        "item": 'scorchedguns:volatile_scrap'
      }
    ],
    "loops": 10
  })

  // TODO: Not Changed
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

