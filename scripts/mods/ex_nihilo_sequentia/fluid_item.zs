<recipetype:exnihilosequentia:fluid_item>.removeAll();

<recipetype:exnihilosequentia:fluid_item>
    .create("dirt_to_grass")
    .setFluidInTank(<fluid:minecraft:water>)
    .setInputItem(<item:minecraft:dirt>)
    .setResult(<item:minecraft:grass_block>);

<recipetype:exnihilosequentia:fluid_item>
    .create("bedrock_gravel_to_dirt")
    .setFluidInTank(<fluid:minecraft:water>)
    .setInputItem(<item:progressthroughskies:bedrock_gravel>)
    .setResult(<item:minecraft:dirt>);

<recipetype:exnihilosequentia:fluid_item>
    .create("light_gray_wool_to_white_wool")
    .setFluidInTank(<fluid:minecraft:water>)
    .setInputItem(<item:minecraft:light_gray_wool>)
    .setResult(<item:minecraft:white_wool>);