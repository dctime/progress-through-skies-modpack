ServerEvents.tags('item', event => {
    let polished_andesite_machine =
    [
        'minecraft:polished_andesite',
        'cyclic:collector',
        'cyclic:breaker',
        'cyclic:placer',
        'extractinator:extractinator'
    ]

    let polished_deepslate_machine =
    [
        'minecraft:polished_deepslate',
        'mekanism:logistical_sorter',
        'mekanismgenerators:bio_generator',
        'mekanism:ultimate_crushing_factory'
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
        'ad_astra:engine_fan'
    ]

    let cobblestone_light_source =
    [
        'additional_lights:standing_torch_l_cobblestone',
        'additional_lights:fire_pit_l_cobblestone',
        'additional_lights:fire_pit_s_cobblestone',
        'additional_lights:standing_torch_s_cobblestone',
        'additional_lights:al_lamp_cobblestone'
    ]

    for (let item of polished_deepslate_machine)
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
        event.add('forge:cobblestone_machine', item)
    }

    for (let item of cobblestone_light_source)
    {
        event.add('forge:cobblestone_light_source', item)
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
            "forge:cobblestone_light_source"
        ]
    })
})