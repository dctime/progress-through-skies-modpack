<recipetype:exnihilosequentia:sieve>.removeAll();
<recipetype:exnihilosequentia:compost>.removeAll();
<recipetype:exnihilosequentia:crook>.removeAll();
<recipetype:exnihilosequentia:crucible>.removeAll();
<recipetype:exnihilosequentia:fluid_item>.removeAll();
<recipetype:exnihilosequentia:fluid_on_top>.removeAll();
<recipetype:exnihilosequentia:fluid_transform>.removeAll();
<recipetype:exnihilosequentia:hammer>.removeAll();
<recipetype:exnihilosequentia:heat>.removeAll();
<recipetype:exnihilosequentia:sieve>.removeAll();

<recipetype:exnihilosequentia:sieve>
    .create("test_sieve")
    .setInput(<item:progressthroughskies:dusted_bedrock>)
    .addDrop(<item:minecraft:gravel>)
    .addRoll("string", 1.0);