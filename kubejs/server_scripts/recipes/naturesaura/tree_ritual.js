ServerEvents.recipes(event => {
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": 'botania:livingrock'
            },
            {
                "item": 'minecraft:oak_leaves'
            },
            {
                "item": "minecraft:apple"
            },
            {
                "item": 'exnihilosequentia:silkworm'
            }
        ],
        "sapling": {
            "item": "minecraft:oak_sapling"
        },
        "output": {
            "item": 'botania:rune_spring'   
        },
        "time": 250
    })
})

