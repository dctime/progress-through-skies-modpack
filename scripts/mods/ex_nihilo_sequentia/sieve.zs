<recipetype:exnihilosequentia:sieve>.removeAll();
craftingTable.removeByModid("exnihilosequentia");


craftingTable.addShaped("stone_crook", <item:exnihilosequentia:stone_crook>,
[
    [<item:minecraft:cobblestone>, <item:minecraft:cobblestone>],
    [<item:minecraft:air>, <item:minecraft:cobblestone>],
]);

<recipetype:exnihilosequentia:sieve>
    .create("sieve_bedrock_gravel_for_amethyst_shards")
    .setInput(<item:progressthroughskies:bedrock_gravel>)
    .addDrop(<item:minecraft:amethyst_shard>)
    .addRoll("string", 0.2);

// <recipetype:exnihilosequentia:sieve>
//     .create("sieve_bedrock_gravel_for_sand")
//     .setInput(<item:progressthroughskies:bedrock_gravel>)
//     .addDrop(<item:minecraft:sand>)
//     .addRoll("string", 0.2);