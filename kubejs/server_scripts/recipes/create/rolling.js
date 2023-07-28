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
})


