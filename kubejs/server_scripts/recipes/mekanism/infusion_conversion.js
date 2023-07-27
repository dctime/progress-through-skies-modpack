let EME = (id) => 'emendatusenigmatica:' + id;

ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:infusion_conversion",
        "output": {
          "infuse_type": EME('carbon'),
          "amount": 10
        },
        "input": {
          "ingredient": {
            "item": 'emendatusenigmatica:carbon_dust'
          }
        }
      })
})

