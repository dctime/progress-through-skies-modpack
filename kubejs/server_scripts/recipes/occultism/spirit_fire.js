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
    
    for (let wood_bucket_damage = 0; wood_bucket_damage < 25; wood_bucket_damage++)
    {
        event.custom({
            "type": "occultism:spirit_fire",
            "ingredient": 
            [
                {
                    "type": "forge:nbt",
                    "item": "woodenbucket:wooden_bucket",
                    "nbt": {"Damage":wood_bucket_damage, "Fluid":{"FluidName": "thermal:resin","Amount": 1000}}
                }
            ],
            "result":
            {
                "type": "forge:nbt",
                "item": "woodenbucket:wooden_bucket",
                "nbt": {"Damage":wood_bucket_damage, "Fluid":{"Damage":0, "FluidName": "cyclic:wax","Amount": 1000}}
            }
        });
    }

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
        "result": {
          "item": "morphtool:tool"
        }
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
    
})