<recipetype:exnihilosequentia:crook>.removeAll();

<recipetype:exnihilosequentia:crook>
    .create("crook_infested_leaves")
    .setInput(<item:exnihilosequentia:infested_leaves>)
    .addDrop(<item:minecraft:string>, 1);

<recipetype:exnihilosequentia:crook>
    .create("crook_grass")
    .setInput(<item:minecraft:grass_block>)
    .addDrop(<item:exnihilosequentia:silkworm>, 0.5)
    .addDrop(<item:occultism:datura_seeds>, 0.5)
    .addDrop(<item:minecraft:oak_sapling>, 0.5);
    