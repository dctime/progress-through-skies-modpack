ServerEvents.recipes(event => {
    event.custom({
        "type": "extractinator:extractinating",
        "input": {
          "item": "minecraft:rotten_flesh"
        },
        "drops": [
          {
            "drop": "mekanism:bio_fuel",
            "drop_chance": 0.60,
            "min_drop_count": 1,
            "max_drop_count": 1
          }
        ]
      })
})