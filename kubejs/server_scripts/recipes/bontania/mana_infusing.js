ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "botania:mana_infusion",
            "input": {
              "item": 'solapplepie:food_book'
            },
            "output": {
              "item": 'irons_spellbooks:netherite_spell_book'
            },
            "mana": 3000
          })

    event.custom(
    {
        "type": "botania:mana_infusion",
        "input": {
            "item": 'irons_spellbooks:blood_vial'
        },
        "output": {
            "item": 'irons_spellbooks:common_ink'
        },
        "mana": 10000
    })

    event.custom(
        {
            "type": "botania:mana_infusion",
            "input": {
                "item": 'irons_spellbooks:common_ink'
            },
            "output": {
                "item": 'irons_spellbooks:uncommon_ink'
            },
            "mana": 20000
        })

        event.custom(
            {
                "type": "botania:mana_infusion",
                "input": {
                    "item": 'irons_spellbooks:uncommon_ink'
                },
                "output": {
                    "item": 'irons_spellbooks:rare_ink'
                },
                "mana": 40000
            })

    event.custom(
        {
            "type": "botania:mana_infusion",
            "input": {
                "item": 'botania:livingrock'
            },
            "output": {
                "item": 'botania:runic_altar'
            },
            "mana": 40000
        })
})
