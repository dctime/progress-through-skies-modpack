let EME = (id) => 'emendatusenigmatica:' + id;

ServerEvents.recipes(event => {
    event.custom({
    "type": "mekanism:pigment_extracting",
    "input": {
      "ingredient": [
        {
          "item": 'minecraft:oak_leaves'
        }
      ]
    },
    "output": {
      "amount": 1000,
      "pigment": "mekanism:green"
    }
  })
})

