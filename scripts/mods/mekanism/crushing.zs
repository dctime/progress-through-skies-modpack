<recipetype:mekanism:crushing>.removeAll();

<recipetype:mekanism:crushing>.addJsonRecipe("crush_raw_copper_block",
    {
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
    }
);