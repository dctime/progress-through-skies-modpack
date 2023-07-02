import crafttweaker.api.item.IItemStack;

var wooden_storage_block =
[
    <item:minecraft:chest>,
] as IItemStack[];

var storage_upgrade =
[
    <item:storagedrawers:void_upgrade>,
    <item:storagedrawers:upgrade_template>,
    <item:storagedrawers:emerald_storage_upgrade>,
    <item:storagedrawers:redstone_upgrade>,
    <item:storagedrawers:conversion_upgrade>,
    <item:storagedrawers:min_redstone_upgrade>,
    <item:storagedrawers:max_redstone_upgrade>,
    <item:storagedrawers:fill_level_upgrade>,
    <item:storagedrawers:illumination_upgrade>,
    <item:minecraft:oak_slab>
] as IItemStack[];

var log_machine =
[
    <item:thermal:device_tree_extractor>,
    <item:minecraft:oak_log>
] as IItemStack[];

for item in wooden_storage_block
{
    <tag:items:forge:wooden_storage_block>.add(item);
}
<tag:items:forge:wooden_storage_block>.add(<tag:items:storagedrawers:drawers>);

for item in storage_upgrade
{
    <tag:items:forge:storage_upgrade>.add(item);
}

for item in log_machine
{
    <tag:items:forge:log_machine>.add(item);
}

<recipetype:chipped:carpenters_table>.removeAll();

<recipetype:chipped:carpenters_table>.addJsonRecipe("carpenter_table",
    {
        "type": "chipped:carpenters_table",
        "tags": 
        [
            "forge:wooden_storage_block",
            "forge:storage_upgrade",
            "forge:log_machine"
        ]
    }
);