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

    event.custom({
        "type": "immersiveengineering:blueprint",
        "category": "components",
        "inputs": 
        [
            {
                "item": 'createaddition:spool'
            },
            {
                "item": 'immersiveengineering:wire_copper'
            }
        ],
        "result": 
        {
            "item": 'electrodynamics:coil'
        }
    })

    event.custom({
        "type": "immersiveengineering:blueprint",
        "category": "components",
        "inputs": 
        [
            {
                "item": 'create:shaft'
            },
            {
                "item": 'electrodynamics:coil'
            },
            {
                "base_ingredient": {
                    "item": 'immersiveengineering:wire_copper'
                },
                'count': 5,
                
                
            },
            {
                "base_ingredient": {
                    "item": 'minecraft:stone_pressure_plate'
                },
                'count': 5,
                
            }
        ],
        "result": 
        {
            "item": 'createaddition:electric_motor'
        }
    })

    event.custom({
        "type": "immersiveengineering:blueprint",
        "category": "components",
        "inputs": 
        [
            {
                "base_ingredient": {
                    "item": 'electrodynamics:coil'
                },
                'count': 4,
                
                
            },
            {
                'item': 'tinyredstone:redstone_panel'
            }
        ],
        "result": 
        {
            "item": 'electrodynamics:downgradetransformer'
        }
    })
})