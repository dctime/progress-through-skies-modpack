ServerEvents.tags('item', event => {
    let glass_machine_list =
    [
        'cyclic:solidifier',
        'cyclic:melter',
        'minecraft:glass',
        'mekanism:ultimate_universal_cable',
        'mekanism:ultimate_mechanical_pipe',
        'mekanism:ultimate_pressurized_tube',
        'mekanism:ultimate_logistical_transporter',
        'mekanism:ultimate_thermodynamic_conductor',
        'mekanism:ultimate_fluid_tank',
        'mekanism:basic_universal_cable',
        'mekanism:basic_mechanical_pipe',
        'mekanism:basic_pressurized_tube',
        'mekanism:basic_logistical_transporter',
        'chipped:square_oak_glass',
        'minecraft:glass_bottle'
    ]
    for (let item of glass_machine_list)
    {
        event.add('forge:glass_machine_list', item)
    }
})

ServerEvents.recipes(event => {
    event.custom({
        "type": "chipped:glassblower",
        "tags": 
        [
            "forge:glass_machine_list"
        ]
    })
})