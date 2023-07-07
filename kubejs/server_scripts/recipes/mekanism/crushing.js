ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:crushing",
        "input": 
        {
            "ingredient": 
            {
                "item": "emendatusenigmatica:raw_copper_block"
            }
        },
        "output": {
                "count": 8,
                "item": "emendatusenigmatica:raw_copper"
        }
    });
})