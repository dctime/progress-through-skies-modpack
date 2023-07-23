ServerEvents.recipes(event => {
    function pressing(output, count, input)
    {
        event.custom({
            "type":"create:pressing",
            "ingredients": [{
                "item": input
            }],
            "results": [{
                "item": output,
                'count': count
            }]
        })
    }

    pressing('emendatusenigmatica:raw_copper_plate', 1, 'emendatusenigmatica:raw_copper')
    pressing('emendatusenigmatica:copper_plate', 1, 'emendatusenigmatica:copper_ingot')
    pressing('solapplepie:food_book', 1, 'minecraft:apple')
    
})

