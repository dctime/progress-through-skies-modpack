ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:crushing",
        "input": {
          "ingredient": {
            "tag": "forge:gravel"
          }
        },
        "output": {
          "item": "minecraft:sand"
        }
      });
})