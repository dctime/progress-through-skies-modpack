ServerEvents.recipes(event => {
    event.custom({
        "type": "assemblylinemachines:refining",
        "attachment": "assemblylinemachines:refinery_attachment_separation",
        "input_fluid":{
            "fluid": 'emendatusenigmatica:liquid_air',
            "amount": 1000
        },
        "proc_time": 12,
        "output_fluid_a":{
            "fluid": 'emendatusenigmatica:nitrogen',
            "amount": 800
        },
        "output_fluid_b":{
            "fluid": 'emendatusenigmatica:liquid_oxygen',
            "amount": 200
        }
    })

    event.custom({
        "type": "assemblylinemachines:refining",
        "attachment": "assemblylinemachines:refinery_attachment_separation",
        "input_fluid":{
            "fluid": 'evilcraft:blood',
            "amount": 1000
        },
        "proc_time": 12,
        "output_fluid_a":{
            "fluid": 'emendatusenigmatica:bio_waste',
            "amount": 800
        },
        "output_fluid_b":{
            "fluid": 'emendatusenigmatica:iron',
            "amount": 200
        }
    })
})

