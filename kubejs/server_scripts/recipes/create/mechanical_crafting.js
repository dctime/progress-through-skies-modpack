ServerEvents.recipes(event => {
    event.custom({
    "type": "create:mechanical_crafting",
    "pattern": [
      "NPN",
      "R R"
    ],
    "key": {
      "N": {
        "item": 'emendatusenigmatica:n_type_silicon_ingot'
      },
      "P": {
        "item": 'emendatusenigmatica:p_type_silicon_ingot'
      },
      "R": {
        "item": 'emendatusenigmatica:copper_rod'
      }
    },
    "result": {
      "item": 'pneumaticcraft:transistor'
    },
    "acceptMirrored": true
  })

  event.custom({
    "type": "create:mechanical_crafting",
    "pattern": [
      "PNP",
      "R R"
    ],
    "key": {
      "N": {
        "item": 'emendatusenigmatica:n_type_silicon_ingot'
      },
      "P": {
        "item": 'emendatusenigmatica:p_type_silicon_ingot'
      },
      "R": {
        "item": 'emendatusenigmatica:copper_rod'
      }
    },
    "result": {
      "item": 'pneumaticcraft:transistor'
    },
    "acceptMirrored": true
  })

  event.custom({
    "type": "create:mechanical_crafting",
    "pattern": [
      "PCP",
      "R R"
    ],
    "key": {
      "P": {
        "item": 'emendatusenigmatica:copper_plate'
      },
      "C": {
        "item": 'minecraft:clay_ball'
      },
      "R": {
        "item": 'emendatusenigmatica:copper_rod'
      }
    },
    "result": {
      "item": 'pneumaticcraft:capacitor'
    },
    "acceptMirrored": true
  })
})

