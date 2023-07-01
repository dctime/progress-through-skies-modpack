import crafttweaker.api.item.IItemStack;

var wrench_list =
[
    <item:minecraft:stick>,
    <item:mekanism:configurator>,
    <item:tinyredstone:redstone_wrench>

] as IItemStack[];

var tiny_redstone_list =
[
    <item:tinygates:tiny_and_gate>,
    <item:tinygates:tiny_or_gate>,
    <item:tinygates:tiny_xor_gate>,
    <item:tinygates:tiny_not_gate>,
    <item:tinygates:tiny_clock>,
    <item:tinygates:tiny_counter>,
    <item:tinygates:tiny_rs_latch>,
    <item:tinygates:tiny_edge_detector>,
    <item:tinygates:tiny_t_flip_flop>
] as IItemStack[];

var wool_function_block_list =
[
    <item:cyclic:soundproofing>,
    <item:minecraft:white_wool>
] as IItemStack[];

for item in wrench_list
{
    <tag:items:forge:wrench_list>.add(item);
}

<tag:items:forge:tiny_redstone_list>.add(<tag:items:tinyredstone:tiny_component>);
for item in tiny_redstone_list
{
    <tag:items:forge:tiny_redstone_list>.add(item);
}

for item in wool_function_block_list
{
    <tag:items:forge:wool_function_block_list>.add(item);
}

<recipetype:chipped:mechanist_workbench>.removeAll();

<recipetype:chipped:mechanist_workbench>.addJsonRecipe("mechanist_workbench",
    {
        "type": "chipped:tinkering_table",
        "tags": 
        [
            "forge:wrench_list",
            "forge:tiny_redstone_list",
            "forge:wool_function_block_list"
        ]    
    }
);