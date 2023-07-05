<recipetype:create:mixing>.removeAll();

<recipetype:create:mixing>.addJsonRecipe("dusted_water", 
    {
        "type": "create:mixing",
        "ingredients": 
        [
            {
                "type": "forge:nbt",
                "item": "chiselsandbits:block_bit",
                "nbt": {block_information: {state:'{"Name":"minecraft:cobblestone"}'}}
            },
            {
                "fluid": "minecraft:water",
                "amount": 1
            }
        ],
        "results": 
        [
            {
                "fluid": "progressthroughskies:dusted_water_fluid",
                "amount": 1
            }
        ]
    }
);

