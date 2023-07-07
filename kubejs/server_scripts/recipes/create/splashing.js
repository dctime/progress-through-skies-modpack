ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
          {
            "item":"minecraft:cobbled_deepslate"
          }
        ],
        "results": [
          {
            "item" : "chipped:cobbled_blackstone",
            "count": 1
          }
        ]
      })
})