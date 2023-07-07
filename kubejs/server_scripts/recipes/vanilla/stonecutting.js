ServerEvents.recipes(event => {
    event.stonecutting('minecraft:dispenser', 'compressium:cobblestone_1');
    event.stonecutting('minecraft:furnace', 'compressium:cobblestone_1');

    event.stonecutting('minecraft:blast_furnace', 'minecraft:polished_deepslate');
    event.stonecutting('create:basin', 'minecraft:polished_blackstone');

    event.stonecutting('exnihilosequentia:unfired_crucible', 'minecraft:clay');
})