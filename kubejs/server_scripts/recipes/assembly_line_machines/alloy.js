ServerEvents.recipes(event => {
    event.custom({
        "type": "assemblylinemachines:alloying",
        "part_a":{
            "item": 'emendatusenigmatica:copper_ingot'
        },
        "part_b":{
            "item": 'emendatusenigmatica:zinc_ingot'
        },
        "output":{
            "item": 'emendatusenigmatica:brass_ingot'
        },
        "time": 10
    })
})

