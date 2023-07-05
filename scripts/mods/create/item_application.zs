<recipetype:create:item_application>.removeAll();

<recipetype:create:item_application>.addJsonRecipe("andesite_casing", 
    {
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
    }
);