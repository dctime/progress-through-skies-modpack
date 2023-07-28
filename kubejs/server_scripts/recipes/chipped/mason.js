ServerEvents.tags('item', event => {
    let polished_andesite_machine =
    [
        'minecraft:polished_andesite',
        'cyclic:collector',
        'cyclic:breaker',
        'cyclic:placer',
        'cyclic:crusher'

    ]

    let livingrock_machine =
    [
        'botania:livingrock',
        'botania:diluted_pool',
        'botania:mana_pool',
        'botania:apothecary_livingrock'
    ]

    let polished_deepslate_machine =
    [
        'minecraft:polished_deepslate',
        'mekanism:logistical_sorter',
        'mekanismgenerators:bio_generator',
        'mekanism:ultimate_crushing_factory',
        'mekanism:ultimate_combining_factory',
        'mekanism:rotary_condensentrator',
        'mekanism:chemical_infuser',
        'mekanism:chemical_oxidizer',
        'thermal:device_water_gen',
        'mekanism:electrolytic_separator',
        'irons_spellbooks:scroll_forge'
    ]

    let cobblestone_machine =
    [
        'minecraft:cobblestone',
        'trashcans:item_trash_can',
        'trashcans:liquid_trash_can',
        'trashcans:energy_trash_can',
        'trashcans:ultimate_trash_can'
    ]

    let stone_plate_machine =
    [
        'minecraft:stone_pressure_plate',
        'ad_astra:engine_fan',
        'pneumaticcraft:charging_station',
        'pneumaticcraft:advanced_pressure_tube',
        'hexerei:blood_sigil'
    ]

    let cobblestone_light_source =
    [
        'additional_lights:standing_torch_l_cobblestone',
        'additional_lights:fire_pit_l_cobblestone',
        'additional_lights:fire_pit_s_cobblestone',
        'additional_lights:standing_torch_s_cobblestone',
        'additional_lights:al_lamp_cobblestone'
    ]

    let deepslate_glass_machine =
    [
        'pneumaticcraft:fluid_mixer',
        'pneumaticcraft:thermopneumatic_processing_plant',
        'pneumaticcraft:refinery',
        'pneumaticcraft:refinery_output'
    ]

    let storage_drawer =
    [
        'storagedrawers:controller',
        'storagedrawers:compacting_drawers_3',
        'storagedrawers:controller_slave'
    ]

    let copper_machine =
    [
        'create:copper_casing',
        'create:steam_engine',
        'create:item_drain',
        'create:fluid_tank',
        'create:steam_whistle'
    ]

    let basin_machine =
    [
        'create:basin',
        'create:chute'
    ]

    for (let item of polished_andesite_machine)
    {
        event.add('forge:polished_andesite_machine', item)
    }

    for (let item of polished_deepslate_machine)
    {
        event.add('forge:polished_deepslate_machine', item)
    }

    for (let item of cobblestone_machine)
    {
        event.add('forge:cobblestone_machine', item)
    }

    for (let item of stone_plate_machine)
    {
        event.add('forge:stone_plate_machine', item)
    }

    for (let item of cobblestone_light_source)
    {
        event.add('forge:cobblestone_light_source', item)
    }

    for (let item of deepslate_glass_machine)
    {
        event.add('forge:deepslate_glass_machine', item)
    }

    for (let item of livingrock_machine)
    {
        event.add('forge:livingrock_machine', item)
    }

    for (let item of storage_drawer)
    {
        event.add('forge:storage_drawer', item)
    }

    for (let item of copper_machine)
    {
        event.add('forge:copper_machine', item)
    }

    for (let item of basin_machine)
    {
        event.add('forge:basin_machine', item)
    }
})

ServerEvents.recipes(event => {
    event.custom({
        "type": "chipped:mason_table",
        "tags": 
        [
            "forge:polished_andesite_machine",
            "forge:polished_deepslate_machine",
            "forge:cobblestone_machine",
            "forge:stone_plate_machine",
            "forge:cobblestone_light_source",
            "forge:deepslate_glass_machine",
            'forge:livingrock_machine',
            'forge:storage_drawer',
            'forge:copper_machine',
            'forge:basin_machine'
        ]
    })
})