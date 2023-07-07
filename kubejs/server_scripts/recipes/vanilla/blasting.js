ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:blasting",
        "ingredient": {
          "item": "minecraft:sand"
        },
        "result": "minecraft:glass",
        "experience": 0.35,
        "cookingtime": 10
    });
    event.custom({
        "type": "minecraft:blasting",
        "ingredient": {
          "item": "minecraft:stone_pressure_plate"
        },
        "result": "tinyredstone:redstone_panel",
        "experience": 0.35,
        "cookingtime": 10
    });
    event.custom({
        "type": "minecraft:blasting",
        "ingredient": {
          "item": "minecraft:cobblestone"
        },
        "result": "minecraft:stone",
        "experience": 0.35,
        "cookingtime": 10
    });
})




