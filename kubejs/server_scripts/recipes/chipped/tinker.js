ServerEvents.tags('item', event => {
    let wrench_list = [
        "minecraft:stick",
        "mekanism:configurator",
        "tinyredstone:redstone_wrench"
    ]

    let tiny_redstone_list =
    [
        'tinygates:tiny_and_gate',
        'tinygates:tiny_or_gate',
        'tinygates:tiny_xor_gate',
        'tinygates:tiny_not_gate',
        'tinygates:tiny_clock',
        'tinygates:tiny_counter',
        'tinygates:tiny_rs_latch',
        'tinygates:tiny_edge_detector',
        'tinygates:tiny_t_flip_flop'
    ]

    let wool_function_block_list =
    [
        'cyclic:soundproofing',
        'minecraft:white_wool',
        'pneumaticcraft:thermal_lagging',
        'create:white_sail'
    ]

    let motor_list =
    [
        'createaddition:electric_motor',
        'createaddition:alternator',
        'dynamicelectricity:motorachv',
        'dynamicelectricity:motordchv',
        'dynamicelectricity:motordclv',
        'dynamicelectricity:motoraclv',
        'dynamicelectricity:motoracmv',
        'dynamicelectricity:motordcmv'
    ]

    let transformer_list =
    [
        'electrodynamics:downgradetransformer',
        'electrodynamics:upgradetransformer'
    ]

    let motor_complex_list =
    [
        'pneumaticcraft:flux_compressor',
        'electrodynamics:electrolyticseparator',
        'electrodynamics:fermentationplant',
        'electrodynamics:mineralwasher',
        'electrodynamics:mineralgrindertriple',
        'electrodynamics:chemicalcrystallizer',
        'electrodynamics:lathe',
        'electrodynamics:mineralcrushertriple',
        'nuclearscience:chemicalextractor',
        'assemblylinemachines:mkii_purifier',
        'assemblylinemachines:mkii_alloy_smelter'
    ]

    let goggles =
    [
        'create:goggles',
        'botania:cosmetic_engineer_goggles',
        'naturesaura:eye',
    ]

    let copper_plate_upgrades =
    [
        'assemblylinemachines:purifier_upgrade_enhanced',
        'emendatusenigmatica:copper_plate',
        'storagedrawers:drawer_key',
        'storagedrawers:quantify_key',
        'storagedrawers:shroud_key'
    ]

    let computer_block =
    [
        'hostilenetworks:sim_chamber',
        'hostilenetworks:loot_fabricator'
    ]

    let mekanism_upgrade_list =
    [
        'mekanism:upgrade_speed',
        'mekanism:upgrade_energy',
        'mekanism:upgrade_gas',
        'mekanism:upgrade_anchor',
        'mekanism:upgrade_muffling',
        'pneumaticcraft:volume_upgrade',
        'pneumaticcraft:dispenser_upgrade',
        'pneumaticcraft:speed_upgrade',
        'pneumaticcraft:security_upgrade'
    ]

    let block_meters = 
    [
        'energymeter:meter',
        'create:stressometer',
        'create:speedometer',
        'electrodynamics:multimeterblock'
    ]
    
    for (let item of wrench_list)
    {
        event.add('forge:wrench_list', item)
    }

    for (let item of tiny_redstone_list)
    {
        event.add('forge:tiny_redstone_list', item)
    }
    event.add('forge:tiny_redstone_list', '#tinyredstone:tiny_component')

    for (let item of wool_function_block_list)
    {
        event.add('forge:wool_function_block_list', item)
    }

    for (let item of motor_list)
    {
        event.add('forge:motor_list', item)
    }

    for (let item of transformer_list)
    {
        event.add('forge:transformer_list', item)
    }

    for (let item of motor_complex_list)
    {
        event.add('forge:motor_complex_list', item)
    }

    for (let item of goggles)
    {
        event.add('forge:goggles', item)
    }

    for (let item of copper_plate_upgrades)
    {
        event.add('forge:copper_plate_upgrades', item)
    }

    for (let item of computer_block)
    {
        event.add('forge:computer_block', item)
    }

    for (let item of mekanism_upgrade_list)
    {
        event.add('forge:mekanism_upgrade_list', item)
    }

    for (let item of block_meters)
    {
        event.add('forge:block_meters', item)
    }
    
})

ServerEvents.recipes(event => {
    event.custom({
        "type": "chipped:tinkering_table",
        "tags": 
        [
            "forge:wrench_list",
            "forge:tiny_redstone_list",
            "forge:wool_function_block_list",
            "forge:motor_list",
            "forge:transformer_list",
            "forge:motor_complex_list",
            'forge:goggles',
            'forge:copper_plate_upgrades',
            'forge:computer_block',
            'forge:mekanism_upgrade_list',
            'forge:block_meters'
        ]    
    })
})