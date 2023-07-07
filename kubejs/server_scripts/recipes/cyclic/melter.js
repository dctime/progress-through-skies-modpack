ServerEvents.recipes(event => {
    event.custom({
        "type": "cyclic:melter",
        "ingredients": [
            {
                "item": "progressthroughskies:bedrock_gravel"
            }
        ],
        "energy": {
            "rfpertick": 0,
            "ticks": 10
        },
        "result": {
            "fluid": "minecraft:lava",
            "count": 200
        }
    })
})