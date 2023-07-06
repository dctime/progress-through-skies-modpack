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

<recipetype:exnihilosequentia:sieve>
    .create("sieve_bedrock_gravel_get_gold_dust")
    .setInput(<item:progressthroughskies:bedrock_gravel>)
    .addDrop(<item:emendatusenigmatica:gold_dirty_dust>)
    .addRoll("string", 0.2)
    .setWaterlogged();

<recipetype:exnihilosequentia:sieve>
    .create("sieve_mud_to_get_clay")
    .setInput(<item:minecraft:mud>)
    .addDrop(<item:minecraft:clay_ball>)
    .addRoll("string", 1)
    .addRoll("string", 1)
    .addRoll("string", 1)
    .addRoll("string", 1)
    .addRoll("string", 1)
    .addRoll("string", 0.5)
    .addRoll("string", 0.5)
    .addRoll("string", 0.5)
    .addRoll("string", 0.5)
    .addRoll("string", 0.5)
    .addRoll("string", 0.5)
    .addRoll("string", 0.5)
    .addRoll("string", 0.5);

<recipetype:exnihilosequentia:sieve>
    .create("sieve_mud_to_get_copper_shard")
    .setInput(<item:minecraft:mud>)
    .addDrop(<item:emendatusenigmatica:copper_shard>)
    .addRoll("string", 1)
    .addRoll("string", 0.5)
    .addRoll("string", 0.5);