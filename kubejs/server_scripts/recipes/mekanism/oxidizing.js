let EME = (id) => 'emendatusenigmatica:' + id;

ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:oxidizing",
        "output": {
          "gas": EME('gaseous_carbon_dioxide'),
          "amount": 1000
        },
        "input": {
          "ingredient": {
            "item": "minecraft:oak_log"
          }
        }
      })
})

