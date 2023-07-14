ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:combining",
        "mainInput": {
            "ingredient": {
                "item": 'minecraft:cobbled_deepslate'
            }
        },
        "extraInput": {
            "ingredient": {
                "item": 'immersiveengineering:wire_copper'
            }
        },
        "output": {
            "type": "forge:nbt",
            "item": 'dynamicelectricity:conductorbrush',
            "nbt": {Damage:0}
        }
      })
})

