ServerEvents.recipes(event => {
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "item": "create:limestone"
        },
        "result": {
          "item": "occultism:chalk_white_impure"
        }
      });

    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "item": "occultism:chalk_white_impure"
        },
        "result": {
          "item": "occultism:chalk_white"
        }
      });

    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "item": "minecraft:stone_pressure_plate"
        },
        "result": {
          "item": "occultism:sacrificial_bowl"
        }
      });

    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "item": "occultism:sacrificial_bowl"
        },
        "result": {
          "item": "occultism:golden_sacrificial_bowl"
        }
      });

    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "item": "occultism:golden_sacrificial_bowl"
        },
        "result": {
          "item": "occultism:sacrificial_bowl"
        }
      });
    

    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "item": "minecraft:crafting_table"
        },
        "result": {
          "item": "cyclic:packager"
        }
      });

    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "item": "minecraft:stick"
        },
        "result": Item.of('morphtool:tool', '{"morphtool:data":{ad_astra:{Count:1b,id:"ad_astra:wrench"},assemblylinemachines:{Count:1b,id:"assemblylinemachines:wrench_o_matic",tag:{}},biggerreactors:{Count:1b,id:"biggerreactors:wrench"},botania:{Count:1b,id:"botania:twig_wand",tag:{color1:0,color2:0}},chiselsandbits:{Count:1b,id:"chiselsandbits:wrench"},create:{Count:1b,id:"create:wrench",tag:{display:{Name:\'{"translate":"morphtool.sudo_name","with":[{"color":"green","translate":"item.create.wrench"}]}\'},"morphtool:displayName":{text:\'{"translate":"item.create.wrench"}\'},"morphtool:is_morphing":1b}},cyclic:{Count:1b,id:"cyclic:cable_wrench"},electrodynamics:{Count:1b,id:"electrodynamics:wrench"},immersiveengineering:{Count:1b,id:"immersiveengineering:hammer",tag:{Damage:0,display:{Name:\'{"translate":"morphtool.sudo_name","with":[{"color":"green","translate":"item.immersiveengineering.hammer"}]}\'},"morphtool:displayName":{text:\'{"translate":"item.immersiveengineering.hammer"}\'},"morphtool:is_morphing":1b}},integratedtunnels:{Count:1b,id:"integrateddynamics:wrench",tag:{display:{Name:\'{"translate":"morphtool.sudo_name","with":[{"color":"green","translate":"item.integrateddynamics.wrench"}]}\'},"morphtool:displayName":{text:\'{"translate":"item.integrateddynamics.wrench"}\'},"morphtool:is_morphing":1b}},mekanism:{Count:1b,id:"mekanism:configurator",tag:{display:{Name:\'{"translate":"morphtool.sudo_name","with":[{"color":"green","translate":"item.mekanism.configurator"}]}\'},"morphtool:displayName":{text:\'{"color":"#30FFF9","translate":"item.mekanism.configurator"}\'},"morphtool:is_morphing":1b}},pneumaticcraft:{Count:1b,id:"pneumaticcraft:pneumatic_wrench",tag:{display:{Name:\'{"translate":"morphtool.sudo_name","with":[{"color":"green","translate":"item.pneumaticcraft.pneumatic_wrench"}]}\'},"morphtool:displayName":{text:\'{"translate":"item.pneumaticcraft.pneumatic_wrench"}\'},"morphtool:is_morphing":1b}},powah:{Count:1b,id:"powah:wrench",tag:{PowahWrenchNBT:{}}},thermal:{Count:1b,id:"thermal:wrench"},tinyredstone:{Count:1b,id:"tinyredstone:redstone_wrench"}},"morphtool:is_morphing":1b}')
        // TODO: ALWAYS CHECK THIS WHEN EXPORT
    });
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "item": "progressthroughskies:bedrock_dust"
        },
        "result": {
          "item": "minecraft:redstone"
        }
      });
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "item": "minecraft:stone"
        },
        "result": {
          "item": "minecraft:andesite"
        }
      });
      event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "item": "occultism:chalk_gold_impure"
        },
        "result": {
          "item": "occultism:chalk_gold"
        }
      });
      event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "item": "minecraft:amethyst_shard"
        },
        "result": {
          "item": "occultism:spirit_attuned_crystal"
        }
      });
      event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "item": "minecraft:paper"
        },
        "result": {
                  "type": "forge:nbt",
                  "item": "immersiveengineering:blueprint",
                  "nbt": {blueprint: "components"}
              }
      });
      event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "item": "exnihilosequentia:cooked_silkworm"
        },
        "result": {
                  "type": "forge:nbt",
                  "item": "gateways:gate_pearl",
                  "nbt": {gateway: "gateways:zombie_gate_small"}
              }
      });
      event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "item": 'minecraft:polished_deepslate'
        },
        "result": {
          "item": 'energymeter:meter'
        }
      });
      event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "item": 'minecraft:glass_pane'
        },
        "result": {
          "item": 'create:goggles'
        }
      });
      event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "item": 'emendatusenigmatica:gold_dirty_dust'
        },
        "result": {
          "item": 'naturesaura:gold_powder'
        }
      });
      event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
          "item": 'botania:livingwood_log'
        },
        "result": {
          "item": 'botania:gaia_spreader'
        }
      });
})