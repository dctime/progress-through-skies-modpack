// <recipetype:occultism:ritual>.removeAll();

<recipetype:occultism:ritual>.addJsonRecipe("craft_auto_clicker",
    {
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": 
        {
            "item": "minecraft:dispenser",
        },
        "pentacle_id": "occultism:summon_foliot",
        "duration": 30,
        "ritual_dummy": 
        {
            "item": "occultism:ritual_dummy/custom_ritual"
        },
        "ingredients": 
        [
            {
                "item": "minecraft:amethyst_shard"
            },
            {
                "item": "minecraft:amethyst_shard"
            },
            {
                "item": "minecraft:amethyst_shard"
            },
            {
                "item": "minecraft:amethyst_shard"
            }
        ],
        "result": 
        {
            "item": "clickmachine:auto_clicker"
        }
    }
    
);

<recipetype:occultism:ritual>.addJsonRecipe("soul_sand",
    {
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": 
        {
            "item": "minecraft:sand"
        },
        "pentacle_id": "occultism:craft_foliot",
        "duration": 60,
        "ritual_dummy": 
        {
            "item": "occultism:ritual_dummy/custom_ritual"
        },
        "ingredients": 
        [
            {
                "item": "tombstone:grave_dust"
            },
            {
                "item": "tombstone:grave_dust"
            },
            {
                "item": "tombstone:grave_dust"
            },
            {
                "item": "tombstone:grave_dust"
            }
        ],
        "result": 
        {
            "item": "minecraft:soul_sand"
        }
    }
    
);