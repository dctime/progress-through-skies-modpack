ServerEvents.recipes(event => {
    event.custom({
        "type": "create:filling",
        "ingredients": [
          {
            "item": 'minecraft:glass_bottle'
          },
          {
            "fluid": 'hexerei:blood_fluid',
            "amount": 100
          }
        ],
        "results": [
          {
            "item": 'irons_spellbooks:blood_vial'
          }
        ]
      })

      event.custom({
        "type": "create:filling",
        "ingredients": [
          {
            "item": 'immersiveengineering:wire_copper'
          },
          {
            "fluid": 'thermal:resin',
            "amount": 100
          }
        ],
        "results": [
          {
            "item":'electrodynamics:wirehighlyinsulatedcopper'
          }
        ]
      })

      event.custom({
        "type": "create:filling",
        "ingredients": [
          {
            "item": 'createaddition:cake_base'
          },
          {
            "fluid": 'emendatusenigmatica:sulfur',
            "amount": 1000
          }
        ],
        "results": [
          {
            "item":'create:blaze_cake'
          }
        ]
      })
})

