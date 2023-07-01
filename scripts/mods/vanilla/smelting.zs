furnace.removeByModid("minecraft");

furnace.addJsonRecipe("cobblestone_to_cobbled_deepslate", 
    {
        ingredient: <item:minecraft:cobblestone>,
        result: <item:minecraft:cobbled_deepslate>.registryName,
        experience: 0.35 as float,
        cookingtime:10
    }
 );
