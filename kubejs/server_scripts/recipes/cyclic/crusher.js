ServerEvents.recipes(event => {
    event.custom(

{
    "type": "cyclic:crusher",
    "input": {
      "item": 'minecraft:rotten_flesh'
    },
    "energy": {
      "ticks": 10,
      "rfpertick": 0
    },
    "result": {
      "item": 'mekanism:bio_fuel',
      "count": 0
    },
    "percent": 30,
    "bonus": {
      "item": 'mekanism:bio_fuel',
      "count": 1
    }
  

})
})