ServerEvents.recipes(event => {
    event.stonecutting('minecraft:dispenser', 'compressium:cobblestone_1');
    event.stonecutting('minecraft:furnace', 'compressium:cobblestone_1');

    event.stonecutting('minecraft:blast_furnace', 'minecraft:polished_deepslate');
    event.stonecutting('create:basin', 'minecraft:polished_blackstone');

    event.stonecutting('exnihilosequentia:unfired_crucible', 'minecraft:clay');
    event.stonecutting('9x create:shaft', 'minecraft:polished_andesite');
    event.stonecutting('2x create:andesite_scaffolding', 'minecraft:polished_andesite');
    event.stonecutting('create:whisk', 'minecraft:polished_andesite');
    event.stonecutting('4x immersiveengineering:wire_copper', 'emendatusenigmatica:raw_copper_plate');
    event.stonecutting('16x createaddition:spool', 'minecraft:stone');
    event.stonecutting('4x ceramicbucket:unfired_clay_bucket', 'minecraft:clay');
})