craftingTable.removeByModid("minecraft");


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

craftingTable.addShaped("sand_to_sandstone", <item:minecraft:sandstone>,
[
    [<item:minecraft:sand>, <item:minecraft:sand>],
    [<item:minecraft:sand>, <item:minecraft:sand>]
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