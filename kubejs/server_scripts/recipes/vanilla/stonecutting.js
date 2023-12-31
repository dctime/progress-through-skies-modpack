ServerEvents.recipes(event => {
    event.stonecutting('minecraft:dispenser', 'compressium:cobblestone_1');
    event.stonecutting('minecraft:furnace', 'compressium:cobblestone_1');

    event.stonecutting('minecraft:blast_furnace', 'minecraft:polished_deepslate');
    event.stonecutting('create:basin', 'minecraft:polished_blackstone');

    event.stonecutting('exnihilosequentia:unfired_crucible', 'minecraft:clay');
    event.stonecutting('9x create:shaft', 'minecraft:polished_andesite');
    event.stonecutting('8x create:andesite_scaffolding', 'minecraft:polished_andesite');
    event.stonecutting('create:whisk', 'minecraft:polished_andesite');
    event.stonecutting('4x immersiveengineering:wire_copper', 'emendatusenigmatica:raw_copper_plate');
    event.stonecutting('16x createaddition:spool', 'minecraft:stone');
    event.stonecutting('4x ceramicbucket:unfired_clay_bucket', 'minecraft:clay');
    event.stonecutting('2x minecraft:stone_slab', 'minecraft:stone');
    event.stonecutting('16x immersiveengineering:wire_copper', 'emendatusenigmatica:copper_plate');
    event.stonecutting('pneumaticcraft:heat_sink', 'minecraft:stone_slab');
    event.stonecutting('16x minecraft:glass_pane', 'minecraft:glass');
    event.stonecutting(Item.of('cyclic:shears_flint', '{Damage:0}'), 'minecraft:flint');
    event.stonecutting('botanypots:terracotta_hopper_botany_pot', 'minecraft:terracotta');
})