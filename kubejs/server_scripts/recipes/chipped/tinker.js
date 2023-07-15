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
        'electrodynamics:chemicalcrystallizer'
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
            "forge:motor_complex_list"
        ]    
    })
})