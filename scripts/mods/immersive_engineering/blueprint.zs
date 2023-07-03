import mods.immersiveengineering.Blueprint;

<recipetype:immersiveengineering:blueprint>.removeAll();
<recipetype:immersiveengineering:blueprint>.addJsonRecipe("craft_mechanical_mixer",
    {
        "type": "immersiveengineering:blueprint",
        "category": "components",
        "inputs": 
        [
            {
                "item": "create:cogwheel"
            },
            {
                "item": "create:piston_extension_pole"
            },
            {
                "item": "create:whisk"
            },
            {
                "item": "create:andesite_casing"
            }
        ],
        "result": 
        {
            "item": "create:mechanical_mixer"
        }
    }
);