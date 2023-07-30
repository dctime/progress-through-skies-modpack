ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:smelting",
        "ingredient": {
          "item": "minecraft:cobblestone"
        },
        "result": "minecraft:cobbled_deepslate",
        "experience": 0.35,
        "cookingtime": 10
    });
    event.custom({
        "type": "minecraft:smelting",
        "ingredient": {
          "item": "minecraft:oak_log"
        },
        "result": "minecraft:dark_oak_log",
        "experience": 0.35,
        "cookingtime": 10
      });
      event.custom({
        "type": "minecraft:smelting",
        "ingredient": {
          "item": "exnihilosequentia:unfired_crucible"
        },
        "result": "exnihilosequentia:fired_crucible",
        "experience": 0.35,
        "cookingtime": 10
      });

      event.custom({
        "type": "minecraft:smelting",
        "ingredient": {
          "item": 'minecraft:clay'
        },
        "result": 'minecraft:terracotta',
        "experience": 0.35,
        "cookingtime": 10
      });
    
})