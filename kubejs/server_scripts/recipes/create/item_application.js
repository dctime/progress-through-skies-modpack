ServerEvents.recipes(event => {
    event.custom({
        "type": "create:item_application",
        "ingredients": 
        [
            {
                "item": "minecraft:oak_log"
            },
            {
                "item": "create:andesite_scaffolding"
            }
        ],
        "results": 
        [
            {
                "item": "create:andesite_casing"
            }
        ]
    })

    event.custom({
        "type": "create:item_application",
        "ingredients": 
        [
            {
                "item": "progressthroughskies:bedrock_gravel"
            },
            {
                "item": "minecraft:snowball"
            }
        ],
        "results": 
        [
            {
                'item':'minecraft:dirt'
            }
        ]
    })

    event.custom({
        "type": "create:item_application",
        "ingredients": 
        [
            {
                "item": 'minecraft:dirt'
            },
            {
                "item": "minecraft:snowball"
            }
        ],
        "results": 
        [
            {
                'item':'minecraft:grass_block'
            }
        ]
    })

    event.custom({
        "type": "create:item_application",
        "ingredients": 
        [
            {
                "item": 'clickmachine:auto_clicker'
            },
            {
                "item": 'create:andesite_casing'
            }
        ],
        "results": 
        [
            {
                'item':'create:deployer'
            }
        ]
    })

    event.custom({
        "type": "create:item_application",
        "ingredients": 
        [
            {
                "item": 'minecraft:stonecutter'
            },
            {
                "item": 'create:andesite_casing'
            }
        ],
        "results": 
        [
            {
                'item':'create:mechanical_saw'
            }
        ]
    })

    event.custom({
        "type": "create:item_application",
        "ingredients": 
        [
            {
                "item": 'minecraft:stone_bricks'
            },
            {
                "item": 'naturesaura:gold_powder'
            }
        ],
        "results": 
        [
            {
                'item':'naturesaura:gold_brick'
            }
        ]
    })

    event.custom({
        "type": "create:item_application",
        "ingredients": 
        [
            {
                "item": 'energymeter:meter'
            },
            {
                "item": 'pneumaticcraft:printed_circuit_board'
            }
        ],
        "results": 
        [
            {
                'item':'hostilenetworks:sim_chamber'
            }
        ]
    })
})