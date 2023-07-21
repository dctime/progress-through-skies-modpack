ServerEvents.entityLootTables((event) => {
    // Override Husk Loot Table
    event.addEntity('minecraft:husk', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:rotten_flesh', 1)
                .addFunction({
                    function: 'minecraft:set_count',
                    count: { type: 'minecraft:uniform', max: 2.0, min: 0.0 },
                    add: false
                })
                .addFunction({
                    function: 'minecraft:looting_enchant',
                    count: { type: 'minecraft:uniform', max: 1.0, min: 0.0 }
                });
        });

        table.addPool((pool) => {
            pool.rolls = 1;
            pool.addItem('tombstone:grave_dust', 1).randomChance(0.1);
        });
    })

    event.addEntity('minecraft:zombie', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:rotten_flesh', 1)
                .addFunction({
                    function: 'minecraft:set_count',
                    count: { type: 'minecraft:uniform', max: 2.0, min: 0.0 },
                    add: false
                })
                .addFunction({
                    function: 'minecraft:looting_enchant',
                    count: { type: 'minecraft:uniform', max: 1.0, min: 0.0 }
                });
        });

        table.addPool((pool) => {
            pool.rolls = 1;
            pool.addItem('tombstone:grave_dust', 1).randomChance(0.1);
        });
    })

    event.addEntity('twilightforest:carminite_golem', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('botania:rune_earth', 1)
        });
    })
})