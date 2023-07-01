import crafttweaker.api.item.IItemStack;

var polished_andesite_machine =
[
    <item:minecraft:polished_andesite>,
    <item:cyclic:collector>
] as IItemStack[];

var polished_deepslate_machine =
[
    <item:minecraft:polished_deepslate>,
    <item:mekanism:logistical_sorter>
] as IItemStack[];

for item in polished_andesite_machine
{
    <tag:items:forge:polished_andesite_machine>.add(item);
}

for item in polished_deepslate_machine
{
    <tag:items:forge:polished_deepslate_machine>.add(item);
}

<recipetype:chipped:mason_table>.removeAll();

<recipetype:chipped:mason_table>.addJsonRecipe("mason_table",
    {
        "type": "chipped:mason_table",
        "tags": 
        [
            "forge:polished_andesite_machine",
            "forge:polished_deepslate_machine",
            "forge:cobblestone_machine"
        ]
    }
);