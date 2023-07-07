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
})