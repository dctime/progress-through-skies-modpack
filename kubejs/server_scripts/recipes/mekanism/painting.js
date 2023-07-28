ServerEvents.recipes(event => {
    event.custom({
    "type": "mekanism:painting",
    "chemicalInput": {
      "amount": 1000,
      "pigment": "mekanism:green"
    },
    "itemInput": {
      "ingredient": {
        'item': 'immersiveengineering:circuit_board'
      }
    },
    "output": {
      "item": 'pneumaticcraft:empty_pcb'
    }
  })
})

