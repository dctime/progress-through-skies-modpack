ServerEvents.tags('item', event => {
    let ink =
    [
        'irons_spellbooks:common_ink',
        'irons_spellbooks:uncommon_ink',
        'irons_spellbooks:rare_ink',
        'irons_spellbooks:epic_ink',
        'irons_spellbooks:legendary_ink'
    ]
    for (let item of ink)
    {
        event.add('forge:ink', item)
    }
})