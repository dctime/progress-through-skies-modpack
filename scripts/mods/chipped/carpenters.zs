import crafttweaker.api.item.IItemStack;

var wooden_storage_block =
[
    <item:minecraft:chest>,
] as IItemStack[];

for item in wooden_storage_block
{
    <tag:items:forge:wooden_storage_block>.add(item);
}
<tag:items:forge:wooden_storage_block>.add(<tag:items:storagedrawers:drawers>);

<recipetype:chipped:carpenters_table>.removeAll();

<recipetype:chipped:carpenters_table>.addJsonRecipe("carpenter_table",
    {
        "type": "chipped:carpenters_table",
        "tags": 
        [
            "forge:wooden_storage_block"
        ]
    }
);