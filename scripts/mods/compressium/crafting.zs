craftingTable.removeByModid("compressium");

craftingTable.addShaped("gravel_to_compressed_gravel", <item:compressium:gravel_1>,
[
    [<item:minecraft:gravel>, <item:minecraft:gravel>],
    [<item:minecraft:gravel>, <item:minecraft:gravel>],
]);

craftingTable.addShaped("compressed_gravel_to_gravel", <item:minecraft:gravel> * 4,
[
    [<item:compressium:gravel_1>],
]);

craftingTable.addShaped("sand_to_compressed_sand", <item:compressium:sand_1>,
[
    [<item:minecraft:sand>, <item:minecraft:sand>],
    [<item:minecraft:sand>, <item:minecraft:sand>],
]);

craftingTable.addShaped("compressed_sand_to_sand", <item:minecraft:sand> * 4,
[
    [<item:compressium:sand_1>],
]);

craftingTable.addShaped("compressed_to_cobble", <item:minecraft:cobblestone>,
[
    [<item:compressium:gravel_1>, <item:compressium:sand_1>],
    [<item:compressium:sand_1>, <item:compressium:gravel_1>]
]);