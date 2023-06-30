furnace.removeByModid("minecraft");

furnace.addJsonRecipe("recipe_name", 
    {
        ingredient: <item:minecraft:cobblestone>,
        result: <item:minecraft:cobbled_deepslate>.registryName,
        experience: 0.35 as float,
        cookingtime:10
    }
 );