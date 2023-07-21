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
        "fluidLevelsConsumed": 2000
      })
})