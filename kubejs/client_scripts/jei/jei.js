// priority 0

JEIEvents.information(event => {
  event.addItem('minecraft:stick', [
    'Obtained by breaking oak leaves with hand. (small chance)'
  ]);
  event.addItem('minecraft:flint', [
    'Obtained by breaking gravel. (small chance)'
  ]);

  let sawmill_item = 
  [
    'exnihilosequentia:oak_sieve',
    'ilikewood:oak_log_pile',
    'woodenbucket:wooden_bucket',
    'ilikewood:oak_post',
    'cyclic:hopper',
    'thermal:device_tree_extractor',
    'minecraft:crafting_table',
    'minecraft:chest',
    'minecraft:oak_slab',
    'create:piston_extension_pole',
    'naturesaura:wood_stand'
  ];

  for (let item of sawmill_item)
  {
    event.addItem(item, [
      'Can be sawmilled by Oak Log using I Like Wood Mod\'s Sawmill'
    ]);
  }

  event.addItem('progressthroughskies:bedrock_dust', [
    'Obtained by holding Shift and right click on the Dusted Bedrock.'
  ]);

  event.addItem('progressthroughskies:gravel_dust', [
    'Obtained by breaking Bedrock Gravel.'
  ]);

  event.addItem('progressthroughskies:sand_dust', [
    'Obtained by breaking Bedrock Gravel.'
  ]);
})