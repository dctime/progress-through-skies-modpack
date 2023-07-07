ServerEvents.recipes(event => {
    event.custom({
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
    })

    event.custom({
        "type": "immersiveengineering:blueprint",
        "category": "components",
        "inputs": 
        [
            {
                "item": "create:andesite_casing"
            },
            {
                "item": "ad_astra:engine_fan"
            }
        ],
        "result": 
        {
            "item": "create:encased_fan"
        }
    })
})