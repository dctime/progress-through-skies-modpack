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
})

