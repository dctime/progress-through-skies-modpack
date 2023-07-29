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

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": 'minecraft:dark_oak_log'
    },
    "transitionalItem": {
      "item": 'kubejs:incomplete_brass_casing'
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": 'kubejs:incomplete_brass_casing'
          },
          {
            "item": 'emendatusenigmatica:brass_plate'
          }
        ],
        "results": [
          {
            "item": 'kubejs:incomplete_brass_casing'
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": 'kubejs:incomplete_brass_casing'
          },
          {
            "fluid": 'immersiveengineering:creosote',
            "nbt": {},
            "amount": 100
          }
        ],
        "results": [
          {
            "item": 'kubejs:incomplete_brass_casing'
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": 'kubejs:incomplete_brass_casing'
          }
        ],
        "results": [
          {
            "item": 'kubejs:incomplete_brass_casing'
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": 'kubejs:incomplete_brass_casing'
          },
          {
            "fluid": "minecraft:water",
            "nbt": {},
            "amount": 1000
          }
        ],
        "results": [
          {
            "item": 'kubejs:incomplete_brass_casing'
          }
        ]
      },
      {
        "type": "create:cutting",
        "ingredients": [
          {
            "item": 'kubejs:incomplete_brass_casing'
          }
        ], 
      "results": [
        {
          "item": 'kubejs:incomplete_brass_casing',
          "count": 1
        }
      ],
      "processingTime": 50
    }
    ],
    "results": [
      {
        "item": 'create:brass_casing'
      }
    ],
    "loops": 6
  })

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": 'pneumaticcraft:unassembled_pcb'
    },
    "transitionalItem": {
      "item": 'kubejs:incomplete_printed_circuit_board'
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": 'kubejs:incomplete_printed_circuit_board'
          },
          {
            "item": 'pneumaticcraft:transistor'
          }
        ],
        "results": [
          {
            "item": 'kubejs:incomplete_printed_circuit_board'
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": 'kubejs:incomplete_printed_circuit_board'
          },
          {
            "item": 'pneumaticcraft:capacitor'
          }
        ],
        "results": [
          {
            "item": 'kubejs:incomplete_printed_circuit_board'
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": 'kubejs:incomplete_printed_circuit_board'
          },
          {
            "item": 'pneumaticcraft:transistor'
          }
        ],
        "results": [
          {
            "item": 'kubejs:incomplete_printed_circuit_board'
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": 'kubejs:incomplete_printed_circuit_board'
          },
          {
            "item": 'pneumaticcraft:capacitor'
          }
        ],
        "results": [
          {
            "item": 'kubejs:incomplete_printed_circuit_board'
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": 'kubejs:incomplete_brass_casing'
          },
          {
            "fluid": 'emendatusenigmatica:tin',
            "nbt": {},
            "amount": 10
          }
        ],
        "results": [
          {
            "item": 'kubejs:incomplete_brass_casing'
          }
        ]
      }
      
    ],
    "results": [
      {
        "item": 'pneumaticcraft:printed_circuit_board'
      }
    ],
    "loops": 1
  })

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": 'pneumaticcraft:unassembled_pcb'
    },
    "transitionalItem": {
      "item": 'kubejs:incomplete_printed_circuit_board'
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": 'kubejs:incomplete_printed_circuit_board'
          },
          {
            "item": 'pneumaticcraft:transistor'
          }
        ],
        "results": [
          {
            "item": 'kubejs:incomplete_printed_circuit_board'
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": 'kubejs:incomplete_brass_casing'
          }
        ],
        "results": [
          {
            "item": 'kubejs:incomplete_brass_casing'
          }
        ]
      },
      {
        "type": "create:cutting",
        "ingredients": [
          {
            "item": 'kubejs:incomplete_brass_casing'
          }
        ], 
      "results": [
        {
          "item": 'kubejs:incomplete_brass_casing',
          "count": 1
        }
      ],
      "processingTime": 50
    }
      
      
    ],
    "results": [
      {
        "item": 'pneumaticcraft:printed_circuit_board'
      }
    ],
    "loops": 1
  })
})

