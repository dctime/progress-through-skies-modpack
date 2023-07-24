ServerEvents.recipes(event => {
    event.custom({
        "type": "create:sandpaper_polishing",
        "ingredients": 
        [
            {
                "item": "minecraft:cobbled_deepslate"
            }
        ],
        "results": 
        [
            {
                "item": "minecraft:polished_deepslate"
            }
        ]
    })
    event.custom({
        "type": "create:sandpaper_polishing",
        "ingredients": 
        [
            {
                "item": "minecraft:andesite"
            }
        ],
        "results": 
        [
            {
                "item": "minecraft:polished_andesite"
            }
        ]
    })
    event.custom({
        "type": "create:sandpaper_polishing",
        "ingredients": 
        [
            {
                "item": "chipped:cobbled_blackstone"
            }
        ],
        "results": 
        [
            {
                "item": "minecraft:polished_blackstone"
            }
        ]
    })
    event.custom({
        "type": "create:sandpaper_polishing",
        "ingredients": 
        [
            {
                "item": 'minecraft:stone'
            }
        ],
        "results": 
        [
            {
                "item": 'minecraft:smooth_stone'
            }
        ]
    })
})