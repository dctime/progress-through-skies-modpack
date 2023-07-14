ServerEvents.recipes(event => {
    event.custom({
        "type": "create:filling",
        "ingredients": [
          {
            "item": 'immersiveengineering:wire_copper'
          },
          {
            "fluid": "thermal:resin",
            "amount": 100
          }
        ],
        "results": [
          {
            "item": 'electrodynamics:wirehighlyinsulatedcopper'
          }
        ]
      })
})

