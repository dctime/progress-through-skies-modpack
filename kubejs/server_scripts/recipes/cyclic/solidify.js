ServerEvents.recipes(event => {
    event.custom({
        "type": "cyclic:solidifier",
        "ingredients": [
            {
                "item": "progressthroughskies:sand_dust"
            },
            {
                "item": "progressthroughskies:gravel_dust"
            },
            {
                "item": "progressthroughskies:gravel_dust"
            }
        ],
        "energy": {
            "rfpertick": 0,
            "ticks": 30
        },
        "mix": {
            "fluid": "minecraft:lava",
            "count": 1000
        },
        "result": {
            "item": "minecraft:cobblestone",
            "count": 64
        }
    })

    event.custom({
        "type": "cyclic:solidifier",
        "ingredients": [
            {
                "item": "minecraft:string"
            },
            {
                "item": "minecraft:string"
            }
        ],
        "energy": {
            "rfpertick": 0,
            "ticks": 30
        },
        "mix": {
            "fluid": "cyclic:wax",
            "count": 1000
        },
        "result": {
            "item": "occultism:candle_white",
            "count": 4
        }
    })
})