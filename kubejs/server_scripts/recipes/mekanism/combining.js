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

      event.custom({
        "type": "mekanism:combining",
        "mainInput": {
            "ingredient": {
                "item": 'minecraft:smooth_stone'
            }
        },
        "extraInput": {
            "ingredient": {
                "item": 'minecraft:redstone'
            }
        },
        "output": {
            "item": 'storagedrawers:compacting_drawers_3'
        }
      })

      event.custom({
        "type": "mekanism:combining",
        "mainInput": {
            "ingredient": {
                "item": 'minecraft:glass_pane'
            }
        },
        "extraInput": {
            "ingredient": {
                "item": 'immersiveengineering:hemp_fiber'
            }
        },
        "output": {
            "item": 'minecraft:light_gray_stained_glass_pane'
        }
      })

      event.custom({
        "type": "mekanism:combining",
        "mainInput": {
            "ingredient": {
                "item": 'emendatusenigmatica:copper_plate'
            }
        },
        "extraInput": {
            "ingredient": {
                "item": 'minecraft:light_gray_stained_glass_pane'
            }
        },
        "output": {
            "item": 'immersiveengineering:circuit_board'
        }
      })

      event.custom({
        "type": "mekanism:combining",
        "mainInput": {
            "ingredient": {
                "item": 'minecraft:iron_bars'
            }
        },
        "extraInput": {
            "ingredient": {
                "item": 'minecraft:netherrack'
            }
        },
        "output": {
            "item": 'create:empty_blaze_burner'
        }
      })

      event.custom({
        "type": "mekanism:combining",
        "mainInput": {
            "ingredient": {
                "item": 'emendatusenigmatica:sulfur_dust'
            }
        },
        "extraInput": {
            "ingredient": {
                "item": 'exnihilosequentia:silkworm'
            }
        },
        "output": {
            "item": 'minecraft:blaze_powder'
        }
      })

})

