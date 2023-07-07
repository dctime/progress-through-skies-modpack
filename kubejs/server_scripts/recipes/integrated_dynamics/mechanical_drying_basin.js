ServerEvents.recipes(event => {
    event.custom({
        "type": "integrateddynamics:mechanical_drying_basin",
        "fluid": {
            "fluid": "progressthroughskies:dusted_water_fluid",
            "amount": 1000
        },
        "item": {
            "item": "minecraft:white_wool"
        },
        "duration": 20,
        "result": {
            "item": "minecraft:mud"
        }
    })
})