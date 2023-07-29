ServerEvents.recipes(event => {
    event.custom({
        "type":"createaddition:rolling",
        "input": {
              "item": 'thermal:cured_rubber'
        },
        "result": {
            "item": 'create:belt_connector',
            "count": 1
        }
    })

    event.custom({
        "type":"createaddition:rolling",
        "input": {
              "item": 'emendatusenigmatica:iron_ingot'
        },
        "result": {
            "item": 'emendatusenigmatica:iron_rod',
            "count": 1
        }
    })

    event.custom({
        "type":"createaddition:rolling",
        "input": {
              "item": 'emendatusenigmatica:copper_ingot'
        },
        "result": {
            "item": 'emendatusenigmatica:copper_rod',
            "count": 1
        }
    })
})


