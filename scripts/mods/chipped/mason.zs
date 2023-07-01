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

var cobblestone_machine =
[
    <item:trashcans:item_trash_can>,
    <item:trashcans:liquid_trash_can>,
    <item:trashcans:energy_trash_can>,
    <item:trashcans:ultimate_trash_can>
] as IItemStack[];

for item in polished_andesite_machine
{
    <tag:items:forge:polished_andesite_machine>.add(item);
}

for item in polished_deepslate_machine
{
    <tag:items:forge:polished_deepslate_machine>.add(item);
}

for item in cobblestone_machine
{
    <tag:items:forge:cobblestone_machine>.add(item);
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