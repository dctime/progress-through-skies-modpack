ServerEvents.recipes(event => {
    event.custom({
        "type": "thermal:tree_extractor",
        "trunk": "minecraft:oak_log",
        "leaves": "minecraft:oak_leaves",
        "result": {
          "fluid": "thermal:resin",
          "amount": 1000
        }
      });
})