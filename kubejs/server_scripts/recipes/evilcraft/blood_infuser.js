ServerEvents.recipes(event => {
    event.custom({
    "type": "evilcraft:blood_infuser",
    "item": 'minecraft:soul_sand',
    "fluid": {
        "fluid": "evilcraft:blood",
        "amount": 1000
    },
    "result": {
        "item": 'minecraft:netherrack'
    },
    "duration": 10,
})
})

