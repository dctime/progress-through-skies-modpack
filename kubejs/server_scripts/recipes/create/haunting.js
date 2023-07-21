ServerEvents.recipes(event => {
    event.custom({
        "type": "create:haunting",
        "ingredients": [
            {
                "item": "exnihilosequentia:stone_barrel"
            }
        ],
        "results": [
            {
                "item": "integrateddynamics:mechanical_drying_basin"
            }
        ]
    })

    event.custom({
        "type": "create:haunting",
        "ingredients": [
            {
                "item": 'create:limestone'
            }
        ],
        "results": [
            {
                "item": 'botania:livingrock'
            }
        ]
    })
})