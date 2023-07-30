ServerEvents.tags('item', event => {
    event.add('forge:wooden_storage_block', 'minecraft:chest')
    event.add('forge:wooden_storage_block', '#storagedrawers:drawers')

    let storage_upgrade =
    [
        'storagedrawers:void_upgrade',
        'storagedrawers:upgrade_template',
        'storagedrawers:emerald_storage_upgrade',
        'storagedrawers:redstone_upgrade',
        'storagedrawers:conversion_upgrade',
        'storagedrawers:min_redstone_upgrade',
        'storagedrawers:max_redstone_upgrade',
        'storagedrawers:fill_level_upgrade',
        'storagedrawers:illumination_upgrade',
        'minecraft:oak_slab'
    ]

    let log_machine =
    [
        'thermal:device_tree_extractor',
        'minecraft:oak_log',
        'minecraft:oak_planks'
    ]

    let livingwood_machine =
    [
        'botania:gaia_spreader',
        'naturesaura:flower_generator'
    ]

    let cog_wheels =
    [
        'create:shaft',
        'create:cogwheel',
        'create:large_cogwheel'
    ]

    let andesite_casing_machine =
    [
        'create:andesite_casing',
        'create:encased_chain_drive',
        'create:gearshift',
        'create:clutch',
        'create:vertical_gearbox',
        'create:gearbox',
        'create:adjustable_chain_gearshift',
        'create:large_water_wheel',
        'create:analog_lever',
        'create:linear_chassis',
        'create:radial_chassis',
        'create:andesite_funnel',
        'create:andesite_tunnel',
        'create:andesite_door',
        'createaddition:rolling_mill',
        'create:crushing_wheel'

    ]

    let brass_casing_machine =
    [
        'create:brass_casing',
        'create:brass_funnel',
        'create:brass_tunnel',
        'create:brass_scaffolding',
        'create:brass_door',
        'create:content_observer',
        'create:smart_chute',
        'create:elevator_pulley',
        'create:flywheel',
        'create:mechanical_arm',
        'create:rotation_speed_controller',
        'create:sequenced_gearshift',
        'create:mechanical_crafter',
        'create:railway_casing',
        'create:controls',
        'create:stockpile_switch',
        'create:display_link',
        'create:redstone_link',
        'create:placard',
        'create:peculiar_bell',
        'create:train_trapdoor'
    ]

    let copper_casing_machine =
    [
        'create:copper_casing',
        'create:steam_engine',
        'create:item_drain',
        'create:fluid_tank',
        'create:steam_whistle',
        'mekanism:thermal_evaporation_controller',
        'mekanism:thermal_evaporation_valve',
        'mekanism:thermal_evaporation_block'
    ]
    
    for (let item of storage_upgrade)
    {
        event.add('forge:storage_upgrade', item)
    }

    for (let item of log_machine)
    {
        event.add('forge:log_machine', item)
    }

    for (let item of cog_wheels)
    {
        event.add('forge:cog_wheels', item)
    }

    for (let item of andesite_casing_machine)
    {
        event.add('forge:andesite_casing_machine', item)
    }

    for (let item of brass_casing_machine)
    {
        event.add('forge:brass_casing_machine', item)
    }

    for (let item of copper_casing_machine)
    {
        event.add('forge:copper_casing_machine', item)
    }

    for (let item of livingwood_machine)
    {
        event.add('forge:livingwood_machine', item)
    }
})

ServerEvents.recipes(event => {
    event.custom({
        "type": "chipped:carpenters_table",
        "tags": 
        [
            "forge:wooden_storage_block",
            "forge:storage_upgrade",
            "forge:log_machine",
            "forge:cog_wheels",
            "forge:andesite_casing_machine",
            'forge:brass_casing_machine',
            'forge:copper_casing_machine',
            'forge:livingwood_machine'
        ]
    })
})