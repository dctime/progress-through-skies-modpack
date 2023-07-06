furnace.removeByModid("minecraft");

furnace.addJsonRecipe("cobblestone_to_cobbled_deepslate", 
    {
        ingredient: <item:minecraft:cobblestone>,
        result: <item:minecraft:cobbled_deepslate>.registryName,
        experience: 0.35 as float,
        cookingtime:10
    }
 );

 furnace.addJsonRecipe("oak_log_to_dark_oak_log", 
    {
        ingredient: <item:minecraft:oak_log>,
        result: <item:minecraft:dark_oak_log>.registryName,
        experience: 0.35 as float,
        cookingtime:10
    }
 );

  furnace.addJsonRecipe("fire_crucible", 
    {
        ingredient: <item:exnihilosequentia:unfired_crucible>,
        result: <item:exnihilosequentia:fired_crucible>.registryName,
        experience: 0.35 as float,
        cookingtime:10
    }
 );
