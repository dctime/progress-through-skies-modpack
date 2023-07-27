ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mixing",
        "ingredients": 
        [
            // TrASH CODE
            Item.of('chiselsandbits:block_bit', 64, "{block_information:{state:'{\"Name\":\"minecraft:cobblestone\"}'}}"),
            Item.of('chiselsandbits:block_bit', 64, "{block_information:{state:'{\"Name\":\"minecraft:cobblestone\"}'}}"),
            Item.of('chiselsandbits:block_bit', 64, "{block_information:{state:'{\"Name\":\"minecraft:cobblestone\"}'}}"),
            Item.of('chiselsandbits:block_bit', 64, "{block_information:{state:'{\"Name\":\"minecraft:cobblestone\"}'}}"),
            Item.of('chiselsandbits:block_bit', 64, "{block_information:{state:'{\"Name\":\"minecraft:cobblestone\"}'}}"),
            Item.of('chiselsandbits:block_bit', 64, "{block_information:{state:'{\"Name\":\"minecraft:cobblestone\"}'}}"),
            Item.of('chiselsandbits:block_bit', 64, "{block_information:{state:'{\"Name\":\"minecraft:cobblestone\"}'}}"),
            Item.of('chiselsandbits:block_bit', 64, "{block_information:{state:'{\"Name\":\"minecraft:cobblestone\"}'}}"),
            Item.of('chiselsandbits:block_bit', 64, "{block_information:{state:'{\"Name\":\"minecraft:cobblestone\"}'}}"),
            Item.of('chiselsandbits:block_bit', 64, "{block_information:{state:'{\"Name\":\"minecraft:cobblestone\"}'}}"),
            Item.of('chiselsandbits:block_bit', 64, "{block_information:{state:'{\"Name\":\"minecraft:cobblestone\"}'}}"),
            Item.of('chiselsandbits:block_bit', 64, "{block_information:{state:'{\"Name\":\"minecraft:cobblestone\"}'}}"),
            Item.of('chiselsandbits:block_bit', 64, "{block_information:{state:'{\"Name\":\"minecraft:cobblestone\"}'}}"),
            Item.of('chiselsandbits:block_bit', 64, "{block_information:{state:'{\"Name\":\"minecraft:cobblestone\"}'}}"),
            Item.of('chiselsandbits:block_bit', 64, "{block_information:{state:'{\"Name\":\"minecraft:cobblestone\"}'}}"),
            Item.of('chiselsandbits:block_bit', 64, "{block_information:{state:'{\"Name\":\"minecraft:cobblestone\"}'}}"),
            {
                "fluid": "minecraft:water",
                "amount": 100
            }
        ],
        "results": 
        [
            {
                "fluid": "progressthroughskies:dusted_water_fluid",
                "amount": 100
            }
        ]
    })

    event.custom({
        "type": "create:mixing",
        "ingredients": [
          {
            "fluid": "minecraft:water",
            "amount": 200
          },
          {
            "item": 'emendatusenigmatica:sodium_peroxide_dust',
          },
          {
            "item": 'emendatusenigmatica:sodium_peroxide_dust',
          },
          {
            "item": 'emendatusenigmatica:sodium_peroxide_dust',
          },
          {
            "item": 'emendatusenigmatica:sodium_peroxide_dust',
          },
          {
            "item": 'emendatusenigmatica:sodium_peroxide_dust',
          },
          {
            "item": 'emendatusenigmatica:sodium_peroxide_dust',
          },
          {
            "item": 'emendatusenigmatica:sodium_peroxide_dust',
          },
          {
            "item": 'emendatusenigmatica:sodium_peroxide_dust',
          },
          {
            "item": 'emendatusenigmatica:sodium_peroxide_dust',
          },
          {
            "item": 'emendatusenigmatica:sodium_peroxide_dust',
          }
        ],
        "results": [
            {
                "fluid": 'emendatusenigmatica:hydrogen_peroxide',
                "amount": 100
            },
            {
                "fluid": 'emendatusenigmatica:sodium_hydroxide',
                "amount": 200
            }

        ]
      })
})