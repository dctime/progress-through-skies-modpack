import mods.jeitweaker.Jei;
import crafttweaker.api.text.Component;
import crafttweaker.api.item.IItemStack;

var items = 
[
    <item:exnihilosequentia:oak_sieve>,
    <item:ilikewood:oak_log_pile>,
    <item:woodenbucket:wooden_bucket>,
    <item:ilikewood:oak_post>,
    <item:cyclic:hopper>,
    <item:thermal:device_tree_extractor>,
    <item:minecraft:crafting_table>,
    <item:minecraft:chest>,
    <item:minecraft:oak_slab>,
    <item:create:piston_extension_pole>
] as IItemStack[];

for item in items
{
    Jei.addIngredientInformation(item, Component.literal("Can be sawmilled by Oak Log using I Like Wood Mod's Sawmill"));
}
