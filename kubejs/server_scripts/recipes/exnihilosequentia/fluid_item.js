ServerEvents.recipes(event => {
    event.custom({
    "type": "exnihilosequentia:fluid_item",
    "fluid": {
      "fluid": "minecraft:water"
    },
    "input": {
      "item": "minecraft:dirt"
    },
    "result": {
      "item": "minecraft:grass_block"
    }
  })
  event.custom({
    "type": "exnihilosequentia:fluid_item",
    "fluid": {
      "fluid": "minecraft:water"
    },
    "input": {
      "item": "progressthroughskies:bedrock_gravel"
    },
    "result": {
      "item": "minecraft:dirt"
    }
  })
  event.custom({
    "type": "exnihilosequentia:fluid_item",
    "fluid": {
      "fluid": "minecraft:water"
    },
    "input": {
      "item": "minecraft:light_gray_wool"
    },
    "result": {
      "item": "minecraft:white_wool"
    }
  })
  event.custom({
    "type": "exnihilosequentia:fluid_item",
    "fluid": {
      "fluid": "exnihilosequentia:sea_water"
    },
    "input": {
      "item": "minecraft:cobblestone"
    },
    "result": {
      "item": "create:limestone"
    }
  })
  event.custom({
    "type": "exnihilosequentia:fluid_item",
    "fluid": {
      "fluid": "minecraft:water"
    },
    "input": {
      "item": "minecraft:oak_log"
    },
    "result": {
      "item": "quark:paper_wall_big"
    }
  })

  event.custom({
    "type": "exnihilosequentia:fluid_item",
    "fluid": {
      "fluid": "hexerei:blood_fluid"
    },
    "input": {
      "item": 'emendatusenigmatica:natural_acid_crystal'
    },
    "result": {
      "item": 'evilcraft:hardened_blood'
    }
  })

  event.custom({
    "type": "exnihilosequentia:fluid_item",
    "fluid": {
      "fluid": "hexerei:blood_fluid"
    },
    "input": {
      "item": 'minecraft:furnace'
    },
    "result": {
      "item": 'evilcraft:blood_infuser'
    }
  })
})

