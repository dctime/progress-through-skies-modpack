ServerEvents.recipes(event => {
    event.custom({
        "type": "exnihilosequentia:fluid_transform",
        "catalyst": {
          "item": "minecraft:sand"
        },
        "fluidInTank": {
          "fluid": "minecraft:water"
        },
        "result": {
          "fluid": "exnihilosequentia:sea_water"
        }
      })

      event.custom({
        "type": "exnihilosequentia:fluid_transform",
        "catalyst": {
          "item": 'exnihilosequentia:silkworm'
        },
        "fluidInTank": {
          "fluid": "thermal:resin"
        },
        "result": {
          "fluid": "cyclic:wax"
        }
      })
})