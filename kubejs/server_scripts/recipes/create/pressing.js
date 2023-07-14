ServerEvents.recipes(event => {
    event.custom({
        "type":"create:pressing",
        "ingredients": [{
              "item": 'emendatusenigmatica:raw_copper'
        }],
        "results": [{
            "item": 'emendatusenigmatica:raw_copper_plate',
            'count': 1
        }]
    })
})

