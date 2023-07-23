ServerEvents.recipes(event => {
    event.custom({
        "type": "botania:petal_apothecary",
        "ingredients": [
            {
                "item": 'chipped:square_oak_glass'
            },
            {
                "item": 'tinygates:tiny_clock'
            }
        ],
        "output": {
            "item": 'botania:dandelifeon',
        },
        "reagent": {
            "item": 'occultism:datura_seeds'
        }
    })

    event.custom({
        "type": "botania:petal_apothecary",
        "ingredients": [
            {
                "item": 'minecraft:amethyst_shard'
            },
            {
                "item": 'minecraft:amethyst_shard'
            }
        ],
        "output": {
            "item": 'irons_spellbooks:arcane_anvil',
        },
        "reagent": {
            "item": 'irons_spellbooks:scroll_forge'
        }
    })
})


