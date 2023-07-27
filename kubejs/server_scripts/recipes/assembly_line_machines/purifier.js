ServerEvents.recipes(event => {
    event.custom({
        "type": "assemblylinemachines:purifier",
        "part_a":
        {
            "item": 'immersiveengineering:dust_coke'
        },
        "part_b":{
            "item": 'emendatusenigmatica:natural_acid_crystal'
        },
        "tobepurified":{
            'item': 'exnihilosequentia:string_mesh'
        },
        "output":{
            "item": 'emendatusenigmatica:carbon_dust'
        },
        "time": 10
    })
})


