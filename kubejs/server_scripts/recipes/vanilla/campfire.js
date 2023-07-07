ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:campfire_cooking",
        "category": "food",
        "cookingtime": 10,
        "experience": 0.3,
        "ingredient": {
        "item": "minecraft:cobblestone"
        },
        "result": "additional_lights:fire_pit_l_cobblestone"
    });

    event.custom({
        "type": "minecraft:campfire_cooking",
        "category": "food",
        "cookingtime": 10,
        "experience": 0.3,
        "ingredient": {
        "item": 'exnihilosequentia:silkworm'
        },
        "result": 'exnihilosequentia:cooked_silkworm'
    });
    
})




