craftingTable.removeByModid("compressium");

craftingTable.addShaped("compress_to_gravel_1", <item:compressium:gravel_1>,
[
    [<item:minecraft:gravel>, <item:minecraft:gravel>],
    [<item:minecraft:gravel>, <item:minecraft:gravel>],
]);

craftingTable.addShaped("decompress_gravel_1", <item:minecraft:gravel> * 4,
[
    [<item:compressium:gravel_1>],
]);

craftingTable.addShaped("compress_to_sand_1", <item:compressium:sand_1>,
[
    [<item:minecraft:sand>, <item:minecraft:sand>],
    [<item:minecraft:sand>, <item:minecraft:sand>],
]);

craftingTable.addShaped("decompress_sand_1", <item:minecraft:sand> * 4,
[
    [<item:compressium:sand_1>],
]);

craftingTable.addShaped("compress_to_cobblestone_1", <item:compressium:cobblestone_1>,
[
    [<item:minecraft:cobblestone>, <item:minecraft:cobblestone>],
    [<item:minecraft:cobblestone>, <item:minecraft:cobblestone>],
]);

craftingTable.addShaped("decompress_cobblestone_1", <item:minecraft:cobblestone> * 4,
[
    [<item:compressium:cobblestone_1>],
]);