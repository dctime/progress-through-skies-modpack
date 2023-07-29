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

    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": 'occultism:datura'
            },
            {
                "item": 'occultism:datura'
            },
            {
                "item": 'occultism:datura'
            },
            {
                "item": 'occultism:datura'
            }
        ],
        "sapling": {
            "item": "minecraft:oak_sapling"
        },
        "output": {
            "item": 'naturesaura:ancient_sapling'
        },
        "time": 250
    })

    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": 'minecraft:chiseled_stone_bricks'
            }
        ],
        "sapling": {
            "item": "minecraft:oak_sapling"
        },
        "output": {
            "item": 'naturesaura:nature_altar'
        },
        "time": 250
    })
})

