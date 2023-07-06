blastFurnace.removeAll();

blastFurnace.addJsonRecipe("blast_sand_for_glass", 
    {
        ingredient: <item:minecraft:sand>,
        result: <item:minecraft:glass>.registryName,
        experience: 0.35 as float,
        cookingtime:10
    }
);

blastFurnace.addJsonRecipe("blast_pressure_plate_from_redstone_panel", 
    {
        ingredient: <item:minecraft:stone_pressure_plate>,
        result: <item:tinyredstone:redstone_panel>.registryName,
        experience: 0.35 as float,
        cookingtime:10
    }
);

blastFurnace.addJsonRecipe("cobblestone_to_stone", 
    {
        ingredient: <item:minecraft:cobblestone>,
        result: <item:minecraft:stone>.registryName,
        experience: 0.35 as float,
        cookingtime:10
    }
);