ServerEvents.recipes(event => {
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
          "fluid": "hexerei:blood_fluid"
        },
        "ingredients": [
          {
            "item": 'botania:livingrock'
          },
          {
            "item": 'botania:livingrock'
          },
          {
            "item": 'botania:livingrock'
          },
          {
            "item": 'botania:livingrock'
          },
          {
            "item": 'botania:livingrock'
          },
          {
            "item": 'botania:livingrock'
          },
          {
            "item": 'botania:livingrock'
          },
          {
            "item": 'botania:livingrock'
          }
        ],
        "output": {
          "item": "botania:rune_wrath"
        },
        "liquidOutput": {
          "fluid": "hexerei:blood_fluid"
        },
        "fluidLevelsConsumed": 1000
      })

      event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
          "fluid": 'emendatusenigmatica:sulfuric_acid'
        },
        "ingredients": [
          {
            "item": 'ferdinandsflowers:purple_calla_lily'
          },
          {
            "item": 'ferdinandsflowers:iris'
          },
          {
            "item": 'ferdinandsflowers:pitcher_plant'
          },
          {
            "item": 'ferdinandsflowers:larkspur'
          },
          {
            "item": 'ferdinandsflowers:hawthorne'
          },
          {
            "item": 'ferdinandsflowers:parrot_flower'
          },
          {
            "item": 'ferdinandsflowers:lewisia'
          },
          {
            "item": 'ferdinandsflowers:lantana'
          }
        ],
        "output": {
          "item": 'emendatusenigmatica:natural_acid_crystal'
        },
        "liquidOutput": {
          "fluid": "hexerei:blood_fluid"
        },
        "fluidLevelsConsumed": 1000
      })
})