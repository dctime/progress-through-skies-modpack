ItemEvents.modification(event => {
    event.modify('minecraft:apple', item => {
      item.foodProperties = food => {
          food.hunger(4)
          food.saturation(0)
          food.fastToEat(true)
      }
    })
  })