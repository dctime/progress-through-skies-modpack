craftingTable.removeByModid("minecraft");
craftingTable.removeByModid("hostilenetwork");


craftingTable.addShaped("gravel_dust_to_gravel", <item:minecraft:gravel>,
[
    [<item:progressthroughskies:gravel_dust>, <item:progressthroughskies:gravel_dust>],
    [<item:progressthroughskies:gravel_dust>, <item:progressthroughskies:gravel_dust>],
]);

craftingTable.addShaped("sand_dust_to_sand", <item:minecraft:sand>,
[
    [<item:progressthroughskies:sand_dust>, <item:progressthroughskies:sand_dust>],
    [<item:progressthroughskies:sand_dust>, <item:progressthroughskies:sand_dust>],
]);

craftingTable.addShaped("compressed_sand_and_gravel_to_cobble", <item:minecraft:cobblestone>,
[
    [<item:compressium:gravel_1>, <item:compressium:sand_1>],
    [<item:compressium:sand_1>, <item:compressium:gravel_1>]
]);

craftingTable.addShaped("stone_pressure_plate", <item:minecraft:stone_pressure_plate>,
[
    [<item:minecraft:cobblestone>, <item:minecraft:cobblestone>]
]);

craftingTable.addShaped("stone_barrel", <item:exnihilosequentia:stone_barrel>,
[
    [<item:minecraft:stone_pressure_plate>, <item:minecraft:stone_pressure_plate>],
    [<item:minecraft:stone_pressure_plate>, <item:minecraft:stone_pressure_plate>]
]);

craftingTable.addShaped("string_mesh", <item:exnihilosequentia:string_mesh>,
[
    [<item:minecraft:string>, <item:minecraft:string>]
]);

craftingTable.addShaped("campfire", <item:minecraft:campfire>,
[
    [<item:minecraft:string>, <item:minecraft:stick>],
    [<item:ilikewood:oak_log_pile>, <item:minecraft:flint>]
]);

craftingTable.addShaped("oak_sawmill", <item:ilikewood:oak_sawmill>,
[
    [<item:minecraft:stick>, <item:minecraft:stone_pressure_plate>],
    [<item:minecraft:oak_log>, <item:minecraft:oak_log>]
]);

craftingTable.addShaped("tetra_hammer", <item:tetra:modular_double>.withTag({"double/handle": "double/basic_handle", "double/head_left": "double/basic_hammer_left", "double/head_right": "double/basic_hammer_right", id: "ba3eda65-65d3-4329-b355-aa77759d2967", "double/basic_hammer_right_material": "basic_hammer/oak", Damage: 0, "double/basic_handle_material": "basic_handle/stick", "double/basic_hammer_left_material": "basic_hammer/oak"}),
[
    [<item:ilikewood:oak_post>],
    [<item:minecraft:stick>]
]);

craftingTable.addShaped("bed", <item:minecraft:white_bed>,
[
    [<item:minecraft:white_wool>, <item:minecraft:white_wool>],
    [<item:minecraft:stick>, <item:minecraft:stick>]
]);

craftingTable.addShaped("light_gray_wool", <item:minecraft:light_gray_wool>,
[
    [<item:minecraft:string>, <item:minecraft:string>],
    [<item:minecraft:string>, <item:minecraft:string>]
]);

craftingTable.addShaped("stone_cutter", <item:minecraft:stonecutter>,
[
    [<item:minecraft:stone_pressure_plate>, <item:minecraft:air>],
    [<item:ilikewood:oak_log_pile>, <item:minecraft:cobblestone>]
]);

craftingTable.addShapeless("fire_charge", <item:minecraft:fire_charge>, [<item:minecraft:flint>, <item:minecraft:oak_sapling>]);

craftingTable.addShapeless("paper", <item:minecraft:paper>*3, [<item:quark:paper_wall_big>]);

craftingTable.addShapeless("craft_sand_paper", <item:create:sand_paper>, [<item:minecraft:paper>, <item:progressthroughskies:sand_dust>]);

craftingTable.addShapeless("glass_blower", <item:chipped:glassblower>, [<item:minecraft:blast_furnace>, <item:minecraft:crafting_table>]);

craftingTable.addShapeless("tinker_table", <item:chipped:tinkering_table>, [<item:minecraft:redstone>, <item:minecraft:crafting_table>]);

craftingTable.addShapeless("redstone_to_tiny_redstone", <item:tinyredstone:tiny_redstone>*4, [<item:minecraft:redstone>]);

craftingTable.addShapeless("tiny_redstone_to_redstone", <item:minecraft:redstone>, [<item:tinyredstone:tiny_redstone>, <item:tinyredstone:tiny_redstone>, <item:tinyredstone:tiny_redstone>, <item:tinyredstone:tiny_redstone>]);

craftingTable.addShaped("craft_mason_table", <item:chipped:mason_table>,
[
    [<item:minecraft:polished_andesite>, <item:minecraft:polished_andesite>],
    [<item:minecraft:stick>, <item:minecraft:stick>]
]);

craftingTable.addShaped("craft_carpenters_table", <item:chipped:carpenters_table>,
[
    [<item:minecraft:oak_slab>, <item:minecraft:oak_slab>],
    [<item:minecraft:stick>, <item:minecraft:stick>]
]);

craftingTable.addShapeless("impure_white_chalk_to_impure_golden_chalk", <item:occultism:chalk_gold_impure>, [<item:occultism:chalk_white_impure>, <item:emendatusenigmatica:gold_dirty_dust>]);

craftingTable.addShaped("clay_block", <item:minecraft:clay>,
[
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
]);
