<recipetype:exnihilosequentia:crucible>.removeAll();

<recipetype:exnihilosequentia:crucible>
    .create("melt_copper_shards")
    .setInput(<item:emendatusenigmatica:copper_shard>)
    .setAmount(100)
    .setCrucibleType("fired")
    .setResultFluid(<fluid:emendatusenigmatica:raw_copper>);